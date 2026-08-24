// Central content + data for the PT Agro site.
// Content truth comes from the source company profile (references/source-company-profile.md).
// Do not add factual claims not supported by the source without verification.

export const TAGLINE = 'Rooted in Nusantara. Grown for the world.'

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/company', label: 'Company' },
  { to: '/commodities', label: 'Commodities' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export const COMPANY = {
  name: 'PT Agro',
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

// Commodity showcase (order per pages/commodities.md)
// `image` points to local transparent cutouts in site/public/assets/images/commodities/.
export const COMMODITIES = [
  {
    id: 'black-pepper',
    index: '01',
    name: 'Black Pepper',
    botanical: 'Piper nigrum',
    origin: 'Indonesia',
    image: '/assets/images/commodities/black-pepper-transparent.png',
    imageReference: 'https://imagemo.studio/png/black-pepper-spices-isolated-on-transparent-background-9513',
    orb: 'radial-gradient(circle at 50% 40%, #2c2c27 0%, #0e0e0c 70%)',
    cutFill: '#e8e2d3',
    info: 'The world’s most traded spice — bold, aromatic and deeply warming.',
  },
  {
    id: 'white-pepper',
    index: '02',
    name: 'White Pepper',
    botanical: 'Piper nigrum (processed)',
    origin: 'Indonesia',
    image: '/assets/images/commodities/white-pepper-transparent.png',
    imageReference: '',
    imageSearchTargets: ['white peppercorns isolated transparent PNG', 'white pepper pile transparent background', 'Muntok white pepper isolated'],
    orb: 'radial-gradient(circle at 50% 40%, #efe7d3 0%, #d3c9ad 70%)',
    cutFill: '#171717',
    info: 'A fermented peppercorn prized for clean heat and a pale, refined finish.',
  },
  {
    id: 'cloves',
    index: '03',
    name: 'Cloves',
    botanical: 'Syzygium aromaticum',
    origin: 'Indonesia',
    image: '/assets/images/commodities/cloves-transparent.png',
    imageReference: 'https://www.hiclipart.com/free-transparent-background-png-clipart-jcdma',
    orb: 'radial-gradient(circle at 50% 40%, #7a5638 0%, #472d15 70%)',
    cutFill: '#f0e7d6',
    info: 'Intensely aromatic dried flower buds of the clove tree.',
  },
  {
    id: 'vetiver',
    index: '04',
    name: 'Vetiver',
    botanical: 'Chrysopogon zizanioides',
    origin: 'Indonesia',
    image: '/assets/images/commodities/vetiver-transparent.png',
    imageReference: 'https://themandara.com/products/radiance-healthy-skin-bath-powder',
    orb: 'radial-gradient(circle at 50% 40%, #1e4a36 0%, #0d2a1c 70%)',
    cutFill: '#e8e2d3',
    info: 'An aromatic grass root valued for its earthy, long-lasting fragrance.',
  },
  {
    id: 'areca-nut',
    index: '05',
    name: 'Areca Nut',
    botanical: 'Areca catechu',
    origin: 'Indonesia',
    image: '/assets/images/commodities/areca-nut-transparent.png',
    imageReference: 'https://www.gettyimages.com/',
    orb: 'radial-gradient(circle at 50% 40%, #8a6440 0%, #57391d 70%)',
    cutFill: '#f0e7d6',
    info: 'A refreshment crop with deep cultural and commercial roots across Asia.',
  },
]

export const WHY_US = [
  { title: 'Agricultural Excellence', text: 'A commitment to quality at every stage of cultivation.' },
  { title: 'Innovation-Driven Farming', text: 'Modern methods applied to traditional Indonesian crops.' },
  { title: 'Reliable Partnerships', text: 'Long-term relationships with farmers, built on trust.' },
  { title: 'Global Quality Commitment', text: 'Standards designed for international markets.' },
]

export const VALUE_CHAIN = [
  { step: '01', label: 'Cultivate' },
  { step: '02', label: 'Source' },
  { step: '03', label: 'Quality' },
  { step: '04', label: 'Export' },
  { step: '05', label: 'Partnership' },
]

export const SERVICES = [
  {
    title: 'Sustainable Cultivation & Farm Development',
    text: 'Responsible farming practices that nurture the soil and support long-term yields.',
    image: IMAGE_ASSETS.services.cultivation,
  },
  {
    title: 'Premium Commodity Sourcing',
    text: 'Direct access to high-grade spices and aromatic crops from Indonesian growers.',
    image: IMAGE_ASSETS.services.sourcing,
  },
  {
    title: 'Quality Assurance & Export Preparation',
    text: 'Consistent grading, processing and readiness for international markets.',
    image: IMAGE_ASSETS.services.qualityControl,
  },
  {
    title: 'Agribusiness Partnership & Export Solutions',
    text: 'End-to-end collaboration, from farm to global buyer.',
    image: IMAGE_ASSETS.services.export,
  },
]

export const GLOBAL_SUPPLY = ['Farm', 'Processing', 'Quality Control', 'Export', 'Global Buyer']

export const CONTACT_FIELDS = ['Name', 'Company', 'Email', 'Country', 'Commodity Interest', 'Message']
