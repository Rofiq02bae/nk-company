import { useState } from 'react'
import { SERVICES, IMAGE_ASSETS, SERVICES_PAGE_COPY, VALUE_CHAIN, GLOBAL_SUPPLY } from '../data/content'
import { Cta, Meta, Placeholder } from '../components/ui'
import Reveal from '../components/Reveal'

export default function Services() {
  const [openService, setOpenService] = useState(0)

  return (
    <div className="services-page">
      <section className="page-hero page-hero--services">
        <div className="page-hero__media"><Placeholder src={IMAGE_ASSETS.services.cultivation} tone="green" label="Farm-to-market journey" alt="Agricultural cultivation" /></div>
        <div className="page-hero__scrim" />
        <div className="container page-hero__inner">
          <Meta>{SERVICES_PAGE_COPY.hero.eyebrow}</Meta>
          <h1>{SERVICES_PAGE_COPY.hero.headline}</h1>
          <p className="lead">{SERVICES_PAGE_COPY.hero.body}</p>
        </div>
      </section>

      <section className="section chain-section">
        <div className="container">
          <Reveal><Meta>01 / Value chain</Meta></Reveal>
          <Reveal delay="1"><h2 className="section-title">One connected path from farm to partnership.</h2></Reveal>
          <div className="value-chain">
            {VALUE_CHAIN.map((item, index) => (
              <div className="value-chain__item" key={item.label}>
                <span>{item.step}</span><strong>{item.label}</strong>{index < VALUE_CHAIN.length - 1 && <i>→</i>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section on-dark service-section">
        <div className="container">
          <Reveal><Meta>02 / Service showcase</Meta></Reveal>
          <div className="service-layout">
            <Reveal className="service-media"><Placeholder src={SERVICES[openService].image} tone="brown" label={SERVICES[openService].title} alt={SERVICES[openService].title} /></Reveal>
            <div className="service-list">
              {SERVICES.map((service, index) => {
                const isOpen = openService === index
                return (
                  <Reveal key={service.title} delay={String(index % 4)} className={`service-row ${isOpen ? 'is-open' : ''}`}>
                    <button type="button" onClick={() => setOpenService(isOpen ? -1 : index)} aria-expanded={isOpen}>
                      <span className="service-row__number">0{index + 1}</span>
                      <span className="service-row__title">{service.title}</span>
                      <span className="service-row__icon">{isOpen ? '−' : '+'}</span>
                    </button>
                    <div className="service-row__detail"><p>{service.text}</p></div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section supply-section">
        <div className="container">
          <Reveal><Meta>03 / Global supply</Meta></Reveal>
          <div className="supply-layout">
            <Reveal><h2 className="section-title">A clear route to the global buyer.</h2></Reveal>
            <Reveal delay="1" className="supply-flow">
              {GLOBAL_SUPPLY.map((step, index) => <div key={step}><span>0{index + 1}</span><strong>{step}</strong></div>)}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="cta-band cta-band--green">
        <div className="container cta-band__inner">
          <Meta>04 / Partnership</Meta>
          <h2>Build a long-term agribusiness partnership.</h2>
          <Cta to="/contact" variant="inverse">Talk to PT Agro</Cta>
        </div>
      </section>
    </div>
  )
}
