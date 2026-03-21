import { motion } from 'framer-motion'

const Slide7 = () => {
  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Store Operations
      </motion.h2>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Run Every Store Like a Top Performer
      </motion.p>

      <div className="features-grid">
        {[
          { icon: '💳', title: 'Fast Billing & Tagging', desc: 'Quick POS with instant garment tagging' },
          { icon: '📍', title: 'Real-Time Tracking', desc: 'Know where every garment is, anytime' },
          { icon: '📊', title: 'Daily Dashboards', desc: 'Performance at a glance' },
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
        Faster billing. Zero chaos. Full control.
      </motion.p>
    </div>
  )
}

export default Slide7
