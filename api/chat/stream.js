import { readJsonBody, streamOpenRouterReply } from '../../lib/openrouter.mjs'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed.' })
  }

  if (!process.env.OPENROUTER_API_KEY) {
    return res.status(500).json({
      error: 'OPENROUTER_API_KEY is not configured on the server.',
    })
  }

  let body = null

  try {
    body = await readJsonBody(req)
  } catch {
    return res.status(400).json({ error: 'Invalid JSON body.' })
  }

  const { message, topic } = body ?? {}

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
  } catch (error) {
    sendEvent({
      type: 'error',
      error:
        error?.name === 'TimeoutError'
          ? 'Phys-Guru took too long to respond. Please try again.'
          : error?.message || 'Failed to contact the OpenRouter API.',
    })
  }

  res.end()
}
