import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'

// CONFIGURATION
const TOTAL_SLIDES = 6  // UPDATE: Number of slides in your presentation
const OUTPUT_DIR = 'pdfs'
const BASE_URL = 'http://localhost:5173'

async function generatePDFs() {
  console.log('Starting PDF generation...')

  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  const page = await browser.newPage()
  await page.setViewport({ width: 1200, height: 800 })

  console.log(`Navigating to ${BASE_URL}...`)

  for (let i = 1; i <= TOTAL_SLIDES; i++) {
    console.log(`Generating PDF for slide ${i}/${TOTAL_SLIDES}...`)

    // Navigate to the slide
    await page.goto(`${BASE_URL}/?slide=${i - 1}`, { waitUntil: 'networkidle0' })

    // Wait for animation
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Generate PDF
    const pdfPath = path.join(OUTPUT_DIR, `slide-${i}.pdf`)
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      landscape: true,
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 }
    })

    console.log(`✓ Generated: ${pdfPath}`)
  }

  await browser.close()
  console.log(`\n✓ All PDFs generated successfully!`)
  console.log(`PDFs saved to: ${OUTPUT_DIR}`)
}

generatePDFs().catch(console.error)
