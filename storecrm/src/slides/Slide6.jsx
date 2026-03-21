import { motion } from 'framer-motion'

const Slide6 = () => {
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
          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontWeight: '700', margin: 0 }}>QDC Home Pickup & Delivery</h2>
        </div>
        <p style={{ color: '#666', fontSize: '1rem', marginTop: '12px', fontWeight: '500' }}>
          Pickup & Delivery Management
        </p>
      </motion.div>

      {/* Flow */}
      <motion.div
        style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px', justifyContent: 'center', flexWrap: 'wrap' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div style={{ background: '#e3f2fd', padding: '15px 20px', borderRadius: '10px', border: '2px solid #4fc3f7', textAlign: 'center', minWidth: '110px' }}>
          <div style={{ fontSize: '2rem' }}>📱</div>
          <div style={{ fontWeight: '700', fontSize: '0.85rem', marginTop: '5px', color: '#1a1a1a' }}>Customer</div>
          <div style={{ fontSize: '0.7rem', color: '#666' }}>Book</div>
        </div>
        <span style={{ fontSize: '1.5rem', color: '#4fc3f7' }}>→</span>
        <div style={{ background: '#f8f9fa', padding: '15px 20px', borderRadius: '10px', border: '1px solid #e0e0e0', textAlign: 'center', minWidth: '110px' }}>
          <div style={{ fontSize: '2rem' }}>🏢</div>
          <div style={{ fontWeight: '700', fontSize: '0.85rem', marginTop: '5px', color: '#1a1a1a' }}>CRM</div>
          <div style={{ fontSize: '0.7rem', color: '#666' }}>Process</div>
        </div>
        <span style={{ fontSize: '1.5rem', color: '#4fc3f7' }}>→</span>
        <div style={{ background: '#f8f9fa', padding: '15px 20px', borderRadius: '10px', border: '1px solid #e0e0e0', textAlign: 'center', minWidth: '110px' }}>
          <div style={{ fontSize: '2rem' }}>👨‍💼</div>
          <div style={{ fontWeight: '700', fontSize: '0.85rem', marginTop: '5px', color: '#1a1a1a' }}>Manager</div>
          <div style={{ fontSize: '0.7rem', color: '#666' }}>Assign</div>
        </div>
        <span style={{ fontSize: '1.5rem', color: '#4fc3f7' }}>→</span>
        {/* Bike */}
        <div style={{ width: '60px', height: '40px' }}>
          <svg viewBox="0 0 60 40" style={{ width: '100%', height: '100%' }}>
            <path d="M12 25 L24 15 L42 15 L48 25 M24 15 L24 25 M12 25 L18 25" stroke="#25D366" strokeWidth="2" fill="none"/>
            <circle cx="12" cy="25" r="8" stroke="#25D366" strokeWidth="2" fill="none"/>
            <circle cx="48" cy="25" r="8" stroke="#25D366" strokeWidth="2" fill="none"/>
            <circle cx="27" cy="10" r="4" fill="#25D366"/>
            <path d="M27 14 L24 20 L30 20" fill="#25D366"/>
            <rect x="30" y="12" width="8" height="7" rx="1" fill="#25D366"/>
          </svg>
        </div>
        <span style={{ fontSize: '1.5rem', color: '#4fc3f7' }}>→</span>
        <div style={{ background: '#e8f5e9', padding: '15px 20px', borderRadius: '10px', border: '2px solid #25D366', textAlign: 'center', minWidth: '110px' }}>
          <div style={{ fontWeight: '700', fontSize: '0.85rem', marginTop: '5px', color: '#25D366' }}>Delivery Agent</div>
          <div style={{ fontSize: '0.7rem', color: '#666' }}>Pickup & Deliver</div>
        </div>
      </motion.div>

      {/* Features */}
      <motion.div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', maxWidth: '850px', margin: '0 auto' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div style={{ background: '#f8f9fa', padding: '18px', borderRadius: '10px', border: '1px solid #e0e0e0', textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>📅</div>
          <div style={{ fontWeight: '600', fontSize: '0.9rem', color: '#1a1a1a' }}>Slot Booking</div>
        </div>
        <div style={{ background: '#f8f9fa', padding: '18px', borderRadius: '10px', border: '1px solid #e0e0e0', textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🗺️</div>
          <div style={{ fontWeight: '600', fontSize: '0.9rem', color: '#1a1a1a' }}>Route Planning</div>
        </div>
        <div style={{ background: '#f8f9fa', padding: '18px', borderRadius: '10px', border: '1px solid #e0e0e0', textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>⚡</div>
          <div style={{ fontWeight: '600', fontSize: '0.9rem', color: '#1a1a1a' }}>Auto Assignment</div>
        </div>
        <div style={{ background: '#f8f9fa', padding: '18px', borderRadius: '10px', border: '1px solid #e0e0e0', textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>📍</div>
          <div style={{ fontWeight: '600', fontSize: '0.9rem', color: '#1a1a1a' }}>Zone Coverage</div>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide6