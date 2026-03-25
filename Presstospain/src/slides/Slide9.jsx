import { motion } from 'framer-motion'

const Slide9 = () => {
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
          <h3 className="comparison-label">Traditional Systems</h3>
          <p className="comparison-value">Invoice at order creation</p>
          <div className="comparison-cross">❌</div>
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
          <h3 className="comparison-label">Spain Requirement</h3>
          <p className="comparison-value highlight">Invoice at payment or delivery</p>
          <div className="comparison-check">✅</div>
        </motion.div>
      </div>

      <motion.div
        className="key-insight-box centered"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <p className="insight-text">This defines compliance success</p>
      </motion.div>
    </div>
  )
}

export default Slide9