import { motion } from 'framer-motion'

const Slide11 = () => {
  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Happens In The Next 3 Years?
      </motion.h2>

      <div style={{ marginTop: '30px', textAlign: 'left', maxWidth: '900px' }}>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ fontSize: '1.4rem', marginBottom: '25px' }}
        >
          <span style={{ color: '#ff9800' }}>2026:</span> First voice-first stores appear. Early adopters win.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{ fontSize: '1.4rem', marginBottom: '25px' }}
        >
          <span style={{ color: '#ff9800' }}>2027:</span> AI handles 60% of calls automatically. No counter staff needed for basic orders.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          style={{ fontSize: '1.4rem', marginBottom: '25px' }}
        >
          <span style={{ color: '#ff9800' }}>2028:</span> Predictive ordering. Your system knows before customer calls.
        </motion.p>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        style={{ marginTop: '30px', fontSize: '1.2rem', color: '#a0aec0' }}
      >
        The question is: Will you be the one leading this? Or watching from behind?
      </motion.p>
    </div>
  )
}

export default Slide11