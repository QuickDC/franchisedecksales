import { motion } from 'framer-motion'

const Slide11 = () => {
  const points = [
    { icon: '⚡', title: 'Rapid Onboarding', desc: 'Pre-configured templates for new stores' },
    { icon: '📚', title: 'Zero Learning Curve', desc: 'Easy to learn for franchisees' },
    { icon: '📈', title: 'Scalable', desc: 'From 10 to 1,000+ stores' },
    { icon: '☁️', title: 'Cloud Infrastructure', desc: 'Enterprise-grade reliability' }
  ]

  return (
    <div className="slide">
      <span className="slide-number">11</span>

      <motion.h1
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Franchise Onboarding & Scalability
      </motion.h1>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Enterprise-grade platform that grows with your business
      </motion.p>

      {/* Growth Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
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
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
          {/* Scale bars */}
          {[10, 50, 100, 500, 1000].map((num, i) => (
            <motion.div
              key={num}
              initial={{ height: 0 }}
              animate={{ height: `${20 + i * 18}%` }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
              style={{
                width: '60px',
                background: i < 3 ? 'linear-gradient(180deg, #10b981, #059669)' : 'linear-gradient(180deg, #E63946, #B82D38)',
                borderRadius: '8px 8px 0 0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                paddingBottom: '10px'
              }}
            >
              <span style={{ color: 'white', fontWeight: '600', fontSize: '0.9rem' }}>{num}+</span>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem' }}>stores</span>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <p style={{ color: '#a0a0a0', fontSize: '1rem' }}>
            Scales seamlessly from <span style={{ color: '#10b981' }}>10</span> to <span style={{ color: '#E63946' }}>1,000+</span> stores
          </p>
        </div>
      </motion.div>

      {/* Features */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginTop: '25px' }}>
        {points.map((point, i) => (
          <motion.div
            key={point.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + i * 0.1 }}
            style={{
              background: '#1f1f1f',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center',
              border: '1px solid #333'
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{point.icon}</div>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '8px', color: '#fff' }}>{point.title}</h4>
            <p style={{ fontSize: '0.8rem', color: '#666' }}>{point.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Slide11
