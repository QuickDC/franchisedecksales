import { motion } from 'framer-motion'

const Slide14 = () => {
  const enables = [
    'Faster country expansion',
    'Reduced compliance risk',
    'Centralized control',
    'Lower dependency on custom development'
  ]

  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What This Enables
      </motion.h2>

      <div className="enables-grid">
        {enables.map((item, index) => (
          <motion.div
            key={index}
            className="enable-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.12, duration: 0.5 }}
          >
            <div className="enable-check">✓</div>
            <p className="enable-text">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Slide14