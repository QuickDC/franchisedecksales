import { motion } from 'framer-motion'

const Slide19 = () => {
  return (
    <div className="slide slide-center-content">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        This Changes How Pressto Operates
      </motion.h2>

      <motion.div
        className="not-software-grid"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="not-item">
          <span className="not-label">Not software</span>
        </div>
        <div className="not-item">
          <span className="not-label">Not implementation</span>
        </div>
      </motion.div>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        A global system for operations, compliance, and growth
      </motion.p>

      <motion.div
        className="final-line"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="final-line-icon">💡</span>
        <span className="final-line-text">Pressto runs on one platform — globally</span>
      </motion.div>
    </div>
  )
}

export default Slide19