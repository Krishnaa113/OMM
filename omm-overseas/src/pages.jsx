import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from './Icons'
import { Title, About, Why, Counters, Team, Testimonials, Cta, Process, Contact } from './sections'
import Home from './home'
import { banners, countries, pages, gallery, videos } from './content'
import { contact } from './data'

export function PageBanner({ title, crumb, bg = banners.office }) {
  return (
    <section className="banner" style={{ backgroundImage: `url(${bg})` }}>
      <div className="stripes"><i /><i /><b /><b /></div>
      <div className="wrap banner-in">
        <h1>{title}</h1>
        <div className="crumb">
          <Link to="/">Home</Link><Icon name="dbl" size={16} />
          {crumb && <><span>{crumb}</span><Icon name="dbl" size={16} /></>}
          <span className="cur">{title}</span>
        </div>
      </div>
    </section>
  )
}

function Sidebar() {
  const { pathname } = useLocation()
  const links = [
    ...Object.entries(countries).map(([slug, c]) => [`/${slug}`, `Study In ${c.name}`]),
    ...Object.entries(pages).map(([slug, p]) => [`/${slug}`, p.title]),
  ]
  return (
    <aside className="side">
      <div className="side-box">
        <h3>Our Services</h3>
        {links.map(([to, label]) => (
          <Link key={to} to={to} className={pathname === to ? 'on' : ''}>{label}<Icon name="arrow" size={16} /></Link>
        ))}
      </div>
      <div className="side-cta">
        <Icon name="calling" size={56} />
        <h3>Need Help? Talk To Our Expert</h3>
        <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
        <Link to="/contact" className="btn-light">Book Free Consultation</Link>
      </div>
    </aside>
  )
}

const Ticks = ({ items, cols }) => (
  <ul className={`ticks ${cols ? 'cols' : ''}`}>
    {items.map((t) => <li key={t}><Icon name="check" size={18} />{t}</li>)}
  </ul>
)

export function CountryPage({ slug }) {
  const c = countries[slug]
  return (
    <>
      <PageBanner title={`Study In ${c.name}`} crumb="Study Visa" bg={banners.study} />
      <section className="sec">
        <div className="wrap detail">
          <div className="detail-main">
            <img className="detail-img" src={c.img} alt={c.name} />
            <div className="country-head">
              <img src={`https://flagcdn.com/w160/${c.flag}.png`} alt="" />
              <h2>Study In {c.name}</h2>
            </div>
            <p className="p">{c.intro}</p>

            <div className="facts">
              {c.facts.map(([k, v]) => <div key={k}><small>{k}</small><b>{v}</b></div>)}
            </div>

            <h3 className="h3">Why Study In {c.name}?</h3>
            <Ticks items={c.why} cols />

            <h3 className="h3">Top Universities & Colleges</h3>
            <div className="unis">{c.universities.map((x) => <span key={x}><Icon name="globe" size={20} />{x}</span>)}</div>

            <h3 className="h3">Intakes</h3>
            <div className="intakes">
              {c.intakes.map(([m, d]) => <div key={m}><b>{m}</b><span>{d}</span></div>)}
            </div>

            <h3 className="h3">Documents Required</h3>
            <Ticks items={c.docs} cols />
            <p className="note">Fees and visa rules change often. Our counsellors will confirm the latest requirements for your profile.</p>
          </div>
          <Sidebar />
        </div>
      </section>
      <Process />
      <Cta />
      <div className="cta-spacer" />
    </>
  )
}

