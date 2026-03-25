import { motion } from 'framer-motion'

const Slide8 = () => {
  const requirements = [
    { title: 'VAT (21% / IGIC Canary)', desc: 'Different rates for mainland and Canary Islands' },
    { title: 'Invoice at Payment OR Service Completion', desc: 'Not at order creation' },
    { title: 'Daily reporting (SII)', desc: 'Immediate supply information' },
    { title: 'VAT validation', desc: 'Real-time verification required' },
    { title: 'Credit note-based corrections', desc: 'Only credit notes for adjustments' }
  ]

  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Spain Compliance Requirements
      </motion.h2>

      <div className="compliance-grid">
        {requirements.map((req, index) => (
          <motion.div
            key={index}
            className="compliance-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.12, duration: 0.5 }}
          >
            <h3 className="compliance-title">{req.title}</h3>
            <p className="compliance-desc">{req.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Slide8