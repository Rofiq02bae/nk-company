import { Link } from 'react-router-dom'
import { NAV, COMPANY, FOOTER_COPY } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="nav__brand" style={{ fontSize: '1.4rem' }}>
              {FOOTER_COPY.brand}
            </div>
            <p className="lead" style={{ color: 'var(--muted-inverse)', marginTop: '1rem' }}>
              {FOOTER_COPY.tagline}
            </p>
          </div>

          <div>
            <div className="meta">{FOOTER_COPY.navigationHeading}</div>
            <ul className="footer__nav" style={{ marginTop: '1.2rem' }}>
              {NAV.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="meta">Headquarters</div>
            <p style={{ marginTop: '1.2rem', color: 'var(--muted-inverse)' }}>{COMPANY.location}</p>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 {COMPANY.name}. All rights reserved.</span>
          <span>{FOOTER_COPY.tagline}</span>
        </div>
      </div>
    </footer>
  )
}
