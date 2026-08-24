import { useEffect, useRef, useState } from 'react'

// Wraps content and fades/translates it in when it scrolls into view.
// Stagger siblings with `delay` (1–4).
export default function Reveal({ as: Tag = 'div', delay, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()} data-delay={delay} {...rest}>
      {children}
    </Tag>
  )
}
