import { motion } from 'framer-motion'

const Slide4 = () => {
  return (
    <div className="slide">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: '2.8rem', color: '#ff9800', marginBottom: '30px' }}
      >
        For those already running a business...
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{ fontSize: '1.8rem', marginBottom: '30px', maxWidth: '900px', color: '#a0aec0' }}
      >
        You may already have the store, the setup, and the customers.
      </motion.p>

      <motion.h3
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{ fontSize: '2.2rem', color: '#f44336', marginTop: '30px', marginBottom: '30px' }}
      >
        But we are living in a world that is changing faster than ever before
      </motion.h3>

      <div style={{ marginTop: '30px', display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {[
          { icon: '💻', text: 'Technology\nis changing' },
          { icon: '👤', text: 'Customer behavior\nis changing' },
          { icon: '✨', text: 'Expectations\nare changing' },
          { icon: '🤖', text: 'AI & automation\nare accelerating' },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 + index * 0.2, duration: 0.5 }}
            style={{
              textAlign: 'center',
              padding: '25px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '12px',
              minWidth: '180px',
              flex: '1 1 180px'
            }}
          >
            <span style={{ fontSize: '3rem' }}>{item.icon}</span>
            <p style={{ fontSize: '1.2rem', marginTop: '15px', whiteSpace: 'pre-line' }}>{item.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        style={{ marginTop: '40px', fontSize: '1.6rem', color: '#4fc3f7' }}
      >
        The speed of change has only increased.
      </motion.p>
    </div>
  )
}

export default Slide4