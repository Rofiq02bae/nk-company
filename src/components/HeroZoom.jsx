import { useEffect, useRef } from 'react'

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

export default function HeroZoom({ as: Tag = 'section', className = '', children }) {
  const ref = useRef(null)

  useEffect(() => {
    const hero = ref.current
    if (!hero) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mobile = window.matchMedia('(max-width: 767px)')
    let raf = 0

    const setProgress = () => {
      const rect = hero.getBoundingClientRect()
      const progress = clamp(-rect.top / rect.height, 0, 1)
      const zoom = 1 + progress * (mobile.matches ? 0.2 : 0.35)
      const copyY = -progress * (mobile.matches ? 14 : 30)
      const copyOpacity = 1 - progress * 0.08
      const overlayOpacity = 1 - progress * 0.04

      hero.style.setProperty('--hero-zoom', zoom.toFixed(3))
      hero.style.setProperty('--hero-copy-y', `${copyY.toFixed(1)}px`)
      hero.style.setProperty('--hero-copy-opacity', copyOpacity.toFixed(3))
      hero.style.setProperty('--hero-overlay-opacity', overlayOpacity.toFixed(3))
    }

    const update = () => {
      raf = 0
      if (!reducedMotion.matches) setProgress()
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    const onPreferenceChange = () => {
      if (reducedMotion.matches) {
        hero.style.setProperty('--hero-zoom', '1')
        hero.style.setProperty('--hero-copy-y', '0px')
        hero.style.setProperty('--hero-copy-opacity', '1')
        hero.style.setProperty('--hero-overlay-opacity', '1')
      } else {
        setProgress()
      }
    }

    onPreferenceChange()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    reducedMotion.addEventListener?.('change', onPreferenceChange)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      reducedMotion.removeEventListener?.('change', onPreferenceChange)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return <Tag ref={ref} className={`hero-zoom ${className}`.trim()}>{children}</Tag>
}
