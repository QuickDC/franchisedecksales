import { motion } from 'framer-motion'

const Slide14 = () => {
  const enables = [
    { icon: '🚀', title: 'Faster expansion', subtitle: '→ Enter new markets with minimal setup' },
    { icon: '🛡️', title: 'Lower compliance risk', subtitle: '→ Accurate reporting and validation built-in' },
    { icon: '🎯', title: 'Centralized control', subtitle: '→ Manage data, access, offers, and operations globally' },
    { icon: '⚙️', title: 'Reduced development overhead', subtitle: '→ Scale without increasing tech complexity' }
  ]

  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What This Enables
      </motion.h2>

      <div className="enables-grid">
        {enables.map((item, index) => (
          <motion.div
            key={index}
            className="enable-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.12, duration: 0.5 }}
          >
            <span className="enable-icon">{item.icon}</span>
            <h3 className="enable-title">{item.title}</h3>
            <p className="enable-subtitle">{item.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Slide14