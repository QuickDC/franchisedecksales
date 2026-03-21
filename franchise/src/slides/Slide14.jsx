import { motion } from 'framer-motion'

const Slide14 = () => {
  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Real Outcomes You Can <span className="highlight">Expect</span>
      </motion.h2>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Business impact measured across operations
      </motion.p>

      <div className="results-grid">
        {[
          { value: '40%', label: 'Faster Processing', prefix: '' },
          { value: '3x', label: 'Higher Repeat Rate', prefix: '' },
          { value: '90%', label: 'Reduced Errors', prefix: '' },
          { value: '95%', label: 'Customer Satisfaction', prefix: '' },
        ].map((result, index) => (
          <motion.div
            key={index}
            className="result-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.12, duration: 0.5 }}
          >
            <span className="result-value">{result.value}</span>
            <h3>{result.label}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Slide14
