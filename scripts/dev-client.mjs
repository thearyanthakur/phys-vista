import { createServer } from 'vite'
import { viteConfig } from './vite.shared.mjs'

const server = await createServer(viteConfig)
await server.listen()
server.printUrls()

const closeServer = async () => {
  await server.close()
  process.exit(0)
}

process.on('SIGINT', closeServer)
process.on('SIGTERM', closeServer)
