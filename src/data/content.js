// Central content + data for PT. Nalar Kreatif Nusantara.
// Content truth comes from the source company profile (references/source-company-profile.md).
// Do not add factual claims not supported by the source without verification.

export const TAGLINE = 'Indonesian agricultural commodities, connected to global markets.'

export const HOME_COPY = {
  hero: {
    headline: 'ROOTED IN NUSANTARA. GROWN FOR THE WORLD.',
    body: "From Indonesia's fertile landscapes, we connect carefully sourced agricultural commodities with partners across global markets.",
    primaryCta: 'EXPLORE OUR COMMODITIES',
    secondaryCta: 'ABOUT PT. NALAR KREATIF NUSANTARA',
  },
  statement: {
    eyebrow: 'FROM ORIGIN TO MARKET',
    headline: 'Agriculture, with an origin worth knowing.',
    body: 'We work across the agricultural supply chain to bring distinctive Indonesian commodities closer to the markets and partners that value them.',
  },
  featured: {
    eyebrow: 'OUR COMMODITIES',
    headline: "From Indonesia's soil, to your market.",
    body: 'Explore a selection of agricultural commodities sourced from Indonesia, each shaped by its origin, cultivation, and careful handling.',
    cta: 'VIEW ALL COMMODITIES',
  },
  why: {
    eyebrow: 'WHY PT. NALAR KREATIF NUSANTARA',
    headline: 'Closer to the source. Closer to what matters.',
    body: 'We believe reliable agricultural trade begins with understanding where products come from, how they are handled, and who stands behind them.',
  },
  cta: {
    headline: 'Looking for a reliable source in Indonesia?',
    body: "Tell us what you are looking for. Let's explore how we can work together.",
    label: 'START A CONVERSATION',
  },
}

export const COMPANY_COPY = {
  hero: {
    eyebrow: 'WHO WE ARE',
    headline: 'Built around the value of origin.',
    body: 'PT. Nalar Kreatif Nusantara connects Indonesian agricultural resources with businesses looking for dependable products, sourcing, and long-term partnerships.',
  },
  story: {
    headline: 'From the field to the wider world.',
    body: 'Our work begins with the agricultural resources of Indonesia and extends through sourcing, quality consideration, and market connection.',
  },
}

export const COMMODITIES_PAGE_COPY = {
  hero: {
    eyebrow: 'THE COMMODITIES',
    headline: 'Distinct products. One place of origin.',
    body: 'Discover a selection of Indonesian agricultural commodities, from aromatic spices to botanical products cultivated across the archipelago.',
  },
  cta: 'ASK ABOUT AVAILABILITY',
}

export const CONTACT_COPY = {
  eyebrow: "LET'S WORK TOGETHER",
  headline: 'Good partnerships start with a conversation.',
  body: "Whether you're looking for a specific commodity, exploring sourcing opportunities, or looking for a long-term agricultural partner in Indonesia, we'd like to hear from you.",
  cta: 'START A CONVERSATION',
}

export const SERVICES_PAGE_COPY = {
  hero: {
    eyebrow: 'WHAT WE DO',
    headline: 'Connecting agricultural supply with market needs.',
    body: 'From sourcing to market connection, we help make Indonesian agricultural commodities easier to access for the right partners.',
  },
}

