import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Icon from './Icons'
import { img, heroSlides, services, whyItems, counters, team, testimonials, steps, posts, instagram, nav, contact } from './data'

function useScrollY() {
  const [y, setY] = useState(0)
  useEffect(() => {
    const on = () => setY(window.scrollY)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return y
}

export function useInView() {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); ob.disconnect() } }, { threshold: 0.3 })
    ob.observe(ref.current)
    return () => ob.disconnect()
  }, [])
  return [ref, seen]
}

export function Title({ sub, children, center, light }) {
  return (
    <div className={`title ${center ? 'center' : ''} ${light ? 'light' : ''}`}>
      <span className="sub">{sub}</span>
      <h2>{children}</h2>
    </div>
  )
}

/* ---------- Header ---------- */
export function Header() {
  const y = useScrollY()
  const [open, setOpen] = useState(false)
  const [sub, setSub] = useState(null)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false); setSub(null) }, [pathname])
  const isActive = (n) => n.to === pathname || n.children?.some((c) => c.to === pathname)
  return (
    <header className={`header ${y > 200 ? 'fixed' : ''}`}>
      <div className="topbar">
        <div className="wrap topbar-in">
          <a href={`mailto:${contact.email}`}><Icon name="mail" size={16} />{contact.email}</a>
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`}><Icon name="phone" size={16} />{contact.phone}</a>
        </div>
      </div>
      <div className="wrap header-in">
        <Link to="/" className="logo"><img src="/logo.jpeg" alt="OMM Overseas" /></Link>
        <nav className={open ? 'open' : ''}>
          {nav.map((n) => n.children ? (
            <div key={n.label} className={`dd ${sub === n.label ? 'show' : ''}`}>
              <button className={`dd-btn ${isActive(n) ? 'active' : ''}`} onClick={() => setSub(sub === n.label ? null : n.label)}>
                {n.label}<Icon name="down" size={14} />
              </button>
              <div className="dd-menu">
                {n.children.map((c) => <NavLink key={c.to} to={c.to}>{c.label}</NavLink>)}
              </div>
            </div>
          ) : (
            <NavLink key={n.label} to={n.to} end>{n.label}</NavLink>
          ))}
        </nav>
        <div className="h-right">
          <div className="h-call">
            <span className="ring"><Icon name="phone" size={22} /></span>
            <div><small>PHONE:</small><b>{contact.phone}</b></div>
          </div>
          <button className="icon-btn search"><Icon name="search" size={20} /></button>
          <button className="icon-btn burger" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
        </div>
      </div>
    </header>
  )
}

/* ---------- Hero ---------- */
export function Hero() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % heroSlides.length), 7000)
    return () => clearInterval(t)
  }, [])
  return (
    <section className="hero" id="home">
      {heroSlides.map((s, k) => (
        <div key={k} className={`hero-slide ${k === i ? 'on' : ''}`}>
          <div className="hero-bg" style={{ backgroundImage: `url(${img.hero[k]})` }} />
          <div className="wrap">
            <div className="hero-text">
              <span className="hero-tag">{s.tag}</span>
              <h1>{s.title}</h1>
              <div className="hero-btns">
                <a href="#services" className="btn">Explore More <Icon name="arrow" size={16} /></a>
                <Link to="/contact" className="btn btn-white">Contact Us <Icon name="arrow" size={16} /></Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="hex" />
      <div className="stripes"><i /><i /><b /><b /></div>
      <div className="hero-dots">
        {heroSlides.map((_, k) => <button key={k} className={k === i ? 'on' : ''} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`} />)}
      </div>
    </section>
  )
}

/* ---------- About ---------- */
function Ring({ value, label }) {
  const [ref, seen] = useInView()
  const c = 2 * Math.PI * 54
  return (
    <div className="ring-item" ref={ref}>
      <div className="ring-chart">
        <svg viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="54" className="track" />
          <circle cx="60" cy="60" r="54" className="bar" strokeDasharray={c} strokeDashoffset={seen ? c * (1 - value / 100) : c} />
        </svg>
        <span>{value}%</span>
      </div>
      <h4>{label[0]}<br />{label[1]}</h4>
    </div>
  )
}

export function About() {
  return (
    <section className="sec about" id="about">
      <div className="wrap two">
        <div className="about-img">
          <span className="vline" />
          <span className="frame f1" />
          <span className="frame f2" />
          <img className="big" src={img.about1} alt="Happy travellers with passports" />
          <img className="small" src={img.about2} alt="Visa consultation" />
        </div>
        <div className="about-text">
          <Title sub="About Company">Welcome To Experience Visa Consulting Firm</Title>
          <p className="p">OMM Overseas is a registered visa and immigration consultancy helping students, professionals and families study, work and settle abroad with honest advice and complete support.</p>
          <div className="rings">
            <Ring value={95} label={['Visa Success', 'Ratio']} />
            <Ring value={98} label={['Happy Client', 'Satisfaction']} />
          </div>
          <ul className="ticks">
            {['Immigration & Visa Consulting', 'Direct Online Interview', '99% Visa Approval Rate'].map((t) => (
              <li key={t}><Icon name="check" size={18} />{t}</li>
            ))}
          </ul>
          <a href="#services" className="btn">Explore More <Icon name="arrow" size={16} /></a>
        </div>
      </div>
    </section>
  )
}

