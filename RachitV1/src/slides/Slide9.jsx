import { motion } from 'framer-motion'

const Slide9 = () => {
  return (
    <div className="slide">
      <motion.p
        className="overline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        The Myth
      </motion.p>

      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Modern store sirf <span className="text-accent">bada store nahi hota</span>
      </motion.h2>

      <div className="myth-buster">
        <motion.div
          className="myth-label"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3>Common Myth</h3>
          <p>Modern = Big / Multiple Stores</p>
        </motion.div>

        <motion.div
          className="myth-divider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <span>→</span>
        </motion.div>

        <motion.div
          className="reality-label"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3>Reality</h3>
          <p>Modern = <span className="highlight">Smart</span></p>
        </motion.div>
      </div>

      <div className="single-store-benefits">
        <motion.div
          className="benefit-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <span className="check">✓</span>
          <p>Single store can still charge <strong>premium</strong></p>
        </motion.div>

        <motion.div
          className="benefit-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <span className="check">✓</span>
          <p>Customer experience can be <strong>better</strong></p>
        </motion.div>

        <motion.div
          className="benefit-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <span className="check">✓</span>
          <p>Owner control can be <strong>stronger</strong></p>
        </motion.div>

        <motion.div
          className="benefit-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className="check">✓</span>
          <p>Brand image can be <strong>stronger</strong></p>
        </motion.div>
      </div>

      <motion.p
        className="conclusion"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        Single store bhi premium brand experience de sakta hai.
      </motion.p>
    </div>
  )
}

export default Slide9