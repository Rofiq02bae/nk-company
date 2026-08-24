import { useEffect, useRef } from 'react'

// Scroll-linked parallax. Translates its children vertically by a fraction of
// their distance from the viewport centre. Wrap media that is oversized
// (e.g. `inset: -12% 0`) so edges stay covered.
export default function Parallax({ speed = 0.2, className = '', children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    let raf = 0
    const update = () => {
      const rect = el.getBoundingClientRect()
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`
      raf = 0
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [speed])

  return (
    <div ref={ref} className={`parallax ${className}`}>
      {children}
    </div>
  )
}
