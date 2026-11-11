import { createContext, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { sections, defaults, applyContent, MAPS } from './store'
import './admin.css'

// Admin tabs follow the website's pages. Each box = one section of that page, top to bottom.
// Item: [dotted path into the site content, optional space-separated keys to show, optional label].
// The same content can appear on several tabs (e.g. testimonials) – editing it anywhere updates it everywhere.
const SHARED = '↻ Shared – also shown on other pages'
const PAGES = [
  { id: 'home', label: 'Home Page', groups: [
    { title: 'Top Banner (Hero)', items: [['text.home', 'heroTag heroTitle heroHighlight heroText heroButton heroButton2 trustTitle trustText'], ['img.homeHero', null, 'Hero Image']] },
    { title: 'Statistics Bar', hint: SHARED, items: [['counters', null, 'Counters']] },
    { title: 'Study Destinations', hint: 'The country cards come from the “Study Country Pages” tab.', items: [['text.home', 'destSub destTitle destText']] },
    { title: 'Visa Services', hint: SHARED, items: [['text.home', 'servicesSub servicesTitle servicesButton whatsappButton enquiryButton servicesMore'], ['services', null, 'Service Cards']] },
    { title: 'Why Choose Us', hint: SHARED, items: [['text.home', 'whySub whyTitle whyText whyBadgeValue whyBadgeLabel whyButton'], ['img.about1', null, 'Image'], ['whyItems', null, 'Reasons']] },
    { title: 'How It Works (Steps)', hint: SHARED, items: [['text.home', 'processSub processTitle'], ['steps', null, 'Steps']] },
    { title: 'Client Reviews', hint: SHARED + ' (first 3 shown here)', items: [['text.home', 'reviewsSub reviewsTitle'], ['testimonials', null, 'Testimonials']] },
    { title: 'Contact Block & Form', hint: 'Phone, email and address are in the “Header & Footer” tab.', items: [['text.home', 'contactSub contactTitle contactText timelineLabel formButton formThanks'], ['states', null, 'State Dropdown Options'], ['timelines', null, '“How Soon” Dropdown Options']] },
  ] },
  { id: 'about', label: 'About Us', groups: [
    { title: 'Page Banner', items: [['text.pageTitles.about', null, 'Page Title'], ['banners.office', null, 'Banner Image (shared with Contact)']] },
    { title: 'About Company', items: [['text.about'], ['img.about1', null, 'Main Image'], ['img.about2', null, 'Small Image']] },
    { title: 'Counters', hint: SHARED, items: [['counters', null, 'Counters']] },
    { title: 'Why Choose Us', hint: SHARED, items: [['text.why'], ['whyItems', null, 'Reasons'], ['img.why1', null, 'Large Image'], ['img.why2', null, 'Side Image 1'], ['img.why3', null, 'Side Image 2']] },
    { title: 'Our Team', items: [['text.team'], ['team', null, 'Team Members']] },
    { title: 'Testimonials', hint: SHARED, items: [['text.testimonials'], ['testimonials', null, 'Testimonials']] },
  ] },
  { id: 'countries', label: 'Study Country Pages', groups: [
    { title: 'Countries', hint: 'Canada, Australia, UK, USA… Add a country here, then link it in Header & Footer → Navigation Menu.', items: [['countries']] },
    { title: 'Labels On Every Country Page', items: [['text.countryPage'], ['text.pageTitles.studyCrumb', null, 'Breadcrumb'], ['banners.study', null, 'Banner Image']] },
    { title: 'Working Process', hint: SHARED, items: [['text.process'], ['steps', null, 'Steps']] },
  ] },
  { id: 'pages', label: 'Course & Service Pages', groups: [
    { title: 'Pages', hint: 'IELTS, Band Score, PTE, Spoken English, Spouse Visa, MBBS, Work Visa… “Banner” must be one of: study, test, work, family, office, travel.', items: [['pages']] },
    { title: 'Banner Images', hint: 'Used by the “Banner” field of each page.', items: [['banners']] },
  ] },
  { id: 'gallery', label: 'Gallery', groups: [
    { title: 'Page Banner', items: [['text.pageTitles.gallery', null, 'Page Title'], ['text.pageTitles.testimonialsCrumb', null, 'Breadcrumb'], ['banners.family', null, 'Banner Image']] },
    { title: 'Gallery', items: [['text.gallery'], ['gallery', null, 'Photos (upload the same image as Thumb and Full, or a smaller copy as Thumb)']] },
  ] },
  { id: 'videos', label: 'Video Testimonials', groups: [
    { title: 'Page Banner', items: [['text.pageTitles.videos', null, 'Page Title'], ['banners.travel', null, 'Banner Image']] },
    { title: 'Videos', hint: 'YouTube = the code after “watch?v=” in the video link.', items: [['text.videos'], ['videos', null, 'Videos']] },
    { title: 'Testimonials', hint: SHARED, items: [['text.testimonials'], ['testimonials', null, 'Testimonials']] },
  ] },
  { id: 'contact', label: 'Contact Us', groups: [
    { title: 'Page Banner', items: [['text.pageTitles.contact', null, 'Page Title'], ['banners.office', null, 'Banner Image (shared with About)']] },
    { title: 'Contact Details', hint: SHARED, items: [['contact']] },
    { title: 'Call-Back Form', items: [['text.contactForm'], ['img.contact', null, 'Background Image']] },
  ] },
  { id: 'layout', label: 'Header & Footer', groups: [
    { title: 'Navigation Menu', items: [['nav', null, 'Menu Items']] },
    { title: 'Phone, Email, Address & Social', hint: SHARED, items: [['contact']] },
    { title: 'Footer', items: [['text.footer'], ['instagram', null, 'Instagram Images']] },
  ] },
  { id: 'shared', label: 'Shared Blocks', groups: [
    { title: 'Call-To-Action Banner', hint: 'Orange banner on About, country and course pages.', items: [['text.cta']] },
    { title: 'Sidebar', hint: 'Right-hand box on country and course pages. The Inquiry button shows on study country pages and on pages whose “Sub” is IELTS, PTE or Work Visa, plus Spouse Visa and MBBS Abroad.', items: [['text.sidebar']] },
    { title: '404 Page', items: [['text.pageTitles.notFound', null, 'Page Title'], ['text.notFound']] },
  ] },
]
const STATUSES = ['new', 'contacted', 'closed']

const getIn = (o, path) => path.split('.').reduce((x, k) => x?.[k], o)
const setIn = (o, [k, ...rest], v) => ({ ...o, [k]: rest.length ? setIn(o[k], rest, v) : v })

const human = (k) => String(k).replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase())
const isImg = (s) => /^(https?:\/\/.*(unsplash|\.(png|jpe?g|webp|gif|svg))|\/uploads\/)/i.test(s)
const IMAGE_LABEL = /\b(img|image|images|thumb|full|photo|photos)\b/i
const Upload = createContext(null)
const blank = (x) => typeof x === 'string' ? '' : typeof x === 'number' ? 0 : Array.isArray(x) ? [] : x && typeof x === 'object' ? Object.fromEntries(Object.entries(x).map(([k, v]) => [k, blank(v)])) : ''
const itemLabel = (v, i) => (v && typeof v === 'object' && !Array.isArray(v) && (v.title || v.name || v.label || v.h)) || (typeof v === 'string' && v.slice(0, 50)) || `Item ${i + 1}`

