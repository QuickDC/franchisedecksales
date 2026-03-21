import { PDFDocument } from 'pdf-lib'
import fs from 'fs'
import path from 'path'

// CONFIGURATION
const TOTAL_SLIDES = 3  // UPDATE: Number of slides
const OUTPUT_DIR = 'pdfs'
const OUTPUT_FILE = 'complete-presentation.pdf'

async function mergePDFs() {
  console.log('Merging PDFs...')

  const mergedPdf = await PDFDocument.create()

  for (let i = 1; i <= TOTAL_SLIDES; i++) {
    const pdfPath = path.join(OUTPUT_DIR, `slide-${i}.pdf`)

    if (!fs.existsSync(pdfPath)) {
      console.error(`Warning: ${pdfPath} not found, skipping...`)
      continue
    }

    console.log(`Adding slide ${i}...`)
    const pdfBytes = fs.readFileSync(pdfPath)
    const pdf = await PDFDocument.load(pdfBytes)
    const [page] = await mergedPdf.copyPages(pdf, [0])
    mergedPdf.addPage(page)
  }

  const mergedPdfBytes = await mergedPdf.save()
  const outputPath = path.join(OUTPUT_DIR, OUTPUT_FILE)
  fs.writeFileSync(outputPath, mergedPdfBytes)

  console.log(`\n✓ All PDFs merged successfully!`)
  console.log(`Merged PDF saved to: ${outputPath}`)
}

mergePDFs().catch(console.error)
