import { motion } from 'framer-motion'

const Slide13 = () => {
  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Architecture Overview
      </motion.h2>

      <div className="architecture-flow">
        <motion.div
          className="arch-layer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="arch-label">Core Platform</div>
          <div className="arch-components">
            <span>POS</span>
            <span className="separator">|</span>
            <span>CRM</span>
            <span className="separator">|</span>
            <span>Franchise Control</span>
          </div>
        </motion.div>

        <motion.div
          className="arch-arrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          ↓
        </motion.div>

        <motion.div
          className="arch-layer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="arch-label">Compliance Engine</div>
          <div className="arch-components">
            <span>Tax Rules</span>
            <span className="separator">|</span>
            <span>Invoice Logic</span>
            <span className="separator">|</span>
            <span>Validation</span>
          </div>
        </motion.div>

        <motion.div
          className="arch-arrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        >
          ↓
        </motion.div>

        <motion.div
          className="arch-layer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="arch-label">Country Adapters</div>
          <div className="arch-components">
            <span className="country-badge">Spain</span>
            <span className="country-badge">Portugal</span>
            <span className="country-badge">Mexico</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Slide13