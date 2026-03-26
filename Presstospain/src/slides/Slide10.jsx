import { motion } from 'framer-motion'

const Slide10 = () => {
  const strengths = [
    { icon: '🏬', title: 'Multi-store & franchise management', subtitle: '→ Designed for networks like Pressto' },
    { icon: '🎯', title: 'Centralized control layer', subtitle: '→ Solve fragmented systems problem' },
    { icon: '⚙️', title: 'Configurable country workflows', subtitle: '→ Solve compliance variation across countries' },
    { icon: '📈', title: 'Scalable architecture', subtitle: '→ Enable faster expansion into new markets' }
  ]

  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why QDC Fits Pressto's Needs
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
            <h3 className="strength-title">{strength.title}</h3>
            <p className="strength-subtitle">{strength.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Slide10