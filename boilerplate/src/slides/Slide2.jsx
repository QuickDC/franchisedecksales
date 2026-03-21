import { motion } from 'framer-motion'

const Slide2 = () => {
  return (
    <div className="slide">
      <h2 className="slide-title">Slide Title</h2>
      <p className="slide-subtitle">Slide subtitle goes here</p>

      {/* Example: Benefits grid */}
      <div className="benefits-grid">
        <motion.div
          className="benefit-item"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span style={{ fontSize: '2.5rem' }}>📊</span>
          <span>Point One</span>
        </motion.div>

        <motion.div
          className="benefit-item"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <span style={{ fontSize: '2.5rem' }}>🚀</span>
          <span>Point Two</span>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{ marginTop: '50px', fontSize: '1.4rem', color: '#4fc3f7' }}
      >
        Key takeaway message
      </motion.p>
    </div>
  )
}

export default Slide2
