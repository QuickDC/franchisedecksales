import { motion } from 'framer-motion'

const Slide14 = () => {
  return (
    <div className="slide">
      <span className="slide-number">14</span>

      <motion.h1
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Pickup & Delivery Management
      </motion.h1>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Optional Module - Complete Fleet Management
      </motion.p>

      {/* Delivery Flow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{
          marginTop: '25px',
          padding: '30px',
          background: 'linear-gradient(135deg, #1f1f1f, #141414)',
          borderRadius: '20px',
          border: '1px solid #333'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>

          {/* Customer */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: '#2a2a2a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              margin: '0 auto 10px',
              border: '2px solid #E63946'
            }}>
              👤
            </div>
            <p style={{ color: '#a0a0a0', fontSize: '0.9rem' }}>Customer</p>
          </motion.div>

          {/* Arrow */}
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{ color: '#E63946', fontSize: '1.5rem' }}
          >
            ➜
          </motion.div>

          {/* Driver */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ textAlign: 'center' }}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #E63946, #B82D38)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                margin: '0 auto 10px',
                boxShadow: '0 0 20px rgba(230,57,70,0.4)'
              }}>
              🛵
            </motion.div>
            <p style={{ color: '#E63946', fontSize: '0.9rem', fontWeight: '600' }}>Rider App</p>
          </motion.div>

          {/* Arrow */}
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }}
            style={{ color: '#E63946', fontSize: '1.5rem' }}
          >
            ➜
          </motion.div>

          {/* Store */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: '#2a2a2a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              margin: '0 auto 10px',
              border: '2px solid #10b981'
            }}>
              🏪
            </div>
            <p style={{ color: '#10b981', fontSize: '0.9rem', fontWeight: '600' }}>Store</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Features */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginTop: '25px' }}>
        {[
          { icon: '🗺️', title: 'Route Optimization', desc: 'Smart routing for drivers' },
          { icon: '📍', title: 'GPS Tracking', desc: 'Real-time location' },
          { icon: '📱', title: 'Driver App', desc: 'Mobile application' },
          { icon: '📊', title: 'Performance Reports', desc: 'Delivery analytics' }
        ].map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            style={{
              background: '#1f1f1f',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center',
              border: '1px solid #333'
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{feature.icon}</div>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '8px', color: '#fff' }}>{feature.title}</h4>
            <p style={{ fontSize: '0.8rem', color: '#666' }}>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Slide14
