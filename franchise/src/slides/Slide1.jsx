import { motion } from 'framer-motion'
import { NetworkInfographic } from '../components/Infographic'

const Slide1 = () => {
  return (
    <div className="slide">
      <motion.h1
        className="slide-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        The Operating System for <span className="highlight">Scaling Franchise Laundry Chains</span>
      </motion.h1>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        From Store Operations to HQ Control — Fully Digitized
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="infographic-container"
      >
        <NetworkInfographic />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{ marginTop: '30px', opacity: 0.5, fontSize: '0.95rem' }}
      >
        Use arrow keys to navigate
      </motion.p>
    </div>
  )
}

export default Slide1