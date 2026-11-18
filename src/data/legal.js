// Legal registration documents shown in the homepage "Legal & Registration"
// section. Names are exactly the PDF filenames the company uses — do not
// rename them. The PDFs themselves live in `public/legal/` (uploaded to the
// repo separately); each preview is page 1 of its PDF, framed at F4 portrait
// proportions (210 × 330 mm).

export const LEGAL_DOCUMENTS = [
  { file: 'NIB-PT-Terbaru.pdf' },
  { file: 'Pernyataan-Pendirian-PT.pdf' },
  { file: 'Pernyataan-PT-7-Agustus-2026.pdf' },
  { file: 'SK-PT-7-Agustus.pdf' },
  { file: 'SK-PT-Nalar-6-juli.pdf' },
].map((doc) => ({
  ...doc,
  name: doc.file.replace(/\.pdf$/i, ''),
  pdf: `/legal/${doc.file}`,
}))

export const LEGAL_COPY = {
  eyebrow: 'LEGAL & REGISTRATION',
  headline: 'Registered, and ready to be verified.',
  body: 'PT. Nalar Kreatif Nusantara is a legally established Indonesian company. Preview our registration documents below — the first page of each document, exactly as issued.',
  note: 'Full documents are available upon request for serious inquiries.',
  pending: 'Document preview will appear here once the file is uploaded.',
}
