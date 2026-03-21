import { motion } from 'framer-motion'

const Slide3 = () => {
  return (
    <div className="slide" style={{ background: '#ffffff', padding: '40px 50px' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '25px' }}
      >
        <div style={{ background: '#4fc3f7', padding: '12px 30px', borderRadius: '8px', display: 'inline-block' }}>
          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontWeight: '700', margin: 0 }}>QDC Delivery Agent App</h2>
        </div>
        <p style={{ color: '#666', fontSize: '1rem', marginTop: '12px', fontWeight: '500' }}>
          Delivery Management
        </p>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', maxWidth: '900px', margin: '0 auto' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* Left: Rider on Bike */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '200px', height: '140px' }}>
            <svg viewBox="0 0 220 140" style={{ width: '100%', height: '100%' }}>
              {/* Bike Frame */}
              <path d="M45 90 L85 50 L155 50 L175 90 M85 50 L85 90 M45 90 L65 90" stroke="#4fc3f7" strokeWidth="4" fill="none"/>
              {/* Wheels */}
              <circle cx="45" cy="90" r="28" stroke="#4fc3f7" strokeWidth="4" fill="none"/>
              <circle cx="175" cy="90" r="28" stroke="#4fc3f7" strokeWidth="4" fill="none"/>
              {/* Handlebar */}
              <path d="M155 50 L145 35 L165 35" stroke="#4fc3f7" strokeWidth="3" fill="none"/>
              {/* Seat */}
              <path d="M75 50 L95 50" stroke="#4fc3f7" strokeWidth="4"/>
              {/* Rider Body */}
              <circle cx="90" cy="38" r="14" fill="#4fc3f7"/>
              <path d="M90 52 L78 75 L102 75" fill="#4fc3f7"/>
              {/* Delivery Bag on back */}
              <rect x="100" y="42" width="30" height="24" rx="4" fill="#25D366"/>
              <text x="115" y="58" fill="#fff" fontSize="10" textAnchor="middle" fontWeight="bold">QDC</text>
              {/* Speed lines */}
              <path d="M10 95 L30 95" stroke="#4fc3f7" strokeWidth="2" strokeDasharray="4,4"/>
              <path d="M5 80 L25 80" stroke="#4fc3f7" strokeWidth="2" strokeDasharray="4,4"/>
            </svg>
          </div>
        </div>

        {/* Right: Features */}
        <div>
          <h3 style={{ color: '#1a1a1a', fontSize: '1.2rem', fontWeight: '700', marginBottom: '15px' }}>App Features</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '10px', border: '1px solid #e0e0e0' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🔔</div>
              <div style={{ fontWeight: '600', fontSize: '0.95rem', color: '#1a1a1a' }}>Order Alerts</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>Push notifications</div>
            </div>
            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '10px', border: '1px solid #e0e0e0' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🗺️</div>
              <div style={{ fontWeight: '600', fontSize: '0.95rem', color: '#1a1a1a' }}>Navigation</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>Google Maps</div>
            </div>
            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '10px', border: '1px solid #e0e0e0' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>📸</div>
              <div style={{ fontWeight: '600', fontSize: '0.95rem', color: '#1a1a1a' }}>Photo Proof</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>Before/after</div>
            </div>
            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '10px', border: '1px solid #e0e0e0' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>💰</div>
              <div style={{ fontWeight: '600', fontSize: '0.95rem', color: '#1a1a1a' }}>Earnings</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>Track income</div>
            </div>
            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '10px', border: '1px solid #e0e0e0' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>📄</div>
              <div style={{ fontWeight: '600', fontSize: '0.95rem', color: '#1a1a1a' }}>Digital Invoice</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>Generate bills</div>
            </div>
            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '10px', border: '1px solid #e0e0e0' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>✍️</div>
              <div style={{ fontWeight: '600', fontSize: '0.95rem', color: '#1a1a1a' }}>E-Sign</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>Digital signature</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide3