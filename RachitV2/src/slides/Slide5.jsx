import { motion } from 'framer-motion'

const Slide5 = () => {
  return (
    <div className="slide">
      <motion.p
        className="overline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        The Cost of Old Model
      </motion.p>

      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Manual business ki <span className="highlight-line">hidden cost</span>
      </motion.h2>

      <div className="cost-grid">
        <motion.div
          className="cost-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="cost-icon">📞</div>
          <h3>Missed Calls = Missed Orders</h3>
          <p>Every missed call is a lost revenue opportunity</p>
        </motion.div>

        <motion.div
          className="cost-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="cost-icon">👤</div>
          <h3>No Customer Data</h3>
          <p>Repeat business stays invisible — no tracking, no insights</p>
        </motion.div>

        <motion.div
          className="cost-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="cost-icon">💰</div>
          <h3>Cash Leakage</h3>
          <p>Cash confusion creates invisible revenue leakage</p>
        </motion.div>

        <motion.div
          className="cost-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="cost-icon">👔</div>
          <h3>People-Dependent</h3>
          <p>Owner must be present everywhere — system never builds</p>
        </motion.div>
      </div>

      <motion.div
        className="conclusion-box"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="formula">
          <span className="formula-text">More Effort</span>
          <span className="formula-arrow">→</span>
          <span className="formula-text">Less Growth</span>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide5