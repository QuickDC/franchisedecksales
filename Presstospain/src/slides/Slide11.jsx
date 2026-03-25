import { motion } from 'framer-motion'

const Slide11 = () => {
  const gaps = [
    'SII reporting integration',
    'VAT validation integration',
    'Invoice lifecycle adjustment',
    'Compliance monitoring dashboard'
  ]

  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Gap Transparency
      </motion.h2>

      <div className="gaps-list">
        {gaps.map((gap, index) => (
          <motion.div
            key={index}
            className="gap-item"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
          >
            <span className="gap-bullet">•</span>
            <span className="gap-text">{gap}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="key-insight-box"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p className="insight-text">These are enhancements, not limitations</p>
      </motion.div>
    </div>
  )
}

export default Slide11