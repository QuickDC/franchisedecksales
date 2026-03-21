import { motion } from 'framer-motion'

const Slide3 = () => {
  return (
    <div className="slide">
      <h2 className="slide-title">Big Number Slide</h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{ textAlign: 'center', marginTop: '40px' }}
      >
        <p style={{ fontSize: '8rem', fontWeight: '800', color: '#f44336' }}>
          73%
        </p>
        <p style={{ fontSize: '2rem', marginTop: '20px' }}>
          of businesses lose money on this
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{ marginTop: '50px', fontSize: '1.5rem', color: '#4fc3f7' }}
      >
        They just don't know it yet.
      </motion.p>
    </div>
  )
}

export default Slide3
