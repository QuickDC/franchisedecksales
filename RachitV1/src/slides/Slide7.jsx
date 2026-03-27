import { motion } from 'framer-motion'

const Slide7 = () => {
  return (
    <div className="slide">
      <motion.p
        className="overline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        The Good News
      </motion.p>

      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Aapko naya business shuru nahi karna
      </motion.h2>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Solution ke liye aapko zero se start nahi karna
      </motion.p>

      <div className="already-have">
        <motion.div
          className="have-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="have-icon">✓</div>
          <div className="have-content">
            <h3>Trust</h3>
            <p>Customers already believe in you</p>
          </div>
        </motion.div>

        <motion.div
          className="have-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="have-icon">✓</div>
          <div className="have-content">
            <h3>Existing Customers</h3>
            <p>You already have a customer base</p>
          </div>
        </motion.div>

        <motion.div
          className="have-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="have-icon">✓</div>
          <div className="have-content">
            <h3>Experience</h3>
            <p>Years of operational knowledge</p>
          </div>
        </motion.div>

        <motion.div
          className="have-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="have-icon">✓</div>
          <div className="have-content">
            <h3>Reputation</h3>
            <p>Local brand recognition built over time</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="transformation-box"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <p>You don't need to start a new business.</p>
        <p className="highlight">You need to create the next version of your existing business.</p>
      </motion.div>

      <motion.div
        className="add-layer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <p>Now simply add a modern layer:</p>
        <div className="layer-tags">
          <span>Convenience</span>
          <span>Control</span>
          <span>Communication</span>
          <span>Systems</span>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide7