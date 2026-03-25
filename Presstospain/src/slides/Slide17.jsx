import { motion } from 'framer-motion'

const Slide17 = () => {
  const markets = [
    { country: 'Congo', challenge: 'new deployment', icon: '🌍' },
    { country: 'Portugal', challenge: 'monthly reporting', icon: '🇵🇹' },
    { country: 'Mexico', challenge: 'real-time invoicing', icon: '🇲🇽' }
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
            <h3 className="market-country">{market.country}</h3>
            <p className="market-challenge">{market.challenge}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="key-insight-box centered"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <p className="insight-text">Same platform, different compliance</p>
      </motion.div>
    </div>
  )
}

export default Slide17