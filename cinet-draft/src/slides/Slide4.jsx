import { motion } from 'framer-motion'

const Slide4 = () => {
  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Keeps You Up At Night?
      </motion.h2>

      <div style={{ marginTop: '40px', textAlign: 'left', maxWidth: '900px' }}>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ fontSize: '1.6rem', marginBottom: '25px' }}
        >
          <span style={{ color: '#f44336' }}>✗</span> "Why does my best counter staff always leave?"
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{ fontSize: '1.6rem', marginBottom: '25px' }}
        >
          <span style={{ color: '#f44336' }}>✗</span> "I lose 30% of calls because no one picks up"
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          style={{ fontSize: '1.6rem', marginBottom: '25px' }}
        >
          <span style={{ color: '#f44336' }}>✗</span> "My delivery driver passes 50 houses with customers and does nothing"
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          style={{ fontSize: '1.6rem', marginBottom: '25px' }}
        >
          <span style={{ color: '#f44336' }}>✗</span> "I have 2000 customers but only 300 are active"
        </motion.p>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{ marginTop: '30px', fontSize: '1.4rem', color: '#4fc3f7' }}
      >
        These are REAL problems. Not "data analysis" problems.
      </motion.p>
    </div>
  )
}

export default Slide4