export const FOOTER_COPY = {
  brand: 'PT NALAR KREATIF NUSANTARA',
  brandLines: ['PT NALAR KREATIF', 'NUSANTARA'],
  tagline: TAGLINE,
  navigationHeading: 'EXPLORE',
}

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/company', label: 'Company' },
  { to: '/commodities', label: 'Commodities' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export const COMPANY = {
  name: 'PT. Nalar Kreatif Nusantara',
  tagline: TAGLINE,
  founded: 'May 2026',
  location: 'Yogyakarta, Indonesia',
  category: 'Premium Agricultural Commodities',
}

// Local assets are served by Vite from site/public at the browser root.
// Keep filenames aligned with the checked-in, case-sensitive asset tree.
export const IMAGE_ASSETS = {
  hero: {
    agriculture: '/assets/images/hero/hero-agriculture.png',
    spices: '/assets/images/hero/hero-spices.jpg',
  },
  company: {
    story: '/assets/images/company/company-story.jpg',
    farmer: '/assets/images/company/company-farmer.jpeg',
    team: '/assets/images/company/company-team.jpg',
  },
  commodities: {
    spices: '/assets/images/commodities/commodities-spices.jpg',
  },
  services: {
    cultivation: '/assets/images/services/cultivation.jpg',
    sourcing: '/assets/images/services/sourcing.jpg',
    qualityControl: '/assets/images/services/quality-control.png',
    export: '/assets/images/services/export.jpg',
  },
  contact: {
    atmosphere: '/assets/images/hero/hero-agriculture.png',
  },
}

// Perceived-size tuning for the transparent commodity cutouts. These values
// compensate for each source PNG's visible bounds without editing the assets.
export const COMMODITY_VISUALS = {
  'black-pepper': { scale: 1.05, x: 0, y: 0 },
  'white-pepper': { scale: 1.1, x: -16, y: -12 },
  cloves: { scale: 0.9, x: 0, y: 0 },
  vetiver: { scale: 1.12, x: 8, y: -10 },
  'areca-nut': { scale: 1.15, x: 0, y: -3 },
}

// Commodity showcase (order per pages/commodities.md)
// `image` points to local transparent cutouts in site/public/assets/images/commodities/.
export const COMMODITIES = [
  {
    id: 'black-pepper',
    index: '01',
    name: 'BLACK PEPPER',
    botanical: 'Piper nigrum',
    origin: 'Indonesia',
    image: '/assets/images/commodities/black-pepper-transparent.png',
    imageReference: 'https://imagemo.studio/png/black-pepper-spices-isolated-on-transparent-background-9513',
    visual: COMMODITY_VISUALS['black-pepper'],
    orb: 'radial-gradient(circle at 50% 40%, var(--color-charcoal) 0%, var(--color-forest) 70%)',
    cutFill: '#e8e2d3',
    info: "Bold, aromatic, and deeply rooted in Indonesia's spice-growing tradition.",
  },
  {
    id: 'white-pepper',
    index: '02',
    name: 'WHITE PEPPER',
    botanical: 'Piper nigrum (processed)',
    origin: 'Indonesia',
    image: '/assets/images/commodities/white-pepper-transparent.png',
    imageReference: '',
    imageSearchTargets: ['white peppercorns isolated transparent PNG', 'white pepper pile transparent background', 'Muntok white pepper isolated'],
    visual: COMMODITY_VISUALS['white-pepper'],
    orb: 'radial-gradient(circle at 50% 40%, var(--color-bg-secondary) 0%, var(--color-sand) 70%)',
    cutFill: '#171717',
    info: 'Refined in character, with the distinctive qualities that make Indonesian pepper sought after across markets.',
  },
  {
    id: 'cloves',
    index: '03',
    name: 'CLOVES',
    botanical: 'Syzygium aromaticum',
    origin: 'Indonesia',
    image: '/assets/images/commodities/cloves-transparent.png',
    imageReference: 'https://www.hiclipart.com/free-transparent-background-png-clipart-jcdma',
    visual: COMMODITY_VISUALS.cloves,
    orb: 'radial-gradient(circle at 50% 40%, var(--color-earth) 0%, var(--color-forest) 70%)',
    cutFill: '#f0e7d6',
    info: "Aromatic flower buds with a long-standing place in Indonesia's agricultural heritage.",
  },
  {
    id: 'vetiver',
    index: '04',
    name: 'VETIVER',
    botanical: 'Chrysopogon zizanioides',
    origin: 'Indonesia',
    image: '/assets/images/commodities/vetiver-transparent.png',
    imageReference: 'https://themandara.com/products/radiance-healthy-skin-bath-powder',
    visual: COMMODITY_VISUALS.vetiver,
    orb: 'radial-gradient(circle at 50% 40%, var(--color-forest) 0%, var(--color-olive) 70%)',
    cutFill: '#e8e2d3',
    info: 'A deeply rooted botanical valued for its distinctive aroma and versatility.',
  },
  {
    id: 'areca-nut',
    index: '05',
    name: 'ARECA NUT',
    botanical: 'Areca catechu',
    origin: 'Indonesia',
    image: '/assets/images/commodities/areca-nut-transparent.png',
    imageReference: 'https://www.gettyimages.com/',
    visual: COMMODITY_VISUALS['areca-nut'],
    orb: 'radial-gradient(circle at 50% 40%, var(--color-earth) 0%, var(--color-sand) 70%)',
    cutFill: '#f0e7d6',
    info: "A traditional botanical crop with an established place in Indonesia's agricultural landscape.",
  },
]

export const WHY_US = [
  { label: 'SOURCE', title: 'Agricultural Excellence', text: "We cultivate Indonesia's finest spices and botanical crops through sustainable practices that prioritize quality, consistency, and environmental stewardship." },
  { label: 'QUALITY', title: 'Reliable Partnerships', text: 'We build long-term collaborations with farmers, suppliers, and business partners based on trust, fairness, and shared growth.' },
  { label: 'INNOVATION', title: 'Innovation-Driven Farming', text: "By integrating modern cultivation techniques with local agricultural wisdom, we continuously improve productivity while preserving the authenticity of Indonesia's botanical heritage." },
  { label: 'PARTNERSHIP', title: 'Global Quality Commitment', text: "From PGI-recognized Muntok White Pepper to high-eugenol NTT cloves, every commodity we produce is developed with a commitment to traceability and international quality standards." },
]

export const VALUE_CHAIN = [
  { step: '01', label: 'SOURCE' },
  { step: '02', label: 'QUALITY' },
  { step: '03', label: 'SUPPLY' },
  { step: '04', label: 'MARKET' },
]

export const SERVICES = [
  {
    title: 'SOURCE',
    text: 'Connecting with agricultural sources and suppliers to identify products that meet specific market requirements.',
    image: IMAGE_ASSETS.services.cultivation,
  },
  {
    title: 'QUALITY',
    text: 'Paying attention to product condition, handling, and consistency throughout the sourcing process.',
    image: IMAGE_ASSETS.services.sourcing,
  },
  {
    title: 'SUPPLY',
    text: 'Coordinating agricultural products around the needs of our business partners.',
    image: IMAGE_ASSETS.services.qualityControl,
  },
  {
    title: 'MARKET',
    text: 'Connecting Indonesian agricultural products with opportunities beyond their place of origin.',
    image: IMAGE_ASSETS.services.export,
  },
]

export const GLOBAL_SUPPLY = ['SOURCE', 'QUALITY', 'SUPPLY', 'MARKET']

export const CONTACT_FIELDS = ['Name', 'Company', 'Email', 'Country', 'Commodity Interest', 'Message']
