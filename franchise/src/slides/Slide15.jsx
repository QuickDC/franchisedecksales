import { motion } from 'framer-motion'

const Slide15 = () => {
  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Built for <span className="highlight">Franchise Scale</span>
      </motion.h2>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Designed for Multi-Store & Franchise Networks
      </motion.p>

      <div className="features-grid">
        {[
          { icon: '🏢', title: 'Central HQ Control', desc: 'One dashboard for all stores' },
          { icon: '🏪', title: 'Local Store Execution', desc: 'Franchisees run day-to-day' },
          { icon: '📐', title: 'Scalable Architecture', desc: 'Add stores without limits' },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
          >
            <span className="feature-icon">{feature.icon}</span>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="impact-line"
      >
        HQ sets strategy. Franchisees execute. Everyone wins.
      </motion.p>
    </div>
  )
}

export default Slide15
