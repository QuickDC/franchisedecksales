import { motion } from 'framer-motion'

const Slide4 = () => {
  const features = [
    { icon: '🗄️', title: 'Unified Database', desc: 'Single customer identity across all Pressto locations' },
    { icon: '👁️', title: 'Cross-Store Visibility', desc: 'Customer history visible across stores' },
    { icon: '🎁', title: 'Loyalty Programs', desc: 'Enable cross-store loyalty programs' },
    { icon: '📊', title: 'Smart Segmentation', desc: 'Advanced segmentation by geography & behavior' }
  ]

  return (
    <div className="slide">
      <span className="slide-number">04</span>

      <motion.h1
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Centralized Customer Management
      </motion.h1>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        One customer, one identity, infinite possibilities
      </motion.p>

      {/* Visual: Customer Hub */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{
          background: 'linear-gradient(135deg, #1f1f1f, #141414)',
          borderRadius: '20px',
          padding: '30px',
          marginTop: '20px',
          border: '1px solid rgba(230,57,70,0.2)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px' }}>
          {/* Central Customer */}
          <div style={{ textAlign: 'center' }}>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #E63946, #B82D38)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                margin: '0 auto 15px',
                boxShadow: '0 0 30px rgba(230,57,70,0.5)'
              }}
            >
              👤
            </motion.div>
            <h3 style={{ color: '#E63946', fontSize: '1.1rem' }}>Customer 360°</h3>
          </div>

          {/* Connected Stores */}
          {['Store A', 'Store B', 'Store C', 'Store D'].map((store, i) => (
            <motion.div
              key={store}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                background: '#2a2a2a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.8rem',
                margin: '0 auto 10px',
                border: '1px solid #333'
              }}>
                🏪
              </div>
              <span style={{ fontSize: '0.85rem', color: '#a0a0a0' }}>{store}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Features Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginTop: '25px' }}>
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="pressto-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
          >
            <div className="icon-medium">{feature.icon}</div>
            <h4 style={{ fontSize: '1rem', marginBottom: '8px' }}>{feature.title}</h4>
            <p style={{ fontSize: '0.8rem', color: '#666' }}>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Slide4
