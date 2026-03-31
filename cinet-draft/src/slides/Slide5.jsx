import { motion } from 'framer-motion'

const Slide5 = () => {
  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What If... Your Counter Spoke Voice?
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{ marginTop: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', padding: '40px', maxWidth: '800px' }}
      >
        <p style={{ fontSize: '1.5rem', color: '#a0aec0', fontStyle: 'italic', marginBottom: '20px' }}>
          Staff says: "3 shirts, 2 pants, rush delivery please"
        </p>
        <p style={{ fontSize: '1.5rem', color: '#4fc3f7' }}>
          → System automatically logs order, calculates price, prints tag
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{ marginTop: '30px', fontSize: '1.2rem', color: '#a0aec0' }}
      >
        No training required. No learning UI. Just talk.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{ marginTop: '20px', fontSize: '1.3rem', color: '#4caf50' }}
      >
        40-50% faster order entry. New staff productive in 1 day, not 1 month.
      </motion.p>
    </div>
  )
}

export default Slide5