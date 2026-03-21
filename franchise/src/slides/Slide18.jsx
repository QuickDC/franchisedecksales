import { motion } from 'framer-motion'
import { BigCTAInfographic } from '../components/Infographic'

const Slide18 = () => {
  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Build Your <span className="highlight">Scalable Laundry Network</span>
      </motion.h2>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Ready to transform your franchise operations?
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="infographic-container"
      >
        <BigCTAInfographic />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="cta-buttons"
      >
        <button className="cta-primary">Book a Demo</button>
        <button className="cta-secondary">See Your Workflow</button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        style={{ marginTop: '40px', opacity: 0.4, fontSize: '0.9rem' }}
      >
        Use arrow keys to navigate
      </motion.p>
    </div>
  )
}

export default Slide18
