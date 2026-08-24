import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// Small shared primitives: metadata label, CTA button/link, and placeholder media.

export function Meta({ children, className = '' }) {
  return <div className={`meta ${className}`}>{children}</div>
}

export function Cta({ to, variant = 'primary', children }) {
  return (
    <Link to={to} className={`btn btn-${variant}`}>
      {children} <span className="arrow">→</span>
    </Link>
  )
}

// Editorial placeholder media. Pass `src` to render a real image instead of the
// gradient block — this is the swap point for real PT Agro photography.
export function Placeholder({ tone = 'warm', label, src, alt, className = '' }) {
  const [imageFailed, setImageFailed] = useState(false)

  useEffect(() => {
    setImageFailed(false)
  }, [src])

  if (src && !imageFailed) {
    return (
      <img
        src={src}
        alt={alt || label || ''}
        className={`ph ${className}`}
        onError={() => setImageFailed(true)}
      />
    )
  }
  return (
    <div className={`ph ph--${tone} ${className}`} role="img" aria-label={label}>
      <div className="grain" />
      {label && <span className="ph__label">{label}</span>}
    </div>
  )
}

// Renders a temporary isolated commodity image when one is documented. If
// the remote reference is unavailable, retain the existing silhouette so the
// showcase layout, metadata, and transition remain intact.
export function CommodityAsset({ product, className = '' }) {
  const [imageFailed, setImageFailed] = useState(false)

  if (product.image && !imageFailed) {
    return (
      <img
        src={product.image}
        alt={product.name}
        className={className}
        onError={() => setImageFailed(true)}
      />
    )
  }

  return <Cutout type={product.id} fill={product.cutFill} className={className} />
}

// Abstract commodity silhouettes — stand-ins for isolated transparent cutouts.
// Replace with real assets (public/images/commodity-cutouts/*.png) in production.
export function Cutout({ type, fill, className = '' }) {
  let art
  switch (type) {
    case 'black-pepper':
      art = (
        <g fill={fill}>
          <circle cx="100" cy="94" r="33" />
          <circle cx="70" cy="116" r="23" />
          <circle cx="130" cy="116" r="23" />
          <circle cx="86" cy="68" r="19" />
          <circle cx="118" cy="66" r="19" />
          <circle cx="100" cy="142" r="17" />
          <circle cx="60" cy="88" r="14" />
          <circle cx="142" cy="88" r="14" />
        </g>
      )
      break
    case 'white-pepper':
      art = (
        <g fill="none" stroke={fill} strokeWidth="6">
          <circle cx="100" cy="94" r="33" />
          <circle cx="70" cy="116" r="23" />
          <circle cx="130" cy="116" r="23" />
          <circle cx="86" cy="68" r="19" />
          <circle cx="118" cy="66" r="19" />
        </g>
      )
      break
    case 'cloves':
      art = (
        <g fill={fill}>
          <ellipse cx="100" cy="54" rx="16" ry="21" />
          <path d="M100 70 L97 152 L103 152 Z" />
          <ellipse cx="70" cy="70" rx="13" ry="17" transform="rotate(-16 70 70)" />
          <path d="M70 84 L68 148 L74 148 Z" transform="rotate(-8 70 84)" />
          <ellipse cx="130" cy="70" rx="13" ry="17" transform="rotate(16 130 70)" />
          <path d="M130 84 L126 148 L132 148 Z" transform="rotate(8 130 84)" />
        </g>
      )
      break
    case 'vetiver':
      art = (
        <g fill="none" stroke={fill} strokeLinecap="round">
          <path d="M100 152 C99 118 93 78 83 34" strokeWidth="9" />
          <path d="M100 152 C100 120 100 84 100 30" strokeWidth="8" />
          <path d="M100 152 C101 118 107 78 117 34" strokeWidth="9" />
          <path d="M100 152 C95 120 87 84 73 44" strokeWidth="6" />
          <path d="M100 152 C105 120 113 84 127 44" strokeWidth="6" />
        </g>
      )
      break
    case 'areca-nut':
      art = (
        <g fill={fill}>
          <ellipse cx="90" cy="104" rx="28" ry="44" transform="rotate(-12 90 104)" />
          <ellipse cx="112" cy="104" rx="28" ry="44" transform="rotate(10 112 104)" />
        </g>
      )
      break
    default:
      art = <circle cx="100" cy="100" r="60" fill={fill} />
  }

  return (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {art}
    </svg>
  )
}
