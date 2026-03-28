import { motion } from 'framer-motion'
import logo from '../logo.jpeg'

const Slide1 = () => {
  return (
    <div className="slide">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{ marginBottom: '30px' }}
      >
        <motion.img
        src={logo}
        alt="Logo"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        style={{ marginBottom: '30px', width: '150px', height: '150px', objectFit: 'contain' }}
      />
      </motion.div>

      <motion.h1
        className="slide-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ fontSize: '4rem', color: '#4fc3f7' }}
      >
        Laundry Launchpad
      </motion.h1>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        style={{ fontSize: '2rem', maxWidth: '800px' }}
      >
        Building, Running & Scaling Your Modern Laundry Business
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        style={{ marginTop: '60px', opacity: 0.5, fontSize: '1.2rem' }}
      >
        Use arrow keys to navigate
      </motion.p>
    </div>
  )
}

export default Slide1