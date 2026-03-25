import { motion } from 'framer-motion'

const Slide10 = () => {
  const strengths = [
    { title: 'Multi-store & franchise management', icon: '🏪' },
    { title: 'Centralized HQ control', icon: '🎯' },
    { title: 'Configurable workflows', icon: '⚙️' },
    { title: 'Scalable architecture', icon: '📈' }
  ]

  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Platform Strengths
      </motion.h2>

      <div className="strengths-grid">
        {strengths.map((strength, index) => (
          <motion.div
            key={index}
            className="strength-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.12, duration: 0.5 }}
          >
            <span className="strength-icon">{strength.icon}</span>
            <p className="strength-text">{strength.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Slide10