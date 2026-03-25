import { motion } from 'framer-motion'

const Slide18 = () => {
  const benefits = [
    'Aligns with global expansion strategy',
    'Reduces internal IT complexity',
    'Ensures compliance across countries',
    'Creates long-term scalable foundation'
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
            <span className="benefit-check">✓</span>
            <span className="benefit-text">{benefit}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Slide18