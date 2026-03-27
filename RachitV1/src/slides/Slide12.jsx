import { motion } from 'framer-motion'

const Slide12 = () => {
  return (
    <div className="slide">
      <motion.p
        className="overline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Value Proposition
      </motion.p>

      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Customer ke liye <span className="highlight-line">convenience</span>.<br />
        Owner ke liye <span className="text-accent">control</span>.
      </motion.h2>

      <div className="value-split">
        <motion.div
          className="value-side customer-side"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="side-header">
            <span className="side-icon">👤</span>
            <h3>Customer</h3>
          </div>
          <ul className="value-list">
            <li>
              <span className="check">✓</span>
              Easy pickup request
            </li>
            <li>
              <span className="check">✓</span>
              Live order tracking
            </li>
            <li>
              <span className="check">✓</span>
              WhatsApp updates
            </li>
            <li>
              <span className="check">✓</span>
              Online payment
            </li>
            <li>
              <span className="check">✓</span>
              Doorstep delivery
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="value-side owner-side"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="side-header">
            <span className="side-icon">👔</span>
            <h3>Owner</h3>
          </div>
          <ul className="value-list">
            <li>
              <span className="check">✓</span>
              All orders in one place
            </li>
            <li>
              <span className="check">✓</span>
              Team performance visibility
            </li>
            <li>
              <span className="check">✓</span>
              Daily revenue reports
            </li>
            <li>
              <span className="check">✓</span>
              Customer database
            </li>
            <li>
              <span className="check">✓</span>
              Growth-ready system
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        className="result-box"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="result-item">
          <span className="result-label">Customer gets</span>
          <span className="result-value">Less friction</span>
        </div>
        <div className="result-divider"></div>
        <div className="result-item">
          <span className="result-label">Owner gets</span>
          <span className="result-value">Less guessing</span>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide12