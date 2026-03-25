import { motion } from 'framer-motion'

const Slide6 = () => {
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
          <h3 className="transform-label">From</h3>
          <div className="transform-items">
            <div className="transform-item">
              <span className="transform-icon">❌</span>
              <span>Multiple systems across countries</span>
            </div>
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
          <h3 className="transform-label">To</h3>
          <div className="transform-items">
            <div className="transform-item success">
              <span className="transform-icon">✅</span>
              <span>One global operating platform</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Slide6