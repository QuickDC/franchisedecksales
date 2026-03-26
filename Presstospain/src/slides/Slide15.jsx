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
          <div className="partner-logo">
            <img src="/Presstologo.png" alt="Pressto" className="partner-logo-img" />
          </div>
          <h3 className="partner-name">Pressto</h3>
          <p className="partner-tagline">Global brand with multi-country presence</p>
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
          <div className="partner-logo">
            <img src="/QDCwhitelogo.png" alt="QDC" className="partner-logo-img" />
          </div>
          <h3 className="partner-name">QDC</h3>
          <p className="partner-tagline">Technology platform built for global scale</p>
        </motion.div>
      </div>

      <motion.div
        className="partner-together"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <h3 className="together-title">🤝 Together</h3>
        <div className="together-points">
          <p>→ One system across all countries</p>
          <p>→ Compliance built into every operation</p>
          <p>→ Expansion without operational complexity</p>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide15