import { motion } from 'framer-motion'

const Slide16 = () => {
  const phases = [
    { phase: 'Phase 1', period: 'April–May', items: ['Existing QDC POC', 'Gap identification', 'Workflow validation'] },
    { phase: 'Phase 2', period: 'June', items: ['Compliance setup', 'Invoice logic', 'VAT validation'] },
    { phase: 'Phase 3', period: 'After', items: ['Spain rollout', 'Pilot to full deployment'] }
  ]

  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Spain Rollout Plan
      </motion.h2>

      <div className="timeline-container">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            className="timeline-phase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
          >
            <div className="phase-header">
              <span className="phase-name">{phase.phase}</span>
              <span className="phase-period">{phase.period}</span>
            </div>
            <div className="phase-items">
              {phase.items.map((item, i) => (
                <div key={i} className="phase-item">• {item}</div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Slide16