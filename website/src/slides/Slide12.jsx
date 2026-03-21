import { motion } from 'framer-motion'

const Slide12 = () => {
  const features = [
    { icon: '☁️', title: 'Cloud Infrastructure', desc: 'Enterprise-grade, scalable & reliable' },
    { icon: '🔐', title: 'Role-Based Access', desc: 'Granular permissions per user role' },
    { icon: '🔒', title: 'Encrypted Data', desc: 'Bank-grade encryption at rest & transit' },
    { icon: '📊', title: 'Compliance Ready', desc: 'Audit trails & regulatory compliance' }
  ]

  return (
    <div className="slide">
      <span className="slide-number">12</span>

      <motion.h1
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Security & Data Ownership
      </motion.h1>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Enterprise-grade security with complete data ownership
      </motion.p>

      {/* Security Shield Visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{
          marginTop: '25px',
          padding: '30px',
          background: 'linear-gradient(135deg, #1f1f1f, #0a0a0a)',
          borderRadius: '20px',
          border: '1px solid rgba(230,57,70,0.3)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '50px' }}>

          {/* Shield */}
          <motion.div
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
            style={{
              width: '150px',
              height: '180px',
              background: 'linear-gradient(135deg, #E63946, #B82D38)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '5rem',
              boxShadow: '0 0 50px rgba(230,57,70,0.4)'
            }}
          >
            🛡️
          </motion.div>

          {/* Data Ownership */}
          <div style={{ flex: 1 }}>
            <h3 style={{ color: '#E63946', fontSize: '1.3rem', marginBottom: '20px' }}>
              Pressto Retains Full Data Ownership
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
              {[
                'Customer database',
                'Transaction history',
                'Business intelligence',
                'Pricing strategies'
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px',
                  background: '#1f1f1f',
                  borderRadius: '8px'
                }}>
                  <span style={{ color: '#10b981' }}>✓</span>
                  <span style={{ color: '#a0a0a0', fontSize: '0.9rem' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginTop: '25px' }}>
        {features.map((feature, i) => (
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

export default Slide12
