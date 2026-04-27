import cors from 'cors'
import express from 'express'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const envPath = path.join(__dirname, '.env')
const distPath = path.join(__dirname, 'dist')

if (fs.existsSync(envPath)) {
  const envLines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/)

  for (const line of envLines) {
    if (!line || line.trim().startsWith('#') || !line.includes('=')) {
      continue
    }

    const separatorIndex = line.indexOf('=')
    const key = line.slice(0, separatorIndex).trim()
    const value = line.slice(separatorIndex + 1).trim()

    if (key && process.env[key] === undefined) {
      process.env[key] = value
    }
  }
}

const app = express()
const port = process.env.PORT || 8787
const openRouterApiKey = process.env.OPENROUTER_API_KEY
const openRouterModel = process.env.OPENROUTER_MODEL || 'openai/gpt-oss-20b:free'
const openRouterSiteUrl = process.env.OPENROUTER_SITE_URL || `http://localhost:${port}`
const openRouterAppName = process.env.OPENROUTER_APP_NAME || 'PhysVista'
  const openRouterFallbackModels = (process.env.OPENROUTER_FALLBACK_MODELS ||
  [
    'openrouter/free',
    'mistralai/mistral-small-3.1-24b-instruct:free',
    'google/gemma-3-27b-it:free',
  ].join(','))
  .split(',')
  .map((model) => model.trim())
  .filter(Boolean)

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

function countSentenceEndings(text) {
  return (text.match(/[.!?](?:\s|$)/g) || []).length
}

function shouldStopReply(text) {
  return text.length >= 420 || countSentenceEndings(text) >= 3
}

function buildOpenRouterRequest(message, topic, signal) {
  return fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    signal,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${openRouterApiKey}`,
      'HTTP-Referer': openRouterSiteUrl,
      'X-Title': openRouterAppName,
    },
    body: JSON.stringify({
      model: openRouterModel,
      models: openRouterFallbackModels,
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
            'You are PhysVista AI Tutor for students learning how real-world machines work. Be concise by default: keep replies under 120 words unless the user explicitly asks for more depth. Start with the direct answer, then a short mechanism. Do not use tables. Only include equations when they clearly help. Use plain student-friendly language, connect machine parts as a system when relevant, and do not invent facts when unsure.',
        },
        {
          role: 'user',
          content: `Topic: ${topic || 'General machine lesson'}\nQuestion: ${message}`,
        },
      ],
    }),
  })
}

async function parseOpenRouterError(response) {
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

async function streamOpenRouterReply({ message, topic, onDelta }) {
  const controller = new AbortController()
  const response = await buildOpenRouterRequest(
    message,
    topic,
    AbortSignal.any([controller.signal, AbortSignal.timeout(20000)]),
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

app.use(cors())
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    aiConfigured: Boolean(openRouterApiKey),
    provider: 'openrouter',
    model: openRouterModel,
    fallbackModels: openRouterFallbackModels,
  })
})

app.post('/api/chat', async (req, res) => {
  if (!openRouterApiKey) {
    return res.status(500).json({
      error: 'OPENROUTER_API_KEY is not configured on the server.',
    })
  }

  const { message, topic } = req.body ?? {}

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'A user message is required.' })
  }

  try {
    const reply = await streamOpenRouterReply({
      message,
      topic,
      onDelta: async () => {},
    })

    return res.json({ reply })
  } catch (error) {
    return res.status(500).json({
      error:
        error?.name === 'TimeoutError'
          ? 'Physics Guru took too long to respond. Please try again.'
          : error?.message || 'Failed to contact the OpenRouter API.',
    })
  }
})

app.post('/api/chat/stream', async (req, res) => {
  if (!openRouterApiKey) {
    return res.status(500).json({
      error: 'OPENROUTER_API_KEY is not configured on the server.',
    })
  }

  const { message, topic } = req.body ?? {}

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'A user message is required.' })
  }

  res.setHeader('Content-Type', 'text/event-stream; charset=utf-8')
  res.setHeader('Cache-Control', 'no-cache, no-transform')
  res.setHeader('Connection', 'keep-alive')
  res.flushHeaders?.()

  const sendEvent = (payload) => {
    res.write(`data: ${JSON.stringify(payload)}\n\n`)
  }

  try {
    const reply = await streamOpenRouterReply({
      message,
      topic,
      onDelta: async (delta) => {
        sendEvent({ type: 'delta', text: delta })
      },
    })

    sendEvent({ type: 'done', reply })
    res.end()
  } catch (error) {
    sendEvent({
      type: 'error',
      error:
        error?.name === 'TimeoutError'
          ? 'Physics Guru took too long to respond. Please try again.'
          : error?.message || 'Failed to contact the OpenRouter API.',
    })
    res.end()
  }
})

if (fs.existsSync(path.join(distPath, 'index.html'))) {
  app.use(express.static(distPath))

  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api/')) {
      next()
      return
    }

    res.sendFile(path.join(distPath, 'index.html'))
  })
}

app.listen(port, () => {
  console.log(`PhysVista API listening on http://localhost:${port}`)
})
