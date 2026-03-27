import { motion } from 'framer-motion'

const Slide15 = () => {
  return (
    <div className="slide">
      <motion.p
        className="overline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Summary
      </motion.p>

      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Aaj ka successful dry cleaner <span className="highlight-line">woh hoga</span>
      </motion.h2>

      <motion.div
        className="summary-box"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <p>Jo customer ki convenience ke hisaab se operate karega —</p>
        <p className="sub-text">aur uske liye ek proper operating system ki zarurat hogi.</p>
      </motion.div>

      <motion.div
        className="product-pitch"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <p>Quick Dry Cleaning Software isi transformation ko <span className="highlight">practical</span> banata hai.</p>
      </motion.div>

      <motion.div
        className="key-points"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="point">
          <span className="point-icon">✗</span>
          <p>Aapko naya business shuru nahi karna</p>
        </div>
        <div className="point-arrow">→</div>
        <div className="point">
          <span className="point-icon">✓</span>
          <p>Aapko apne business ka next version banana hai</p>
        </div>
      </motion.div>

      <motion.div
        className="next-step"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        <p>Ab next step simple hai.</p>
        <p className="demo-text">Dekhte hain yeh system real mein kaise kaam karta hai.</p>
      </motion.div>

      <motion.div
        className="cta-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        {/* <button className="demo-button">
          <span>Book a Demo</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button> */}
      </motion.div>

      <motion.p
        className="thank-you"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.6 }}
      >
        Thank You
      </motion.p>
    </div>
  )
}

export default Slide15