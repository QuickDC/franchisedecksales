import { motion } from 'framer-motion'

const Slide5 = () => {
  return (
    <div className="slide">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: '2rem', marginBottom: '30px', color: '#a0aec0' }}
      >
        The customer of today is not the same customer of yesterday.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        style={{ fontSize: '1.6rem', marginBottom: '40px', maxWidth: '800px', color: '#a0aec0' }}
      >
        Just think about how people now discover products, compare options, place orders, make payments, and expect updates.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{
          marginTop: '40px',
          padding: '40px',
          background: 'rgba(244, 67, 54, 0.1)',
          borderRadius: '20px',
          border: '2px solid #f44336',
          maxWidth: '700px'
        }}
      >
        <p style={{ fontSize: '2.5rem', fontWeight: '700', color: '#f44336' }}>
          Are we evolving fast enough to stay relevant?
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        style={{ marginTop: '40px', fontSize: '1.5rem', color: '#a0aec0' }}
      >
        If we do not evolve, customers will simply move toward businesses that understand them better.
      </motion.p>
    </div>
  )
}

export default Slide5