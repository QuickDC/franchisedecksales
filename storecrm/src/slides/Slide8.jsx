import { motion } from 'framer-motion'

const Slide8 = () => {
  return (
    <div className="slide" style={{ background: '#ffffff', padding: '40px 50px' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        <div style={{ background: '#4fc3f7', padding: '12px 30px', borderRadius: '8px', display: 'inline-block' }}>
          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontWeight: '700', margin: 0 }}>Data Flow & Integration</h2>
        </div>
        <p style={{ color: '#666', fontSize: '1rem', marginTop: '12px', fontWeight: '500' }}>
          Everything connected. Seamless experience.
        </p>
      </motion.div>

      {/* Architecture Diagram */}
      <motion.div
        style={{ position: 'relative', width: '100%', maxWidth: '900px', height: '320px', margin: '0 auto' }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* Top Layer - Customer Touchpoints */}
        <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '12px' }}>
          <div style={{ background: '#25D366', padding: '8px 14px', borderRadius: '8px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem' }}>💬</div>
            <div style={{ fontSize: '0.6rem', fontWeight: '600', marginTop: '3px', color: '#fff' }}>WhatsApp</div>
          </div>
          <div style={{ background: '#4fc3f7', padding: '8px 14px', borderRadius: '8px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem' }}>🌐</div>
            <div style={{ fontSize: '0.6rem', fontWeight: '600', marginTop: '3px', color: '#fff' }}>Website</div>
          </div>
          <div style={{ background: '#f44336', padding: '8px 14px', borderRadius: '8px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem' }}>📱</div>
            <div style={{ fontSize: '0.6rem', fontWeight: '600', marginTop: '3px', color: '#fff' }}>Customer App</div>
          </div>
          <div style={{ background: '#ff9800', padding: '8px 14px', borderRadius: '8px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem' }}>📞</div>
            <div style={{ fontSize: '0.6rem', fontWeight: '600', marginTop: '3px', color: '#fff' }}>Phone/CRM</div>
          </div>
        </div>

        {/* Arrow */}
        <div style={{ position: 'absolute', top: '70px', left: '50%', transform: 'translateX(-50%)', color: '#4fc3f7', fontSize: '1rem' }}>↓</div>

        {/* Central CRM */}
        <div style={{
          position: 'absolute',
          top: '95px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '120px',
          height: '60px',
          background: 'linear-gradient(135deg, #4fc3f7, #29b6f6)',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          boxShadow: '0 4px 15px rgba(79, 195, 247, 0.3)'
        }}>
          <div style={{ fontSize: '1.5rem' }}>🏢</div>
          <div style={{ fontWeight: '700', fontSize: '0.75rem', color: '#fff' }}>QDC CRM</div>
        </div>

        {/* Left Side - Operations */}
        <div style={{ position: 'absolute', top: '100px', left: '30px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ background: '#f8f9fa', padding: '10px 14px', borderRadius: '8px', borderLeft: '3px solid #ff9800' }}>
            <div style={{ fontSize: '1rem' }}>🏪</div>
            <div style={{ fontSize: '0.65rem', fontWeight: '600', color: '#1a1a1a' }}>Store Mgmt</div>
          </div>
          <div style={{ background: '#f8f9fa', padding: '10px 14px', borderRadius: '8px', borderLeft: '3px solid #f44336' }}>
            <div style={{ fontSize: '1rem' }}>🏭</div>
            <div style={{ fontSize: '0.65rem', fontWeight: '600', color: '#1a1a1a' }}>Workshop</div>
          </div>
        </div>

        {/* Right Side - Delivery */}
        <div style={{ position: 'absolute', top: '100px', right: '30px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ background: '#f8f9fa', padding: '10px 14px', borderRadius: '8px', borderRight: '3px solid #25D366' }}>
            <div style={{ fontSize: '1rem' }}>🏠</div>
            <div style={{ fontSize: '0.65rem', fontWeight: '600', color: '#1a1a1a' }}>Pickup/Delivery</div>
          </div>
          <div style={{ background: '#f8f9fa', padding: '10px 14px', borderRadius: '8px', borderRight: '3px solid #25D366', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2">
              <circle cx="5" cy="17" r="3"/>
              <circle cx="19" cy="17" r="3"/>
              <path d="M5 17 L9 17 L12 10 L15 10"/>
            </svg>
            <div style={{ fontSize: '0.65rem', fontWeight: '600', color: '#1a1a1a' }}>Delivery Agents</div>
          </div>
        </div>

        {/* Bottom - Super Admin */}
        <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', background: '#f8f9fa', padding: '10px 20px', borderRadius: '20px', border: '1px solid #e0e0e0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1rem' }}>👑</span>
            <span style={{ fontWeight: '600', fontSize: '0.8rem', color: '#1a1a1a' }}>Super Admin</span>
            <span style={{ color: '#666', fontSize: '0.7rem' }}>• Full Control</span>
          </div>
        </div>

        {/* Connection Lines */}
        <svg style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0, opacity: 0.4 }}>
          <line x1="50%" y1="65" x2="50%" y2="95" stroke="#4fc3f7" strokeWidth="2" strokeDasharray="4,4" />
          <line x1="280" y1="125" x2="130" y2="125" stroke="#ff9800" strokeWidth="2" strokeDasharray="4,4" />
          <line x1="280" y1="125" x2="620" y2="125" stroke="#25D366" strokeWidth="2" strokeDasharray="4,4" />
          <line x1="50%" y1="155" x2="50%" y2="250" stroke="#4fc3f7" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* Bottom Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        style={{ textAlign: 'center', marginTop: '10px' }}
      >
        <div style={{ fontSize: '0.85rem', color: '#4fc3f7', fontWeight: '500' }}>
          Real-time sync • Single source of truth • Automated workflows
        </div>
      </motion.div>
    </div>
  )
}

export default Slide8