const MAX_SIDE = 1920 // px – enough for full-width banners
const toBlob = (canvas, type) => new Promise((resolve) => canvas.toBlob(resolve, type, 0.82))

// Scale big photos down to MAX_SIDE and re-compress (WebP keeps transparency). GIFs are kept as-is so animation survives.
async function shrink(file) {
  if (file.type === 'image/gif') return file
  const bmp = await createImageBitmap(file)
  const scale = Math.min(1, MAX_SIDE / Math.max(bmp.width, bmp.height))
  if (scale === 1 && file.size < 400_000) { bmp.close(); return file } // already small
  const canvas = document.createElement('canvas')
  canvas.width = Math.round(bmp.width * scale)
  canvas.height = Math.round(bmp.height * scale)
  canvas.getContext('2d').drawImage(bmp, 0, 0, canvas.width, canvas.height)
  bmp.close()
  let blob = await toBlob(canvas, 'image/webp')
  // Older Safari can't encode WebP and silently returns PNG
  if (blob?.type !== 'image/webp') blob = await toBlob(canvas, file.type === 'image/png' ? 'image/png' : 'image/jpeg')
  return blob && (scale < 1 || blob.size < file.size) ? blob : file
}

function ImageField({ label, value, onChange }) {
  const upload = useContext(Upload)
  const [busy, setBusy] = useState(false)
  const pick = async (e) => {
    const file = e.target.files[0]
    e.target.value = ''
    if (!file) return
    setBusy(true)
    try {
      const small = await shrink(file)
      if (small.size > 8_000_000) throw new Error('Image is still over 8 MB after resizing – try a smaller file')
      onChange(await upload(small))
    } catch (err) { alert(`Upload failed: ${err.message}`) }
    setBusy(false)
  }
  return (
    <div className="ad-f">
      {label}
      <div className="ad-img">
        {value ? <img src={value} alt="" /> : <div className="ad-img-empty">No image</div>}
        <div className="ad-img-actions">
          <label className={`ad-btn ad-upload ${busy ? 'busy' : ''}`}>
            {busy ? 'Resizing & uploading…' : value ? 'Replace image' : 'Upload image'}
            <input type="file" accept="image/png,image/jpeg,image/webp,image/gif" disabled={busy} onChange={pick} />
          </label>
          <small>PNG, JPG, WebP or GIF · large photos are resized automatically</small>
          <details><summary>or paste an image link</summary><input value={value ?? ''} onChange={(e) => onChange(e.target.value)} /></details>
        </div>
      </div>
    </div>
  )
}

