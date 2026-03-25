import { motion } from 'framer-motion'

const Slide4 = () => {
  const risks = [
    'Compliance failures & penalties',
    'Delayed expansion',
    'Operational inefficiencies',
    'Increased IT dependency'
  ]

  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Is At <span className="risk-highlight">RISK</span>
      </motion.h2>

      <div className="risk-grid">
        {risks.map((risk, index) => (
          <motion.div
            key={index}
            className="risk-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.12, duration: 0.5 }}
          >
            <div className="risk-icon">⚡</div>
            <p className="risk-text">{risk}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Slide4