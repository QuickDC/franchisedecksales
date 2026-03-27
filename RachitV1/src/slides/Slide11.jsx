import { motion } from 'framer-motion'

const Slide11 = () => {
  return (
    <div className="slide">
      <motion.p
        className="overline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        The Product
      </motion.p>

      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Introducing <span className="highlight-line">Quick Dry Cleaning Software</span>
      </motion.h2>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Quick Dry Cleaning Software ek billing tool nahi hai.<br />
        Yeh growth, operations, aur retention ka operating system hai.
      </motion.p>

      <div className="system-flow">
        <motion.div
          className="system-node"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="node-icon">🎯</div>
          <h3>Customer Acquisition</h3>
          <p>New customers come through the system</p>
        </motion.div>

        <div className="system-arrow">→</div>

        <motion.div
          className="system-node"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="node-icon">⚙️</div>
          <h3>Store Operations</h3>
          <p>Everything managed smoothly</p>
        </motion.div>

        <div className="system-arrow">→</div>

        <motion.div
          className="system-node"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="node-icon">🚚</div>
          <h3>Pickup & Delivery</h3>
          <p>Logistics runs efficiently</p>
        </motion.div>

        <div className="system-arrow">→</div>

        <motion.div
          className="system-node"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="node-icon">🔄</div>
          <h3>Remarketing</h3>
          <p>Customer brought back</p>
        </motion.div>

        <div className="system-arrow">→</div>

        <motion.div
          className="system-node"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <div className="node-icon">💎</div>
          <h3>Retention Engine</h3>
          <p>Loyalty built over time</p>
        </motion.div>
      </div>

      <motion.div
        className="lifecycle-note"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <p>From acquire to retain — the entire customer lifecycle becomes connected.</p>
      </motion.div>
    </div>
  )
}

export default Slide11