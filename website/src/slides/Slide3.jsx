import { motion } from 'framer-motion'

const Slide3 = () => {
  return (
    <div className="slide">
      <span className="slide-number">03</span>

      <motion.h1
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Enterprise Architecture
      </motion.h1>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Centralized Control with Decentralized Operations
      </motion.p>

      {/* Architecture Diagram */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginTop: '30px', width: '100%' }}>

        {/* HQ Level */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ flex: '0 0 280px' }}
        >
          <div style={{
            background: 'linear-gradient(135deg, #E63946, #B82D38)',
            borderRadius: '16px',
            padding: '25px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🏢</div>
            <h3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '10px' }}>Enterprise Admin</h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>(HQ)</p>
            <div style={{
              marginTop: '15px',
              padding: '10px',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '8px',
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.9)'
            }}>
              Full visibility & control<br/>across all regions
            </div>
          </div>
        </motion.div>

        {/* Arrows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: '#E63946', fontSize: '1.5rem' }}
        >
          <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
          <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}>→</motion.span>
          <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}>→</motion.span>
        </motion.div>

        {/* Region/Store Level */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{ flex: 1 }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
            {/* Regional */}
            <div style={{
              background: '#1f1f1f',
              borderRadius: '16px',
              padding: '20px',
              border: '1px solid #457B9D'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                <span style={{ fontSize: '2rem' }}>🌍</span>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#457B9D' }}>Regional Admin</h4>
                  <p style={{ fontSize: '0.8rem', color: '#666' }}>Multi-store management</p>
                </div>
              </div>
              <ul style={{ listStyle: 'none', fontSize: '0.85rem', color: '#a0a0a0' }}>
                <li style={{ marginBottom: '8px' }}>✓ Region-specific controls</li>
                <li style={{ marginBottom: '8px' }}>✓ Store performance monitoring</li>
                <li>✓ Local team management</li>
              </ul>
            </div>

            {/* Store */}
            <div style={{
              background: '#1f1f1f',
              borderRadius: '16px',
              padding: '20px',
              border: '1px solid #10b981'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                <span style={{ fontSize: '2rem' }}>🏪</span>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: '#10b981' }}>Store Owner</h4>
                  <p style={{ fontSize: '0.8rem', color: '#666' }}>Day-to-day operations</p>
                </div>
              </div>
              <ul style={{ listStyle: 'none', fontSize: '0.85rem', color: '#a0a0a0' }}>
                <li style={{ marginBottom: '8px' }}>✓ Order management</li>
                <li style={{ marginBottom: '8px' }}>✓ Customer service</li>
                <li>✓ Within brand rules</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{
          marginTop: '30px',
          padding: '15px 25px',
          background: 'rgba(230,57,70,0.1)',
          borderRadius: '10px',
          display: 'inline-block'
        }}
      >
        <p style={{ color: '#a0a0a0', fontSize: '0.95rem' }}>
          <span style={{ color: '#E63946' }}>Centralized:</span> Policy, Pricing, Offers |
          <span style={{ color: '#10b981' }}> Decentralized:</span> Operations, Staff, Customer Service
        </p>
      </motion.div>
    </div>
  )
}

export default Slide3
