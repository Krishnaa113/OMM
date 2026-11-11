import * as data from './data'
import * as content from './content'

// Every editable section of the site. Components keep importing from data.js/content.js;
// saved edits are written into those same objects in place before the app renders.
export const sections = { ...data, ...content }
export const defaults = structuredClone(sections)

export const MAPS = ['countries', 'pages'] // keyed by URL slug: saved version is the full list

const isObj = (x) => x && typeof x === 'object' && !Array.isArray(x)
// Fields added to the code later keep their default until the admin edits them.
const merge = (d, s) => isObj(d) && isObj(s)
  ? Object.fromEntries([...new Set([...Object.keys(d), ...Object.keys(s)])].map((k) => [k, merge(d[k], s[k])]))
  : s ?? d

export function applyContent(saved) {
  for (const key in saved) {
    const target = sections[key]
    if (!target || saved[key] == null) continue
    if (Array.isArray(target)) target.splice(0, target.length, ...saved[key])
    else { for (const k in target) delete target[k]; Object.assign(target, MAPS.includes(key) ? saved[key] : merge(defaults[key], saved[key])) }
  }
}

export async function loadContent() {
  try {
    const r = await fetch('/api/content')
    if (r.ok) applyContent(await r.json())
  } catch { /* no server (static hosting): keep built-in content */ }
}

export async function sendEnquiry(form) {
  const r = await fetch('/api/enquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Object.fromEntries(new FormData(form))),
  })
  if (!r.ok) throw new Error((await r.json().catch(() => ({}))).error || 'Could not send')
}
