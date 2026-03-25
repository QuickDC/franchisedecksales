import { motion } from 'framer-motion'

const Slide20 = () => {
  return (
    <div className="slide slide-center-content final-slide">
      <motion.h2
        className="final-tagline"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Operate every country with precision, compliance, and centralized control
      </motion.h2>

      <motion.div
        className="final-divider"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      ></motion.div>

      <motion.p
        className="final-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        powered by a single global platform built for Pressto.
      </motion.p>
    </div>
  )
}

export default Slide20