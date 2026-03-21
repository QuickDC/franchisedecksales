import { motion } from 'framer-motion'
import { DisconnectedInfographic } from '../components/Infographic'

const Slide2 = () => {
  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Scaling Laundry Chains is <span className="highlight">Operationally Broken</span>
      </motion.h2>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        The reality of multi-store franchise operations
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="infographic-container"
      >
        <DisconnectedInfographic />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="impact-line coral"
      >
        You can't scale what you can't control.
      </motion.p>
    </div>
  )
}

export default Slide2
