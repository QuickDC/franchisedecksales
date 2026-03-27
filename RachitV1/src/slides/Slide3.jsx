import { motion } from 'framer-motion'

const Slide3 = () => {
  return (
    <div className="slide">
      <motion.p
        className="overline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Customer Shift
      </motion.p>

      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Customer ab <span className="highlight-line">convenience compare</span> karta hai
      </motion.h2>

      <div className="comparison-container">
        <motion.div
          className="comparison-side left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3>Wahi customer ab yeh use karta hai</h3>
          <div className="brand-list">
            <div className="brand-item">
              <span className="brand-icon">📦</span>
              <span>Amazon</span>
            </div>
            <div className="brand-item">
              <span className="brand-icon">🛒</span>
              <span>Blinkit</span>
            </div>
            <div className="brand-item">
              <span className="brand-icon">🍔</span>
              <span>Swiggy / Zomato</span>
            </div>
          </div>
          <p className="side-note">Customer chooses channel, time, payment, convenience</p>
        </motion.div>

        <div className="center-divider">
          <div className="divider-line"></div>
          <span className="vs-text">VS</span>
          <div className="divider-line"></div>
        </div>

        <motion.div
          className="comparison-side right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3>Dry cleaning is...</h3>
          <div className="pattern-list">
            <div className="pattern-item">
              <span className="x-icon">✗</span>
              <span>Walk-in only</span>
            </div>
            <div className="pattern-item">
              <span className="x-icon">✗</span>
              <span>Follow store time</span>
            </div>
            <div className="pattern-item">
              <span className="x-icon">✗</span>
              <span>Call for updates</span>
            </div>
            <div className="pattern-item">
              <span className="x-icon">✗</span>
              <span>Cash only</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="question-box"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <p>Why is dry cleaning outside this pattern?</p>
        <p className="answer">Dry cleaning can no longer be an exception</p>
      </motion.div>
    </div>
  )
}

export default Slide3