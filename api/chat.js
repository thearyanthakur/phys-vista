import { readJsonBody, streamOpenRouterReply } from '../lib/openrouter.mjs'

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

  try {
    const reply = await streamOpenRouterReply({
      message,
      topic,
      onDelta: async () => {},
    })

    return res.status(200).json({ reply })
  } catch (error) {
    return res.status(500).json({
      error:
        error?.name === 'TimeoutError'
          ? 'Phys-Guru took too long to respond. Please try again.'
          : error?.message || 'Failed to contact the OpenRouter API.',
    })
  }
}
