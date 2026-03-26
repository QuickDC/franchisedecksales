import { motion } from 'framer-motion'

const Slide13 = () => {
  const layers = [
    { icon: '🧱', title: 'Core Platform', subtitle: '→ Single source of truth across all stores' },
    { icon: '⚙️', title: 'Compliance Engine', subtitle: '→ Centralized logic for all countries' },
    { icon: '🌍', title: 'Country Adapters', subtitle: '→ Lightweight integration layer per country' }
  ]

  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Architecture Overview
      </motion.h2>

      <div className="arch-grid">
        {layers.map((layer, index) => (
          <motion.div
            key={index}
            className="arch-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
          >
            <div className="arch-number">{index + 1}</div>
            <span className="arch-icon">{layer.icon}</span>
            <h3 className="arch-title">{layer.title}</h3>
            <p className="arch-subtitle">{layer.subtitle}</p>
            {index < layers.length - 1 && (
              <div className="arch-connector">
                <span>↓</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.p
        className="arch-note"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        No duplication of compliance development → Enables faster rollout without system rebuild
      </motion.p>
    </div>
  )
}

export default Slide13