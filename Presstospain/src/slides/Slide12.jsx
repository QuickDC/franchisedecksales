import { motion } from 'framer-motion'

const Slide12 = () => {
  return (
    <div className="slide slide-center-content">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Approach
      </motion.h2>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        We are not building country-by-country solutions
      </motion.p>

      <motion.div
        className="solution-highlight"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p className="solution-label">We are building a</p>
        <h3 className="solution-title">Global Compliance Engine</h3>
      </motion.div>
    </div>
  )
}

export default Slide12