import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV } from '../data/content'

export default function Nav() {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${solid ? 'nav--solid' : 'nav--over'}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__brand">
          <img src="/favicon/favicon.png" alt="PT. Nalar Kreatif Nusantara" />
        </Link>

        <nav className="nav__links">
          {NAV.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="nav__inquire">
          Inquire <span className="arrow">→</span>
        </Link>
      </div>
    </header>
  )
}
