import { motion } from 'framer-motion'

const Slide5 = () => {
  return (
    <div className="slide">
      <span className="slide-number">05</span>

      <motion.h1
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Price List & Service Control
      </motion.h1>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Enterprise Price Governance - Centralized Control
      </motion.p>

      {/* Flow Diagram */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '30px', width: '100%' }}>

        {/* HQ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            background: 'linear-gradient(135deg, #E63946, #B82D38)',
            borderRadius: '16px',
            padding: '25px',
            flex: '0 0 180px'
          }}
        >
          <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🏢</div>
          <h3 style={{ color: 'white', fontSize: '1rem' }}>Pressto HQ</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem' }}>Defines Master Price List</p>
        </motion.div>

        {/* Arrow */}
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ color: '#E63946', fontSize: '2rem' }}
        >
          ➜
        </motion.div>

        {/* Price Rules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{ flex: 1 }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
            {[
              { icon: '💰', title: 'Master Price List', desc: 'Central pricing defined by HQ' },
              { icon: '🌍', title: 'Regional Deviations', desc: 'Enforce uniform or regional pricing' },
              { icon: '👔', title: 'Fabric Rules', desc: 'Standardized fabric & garment rules' },
              { icon: '🚀', title: 'Fast Onboarding', desc: 'Quick setup for new stores' }
            ].map((item, i) => (
              <div key={i} style={{
                background: '#1f1f1f',
                borderRadius: '12px',
                padding: '20px',
                border: '1px solid #333'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                  <h4 style={{ fontSize: '0.95rem', color: '#fff' }}>{item.title}</h4>
                </div>
                <p style={{ fontSize: '0.8rem', color: '#666' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Store Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '30px' }}
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{
            width: '50px',
            height: '50px',
            borderRadius: '10px',
            background: '#2a2a2a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            border: '1px solid #333'
          }}>
            🏪
          </div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', color: '#666', fontSize: '0.9rem', marginLeft: '10px' }}>
          + More stores...
        </div>
      </motion.div>
    </div>
  )
}

export default Slide5
