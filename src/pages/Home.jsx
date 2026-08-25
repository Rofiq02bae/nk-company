import { Link } from 'react-router-dom'
import { COMMODITIES, HOME_COPY, IMAGE_ASSETS, WHY_US } from '../data/content'
import { Cta, CommodityAsset, Meta, Placeholder } from '../components/ui'
import HeroZoom from '../components/HeroZoom'
import Reveal from '../components/Reveal'

export default function Home() {
  const featured = COMMODITIES[0]

  return (
    <div className="home-page">
      <HeroZoom className="page-hero page-hero--home">
        <div className="page-hero__media hero-zoom__media">
          <Placeholder src={IMAGE_ASSETS.hero.agriculture} tone="green" label="Indonesian agricultural landscape" alt="Indonesian agricultural landscape" />
        </div>
        <div className="page-hero__scrim" />
        <div className="container page-hero__inner">
          <h1>{HOME_COPY.hero.headline}</h1>
          <p className="lead hero-support">{HOME_COPY.hero.body}</p>
          <div className="hero-actions">
            <Cta to="/commodities" variant="inverse">{HOME_COPY.hero.primaryCta}</Cta>
            <Link to="/company" className="text-link">{HOME_COPY.hero.secondaryCta} <span className="arrow">→</span></Link>
          </div>
        </div>
      </HeroZoom>

      <section className="section statement-section">
        <div className="container split">
          <Reveal className="split__text">
            <Meta>{HOME_COPY.statement.eyebrow}</Meta>
            <h2 className="section-title">{HOME_COPY.statement.headline}</h2>
          </Reveal>
          <Reveal delay="1" className="split__media statement-copy">
            <p className="lead">{HOME_COPY.statement.body}</p>
          </Reveal>
        </div>
      </section>

      <section className="section on-dark featured-section">
        <div className="container">
          <Reveal><Meta>{HOME_COPY.featured.eyebrow}</Meta></Reveal>
          <div className="featured-grid">
            <Reveal className="featured-copy">
              <h2 className="section-title">{HOME_COPY.featured.headline}</h2>
              <p className="lead">{HOME_COPY.featured.body}</p>
              <Cta to="/commodities" variant="inverse">{HOME_COPY.featured.cta}</Cta>
            </Reveal>
            <Reveal delay="1" className="featured-product">
              <div className="featured-orb" style={{ background: featured.orb }}>
                <span className="showcase__index">{featured.index}</span>
                <CommodityAsset product={featured} className="featured-cutout" />
              </div>
              <div className="featured-meta">
                <Meta>{featured.botanical}</Meta>
                <strong>{featured.name}</strong>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container">
          <Reveal><Meta>{HOME_COPY.why.eyebrow}</Meta></Reveal>
          <div className="section-intro section-intro--wide">
            <Reveal>
              <h2 className="section-title">{HOME_COPY.why.headline}</h2>
              <p className="lead">{HOME_COPY.why.body}</p>
            </Reveal>
          </div>
          <div className="principles-grid">
            {WHY_US.map((item, index) => (
              <Reveal key={item.title} delay={String(index % 4)} className="principle">
                <span className="principle__number">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band__media"><Placeholder src={IMAGE_ASSETS.hero.spices} tone="brown" label="Spice harvest" alt="Indonesian spice harvest" /></div>
        <div className="cta-band__scrim" />
        <div className="container cta-band__inner">
          <h2>{HOME_COPY.cta.headline}</h2>
          <p className="lead">{HOME_COPY.cta.body}</p>
          <Cta to="/contact" variant="inverse">{HOME_COPY.cta.label}</Cta>
        </div>
      </section>
    </div>
  )
}
