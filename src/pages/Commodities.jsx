import { useEffect, useRef, useState } from 'react'
import { COMMODITIES, COMMODITIES_PAGE_COPY } from '../data/content'
import { Cta, CommodityAsset, Meta, Placeholder } from '../components/ui'
import Reveal from '../components/Reveal'

function ProductVisual({ product }) {
  const visual = product.visual || { scale: 1, x: 0, y: 0 }

  return (
    <div className="showcase__visual" style={{ background: product.orb }}>
      <span className="showcase__index">{product.index}</span>
      <div
        className="showcase__asset-layer"
        style={{
          '--product-visual-scale': visual.scale,
          '--product-visual-x': `${visual.x}px`,
          '--product-visual-y': `${visual.y}px`,
        }}
      >
        <CommodityAsset product={product} className="showcase__cutout" />
      </div>
    </div>
  )
}

export default function Commodities() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeProduct, setActiveProduct] = useState(COMMODITIES[0])
  const [previousProduct, setPreviousProduct] = useState(null)
  const [transitionDirection, setTransitionDirection] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const transitionTimerRef = useRef(null)

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current)
    }
  }, [])

  function selectCommodity(nextIndex) {
    if (nextIndex === activeIndex) return

    const nextProduct = COMMODITIES[nextIndex]
    const direction = nextIndex > activeIndex ? 1 : -1

    if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current)

    setPreviousProduct(activeProduct)
    setActiveProduct(nextProduct)
    setActiveIndex(nextIndex)
    setTransitionDirection(direction)
    setIsTransitioning(true)

    transitionTimerRef.current = setTimeout(() => {
      setPreviousProduct(null)
      setIsTransitioning(false)
      transitionTimerRef.current = null
    }, 1200)
  }

  return (
    <div className="commodities-page">
      <section className="page-hero page-hero--commodities">
        <div className="page-hero__media"><Placeholder tone="brown" label="Indonesian spice harvest · image placeholder" /></div>
        <div className="page-hero__scrim" />
        <div className="container page-hero__inner">
          <Meta>{COMMODITIES_PAGE_COPY.hero.eyebrow}</Meta>
          <h1>{COMMODITIES_PAGE_COPY.hero.headline}</h1>
          <p className="lead">{COMMODITIES_PAGE_COPY.hero.body}</p>
        </div>
      </section>

      <section className="section on-dark showcase-section">
        <div className="container">
          <Reveal><Meta>01 / Interactive showcase</Meta></Reveal>
          <div className="showcase-layout">
            <div className="showcase">
              <div
                className="showcase__stage"
                aria-live="polite"
                style={{
                  '--transition-out-x': `${-90 * transitionDirection}px`,
                  '--transition-in-x': `${110 * transitionDirection}px`,
                  '--transition-out-y': `${-12 * transitionDirection}deg`,
                  '--transition-in-y': `${12 * transitionDirection}deg`,
                  '--cutout-out-x': `${-24 * transitionDirection}px`,
                  '--cutout-in-x': `${22 * transitionDirection}px`,
                  '--index-out-x': `${-26 * transitionDirection}px`,
                  '--index-in-x': `${26 * transitionDirection}px`,
                }}
              >
                {previousProduct && isTransitioning && (
                  <div key={`leaving-${previousProduct.id}`} className="showcase__product is-leaving" aria-hidden="true">
                    <ProductVisual product={previousProduct} />
                  </div>
                )}
                <div
                  key={`active-${activeProduct.id}`}
                  className={`showcase__product ${isTransitioning ? 'is-entering' : 'is-active'}`}
                >
                  <ProductVisual product={activeProduct} />
                </div>
              </div>
              <div className="showcase__caption">
                <Meta>{activeProduct.name}</Meta>
                <p>{activeProduct.info}</p>
              </div>
            </div>
            <div className="showcase__list" role="list" aria-label="Choose a commodity">
              {COMMODITIES.map((commodity, index) => (
                <button
                  type="button"
                  role="listitem"
                  key={commodity.id}
                  className={`showcase__item ${index === activeIndex ? 'is-active' : ''}`}
                  onClick={() => selectCommodity(index)}
                  aria-pressed={index === activeIndex}
                >
                  <span className="showcase__num">{commodity.index}</span>
                  <span className="showcase__name">{commodity.name}</span>
                  <span className="showcase__botanical">{commodity.botanical}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section origin-section">
        <div className="container split">
          <Reveal className="split__text">
            <Meta>02 / Origin</Meta>
            <h2 className="section-title">Grown in Indonesia. Ready for the world.</h2>
            <p className="lead">Our showcase begins with crops rooted in Indonesian soil, selected for their character and potential in global markets.</p>
          </Reveal>
          <Reveal delay="1" className="split__media origin-map">
            <Placeholder tone="green" label="Indonesia / Yogyakarta · origin visualization placeholder" />
            <span className="origin-map__marker">Yogyakarta, Indonesia</span>
          </Reveal>
        </div>
      </section>

      <section className="section on-dark trace-section">
        <div className="container">
          <Reveal><Meta>03 / Quality & traceability</Meta></Reveal>
          <Reveal delay="1"><h2 className="section-title">Every handoff matters.</h2></Reveal>
          <div className="trace-line">
            {['Source', 'Process', 'Quality', 'Export'].map((step, index) => (
              <div key={step} className="trace-step"><span>0{index + 1}</span><strong>{step}</strong></div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band cta-band--dark">
        <div className="container cta-band__inner">
          <h2>{COMMODITIES_PAGE_COPY.cta}</h2>
          <Cta to="/contact" variant="inverse">{COMMODITIES_PAGE_COPY.cta}</Cta>
        </div>
      </section>
    </div>
  )
}
