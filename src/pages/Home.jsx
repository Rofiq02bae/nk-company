import { Link } from 'react-router-dom'
import { COMMODITIES, IMAGE_ASSETS, WHY_US } from '../data/content'
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
          <Meta>PT Agro / Premium Agricultural Commodities</Meta>
          <h1>Rooted in Indonesia. Grown for the world.</h1>
          <div className="hero-actions">
            <Cta to="/commodities" variant="inverse">Explore commodities</Cta>
            <Link to="/company" className="text-link">About PT Agro <span className="arrow">→</span></Link>
          </div>
        </div>
      </HeroZoom>

      <section className="section statement-section">
        <div className="container split">
          <Reveal className="split__text">
            <Meta>01 / Brand statement</Meta>
            <h2 className="section-title">From Indonesian soil to global markets.</h2>
          </Reveal>
          <Reveal delay="1" className="split__media statement-copy">
            <p className="lead">PT Agro connects premium spices, aromatic plants and medicinal crops with partners around the world.</p>
            <Link to="/services" className="text-link">Discover our capabilities <span className="arrow">→</span></Link>
          </Reveal>
        </div>
      </section>

      <section className="section on-dark featured-section">
        <div className="container">
          <Reveal><Meta>02 / Featured commodity</Meta></Reveal>
          <div className="featured-grid">
            <Reveal className="featured-copy">
              <h2 className="section-title">A closer look at what we grow.</h2>
              <p className="lead">Begin with {featured.name}, one of Indonesia’s most distinctive commodities.</p>
              <Cta to="/commodities" variant="inverse">View all commodities</Cta>
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
          <Reveal><Meta>03 / Why PT Agro</Meta></Reveal>
          <div className="section-intro section-intro--wide">
            <Reveal><h2 className="section-title">Built on quality, shaped by partnership.</h2></Reveal>
          </div>
          <div className="principles-grid">
            {WHY_US.map((item, index) => (
              <Reveal key={item.title} delay={String(index % 4)} className="principle">
                <span className="principle__number">0{index + 1}</span>
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
          <Meta>04 / Start a conversation</Meta>
          <h2>Let’s grow something global.</h2>
          <Cta to="/contact" variant="inverse">Make an inquiry</Cta>
        </div>
      </section>
    </div>
  )
}
