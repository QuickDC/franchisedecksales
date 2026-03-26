import { motion } from 'framer-motion'

const Slide2 = () => {
  const sections = [
    {
      title: 'Multi-country expansion is accelerating',
      subtitle: 'But systems are not keeping up',
      icon: '🌍'
    },
    {
      title: 'Compliance is becoming more complex',
      subtitle: 'Each country has its own rules, formats, and workflows',
      icon: '📋'
    },
    {
      title: 'Technology is not scalable across regions',
      subtitle: 'Every country requires new development',
      icon: '⚠️'
    },
    {
      title: 'Regulations are tightening',
      subtitle: 'Spain and EU pushing toward real-time compliance',
      icon: '📜'
    }
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
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="point-item vertical"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
            >
              <span className="point-icon">{section.icon}</span>
              <div className="point-content">
                <span className="point-title">{section.title}</span>
                <span className="point-subtitle">👉 {section.subtitle}</span>
              </div>
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
            <span className="insight-icon">📈</span>
            <p className="insight-label">KEY INSIGHT</p>
          </div>
          <p className="insight-text">
            <span className="insight-main">Growth is no longer limited by operations—</span>
            <span className="insight-sub">👉 it is limited by compliance and technology</span>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Slide2