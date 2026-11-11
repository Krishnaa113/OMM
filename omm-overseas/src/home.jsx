import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icons'
import { sendEnquiry } from './store'
import { Count } from './sections'
import { img, services, whyItems, counters, testimonials, steps, contact, text, states, timelines } from './data'
import { countries } from './content'
import './home.css'

const svcLinks = { 'Student Visa': '/study-abroad', 'Work Visa': '/work-visa' }

function Head({ sub, title, text, center, wide }) {
  return (
    <div className={`hm-head ${center ? 'center' : ''} ${wide ? 'wide' : ''}`}>
      <span className="hm-sub">{sub}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function Hero() {
  const t = text.home
  return (
    <section className="hm-hero">
      <div className="wrap hm-hero-in">
        <div className="hm-hero-text">
          <span className="hm-pill"><i />{t.heroTag}</span>
          <h1>{t.heroTitle} <em>{t.heroHighlight}</em></h1>
          <p>{t.heroText}</p>
          <div className="hm-btns">
            <Link to="/contact" className="btn">{t.heroButton} <Icon name="arrow" size={16} /></Link>
            <a href="#destinations" className="hm-btn-ghost">{t.heroButton2}</a>
          </div>
          <div className="hm-trust">
            <div className="avatars">{testimonials.map((r) => <img key={r.name} src={r.img} alt="" />)}</div>
            <div><b>{t.trustTitle}</b><span>{t.trustText}</span></div>
          </div>
        </div>
        <div className="hm-hero-media">
          <img className="hm-hero-img" src={img.homeHero} alt="Students celebrating graduation" />
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="wrap">
      <div className="hm-stats">
        {counters.map((c) => (
          <div key={c.label.join()}>
            <Count value={c.value} suffix={c.suffix} />
            <span>{c.label.join(' ')}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function Destinations() {
  return (
    <section className="hm-sec" id="destinations">
      <div className="wrap">
        <Head center wide sub={text.home.destSub} title={text.home.destTitle} text={text.home.destText} />
        <div className="hm-dest">
          {Object.entries(countries).map(([slug, c]) => (
            <Link key={slug} to={`/${slug}`} className="hm-country">
              <img src={c.img} alt={c.name} />
              <div className="hm-country-cap">
                <img src={`https://flagcdn.com/w80/${c.flag}.png`} alt="" />
                <b>{c.name}</b>
                <Icon name="arrow" size={18} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="hm-sec hm-tint">
      <div className="wrap">
        <div className="hm-row-head">
          <Head wide sub={text.home.servicesSub} title={text.home.servicesTitle} />
          <div className="hm-actions">
            <Link to="/contact" className="btn">{text.home.servicesButton} <Icon name="arrow" size={16} /></Link>
            <a href={`https://wa.me/${(contact.whatsapp || contact.phone).replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="btn hm-wa"><Icon name="chat" size={18} /> {text.home.whatsappButton}</a>
            <a href="#enquiry" className="btn hm-enq"><Icon name="mail" size={18} /> {text.home.enquiryButton}</a>
          </div>
        </div>
        <div className="hm-svc-grid">
          {services.map((s) => (
            <Link key={s.title} to={svcLinks[s.title] || '/contact'} className="hm-svc">
              <div className="hm-svc-img"><img src={s.img} alt="" /></div>
              <div className="hm-svc-body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span>{text.home.servicesMore} <Icon name="arrow" size={14} /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Why() {
  return (
    <section className="hm-sec">
      <div className="wrap hm-why">
        <div className="hm-why-media">
          <img src={img.about1} alt="Happy travellers with passports" />
          <div className="hm-badge"><b>{text.home.whyBadgeValue}</b><span className="pre">{text.home.whyBadgeLabel}</span></div>
        </div>
        <div>
          <Head sub={text.home.whySub} title={text.home.whyTitle} text={text.home.whyText} />
          <div className="hm-why-list">
            {whyItems.map((w) => (
              <div key={w.title} className="hm-why-item">
                <span><Icon name={w.icon} size={30} /></span>
                <div><h3>{w.title}</h3><p>{w.text}</p></div>
              </div>
            ))}
          </div>
          <Link to="/about" className="btn">{text.home.whyButton} <Icon name="arrow" size={16} /></Link>
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="hm-sec hm-dark">
      <div className="wrap">
        <Head center sub={text.home.processSub} title={text.home.processTitle} />
        <ol className="hm-steps">
          {steps.map((s, k) => (
            <li key={s.title}>
              <span className="hm-num">0{k + 1}</span>
              <Icon name={s.icon} size={40} />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section className="hm-sec">
      <div className="wrap">
        <Head center sub={text.home.reviewsSub} title={text.home.reviewsTitle} />
        <div className="hm-reviews">
          {testimonials.slice(0, 3).map((t) => (
            <figure key={t.name} className="hm-review">
              <div className="hm-stars">★★★★★</div>
              <blockquote>“{t.text}”</blockquote>
              <figcaption><img src={t.img} alt="" /><div><b>{t.name}</b><span>{t.role}</span></div></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactBlock() {
  const [sent, setSent] = useState(false)
  const tel = contact.phone.replace(/\s/g, '')
  return (
    <section className="hm-sec hm-tint" id="enquiry">
      <div className="wrap hm-contact">
        <div className="hm-contact-info">
          <span className="hm-sub">{text.home.contactSub}</span>
          <h2>{text.home.contactTitle}</h2>
          <p>{text.home.contactText}</p>
          <a href={`tel:${tel}`}><Icon name="phone" size={22} /><div><small>Call us</small>{contact.phone}</div></a>
          <a href={`mailto:${contact.email}`}><Icon name="mail" size={22} /><div><small>Email us</small>{contact.email}</div></a>
          <div className="hm-ci"><Icon name="globe" size={22} /><div><small>Visit us</small>{contact.address.join(' ')}</div></div>
          <div className="hm-ci"><Icon name="check" size={22} /><div><small>Hours</small>{contact.hours.join(', ')}</div></div>
        </div>
        <form className="hm-form" onSubmit={(e) => { e.preventDefault(); sendEnquiry(e.target).then(() => setSent(true), (err) => alert(err.message)) }}>
          <label>Full name<input name="name" required placeholder="Your name" /></label>
          <div className="hm-f2">
            <label>Email<input name="email" type="email" required placeholder="you@example.com" /></label>
            <label>Phone<input name="phone" type="tel" placeholder="+91" /></label>
          </div>
          <div className="hm-f2">
            <label>State
              <select name="state" required defaultValue=""><option value="" disabled>Choose your state</option>{states.map((s) => <option key={s}>{s}</option>)}</select>
            </label>
            <label>Service
              <select name="service" defaultValue=""><option value="" disabled>Choose a service</option>{services.map((s) => <option key={s.title}>{s.title}</option>)}</select>
            </label>
          </div>
          <label>{text.home.timelineLabel}
            <select name="timeline" required defaultValue=""><option value="" disabled>Choose an option</option>{timelines.map((s) => <option key={s}>{s}</option>)}</select>
          </label>
          <label>Message<textarea name="message" rows="4" placeholder="Which country and course are you interested in?" /></label>
          <button className="btn" type="submit" disabled={sent}>{sent ? text.home.formThanks : <>{text.home.formButton} <Icon name="arrow" size={16} /></>}</button>
        </form>
      </div>
    </section>
  )
}

export default function Home() {
  return (<><Hero /><Stats /><Destinations /><Services /><Why /><Process /><Reviews /><ContactBlock /></>)
}
