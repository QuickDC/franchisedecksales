import { motion } from 'framer-motion'

const Slide8 = () => {
  return (
    <div className="slide">
      <motion.p
        className="overline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        The Vision
      </motion.p>

      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Kal aapka business aise <span className="highlight-line">chal sakta hai</span>
      </motion.h2>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Sochiye — kal aapka business sirf ek dukaan na ho. Balki ek connected system ho.
      </motion.p>

      <div className="flow-diagram">
        <motion.div
          className="flow-step"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="step-icon">📱</div>
          <h3>Customer</h3>
          <p>Pickup request via preferred channel</p>
        </motion.div>

        <div className="flow-arrow">→</div>

        <motion.div
          className="flow-step"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="step-icon">🏪</div>
          <h3>Store</h3>
          <p>Clear visibility of all orders</p>
        </motion.div>

        <div className="flow-arrow">→</div>

        <motion.div
          className="flow-step"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="step-icon">🚚</div>
          <h3>Pickup & Delivery</h3>
          <p>Organized flow in motion</p>
        </motion.div>

        <div className="flow-arrow">→</div>

        <motion.div
          className="flow-step"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="step-icon">⚙️</div>
          <h3>Processing</h3>
          <p>Garments properly processed</p>
        </motion.div>

        <div className="flow-arrow">→</div>

        <motion.div
          className="flow-step"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <div className="step-icon">📊</div>
          <h3>Owner</h3>
          <p>Real-time control & insights</p>
        </motion.div>
      </div>

      <motion.div
        className="benefit-summary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="benefit-item">
          <span className="benefit-label">Customer</span>
          <span className="benefit-value">Convenient</span>
        </div>
        <div className="benefit-item">
          <span className="benefit-label">Team</span>
          <span className="benefit-value">Organized</span>
        </div>
        <div className="benefit-item">
          <span className="benefit-label">Owner</span>
          <span className="benefit-value">Controlled</span>
        </div>
      </motion.div>

      <motion.p
        className="transition-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        Aaj aap dukaan chala rahe ho. Kal aap system chala sakte ho.
      </motion.p>
    </div>
  )
}

export default Slide8