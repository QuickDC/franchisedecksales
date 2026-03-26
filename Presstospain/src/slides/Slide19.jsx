import { motion } from 'framer-motion'

const Slide19 = () => {
  return (
    <div className="slide slide-center-content">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Partnership Vision
      </motion.h2>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        This is not a software implementation
      </motion.p>

      <motion.div
        className="vision-highlight"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h3 className="vision-title">This is Pressto's Global Operating Platform</h3>
      </motion.div>
    </div>
  )
}

export default Slide19