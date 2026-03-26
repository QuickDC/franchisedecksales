import { motion } from 'framer-motion'

const Slide6 = () => {
  const fromItems = [
    { icon: '⛓️‍💥', text: 'Disjointed systems across countries' },
    { icon: '📝', text: 'Manual compliance processes' },
    { icon: '👁️', text: 'Limited visibility & control' }
  ]

  const toItems = [
    { icon: '🌐', text: 'One global operating platform' },
    { icon: '✅', text: 'Built-in multi-country compliance' },
    { icon: '📊', text: 'Centralized data & real-time control' }
  ]

  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        The Real Opportunity
      </motion.h2>

      <div className="transformation-container">
        <motion.div
          className="transform-box from-state"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="transform-label">❌ FROM</h3>
          <div className="transform-items">
            {fromItems.map((item, index) => (
              <div key={index} className="transform-item">
                <span className="transform-item-icon">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="transform-arrow"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className="arrow-icon">→</span>
        </motion.div>

        <motion.div
          className="transform-box to-state"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="transform-label">✅ TO</h3>
          <div className="transform-items">
            {toItems.map((item, index) => (
              <div key={index} className="transform-item success">
                <span className="transform-item-icon">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Slide6