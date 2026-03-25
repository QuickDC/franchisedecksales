import { motion } from 'framer-motion'

const Slide15 = () => {
  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Building Together
      </motion.h2>

      <div className="partnership-grid">
        <motion.div
          className="partner-box"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="partner-name">Pressto</h3>
          <div className="partner-items">
            <div className="partner-item">Global presence</div>
            <div className="partner-item">Multi-country operations</div>
          </div>
        </motion.div>

        <motion.div
          className="partner-connector"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <span>+</span>
        </motion.div>

        <motion.div
          className="partner-box"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="partner-name">QDC</h3>
          <div className="partner-items">
            <div className="partner-item">Scalable platform</div>
            <div className="partner-item">Franchise control</div>
            <div className="partner-item">Configurable architecture</div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="together-outcome"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <h3 className="outcome-title">Together</h3>
        <ul className="outcome-list">
          <li>One system across all countries</li>
          <li>Country-specific compliance within one platform</li>
          <li>Faster expansion into new markets</li>
        </ul>
      </motion.div>

      <motion.div
        className="key-insight-box"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
      >
        <p className="insight-text">From multiple systems → one global platform</p>
      </motion.div>
    </div>
  )
}

export default Slide15