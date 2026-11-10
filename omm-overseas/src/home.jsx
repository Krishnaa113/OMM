import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icons'
import { Count } from './sections'
import { img, heroSlides, services, whyItems, counters, testimonials, steps, contact } from './data'
import { countries } from './content'
import './home.css'

const svcLinks = { 'Student Visa': '/study-abroad', 'Work Visa': '/work-visa' }

function Head({ sub, title, text, center }) {
  return (
    <div className={`hm-head ${center ? 'center' : ''}`}>
      <span className="hm-sub">{sub}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function Hero() {
  return (
    <section className="hm-hero">
      <div className="wrap hm-hero-in">
        <div className="hm-hero-text">
          <span className="hm-pill"><i />{heroSlides[1].tag}</span>
          <h1>Your Journey Abroad <em>Starts Here</em></h1>
          <p>Expert guidance for student, work, tourist and PR visas. Honest advice, complete documentation and a 98% success rate.</p>
          <div className="hm-btns">
            <Link to="/contact" className="btn">Free Consultation <Icon name="arrow" size={16} /></Link>
            <a href="#destinations" className="hm-btn-ghost">Explore Countries</a>
          </div>
          <div className="hm-trust">
            <div className="avatars">{testimonials.map((t) => <img key={t.name} src={t.img} alt="" />)}</div>
            <div><b>8500+ happy clients</b><span>★★★★★ rated by students & families</span></div>
          </div>
        </div>
        <div className="hm-hero-media">
          <img className="hm-hero-img" src={img.hero[2]} alt="Students celebrating graduation" />
          <div className="hm-float f1"><Icon name="visa" size={28} /><div><b>98%</b><span>Visa success</span></div></div>
          <div className="hm-float f2"><Icon name="globe" size={28} /><div><b>25+</b><span>Countries</span></div></div>
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
        <Head center sub="Study Destinations" title="Where Do You Want To Study?" text="Pick a country to see universities, intakes, costs and visa requirements." />
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
          <Head sub="What We Do" title="Visa Services Built Around You" />
          <Link to="/contact" className="btn">Talk To An Expert <Icon name="arrow" size={16} /></Link>
        </div>
        <div className="hm-svc-grid">
          {services.map((s) => (
            <Link key={s.title} to={svcLinks[s.title] || '/contact'} className="hm-svc">
              <div className="hm-svc-img"><img src={s.img} alt="" /></div>
              <div className="hm-svc-body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <span>Learn more <Icon name="arrow" size={14} /></span>
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
          <div className="hm-badge"><b>12+</b><span>Years of<br />experience</span></div>
        </div>
        <div>
          <Head sub="Why OMM Overseas" title="A Consultancy That Actually Cares" text="OMM Overseas is a registered visa and immigration consultancy. We give honest advice, prepare every file carefully and stay with you until you land." />
          <div className="hm-why-list">
            {whyItems.map((w) => (
              <div key={w.title} className="hm-why-item">
                <span><Icon name={w.icon} size={30} /></span>
                <div><h3>{w.title}</h3><p>{w.text}</p></div>
              </div>
            ))}
          </div>
          <Link to="/about" className="btn">More About Us <Icon name="arrow" size={16} /></Link>
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="hm-sec hm-dark">
      <div className="wrap">
        <Head center sub="How It Works" title="Your Visa In 4 Simple Steps" />
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
        <Head center sub="Success Stories" title="What Our Clients Say" />
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
    <section className="hm-sec hm-tint">
      <div className="wrap hm-contact">
        <div className="hm-contact-info">
          <span className="hm-sub">Get In Touch</span>
          <h2>Book Your Free Consultation</h2>
          <p>Tell us your plans and an expert will call you back within one working day.</p>
          <a href={`tel:${tel}`}><Icon name="phone" size={22} /><div><small>Call us</small>{contact.phone}</div></a>
          <a href={`mailto:${contact.email}`}><Icon name="mail" size={22} /><div><small>Email us</small>{contact.email}</div></a>
          <div className="hm-ci"><Icon name="globe" size={22} /><div><small>Visit us</small>{contact.address.join(' ')}</div></div>
          <div className="hm-ci"><Icon name="check" size={22} /><div><small>Hours</small>{contact.hours.join(', ')}</div></div>
        </div>
        <form className="hm-form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
          <label>Full name<input required placeholder="Your name" /></label>
          <div className="hm-f2">
            <label>Email<input type="email" required placeholder="you@example.com" /></label>
            <label>Phone<input type="tel" placeholder="+91" /></label>
          </div>
          <label>Service
            <select defaultValue=""><option value="" disabled>Choose a service</option>{services.map((s) => <option key={s.title}>{s.title}</option>)}</select>
          </label>
          <label>Message<textarea rows="4" placeholder="Which country and course are you interested in?" /></label>
          <button className="btn" type="submit" disabled={sent}>{sent ? 'Thanks! We will call you soon ✓' : <>Request Call Back <Icon name="arrow" size={16} /></>}</button>
        </form>
      </div>
    </section>
  )
}

export default function Home() {
  return (<><Hero /><Stats /><Destinations /><Services /><Why /><Process /><Reviews /><ContactBlock /></>)
}
