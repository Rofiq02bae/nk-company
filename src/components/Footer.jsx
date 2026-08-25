import { Link } from 'react-router-dom'
import { NAV, COMPANY, FOOTER_COPY } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand" aria-label={FOOTER_COPY.brand}>
              {FOOTER_COPY.brandLines.map((line) => <span key={line}>{line}</span>)}
            </div>
            <p className="lead footer__tagline" style={{ color: 'var(--muted-inverse)' }}>
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
