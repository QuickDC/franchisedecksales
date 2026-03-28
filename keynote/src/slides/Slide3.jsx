import { motion } from 'framer-motion'

const Slide3 = () => {
  return (
    <div className="slide">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: '2.8rem', color: '#ff9800', marginBottom: '30px' }}
      >
        For those starting new...
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{ fontSize: '1.8rem', marginBottom: '40px', maxWidth: '900px', color: '#a0aec0' }}
      >
        Building a successful laundry or dry cleaning business<br/>takes much more than just opening a shop.
      </motion.p>

      <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px', maxWidth: '900px' }}>
        {[
          { icon: '📍', text: 'Right location' },
          { icon: '🏢', text: 'Right real estate setup' },
          { icon: '⚙️', text: 'Right machines & chemicals' },
          { icon: '👥', text: 'Ability to acquire customers' },
          { icon: '💯', text: 'Ability to retain customers' },
          { icon: '✨', text: 'Deliver service quality' },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.15, duration: 0.5 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              padding: '20px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '12px',
              textAlign: 'left'
            }}
          >
            <span style={{ fontSize: '2rem' }}>{item.icon}</span>
            <span style={{ fontSize: '1.4rem' }}>{item.text}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        style={{ marginTop: '40px', fontSize: '1.6rem', color: '#4fc3f7' }}
      >
        A business grows when customers trust it, choose it, and return to it.
      </motion.p>
    </div>
  )
}

export default Slide3