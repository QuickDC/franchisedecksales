import { motion } from 'framer-motion'

const Slide7 = () => {
  const points = [
    { title: 'Core owned store network', icon: '🏪' },
    { title: 'Complex tax environment', icon: '📊' },
    { title: 'First step toward global transformation', icon: '🚀' }
  ]

  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Spain as the Foundation
      </motion.h2>

      <div className="spain-focus-grid">
        {points.map((point, index) => (
          <motion.div
            key={index}
            className="focus-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
          >
            <span className="focus-icon">{point.icon}</span>
            <p className="focus-text">{point.title}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="key-insight-box"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p className="insight-text">If Spain works → Global rollout becomes predictable</p>
      </motion.div>
    </div>
  )
}

export default Slide7