import { motion } from 'framer-motion'

const Slide7 = () => {
  const points = [
    { icon: '🏬', title: 'Controlled environment', subtitle: '→ Faster implementation, lower risk' },
    { icon: '📋', title: 'High compliance complexity', subtitle: '→ Build once, reuse globally' },
    { icon: '🚀', title: 'Pilot for global platform', subtitle: '→ Create a repeatable model' }
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.12, duration: 0.5 }}
          >
            <span className="focus-icon">{point.icon}</span>
            <p className="focus-title">{point.title}</p>
            <p className="focus-subtitle">{point.subtitle}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="key-insight"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="insight-header">
          <span className="insight-icon">🔥</span>
          <p className="insight-label">KEY INSIGHT</p>
        </div>
        <p className="insight-text">
          <span className="insight-main">Spain is not just a market —</span>
          <span className="insight-sub">→ it is the blueprint for global expansion</span>
        </p>
      </motion.div>
    </div>
  )
}

export default Slide7