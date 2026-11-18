import { useCallback, useEffect, useState } from 'react'
import { LEGAL_COPY, LEGAL_DOCUMENTS } from '../data/legal'
import { Meta } from './ui'
import Reveal from './Reveal'

// Homepage "Legal & Registration" section.
// Each card previews page 1 of the document's PDF (served from /legal/)
// inside an F4 portrait frame (210 x 330 mm). Clicking a card opens a
// fullscreen lightbox with the enlarged first page. Until a PDF is
// uploaded, the card shows a paper placeholder with the document name.

function ExpandIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 3h6v6" />
      <path d="M9 21H3v-6" />
      <path d="M21 3l-7 7" />
      <path d="M3 21l7-7" />
    </svg>
  )
}

function PaperPlaceholder({ doc, large = false }) {
  return (
    <div className={`legal-paper${large ? ' legal-paper--large' : ''}`} aria-hidden="true">
      <span className="legal-paper__badge">PDF</span>
      <span className="legal-paper__name">{doc.name}</span>
      <span className="legal-paper__lines">
        <i /><i /><i /><i /><i />
      </span>
      <span className="legal-paper__pending">{LEGAL_COPY.pending}</span>
    </div>
  )
}

export default function LegalDocuments() {
  const [status, setStatus] = useState({}) // file -> 'ready' | 'missing'
  const [active, setActive] = useState(null) // index into LEGAL_DOCUMENTS

  useEffect(() => {
    let cancelled = false
    LEGAL_DOCUMENTS.forEach((doc) => {
      fetch(doc.pdf, { method: 'HEAD' })
        .then((res) => {
          const type = res.headers.get('content-type') || ''
          if (!cancelled) {
            setStatus((prev) => ({
              ...prev,
              [doc.file]: res.ok && type.includes('pdf') ? 'ready' : 'missing',
            }))
          }
        })
        .catch(() => {
          if (!cancelled) setStatus((prev) => ({ ...prev, [doc.file]: 'missing' }))
        })
    })
    return () => { cancelled = true }
  }, [])

  const close = useCallback(() => setActive(null), [])
  const step = useCallback((dir) => {
    setActive((prev) => (prev === null ? prev : (prev + dir + LEGAL_DOCUMENTS.length) % LEGAL_DOCUMENTS.length))
  }, [])

  useEffect(() => {
    if (active === null) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') step(1)
      if (event.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, close, step])

  const activeDoc = active === null ? null : LEGAL_DOCUMENTS[active]
  const activeReady = activeDoc ? status[activeDoc.file] === 'ready' : false

  return (
    <section className="section legal-section">
      <div className="container">
        <Reveal><Meta>{LEGAL_COPY.eyebrow}</Meta></Reveal>
        <div className="section-intro section-intro--wide">
          <Reveal>
            <h2 className="section-title">{LEGAL_COPY.headline}</h2>
            <p className="lead">{LEGAL_COPY.body}</p>
          </Reveal>
        </div>

        <div className="legal-grid">
          {LEGAL_DOCUMENTS.map((doc, index) => {
            const ready = status[doc.file] === 'ready'
            return (
              <Reveal key={doc.file} delay={String(index % 3)} className="legal-card-wrap">
                <button
                  type="button"
                  className="legal-card"
                  onClick={() => setActive(index)}
                  aria-label={`Enlarge preview of ${doc.file}`}
                >
                  <span className="legal-preview">
                    {ready ? (
                      <iframe
                        src={`${doc.pdf}#page=1&toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                        title={`First page of ${doc.file}`}
                        loading="lazy"
                        tabIndex={-1}
                        aria-hidden="true"
                      />
                    ) : (
                      <PaperPlaceholder doc={doc} />
                    )}
                    <span className="legal-preview__expand"><ExpandIcon /></span>
                  </span>
                  <span className="legal-card__meta">
                    <span className="legal-card__index">{String(index + 1).padStart(2, '0')}</span>
                    <span className="legal-card__name">{doc.file}</span>
                  </span>
                </button>
              </Reveal>
            )
          })}
        </div>

        <Reveal>
          <p className="legal-note">{LEGAL_COPY.note}</p>
        </Reveal>
      </div>

      {activeDoc && (
        <div className="legal-lightbox" role="dialog" aria-modal="true" aria-label={`Preview of ${activeDoc.file}`}>
          <button type="button" className="legal-lightbox__backdrop" aria-label="Close preview" onClick={close} />
          <figure className="legal-lightbox__figure">
            <div className="legal-lightbox__frame">
              {activeReady ? (
                <iframe
                  src={`${activeDoc.pdf}#page=1&toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                  title={`First page of ${activeDoc.file}`}
                />
              ) : (
                <PaperPlaceholder doc={activeDoc} large />
              )}
            </div>
            <figcaption className="legal-lightbox__caption">
              <span>{activeDoc.file}</span>
              {activeReady && (
                <a href={activeDoc.pdf} target="_blank" rel="noreferrer">Open PDF ↗</a>
              )}
            </figcaption>
          </figure>
          <button type="button" className="legal-lightbox__btn legal-lightbox__btn--close" onClick={close} aria-label="Close preview">✕</button>
          <button type="button" className="legal-lightbox__btn legal-lightbox__btn--prev" onClick={() => step(-1)} aria-label="Previous document">←</button>
          <button type="button" className="legal-lightbox__btn legal-lightbox__btn--next" onClick={() => step(1)} aria-label="Next document">→</button>
        </div>
      )}
    </section>
  )
}
