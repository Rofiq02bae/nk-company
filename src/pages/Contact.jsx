import { useState } from 'react'
import { CONTACT_FIELDS, COMPANY, IMAGE_ASSETS } from '../data/content'
import { Cta, Meta, Placeholder } from '../components/ui'
import Reveal from '../components/Reveal'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div className="contact-page">
      <section className="contact-statement on-dark">
        <div className="contact-statement__media"><Placeholder src={IMAGE_ASSETS.contact.atmosphere} label="Indonesian agricultural landscape" alt="Indonesian agricultural landscape" /></div>
        <div className="container">
          <Meta>Contact / Start a conversation</Meta>
          <h1>Let’s grow something global.</h1>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-layout">
          <Reveal className="contact-info">
            <Meta>01 / Contact information</Meta>
            <h2 className="section-title">Bring us your next opportunity.</h2>
            <p className="lead">Tell us what you are looking for and our team will follow up with the right information.</p>
            <div className="contact-detail"><span className="meta">Headquarters</span><strong>{COMPANY.location}</strong></div>
            <div className="contact-detail"><span className="meta">Company</span><strong>{COMPANY.name}</strong></div>
          </Reveal>
          <Reveal delay="1" className="inquiry-form-wrap">
            <Meta>02 / Inquiry form</Meta>
            <form className="inquiry-form" onSubmit={handleSubmit}>
              {CONTACT_FIELDS.map((field) => {
                const isMessage = field === 'Message'
                return (
                  <label key={field} className={isMessage ? 'field field--wide' : 'field'}>
                    <span>{field}</span>
                    {isMessage ? <textarea name={field.toLowerCase().replaceAll(' ', '-')} rows="4" required /> : <input name={field.toLowerCase().replaceAll(' ', '-')} type={field === 'Email' ? 'email' : 'text'} required />}
                  </label>
                )
              })}
              <button type="submit" className="btn btn-primary">Send inquiry <span className="arrow">→</span></button>
              {sent && <p className="form-status" role="status">Your inquiry is ready to send. We’ll be in touch.</p>}
            </form>
          </Reveal>
        </div>
      </section>

      <section className="section location-section on-dark">
        <div className="container split">
          <Reveal className="split__text"><Meta>03 / Location</Meta><h2 className="section-title">Yogyakarta, Indonesia.</h2></Reveal>
          <Reveal delay="1" className="split__media location-mark"><span>{COMPANY.location}</span><span>Indonesian origin</span></Reveal>
        </div>
      </section>

      <section className="contact-close">
        <div className="container"><Meta>04 / PT Agro</Meta><p>Premium agricultural commodities, rooted in Nusantara.</p><Cta to="/commodities" variant="outline">Explore commodities</Cta></div>
      </section>
    </div>
  )
}