function Field({ label, value, onChange, map, image }) {
  if (typeof value === 'number') return <label className="ad-f">{label}<input type="number" value={value} onChange={(e) => onChange(Number(e.target.value))} /></label>
  if (typeof value === 'boolean') return <label className="ad-f ad-row">{label}<input type="checkbox" checked={value} onChange={(e) => onChange(e.target.checked)} /></label>
  if (Array.isArray(value)) {
    const move = (i, d) => { const a = [...value]; [a[i], a[i + d]] = [a[i + d], a[i]]; onChange(a) }
    return (
      <details className="ad-group" open={value.length <= 3}>
        <summary>{label} <small>({value.length})</small></summary>
        {value.map((v, i) => (
          <div className="ad-item" key={i}>
            <div className="ad-item-bar">
              <b>{itemLabel(v, i)}</b>
              <button type="button" disabled={!i} onClick={() => move(i, -1)} aria-label="Move up">↑</button>
              <button type="button" disabled={i === value.length - 1} onClick={() => move(i, 1)} aria-label="Move down">↓</button>
              <button type="button" className="ad-del" onClick={() => confirm('Remove this item?') && onChange(value.filter((_, j) => j !== i))} aria-label="Remove">✕</button>
            </div>
            <Field value={v} image={image || value.some(isImg)} onChange={(nv) => onChange(value.map((x, j) => j === i ? nv : x))} />
          </div>
        ))}
        <button type="button" className="ad-add" onClick={() => onChange([...value, blank(value[0] ?? '')])}>+ Add</button>
      </details>
    )
  }
  if (value && typeof value === 'object') {
    const entries = Object.entries(value)
    const fields = entries.map(([k, v]) => (
      <div key={k} className={map ? 'ad-item' : undefined}>
        {map && <div className="ad-item-bar"><b>/{k}</b><button type="button" className="ad-del" onClick={() => confirm(`Delete page /${k}?`) && onChange(Object.fromEntries(entries.filter(([x]) => x !== k)))}>✕</button></div>}
        <Field label={map ? undefined : human(k)} value={v} onChange={(nv) => onChange({ ...value, [k]: nv })} />
      </div>
    ))
    const add = () => {
      const slug = prompt('URL slug for the new page (e.g. study-in-ireland):')?.trim().toLowerCase().replace(/[^a-z0-9-]/g, '-')
      if (slug && !value[slug]) onChange({ ...value, [slug]: blank(entries[0]?.[1] ?? {}) })
    }
    if (!label && !map) return <div className="ad-obj">{fields}</div>
    return (
      <details className="ad-group" open={!label}>
        {label && <summary>{label}</summary>}
        {fields}
        {map && <button type="button" className="ad-add" onClick={add}>+ Add page</button>}
      </details>
    )
  }
  const s = value ?? ''
  if (image || isImg(s) || IMAGE_LABEL.test(label)) return <ImageField label={label} value={s} onChange={onChange} />
  return (
    <label className="ad-f">{label}
      {s.length > 80 || s.includes('\n') ? <textarea rows={Math.min(8, Math.max(2, Math.ceil(s.length / 90), s.split('\n').length))} value={s} onChange={(e) => onChange(e.target.value)} />
        : <input value={s} onChange={(e) => onChange(e.target.value)} />}
    </label>
  )
}

