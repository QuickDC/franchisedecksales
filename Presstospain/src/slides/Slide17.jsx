import { motion } from 'framer-motion'

const Slide17 = () => {
  const markets = [
    { icon: '🌍', title: 'Emerging markets', subtitle: '→ New deployments with minimal setup' },
    { icon: '🧾', title: 'Reporting-based compliance', subtitle: '→ Monthly / periodic reporting (e.g., Portugal)' },
    { icon: '⚡', title: 'Real-time compliance', subtitle: '→ Live invoicing & validation (e.g., Mexico)' }
  ]

  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Beyond Spain
      </motion.h2>

      <div className="markets-grid">
        {markets.map((market, index) => (
          <motion.div
            key={index}
            className="market-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
          >
            <span className="market-icon">{market.icon}</span>
            <h3 className="market-title">{market.title}</h3>
            <p className="market-subtitle">{market.subtitle}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="key-insight"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="insight-header">
          <span className="insight-icon">💡</span>
          <p className="insight-label">CORE MESSAGE</p>
        </div>
        <p className="insight-text">One platform that adapts to every compliance model</p>
      </motion.div>
    </div>
  )
}

export default Slide17