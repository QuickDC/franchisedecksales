import { motion } from 'framer-motion'

const Slide11 = () => {
  const gaps = [
    { icon: '📅', title: 'SII reporting integration', subtitle: '→ Planned in Phase 2 (Compliance Setup)' },
    { icon: '🔍', title: 'VAT validation', subtitle: '→ Planned in Phase 2' },
    { icon: '🧾', title: 'Invoice lifecycle alignment', subtitle: '→ Covered in Phase 1 + Phase 2' },
    { icon: '📊', title: 'Compliance monitoring', subtitle: '→ Planned in Phase 3' }
  ]

  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Gap Transparency
      </motion.h2>

      <div className="gaps-grid">
        {gaps.map((gap, index) => (
          <motion.div
            key={index}
            className="gap-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.12, duration: 0.5 }}
          >
            <span className="gap-icon">{gap.icon}</span>
            <h3 className="gap-title">{gap.title}</h3>
            <p className="gap-subtitle">{gap.subtitle}</p>
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
          <p className="insight-label">KEY INSIGHT</p>
        </div>
        <p className="insight-text">
          <span>No unknowns —</span>
          <span className="insight-sub">→ only execution</span>
        </p>
      </motion.div>
    </div>
  )
}

export default Slide11