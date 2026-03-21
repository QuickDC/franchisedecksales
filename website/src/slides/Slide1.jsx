import { motion } from 'framer-motion'

const Slide1 = () => {
  return (
    <div className="slide">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div style={{
          background: 'linear-gradient(135deg, #E63946 0%, #B82D38 100%)',
          padding: '15px 40px',
          borderRadius: '30px',
          marginBottom: '30px',
          display: 'inline-block'
        }}>
          <span style={{ color: 'white', fontWeight: '600', fontSize: '1.2rem' }}>
            Powered by Quick Dry Cleaning Software
          </span>
        </div>
      </motion.div>

      <motion.h1
        className="slide-title"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{ fontSize: '4.5rem', fontWeight: '800', marginBottom: '20px' }}
      >
        Pressto Enterprise
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{ fontSize: '2rem', color: '#A8DADC', marginBottom: '15px' }}
      >
        Digital Operations Platform
      </motion.p>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        Global Franchise Management at Scale
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        style={{ marginTop: '40px' }}
      >
        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
          {[
            { icon: '🏢', label: '50+ Stores' },
            { icon: '🌍', label: '8 Countries' },
            { icon: '💼', label: 'Enterprise Ready' }
          ].map((item, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '15px 30px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
              <span style={{ color: '#a0a0a0' }}>{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        style={{ marginTop: '50px', color: '#666666', fontSize: '0.9rem' }}
      >
        Press arrow keys to navigate →
      </motion.p>
    </div>
  )
}

export default Slide1
