const DEFAULT_MODEL = 'google/gemini-2.5-flash:free'
const DEFAULT_FALLBACK_MODELS = [
  'openrouter/free',
  'mistralai/mistral-small-3.1-24b-instruct:free',
  'google/gemma-3-27b-it:free',
]

export function getOpenRouterConfig() {
  return {
    apiKey: process.env.OPENROUTER_API_KEY,
    model: process.env.OPENROUTER_MODEL || DEFAULT_MODEL,
    siteUrl: process.env.OPENROUTER_SITE_URL || 'http://localhost:8787',
    appName: process.env.OPENROUTER_APP_NAME || 'PhysVista',
    fallbackModels: (process.env.OPENROUTER_FALLBACK_MODELS || DEFAULT_FALLBACK_MODELS.join(','))
      .split(',')
      .map((model) => model.trim())
      .filter(Boolean),
  }
}

function extractReplyContent(content) {
  if (typeof content === 'string') {
    return content
  }

  if (!Array.isArray(content)) {
    return ''
  }

  return content
    .map((part) => {
      if (typeof part === 'string') {
        return part
      }

      if (part && typeof part.text === 'string') {
        return part.text
      }

      return ''
    })
    .join('\n')
}

function shouldStopReply(text) {
  return text.length >= 1000
}

async function buildOpenRouterRequest(message, topic, signal, config) {
  return fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    signal,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${config.apiKey}`,
      'HTTP-Referer': config.siteUrl,
      'X-Title': config.appName,
    },
    body: JSON.stringify({
      model: config.model,
      models: config.fallbackModels,
      route: 'fallback',
      stream: true,
      reasoning: {
        effort: 'none',
        exclude: true,
      },
      temperature: 0.2,
      max_tokens: 160,
      messages: [
        {
          role: 'system',
          content:
            'You are Phys-Guru for students learning how real-world machines work. Be concise by default: keep replies under 120 words unless the user explicitly asks for more depth. Start with the direct answer, then a short mechanism. Do not use tables. Only include equations when they clearly help. Use plain student-friendly language, connect machine parts as a system when relevant, and do not invent facts when unsure.',
        },
        {
          role: 'user',
          content: `Topic: ${topic || 'General machine lesson'}\nQuestion: ${message}`,
        },
      ],
    }),
  })
}

export async function parseOpenRouterError(response) {
  const rawErrorText = await response.text()
  let parsedError = null

  try {
    parsedError = JSON.parse(rawErrorText)
  } catch {
    parsedError = null
  }

  return response.status === 429
    ? 'Free AI capacity is busy right now. Please wait a moment and try again.'
    : parsedError?.error?.message || rawErrorText || 'Failed to contact the OpenRouter API.'
}

export async function streamOpenRouterReply({ message, topic, onDelta }) {
  const config = getOpenRouterConfig()
  const controller = new AbortController()
  const response = await buildOpenRouterRequest(
    message,
    topic,
    AbortSignal.any([controller.signal, AbortSignal.timeout(20000)]),
    config,
  )

  if (!response.ok) {
    const error = new Error(await parseOpenRouterError(response))
    error.status = response.status
    throw error
  }

  if (!response.body) {
    const error = new Error('No response stream returned from the OpenRouter API.')
    error.status = 502
    throw error
  }

  const reader = response.body.getReader()
  const decoder = new TextDecoder()
  let rawBuffer = ''
  let reply = ''

  try {
    while (true) {
      const { done, value } = await reader.read()

      if (done) {
        break
      }

      rawBuffer += decoder.decode(value, { stream: true })
      const lines = rawBuffer.split('\n')
      rawBuffer = lines.pop() || ''

      for (const line of lines) {
        const trimmed = line.trim()

        if (!trimmed.startsWith('data:')) {
          continue
        }

        const payload = trimmed.slice(5).trim()

        if (!payload || payload === '[DONE]') {
          continue
        }

        let chunk = null

        try {
          chunk = JSON.parse(payload)
        } catch {
          continue
        }

        const delta = extractReplyContent(chunk?.choices?.[0]?.delta?.content)

        if (!delta) {
          continue
        }

        reply += delta
        await onDelta(delta, reply)

        if (shouldStopReply(reply)) {
          controller.abort()
          break
        }
      }

      if (shouldStopReply(reply)) {
        break
      }
    }
  } catch (error) {
    if (error?.name !== 'AbortError') {
      throw error
    }
  }

  reply = reply.trim()

  if (!reply) {
    const error = new Error('No reply returned from the OpenRouter API.')
    error.status = 502
    throw error
  }

  return reply
}

export async function readJsonBody(req) {
  if (req.body && typeof req.body === 'object') {
    return req.body
  }

  if (typeof req.body === 'string') {
    return JSON.parse(req.body)
  }

  const chunks = []

  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }

  const rawBody = Buffer.concat(chunks).toString('utf8')

  return rawBody ? JSON.parse(rawBody) : {}
}
