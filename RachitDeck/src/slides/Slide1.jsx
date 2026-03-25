import { motion } from 'framer-motion'

const Slide1 = () => {
  return (
    <div className="slide">
      <motion.h1
        className="slide-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Your Presentation Title Here
      </motion.h1>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        A compelling subtitle that captures attention
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{ marginTop: '60px', opacity: 0.6 }}
      >
        Use arrow keys to navigate
      </motion.p>
    </div>
  )
}

export default Slide1
