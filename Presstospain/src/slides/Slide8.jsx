import { motion } from 'framer-motion'

const Slide8 = () => {
  const requirements = [
    { icon: '🧾', title: 'Multi-region tax structure', subtitle: '→ Requires dynamic tax engine' },
    { icon: '📅', title: 'Real-time reporting (SII)', subtitle: '→ Requires automated daily sync' },
    { icon: '🧮', title: 'Invoice timing constraints', subtitle: '→ Impacts POS and workflow design' },
    { icon: '🔍', title: 'VAT validation requirement', subtitle: '→ Needs real-time API integration' },
    { icon: '🔄', title: 'Credit note corrections', subtitle: '→ Requires structured audit trail' }
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
          >
            <span className="compliance-icon">{req.icon}</span>
            <h3 className="compliance-title">{req.title}</h3>
            <p className="compliance-subtitle">{req.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Slide8