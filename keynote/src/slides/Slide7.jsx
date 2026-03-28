import { motion } from 'framer-motion'

const Slide7 = () => {
  const items = [
    { icon: '🏗️', text: 'Setting up the right operation' },
    { icon: '⚙️', text: 'Choosing the right machinery' },
    { icon: '😊', text: 'Improving customer experience' },
    { icon: '⚡', text: 'Increasing efficiency' },
    { icon: '💻', text: 'Adopting better systems' },
    { icon: '📈', text: 'Building for long-term growth' },
  ]

  return (
    <div className="slide">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: '2.8rem', color: '#4fc3f7', marginBottom: '40px' }}
      >
        Whether it is...
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px', maxWidth: '1000px' }}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              padding: '25px 30px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '12px',
              textAlign: 'left'
            }}
          >
            <span style={{ fontSize: '2.5rem' }}>{item.icon}</span>
            <span style={{ fontSize: '1.5rem' }}>{item.text}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        style={{ marginTop: '50px', fontSize: '2rem', color: '#ff9800' }}
      >
        Everything begins with awareness and the willingness to improve.
      </motion.p>
    </div>
  )
}

export default Slide7