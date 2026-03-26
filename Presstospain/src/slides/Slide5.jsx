import { motion } from 'framer-motion'

const Slide5 = () => {
  const advantages = [
    {
      icon: '🌍',
      title: 'Multi-country presence across 4 regions',
      subtitle: '👉 Few competitors operate at this scale'
    },
    {
      icon: '🚀',
      title: 'Built-in expansion capability',
      subtitle: '👉 New markets can be launched faster'
    },
    {
      icon: '📊',
      title: 'Large operational data footprint',
      subtitle: '👉 Opportunity to drive insights & optimization'
    },
    {
      icon: '🤝',
      title: 'Established franchise ecosystem',
      subtitle: '👉 Ready for standardization and control'
    }
  ]

  const regions = [
    { name: 'Europe', icon: '🌍' },
    { name: 'Latin America', icon: '🌎' },
    { name: 'Africa', icon: '🌍' },
    { name: 'Asia', icon: '🌏' }
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

      <div className="regions-row">
        {regions.map((region, index) => (
          <motion.div
            key={index}
            className="region-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
          >
            <span className="region-icon">{region.icon}</span>
            <span className="region-name">{region.name}</span>
          </motion.div>
        ))}
      </div>

      <div className="advantage-grid">
        {advantages.map((item, index) => (
          <motion.div
            key={index}
            className="advantage-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + index * 0.12, duration: 0.5 }}
          >
            <span className="advantage-card-icon">{item.icon}</span>
            <h3 className="advantage-card-title">{item.title}</h3>
            <p className="advantage-card-subtitle">{item.subtitle}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="key-insight"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <div className="insight-header">
          <span className="insight-icon">🔥</span>
          <p className="insight-label">KEY INSIGHT</p>
        </div>
        <p className="insight-text">
          <span className="insight-main">The business is global —</span>
          <span className="insight-sub">but the technology is not</span>
        </p>
      </motion.div>
    </div>
  )
}

export default Slide5