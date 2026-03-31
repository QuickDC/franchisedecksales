import { motion } from 'framer-motion'

const Slide3 = () => {
  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        But Our Business Is Different
      </motion.h2>

      <div className="benefits-grid">
        <motion.div
          className="benefit-item"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ flexDirection: 'column', textAlign: 'center', minHeight: '180px' }}
        >
          <span style={{ fontSize: '3rem' }}>👕</span>
          <span style={{ fontSize: '1.3rem', marginTop: '10px' }}>We Touch Physical Things</span>
          <p style={{ fontSize: '1rem', color: '#a0aec0', marginTop: '10px' }}>Every garment is unique. No two orders are the same.</p>
        </motion.div>

        <motion.div
          className="benefit-item"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{ flexDirection: 'column', textAlign: 'center', minHeight: '180px' }}
        >
          <span style={{ fontSize: '3rem' }}>🚚</span>
          <span style={{ fontSize: '1.3rem', marginTop: '10px' }}>We Move Things</span>
          <p style={{ fontSize: '1rem', color: '#a0aec0', marginTop: '10px' }}>Pickup and delivery is half our business.</p>
        </motion.div>

        <motion.div
          className="benefit-item"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          style={{ flexDirection: 'column', textAlign: 'center', minHeight: '180px' }}
        >
          <span style={{ fontSize: '3rem' }}>👥</span>
          <span style={{ fontSize: '1.3rem', marginTop: '10px' }}>We Know Customers By Name</span>
          <p style={{ fontSize: '1rem', color: '#a0aec0', marginTop: '10px' }}>Local business. Personal relationships.</p>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        style={{ marginTop: '30px', fontSize: '1.3rem', color: '#4fc3f7' }}
      >
        AI should work for THIS reality — not a spreadsheet reality.
      </motion.p>
    </div>
  )
}

export default Slide3