function Enquiries({ api }) {
  const [list, setList] = useState(null)
  const load = () => api('/api/enquiries').then(setList)
  useEffect(() => { load() }, []) // eslint-disable-line react-hooks/exhaustive-deps
  if (!list) return <p>Loading…</p>
  if (!list.length) return <p>No enquiries yet. Messages from the website contact forms appear here.</p>
  const update = (id, status) => api(`/api/enquiries/${id}`, { method: 'PATCH', body: JSON.stringify({ status }) }).then(load)
  const remove = (id) => confirm('Delete this enquiry?') && api(`/api/enquiries/${id}`, { method: 'DELETE' }).then(load)
  return (
    <div className="ad-table-wrap">
      <table className="ad-table">
        <thead><tr><th>Date</th><th>Name</th><th>Contact</th><th>State</th><th>Service</th><th>Start</th><th>Message</th><th>Status</th><th /></tr></thead>
        <tbody>{list.map((e) => (
          <tr key={e.id} className={`st-${e.status}`}>
            <td>{new Date(e.date).toLocaleString()}</td>
            <td>{e.name}</td>
            <td><a href={`mailto:${e.email}`}>{e.email}</a><br />{e.phone && <a href={`tel:${e.phone}`}>{e.phone}</a>}</td>
            <td>{e.state}</td>
            <td>{e.service}</td>
            <td>{e.timeline}</td>
            <td className="ad-msg">{e.message}</td>
            <td><select value={e.status} onChange={(ev) => update(e.id, ev.target.value)}>{STATUSES.map((s) => <option key={s}>{s}</option>)}</select></td>
            <td><button className="ad-del" onClick={() => remove(e.id)} aria-label="Delete">✕</button></td>
          </tr>
        ))}</tbody>
      </table>
    </div>
  )
}

// One editable piece of a page: a single value, or chosen keys of an object shown as separate fields.
function Item({ draft, edit, item: [path, keys, label] }) {
  const value = getIn(draft, path)
  const top = path.split('.')[0]
  if (keys || (value && typeof value === 'object' && !Array.isArray(value) && !MAPS.includes(top)))
    return (keys ? keys.split(' ') : Object.keys(value)).map((k) => (
      <Field key={k} label={human(k)} value={value[k]} onChange={(v) => edit(`${path}.${k}`, v)} />
    ))
  return <Field label={label} value={value} map={MAPS.includes(path)} onChange={(v) => edit(path, v)} />
}