/* ---------- Services ---------- */
export function Services() {
  return (
    <section className="sec" id="services">
      <div className="wrap">
        <Title sub="Service We Provide" center>Explore Our Visa Citizenship<br />& Immigration Services</Title>
        <div className="grid4">
          {services.map((s) => (
            <div className="svc" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <div className="svc-img"><img src={s.img} alt={s.title} /></div>
              <Link to="/contact" className="svc-link">Read More <Icon name="arrow" size={14} /></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Why choose us ---------- */
export function Why() {
  return (
    <section className="sec why">
      <div className="wrap why-grid">
        <div>
          <Title sub="Why Choose Us">Some Reasons People Like Our Consultancy</Title>
          <p className="p">We combine years of experience with a personal approach, so every client gets the right visa strategy and a smooth journey abroad.</p>
          <div className="why-list">
            {whyItems.map((w) => (
              <div className="why-item" key={w.title}>
                <Icon name={w.icon} size={60} className="red" />
                <div><h3>{w.title}</h3><p>{w.text}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="why-imgs">
          <div className="why-main">
            <img src={img.why1} alt="Travellers" />
            <div className="trusted">
              <h3>8500+ Trusted Customers</h3>
              <div className="avatars">
                {testimonials.map((t) => <img key={t.name} src={t.img} alt="" />)}
                <span>+</span>
              </div>
            </div>
          </div>
          <div className="why-side">
            <img src={img.why2} alt="Consultation" />
            <img src={img.why3} alt="Clients" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Counters ---------- */
export function Count({ value, suffix }) {
  const [ref, seen] = useInView()
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!seen) return
    const start = performance.now()
    let raf
    const tick = (t) => {
      const p = Math.min((t - start) / 1800, 1)
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [seen, value])
  return <b ref={ref}>{n}{suffix}</b>
}

export function Counters() {
  return (
    <section className="counters">
      <div className="wrap grid4">
        {counters.map((c) => (
          <div className="count" key={c.label.join()}>
            <span className="count-ic"><Icon name={c.icon} size={52} /></span>
            <Count value={c.value} suffix={c.suffix} />
            <p>{c.label[0]}<br />{c.label[1]}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ---------- Team ---------- */
export function Team() {
  return (
    <section className="sec" id="team">
      <div className="wrap">
        <Title sub="Professional People" center>Meet Our Expert Visa<br />Consultants</Title>
        <div className="grid4 team">
          {team.map((m) => (
            <div className="member" key={m.name}>
              <div className="m-img">
                <img src={m.img} alt={m.name} />
                <div className="m-social">
                  {['fb', 'tw', 'in', 'ig'].map((s) => <a key={s} href="#"><Icon name={s} size={16} /></a>)}
                </div>
              </div>
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Testimonials ---------- */
export function Testimonials() {
  const [page, setPage] = useState(0)
  const pages = testimonials.length
  useEffect(() => {
    const t = setInterval(() => setPage((p) => (p + 1) % pages), 5000)
    return () => clearInterval(t)
  }, [pages])
  const shown = [0, 1, 2].map((k) => testimonials[(page + k) % pages])
  return (
    <section className="sec testi-sec">
      <div className="wrap">
        <Title sub="Our Testimonials" center>Let’s Explore Why People Say<br />About Our Services</Title>
        <div className="grid3">
          {shown.map((t, k) => (
            <div className="testi" key={`${page}-${k}`}>
              <div className="t-head">
                <img src={t.img} alt={t.name} />
                <div><h4>{t.name}</h4><span>{t.role}</span></div>
                <Icon name="quote" size={44} className="t-quote" />
              </div>
              <p>{t.text}</p>
              <div className="t-bar" />
            </div>
          ))}
        </div>
        <div className="pill-dots">
          {testimonials.map((_, k) => <button key={k} className={k === page ? 'on' : ''} onClick={() => setPage(k)} aria-label={`Testimonial ${k + 1}`} />)}
        </div>
      </div>
    </section>
  )
}

/* ---------- CTA ---------- */
export function Cta() {
  return (
    <section className="cta-sec">
      <div className="wrap">
        <div className="cta-box">
          <Icon name="calling" size={64} className="cta-ic" />
          <div className="cta-text">
            <h2>Let’s Discuss & Start Visa Consultations</h2>
            <p>Book a free consultation with our experts today and take the first step abroad.</p>
          </div>
          <Link to="/contact" className="btn-light">Lets Get Started <Icon name="arrow" size={16} /></Link>
        </div>
      </div>
    </section>
  )
}

/* ---------- Process ---------- */
export function Process() {
  return (
    <section className="sec process" id="process">
      <div className="wrap">
        <Title sub="Working Process" center>4 Step Follow You Can Get<br />Your Visa Easily</Title>
        <div className="steps">
          <svg className="dotline" viewBox="0 0 1000 120" preserveAspectRatio="none">
            <polyline points="125,20 375,100 625,20 875,100" />
          </svg>
          {steps.map((s, k) => (
            <div className={`step ${k % 2 ? 'low' : ''}`} key={s.title}>
              <div className="step-ic"><Icon name={s.icon} size={56} /><span>{k + 1}</span></div>
              <div className="step-txt"><h3>{s.title}</h3><p>{s.text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Contact ---------- */
export function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <section className="contact" id="contact">
      <div className="c-left" style={{ backgroundImage: `url(${img.contact})` }}>
        <div className="c-inner">
          <Title sub="Contact Us" light>Get A Call Back</Title>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
            <div className="f2"><input placeholder="First Name" required /><input type="email" placeholder="Email Address" required /></div>
            <div className="f2">
              <input placeholder="Phone Number" />
              <select defaultValue=""><option value="" disabled>Choose Services</option>{services.map((s) => <option key={s.title}>{s.title}</option>)}</select>
            </div>
            <textarea rows="6" placeholder="Write Your Message" />
            <button className="btn-dark" type="submit">{sent ? 'Message Sent ✓' : <>Send Us Messages <Icon name="arrow" size={16} /></>}</button>
          </form>
        </div>
      </div>
      <div className="c-map">
        <iframe title="Office location" src="https://www.google.com/maps?q=Connaught%20Place%20New%20Delhi&z=15&output=embed" loading="lazy" />
      </div>
    </section>
  )
}

/* ---------- Blog ---------- */
export function Blog() {
  return (
    <section className="sec" id="blog">
      <div className="wrap">
        <Title sub="News & Blog" center>Read Our Latest<br />News & Blog</Title>
        <div className="grid3">
          {posts.map((p) => (
            <article className="post" key={p.title}>
              <div className="post-img">
                <img src={p.img} alt="" />
                <div className="post-date"><b>{p.day}</b><span>{p.month}</span></div>
              </div>
              <div className="post-body">
                <div className="meta">
                  <span><Icon name="user" size={18} className="red" />admin</span>
                  <span><Icon name="chat" size={18} className="red" />Comments ({p.comments})</span>
                  <span className="dark"><Icon name="tag" size={18} className="red" />{p.tag}</span>
                </div>
                <h3><a href="#">{p.title}</a></h3>
                <a href="#" className="svc-link">Read More <Icon name="arrow" size={14} /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        <div>
          <Link to="/" className="foot-logo"><img src="/logo.jpeg" alt="OMM Overseas" /></Link>
          <p>Your trusted partner to study, work and settle abroad. Honest advice and complete visa support from start to finish.</p>
          <div className="socials">
            {['fb', 'tw', 'ig', 'in'].map((s) => <a key={s} href="#"><Icon name={s} size={18} /></a>)}
          </div>
        </div>
        <div>
          <h4>Services</h4>
          <ul>{[['Study In Canada', '/study-in-canada'], ['Study In UK', '/study-in-uk'], ['Study In Australia', '/study-in-australia'], ['Work Visa', '/work-visa'], ['Spouse Visa', '/spouse-visa']].map(([s, to]) => <li key={s}><Link to={to}><Icon name="dbl" size={16} />{s}</Link></li>)}</ul>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>{[['About Us', '/about'], ['IELTS Coaching', '/ielts'], ['PTE Coaching', '/pte'], ['Gallery', '/gallery'], ['Contact Us', '/contact']].map(([s, to]) => <li key={s}><Link to={to}><Icon name="dbl" size={16} />{s}</Link></li>)}</ul>
        </div>
        <div>
          <h4>Address:</h4>
          <p>{contact.address[0]}<br />{contact.address[1]}</p>
          <h4>Hours:</h4>
          <p>{contact.hours[0]}<br />{contact.hours[1]}</p>
        </div>
        <div>
          <h4>Instagram</h4>
          <div className="insta">{instagram.map((src) => <a key={src} href="#"><img src={src} alt="" /></a>)}</div>
        </div>
      </div>
      <div className="copy"><div className="wrap">Copyright © {new Date().getFullYear()} OMM Overseas All Rights Reserved.</div></div>
    </footer>
  )
}

/* ---------- Scroll to top ---------- */
export function ToTop() {
  const y = useScrollY()
  const max = typeof document !== 'undefined' ? document.documentElement.scrollHeight - window.innerHeight : 1
  const pct = Math.min(y / (max || 1), 1)
  const c = 2 * Math.PI * 28
  return (
    <button className={`totop ${y > 300 ? 'show' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
      <svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="28" strokeDasharray={c} strokeDashoffset={c * (1 - pct)} /></svg>
      <Icon name="up" size={20} />
    </button>
  )
}
