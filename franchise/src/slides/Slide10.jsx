import { motion } from 'framer-motion'

const Slide10 = () => {
  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Growth Engine
      </motion.h2>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Turn One-Time Customers into Repeat Revenue
      </motion.p>

      <div className="features-grid">
        {[
          { icon: '📢', title: 'WhatsApp Campaigns', desc: 'Automated marketing messages' },
          { icon: '🏆', title: 'Loyalty & Coupons', desc: 'Reward repeat customers' },
          { icon: '🤝', title: 'Referral Programs', desc: 'Turn customers into advocates' },
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
        className="impact-line lime"
      >
        More repeat business. Lower acquisition cost.
      </motion.p>
    </div>
  )
}

export default Slide10
