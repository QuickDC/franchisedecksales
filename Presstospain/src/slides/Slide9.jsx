import { motion } from 'framer-motion'

const Slide9 = () => {
  const traditionalPoints = [
    'Invoice at order creation',
    '→ Early tax liability',
    '→ Requires cancellations & credit notes',
    '→ High compliance risk'
  ]

  const spainPoints = [
    'Invoice at payment or delivery',
    '→ Accurate tax calculation',
    '→ Clean reporting to authorities',
    '→ No unnecessary reversals'
  ]

  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        The Critical Difference
      </motion.h2>

      <div className="comparison-container">
        <motion.div
          className="comparison-box traditional"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="comparison-label">❌ Traditional Systems</h3>
          <div className="comparison-list">
            {traditionalPoints.map((point, index) => (
              <p key={index} className="comparison-item">{point}</p>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="comparison-divider"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <span>VS</span>
        </motion.div>

        <motion.div
          className="comparison-box spain-required"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="comparison-label">✅ Spain Requirement</h3>
          <div className="comparison-list">
            {spainPoints.map((point, index) => (
              <p key={index} className="comparison-item">{point}</p>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="key-insight"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="insight-header">
          <span className="insight-icon">💡</span>
          <p className="insight-label">KEY INSIGHT</p>
        </div>
        <p className="insight-text">
          <span className="insight-main">This is not a feature —</span>
          <span className="insight-sub">→ this is a compliance requirement</span>
        </p>
      </motion.div>
    </div>
  )
}

export default Slide9