const http = require('http')
const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, 'dist')
const host = '127.0.0.1'
const port = 4173

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
}

function send(res, status, body, type = 'text/plain; charset=utf-8') {
  res.writeHead(status, { 'Content-Type': type })
  res.end(body)
}

const server = http.createServer((req, res) => {
  const requestPath = decodeURIComponent((req.url || '/').split('?')[0])
  const relativePath = requestPath === '/' ? '/index.html' : requestPath
  const normalizedPath = path.normalize(relativePath).replace(/^(\.\.[/\\])+/, '')
  const filePath = path.join(root, normalizedPath)

  if (!filePath.startsWith(root)) {
    send(res, 403, 'Forbidden')
    return
  }

  fs.stat(filePath, (statError, stats) => {
    if (statError || !stats.isFile()) {
      send(res, 404, 'Not found')
      return
    }

    const ext = path.extname(filePath).toLowerCase()
    const type = mimeTypes[ext] || 'application/octet-stream'
    const stream = fs.createReadStream(filePath)

    res.writeHead(200, { 'Content-Type': type })
    stream.pipe(res)
    stream.on('error', () => send(res, 500, 'Server error'))
  })
})

server.listen(port, host, () => {
  console.log(`PhysVista available at http://${host}:${port}`)
})
