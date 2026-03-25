import { motion } from 'framer-motion'

const Slide2 = () => {
  const points = [
    { title: 'Expansion across multiple countries', icon: '🌍' },
    { title: 'Increasing regulatory complexity', icon: '📋' },
    { title: 'Existing system limitations', icon: '⚠️' },
    { title: 'Upcoming legal changes (Spain & EU)', icon: '📜' }
  ]

  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why This Matters Now
      </motion.h2>

      <div className="content-grid two-column">
        <div className="points-list">
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="point-item"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
            >
              <span className="point-icon">{point.icon}</span>
              <span className="point-text">{point.title}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="key-insight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className="insight-label">KEY INSIGHT</p>
          <p className="insight-text">Compliance is becoming a bottleneck to scale</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Slide2