import { motion } from 'framer-motion'

const Slide20 = () => {
  return (
    <div className="slide slide-center-content final-slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Operate every country with precision and compliance
      </motion.h2>

      <motion.div
        className="final-line"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="final-line-header">
          <span className="final-line-icon">💡</span>
          <span className="final-line-label">KEY INSIGHT</span>
        </div>
        <span className="final-line-text">One platform. One system. One global standard.</span>
      </motion.div>

      <motion.p
        className="final-tagline"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
      >
        Pressto operates globally — on one system
      </motion.p>
    </div>
  )
}

export default Slide20