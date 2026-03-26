import { motion } from 'framer-motion'

const Slide16 = () => {
  const phases = [
    {
      title: 'Phase 1 — Validation',
      period: 'April–May',
      points: [
        '→ Validate workflows with Pressto team',
        '→ Identify gaps early',
        '→ Align system with real operations'
      ],
      outcome: 'Outcome: No surprises during rollout'
    },
    {
      title: 'Phase 2 — Compliance Build',
      period: 'June',
      points: [
        '→ Configure invoice timing logic',
        '→ Implement VAT & SII reporting',
        '→ Validate compliance scenarios'
      ],
      outcome: 'Outcome: Compliance-ready system'
    },
    {
      title: 'Phase 3 — Controlled Rollout',
      period: 'July onwards',
      points: [
        '→ Pilot with selected stores',
        '→ Gradual expansion to full network'
      ],
      outcome: 'Outcome: Stable, scalable deployment'
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
        Spain Rollout Plan
      </motion.h2>

      <div className="timeline-wrapper">
        {phases.map((phase, index) => (
          <div key={index} className="timeline-phase-wrapper">
            <motion.div
              className="timeline-phase"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.25, duration: 0.5 }}
            >
              <div className="phase-header">
                <span className="phase-name">{phase.title}</span>
                <span className="phase-period">{phase.period}</span>
              </div>
              <div className="phase-items">
                {phase.points.map((point, i) => (
                  <div key={i} className="phase-item">{point}</div>
                ))}
              </div>
              <div className="phase-outcome">{phase.outcome}</div>
            </motion.div>
            {index < phases.length - 1 && (
              <motion.div
                className="timeline-arrow"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.25, duration: 0.4 }}
              >
                →
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slide16