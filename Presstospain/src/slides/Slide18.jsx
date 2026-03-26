import { motion } from 'framer-motion'

const Slide18 = () => {
  const benefits = [
    { title: 'Solves multi-country complexity', subtitle: '→ One system across all operations' },
    { title: 'Eliminates fragmented technology stack', subtitle: '→ No more country-specific tools' },
    { title: 'Embeds compliance into workflows', subtitle: '→ No manual intervention or risk' },
    { title: 'Enables predictable global expansion', subtitle: '→ Scale without operational disruption' }
  ]

  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why This Works for Pressto
      </motion.h2>

      <div className="benefits-list">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="benefit-item"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
          >
            <span className="benefit-title">{benefit.title}</span>
            <span className="benefit-subtitle">{benefit.subtitle}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Slide18