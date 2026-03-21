import { motion } from 'framer-motion'

const Slide8 = () => {
  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Plant Operations
      </motion.h2>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Full Visibility from Store to Plant to Delivery
      </motion.p>

      <div className="features-grid">
        {[
          { icon: '🚚', title: 'Dispatch Tracking', desc: 'Monitor deliveries in real-time' },
          { icon: '⚙️', title: 'Stage-Wise Processing', desc: 'Track each step of laundry process' },
          { icon: '✅', title: 'QC & Rewash Tracking', desc: 'Maintain quality standards' },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.12, duration: 0.5 }}
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
        No lost garments. Faster turnaround.
      </motion.p>
    </div>
  )
}

export default Slide8