export default function Admin() {
  const [pass, setPass] = useState(() => sessionStorage.getItem('omm-admin') || '')
  const [authed, setAuthed] = useState(false)
  const [error, setError] = useState('')
  const [tab, setTab] = useState('enquiries')
  const [draft, setDraft] = useState(() => structuredClone(sections))
  const [dirty, setDirty] = useState(false)
  const [saving, setSaving] = useState(false)

  const api = async (url, opts = {}) => {
    const r = await fetch(url, { ...opts, headers: { 'Content-Type': 'application/json', ...opts.headers, 'x-admin-password': pass } })
    if (r.status === 401) { setAuthed(false); sessionStorage.removeItem('omm-admin'); throw new Error('Wrong password') }
    if (!r.ok) throw new Error((await r.json().catch(() => ({}))).error || `Error ${r.status}`)
    return r.json()
  }
  const login = (e) => {
    e?.preventDefault()
    setError('')
    api('/api/enquiries').then(() => { sessionStorage.setItem('omm-admin', pass); setAuthed(true) }, (err) => setError(err.message === 'Wrong password' ? err.message : 'Cannot reach server – is "npm run server" running?'))
  }
  useEffect(() => { if (pass) login() }, []) // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    const warn = (e) => { if (dirty) e.preventDefault() }
    window.addEventListener('beforeunload', warn)
    return () => window.removeEventListener('beforeunload', warn)
  }, [dirty])

  const upload = (file) => api('/api/upload', { method: 'POST', headers: { 'Content-Type': file.type }, body: file }).then((r) => r.url)
  const page = PAGES.find((p) => p.id === tab)
  const edit = (path, value) => { setDraft((d) => setIn(d, path.split('.'), value)); setDirty(true) }
  const reset = () => {
    if (!confirm(`Reset everything on “${page.label}” to the original content? (Shared items reset on other tabs too.)`)) return
    for (const g of page.groups) for (const [path, keys] of g.items) {
      if (keys) for (const k of keys.split(' ')) edit(`${path}.${k}`, structuredClone(getIn(defaults, `${path}.${k}`)))
      else edit(path, structuredClone(getIn(defaults, path)))
    }
  }
  const save = async () => {
    setSaving(true)
    try { await api('/api/content', { method: 'PUT', body: JSON.stringify(draft) }); applyContent(structuredClone(draft)); setDirty(false) }
    catch (err) { alert(`Save failed: ${err.message}`) }
    setSaving(false)
  }

  if (!authed) return (
    <div className="ad-login">
      <form onSubmit={login}>
        <img src="/logo.jpeg" alt="OMM Overseas" />
        <h1>Admin Login</h1>
        <label className="ad-f">Password<input type="password" value={pass} onChange={(e) => setPass(e.target.value)} autoFocus required /></label>
        {error && <p className="ad-err" role="alert">{error}</p>}
        <button className="ad-btn">Log in</button>
      </form>
    </div>
  )

  return (
    <Upload.Provider value={upload}>
    <div className="ad">
      <aside className="ad-side">
        <img src="/logo.jpeg" alt="OMM Overseas" />
        <nav>
          <button className={tab === 'enquiries' ? 'on' : ''} onClick={() => setTab('enquiries')}>📩 Enquiries</button>
          <small>WEBSITE PAGES</small>
          {PAGES.map((p) => <button key={p.id} className={tab === p.id ? 'on' : ''} onClick={() => setTab(p.id)}>{p.label}</button>)}
        </nav>
        <Link to="/" target="_blank">View site ↗</Link>
        <button onClick={() => { sessionStorage.removeItem('omm-admin'); setPass(''); setAuthed(false) }}>Log out</button>
      </aside>
      <main className="ad-main">
        <header className="ad-head">
          <h1>{page?.label || 'Enquiries'}</h1>
          {page && <button className="ad-link" onClick={reset}>Reset page to default</button>}
          <button className="ad-btn" disabled={!dirty || saving} onClick={save}>{saving ? 'Saving…' : dirty ? 'Save changes' : 'Saved ✓'}</button>
        </header>
        {!page ? <Enquiries api={api} /> : page.groups.map((g) => (
          <section className="ad-card" key={`${tab}-${g.title}`}>
            <h2>{g.title}</h2>
            {g.hint && <p className="ad-hint">{g.hint}</p>}
            {g.items.map((item) => <Item key={item.join()} item={item} draft={draft} edit={edit} />)}
          </section>
        ))}
      </main>
    </div>
    </Upload.Provider>
  )
}
