import { COMPANY_COPY, IMAGE_ASSETS } from '../data/content'
import { Cta, Meta, Placeholder } from '../components/ui'
import Reveal from '../components/Reveal'

export default function Company() {
  return (
    <div className="company-page">
      <section className="page-hero page-hero--company">
        <div className="page-hero__media"><Placeholder src={IMAGE_ASSETS.company.story} tone="green" label="PT Agro company story" alt="Agricultural landscape representing PT Agro's company story" /></div>
        <div className="page-hero__scrim" />
        <div className="container page-hero__inner">
          <Meta>{COMPANY_COPY.hero.eyebrow}</Meta>
          <h1>{COMPANY_COPY.hero.headline}</h1>
          <p className="lead">{COMPANY_COPY.hero.body}</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal className="split__text">
            <h2 className="section-title">{COMPANY_COPY.story.headline}</h2>
          </Reveal>
          <Reveal delay="1" className="split__media story-copy">
            <Placeholder src={IMAGE_ASSETS.company.farmer} tone="warm" label="PT Agro farmer partnership" alt="Farmer working in an agricultural field" />
            <p>{COMPANY_COPY.story.body}</p>
          </Reveal>
        </div>
      </section>

      <section className="section on-dark history-section">
        <div className="container">
          <Reveal><Meta>02 / History</Meta></Reveal>
          <div className="timeline">
            <Reveal className="timeline__date"><span>May 2026</span></Reveal>
            <Reveal delay="1" className="timeline__line" />
            <Reveal delay="2" className="timeline__copy">
              <h2 className="section-title">Established in Yogyakarta.</h2>
              <p className="lead">A young company with a clear ambition: carry the quality and character of Indonesian crops into the world.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section vision-section">
        <div className="container split split--flip">
          <Reveal className="split__text">
            <Meta>03 / Vision & mission</Meta>
            <h2 className="section-title">A more connected future for agriculture.</h2>
            <p className="lead">We pair modern methods with the knowledge of Indonesian growers to build lasting value across the supply chain.</p>
          </Reveal>
          <Reveal delay="1" className="split__media mission-list">
            <div><span>01</span><p>Develop responsible cultivation.</p></div>
            <div><span>02</span><p>Protect quality from farm to buyer.</p></div>
            <div><span>03</span><p>Build long-term farmer partnerships.</p></div>
          </Reveal>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <Reveal><Meta>04 / Our team</Meta></Reveal>
          <div className="team-grid">
            <Reveal className="team-intro"><h2 className="section-title">People close to the source.</h2></Reveal>
            <Reveal delay="1" className="team-note"><Placeholder src={IMAGE_ASSETS.company.team} tone="warm" label="PT Agro team" alt="PT Agro team" /><p>Team profiles and photography will be added as verified materials become available.</p></Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
