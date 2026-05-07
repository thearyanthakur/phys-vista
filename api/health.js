import { getOpenRouterConfig } from '../lib/openrouter.mjs'

export default function handler(_req, res) {
  const config = getOpenRouterConfig()

  res.status(200).json({
    ok: true,
    aiConfigured: Boolean(config.apiKey),
    provider: 'openrouter',
    model: config.model,
    fallbackModels: config.fallbackModels,
  })
}
