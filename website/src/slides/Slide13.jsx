import { motion } from 'framer-motion'

const Slide13 = () => {
  const reasons = [
    { icon: '⏱️', title: '14+ Years Experience', desc: 'Proven track record in laundry digitization' },
    { icon: '🏪', title: 'Multi-Store Expert', desc: 'Built specifically for franchise brands' },
    { icon: '🌍', title: 'Global Flexibility', desc: 'Adaptable to global operating models' },
    { icon: '✨', title: 'Enterprise Grade', desc: 'Pressto branding with robust backend' }
  ]

  return (
    <div className="slide">
      <span className="slide-number">13</span>

      <motion.h1
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Pressto × Quick Dry Cleaning?
      </motion.h1>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        The perfect partnership for franchise success
      </motion.p>

      {/* Partnership Visual */}
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px' }}>

          {/* Pressto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: '#1f1f1f',
              border: '3px solid #E63946',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              margin: '0 auto 15px'
            }}>
              🎽
            </div>
            <h3 style={{ color: '#E63946', fontSize: '1.2rem' }}>Pressto</h3>
            <p style={{ color: '#666', fontSize: '0.85rem' }}>Brand Excellence</p>
          </motion.div>

          {/* X */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #E63946, #B82D38)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}
          >
            ×
          </motion.div>

          {/* Quick Dry Cleaning */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: '#1f1f1f',
              border: '3px solid #457B9D',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              margin: '0 auto 15px'
            }}>
              💻
            </div>
            <h3 style={{ color: '#457B9D', fontSize: '1.2rem' }}>Quick Dry Cleaning</h3>
            <p style={{ color: '#666', fontSize: '0.85rem' }}>Tech Excellence</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Reasons */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginTop: '25px' }}>
        {reasons.map((reason, i) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            style={{
              background: '#1f1f1f',
              borderRadius: '12px',
              padding: '20px',
              textAlign: 'center',
              borderTop: '3px solid #E63946'
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{reason.icon}</div>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '8px', color: '#fff' }}>{reason.title}</h4>
            <p style={{ fontSize: '0.8rem', color: '#666' }}>{reason.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Slide13
