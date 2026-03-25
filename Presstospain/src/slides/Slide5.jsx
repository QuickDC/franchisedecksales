import { motion } from 'framer-motion'

const Slide5 = () => {
  const regions = [
    { name: 'Europe', icon: '🌍' },
    { name: 'Latin America', icon: '🌎' },
    { name: 'Africa', icon: '🌍' },
    { name: 'Asia', icon: '🌏' }
  ]

  const opportunities = [
    'Standardize operations globally',
    'Centralize data & control',
    'Build a unified customer experience',
    'Scale faster into new markets'
  ]

  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Pressto's Global Advantage
      </motion.h2>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Pressto already operates across multiple countries
      </motion.p>

      <div className="regions-row">
        {regions.map((region, index) => (
          <motion.div
            key={index}
            className="region-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
          >
            <span className="region-icon">{region.icon}</span>
            <span className="region-name">{region.name}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="opportunity-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <h3 className="section-label">This creates a unique opportunity</h3>
        <ul className="opportunity-list">
          {opportunities.map((opp, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
            >
              {opp}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        className="key-insight-box"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <p className="insight-label">KEY INSIGHT</p>
        <p className="insight-text">Growth is now limited by technology standardization</p>
      </motion.div>
    </div>
  )
}

export default Slide5