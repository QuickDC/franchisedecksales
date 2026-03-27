import { motion } from 'framer-motion'

const Slide13 = () => {
  return (
    <div className="slide">
      <motion.p
        className="overline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Growth Opportunity
      </motion.p>

      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Pickup & Delivery = <span className="highlight-line">Growth Channel</span>
      </motion.h2>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Is system ka sabse bada growth unlock kya hai?
      </motion.p>

      <div className="growth-comparison">
        <motion.div
          className="growth-card limited"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3>Walk-in Only</h3>
          <div className="market-visual">
            <div className="store-icon">🏪</div>
            <div className="limit-line"></div>
            <p>Market stays limited to people passing by</p>
          </div>
        </motion.div>

        <motion.div
          className="growth-card expanded"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3>Multiple Channels</h3>
          <div className="market-visual">
            <div className="store-icon">🏪</div>
            <div className="channel-list">
              <span>🌐 Website</span>
              <span>📱 Apps</span>
              <span>💬 WhatsApp</span>
              <span>📸 Instagram</span>
              <span>🔍 Google GMB</span>
            </div>
            <p>Customer reaches you via their preferred channel</p>
          </div>
        </motion.div>
      </div>

      <div className="reach-expansion">
        <motion.div
          className="reach-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <span className="reach-icon">🏠</span>
          <span>Homes</span>
        </motion.div>
        <motion.div
          className="reach-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <span className="reach-icon">🏘️</span>
          <span>Apartments & Societies</span>
        </motion.div>
        <motion.div
          className="reach-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className="reach-icon">🏢</span>
          <span>Offices</span>
        </motion.div>
        <motion.div
          className="reach-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <span className="reach-icon">📍</span>
          <span>Nearby Demand Pockets</span>
        </motion.div>
      </div>

      <motion.p
        className="growth-message"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        You don't wait for customer. You reach out to customer.
      </motion.p>
    </div>
  )
}

export default Slide13