export function InfoPage({ slug }) {
  const p = pages[slug]
  return (
    <>
      <PageBanner title={p.title} crumb={p.sub !== p.title ? p.sub : null} bg={banners[p.banner]} />
      <section className="sec">
        <div className="wrap detail">
          <div className="detail-main">
            <img className="detail-img" src={p.img} alt={p.title} />
            <h2 className="h2">{p.title}</h2>
            <p className="p">{p.intro}</p>
            {p.table && (
              <div className="tbl-wrap">
                <table className="tbl">
                  <thead><tr>{p.table.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
                  <tbody>{p.table.rows.map((r) => <tr key={r[0]}>{r.map((x, i) => <td key={i}>{x}</td>)}</tr>)}</tbody>
                </table>
              </div>
            )}
            {p.sections.map((s) => (
              <div key={s.h} className="block">
                <h3 className="h3">{s.h}</h3>
                {s.text && <p className="p">{s.text}</p>}
                {s.list && <Ticks items={s.list} cols={s.list.length > 4} />}
              </div>
            ))}
          </div>
          <Sidebar />
        </div>
      </section>
      <Cta />
      <div className="cta-spacer" />
    </>
  )
}

export function HomePage() {
  return <Home />
}

export function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" bg={banners.office} />
      <About />
      <Counters />
      <Why />
      <Team />
      <Testimonials />
      <Cta />
      <div className="cta-spacer" />
    </>
  )
}

export function GalleryPage() {
  const [open, setOpen] = useState(null)
  return (
    <>
      <PageBanner title="Gallery" crumb="Testimonials" bg={banners.family} />
      <section className="sec">
        <div className="wrap">
          <Title sub="Our Gallery" center>Moments Of Happy Students<br />& Successful Visas</Title>
          <div className="gallery">
            {gallery.map((g, i) => (
              <button key={g.thumb} className="g-item" onClick={() => setOpen(i)}>
                <img src={g.thumb} alt="" loading="lazy" />
                <span><Icon name="search" size={26} /></span>
              </button>
            ))}
          </div>
        </div>
      </section>
      {open !== null && (
        <div className="lightbox" onClick={() => setOpen(null)}>
          <button className="lb-nav l" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + gallery.length) % gallery.length) }}>‹</button>
          <img src={gallery[open].full} alt="" onClick={(e) => e.stopPropagation()} />
          <button className="lb-nav r" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % gallery.length) }}>›</button>
          <button className="lb-close" aria-label="Close">×</button>
        </div>
      )}
    </>
  )
}

export function VideosPage() {
  const [play, setPlay] = useState(null)
  return (
    <>
      <PageBanner title="Video Testimonials" crumb="Testimonials" bg={banners.travel} />
      <section className="sec">
        <div className="wrap">
          <Title sub="Video Testimonials" center>Hear From Our<br />Successful Clients</Title>
          <div className="grid3">
            {videos.map((v, i) => (
              <div key={v.name} className="video">
                {play === i && v.youtube ? (
                  <iframe src={`https://www.youtube.com/embed/${v.youtube}?autoplay=1`} title={v.name} allow="autoplay; encrypted-media" allowFullScreen />
                ) : (
                  <button className="v-thumb" onClick={() => setPlay(i)} style={{ backgroundImage: `url(${v.img})` }}>
                    <span className="play">▶</span>
                  </button>
                )}
                <h3>{v.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  )
}

export function ContactPage() {
  const info = [
    ['phone', 'Call Us', contact.phone, `tel:${contact.phone.replace(/\s/g, '')}`],
    ['chat', 'Email Us', contact.email, `mailto:${contact.email}`],
    ['globe', 'Visit Us', contact.address.join(' '), null],
  ]
  return (
    <>
      <PageBanner title="Contact Us" bg={banners.office} />
      <section className="sec">
        <div className="wrap grid3">
          {info.map(([ic, h, v, href]) => (
            <div className="info-card" key={h}>
              <span><Icon name={ic} size={30} /></span>
              <h3>{h}</h3>
              {href ? <a href={href}>{v}</a> : <p>{v}</p>}
            </div>
          ))}
        </div>
      </section>
      <Contact />
    </>
  )
}

export function NotFound() {
  return (
    <>
      <PageBanner title="Page Not Found" />
      <section className="sec"><div className="wrap" style={{ textAlign: 'center' }}>
        <h2 className="h2">404 – This page does not exist</h2>
        <Link to="/" className="btn">Back To Home <Icon name="arrow" size={16} /></Link>
      </div></section>
    </>
  )
}
