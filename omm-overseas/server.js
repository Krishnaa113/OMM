/* global process, Buffer */
// Zero-dependency server: serves the built site (dist/) and the admin API.
// Run: ADMIN_PASSWORD=yourpass node server.js   (PORT defaults to 3001)
import http from 'node:http'
import fs from 'node:fs/promises'
import path from 'node:path'
import crypto from 'node:crypto'
import { fileURLToPath } from 'node:url'

const PORT = process.env.PORT || 3001
const PASSWORD = process.env.ADMIN_PASSWORD
if (!PASSWORD) { console.error('Set ADMIN_PASSWORD env var'); process.exit(1) }

const root = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.join(root, 'dist')
const DATA = path.join(root, 'data')
const CONTENT = path.join(DATA, 'content.json')
const ENQUIRIES = path.join(DATA, 'enquiries.json')
const UPLOADS = path.join(DATA, 'uploads')
// No SVG: it can carry scripts
const IMAGE_TYPES = { 'image/png': '.png', 'image/jpeg': '.jpg', 'image/webp': '.webp', 'image/gif': '.gif' }
const MAX_UPLOAD = 8_000_000
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif', '.ico': 'image/x-icon' }

const readJson = async (file, fallback) => { try { return JSON.parse(await fs.readFile(file, 'utf8')) } catch { return fallback } }
const writeJson = async (file, value) => {
  await fs.mkdir(DATA, { recursive: true })
  await fs.writeFile(file + '.tmp', JSON.stringify(value, null, 2))
  await fs.rename(file + '.tmp', file) // atomic replace so a crash never leaves half a file
}

const isAdmin = (req) => {
  const a = Buffer.from(String(req.headers['x-admin-password'] || ''))
  const b = Buffer.from(PASSWORD)
  return a.length === b.length && crypto.timingSafeEqual(a, b)
}

const raw = (req, limit) => new Promise((resolve, reject) => {
  let size = 0, chunks = []
  req.on('data', (c) => { size += c.length; if (size > limit) { reject(new Error('too large')); req.destroy() } else chunks.push(c) })
  req.on('end', () => resolve(Buffer.concat(chunks)))
  req.on('error', reject)
})
const body = async (req, limit) => { try { return JSON.parse((await raw(req, limit)).toString() || '{}') } catch (e) { throw e.message === 'too large' ? e : new Error('bad json') } }

const send = (res, status, data) => { res.writeHead(status, { 'Content-Type': 'application/json' }); res.end(JSON.stringify(data)) }
const clean = (v, max) => String(v ?? '').trim().slice(0, max)

async function api(req, res, url) {
  const route = `${req.method} ${url.pathname}`
  if (route === 'GET /api/content') return send(res, 200, await readJson(CONTENT, {}))

  if (route === 'POST /api/enquiries') {
    const b = await body(req, 10_000)
    const e = { id: crypto.randomUUID(), date: new Date().toISOString(), name: clean(b.name, 100), email: clean(b.email, 150), phone: clean(b.phone, 30), state: clean(b.state, 60), timeline: clean(b.timeline, 60), service: clean(b.service, 100), message: clean(b.message, 3000), status: 'new' }
    if (!e.name || !/^\S+@\S+\.\S+$/.test(e.email)) return send(res, 400, { error: 'Name and valid email required' })
    const list = await readJson(ENQUIRIES, [])
    list.unshift(e)
    await writeJson(ENQUIRIES, list)
    return send(res, 201, { ok: true })
  }

  if (!isAdmin(req)) return send(res, 401, { error: 'Unauthorized' })

  if (route === 'PUT /api/content') {
    const b = await body(req, 5_000_000)
    if (!b || typeof b !== 'object' || Array.isArray(b)) return send(res, 400, { error: 'Expected object' })
    await writeJson(CONTENT, b)
    return send(res, 200, { ok: true })
  }
  if (route === 'POST /api/upload') {
    const ext = IMAGE_TYPES[req.headers['content-type']]
    if (!ext) return send(res, 415, { error: 'Only PNG, JPG, WebP or GIF images' })
    if (Number(req.headers['content-length']) > MAX_UPLOAD) return send(res, 413, { error: 'Image must be under 8 MB' })
    const file = crypto.randomUUID() + ext
    await fs.mkdir(UPLOADS, { recursive: true })
    await fs.writeFile(path.join(UPLOADS, file), await raw(req, MAX_UPLOAD))
    return send(res, 201, { url: `/uploads/${file}` })
  }
  if (route === 'GET /api/enquiries') return send(res, 200, await readJson(ENQUIRIES, []))
  const m = url.pathname.match(/^\/api\/enquiries\/([\w-]+)$/)
  if (m && (req.method === 'PATCH' || req.method === 'DELETE')) {
    const list = await readJson(ENQUIRIES, [])
    const i = list.findIndex((e) => e.id === m[1])
    if (i < 0) return send(res, 404, { error: 'Not found' })
    if (req.method === 'DELETE') list.splice(i, 1)
    else list[i].status = clean((await body(req, 1000)).status, 20)
    await writeJson(ENQUIRIES, list)
    return send(res, 200, { ok: true })
  }
  send(res, 404, { error: 'Not found' })
}

async function serveUpload(res, pathname) {
  const file = path.join(UPLOADS, path.basename(pathname)) // basename: no directory traversal
  try {
    const data = await fs.readFile(file)
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'public, max-age=31536000, immutable', 'X-Content-Type-Options': 'nosniff' })
    res.end(data)
  } catch { res.writeHead(404); res.end('Not found') }
}

async function serveStatic(res, pathname) {
  let file = path.join(DIST, path.normalize(decodeURIComponent(pathname)))
  if (!file.startsWith(DIST)) file = DIST
  try { if ((await fs.stat(file)).isDirectory()) throw 0 } catch { file = path.join(DIST, 'index.html') } // SPA fallback
  try {
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' })
    res.end(await fs.readFile(file))
  } catch { res.writeHead(404); res.end('Run "npm run build" first') }
}

http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://x')
  try {
    if (url.pathname.startsWith('/api/')) await api(req, res, url)
    else if (url.pathname.startsWith('/uploads/')) await serveUpload(res, url.pathname)
    else await serveStatic(res, url.pathname)
  } catch (err) { if (!res.headersSent) send(res, 400, { error: err.message }) }
}).listen(PORT, () => console.log(`OMM server on http://localhost:${PORT}`))
