import { motion } from 'framer-motion'

const Slide2 = () => {
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
          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontWeight: '700', margin: 0 }}>QDC On-Demand App</h2>
        </div>
        <p style={{ color: '#666', fontSize: '1rem', marginTop: '12px', fontWeight: '500' }}>
          Customer App for iOS & Android
        </p>
      </motion.div>

      {/* Content Grid */}
      <motion.div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', maxWidth: '900px', margin: '0 auto' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* Left: Phone Mockup */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{
            width: '180px',
            height: '360px',
            background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)',
            borderRadius: '25px',
            border: '3px solid #333',
            padding: '12px',
            position: 'relative'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '15px' }}>
              <div style={{ fontSize: '1.8rem' }}>👕✨</div>
              <div style={{ fontWeight: '600', fontSize: '0.9rem', color: '#fff' }}>QDC App</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ background: 'rgba(79,195,247,0.2)', padding: '10px', borderRadius: '8px', fontSize: '0.8rem', color: '#fff' }}>📅 Schedule Pickup</div>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '8px', fontSize: '0.8rem', color: '#fff' }}>🛒 Build Order</div>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '8px', fontSize: '0.8rem', color: '#fff' }}>📦 My Orders</div>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '8px', fontSize: '0.8rem', color: '#fff' }}>📍 Track Delivery</div>
              <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px', borderRadius: '8px', fontSize: '0.8rem', color: '#fff' }}>💳 Payments</div>
            </div>
          </div>
        </div>

        {/* Right: Features */}
        <div>
          <h3 style={{ color: '#1a1a1a', fontSize: '1.2rem', fontWeight: '700', marginBottom: '15px' }}>App Features</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '10px', border: '1px solid #e0e0e0' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>📱</div>
              <div style={{ fontWeight: '600', fontSize: '0.95rem', color: '#1a1a1a' }}>iOS & Android</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>Native apps</div>
            </div>
            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '10px', border: '1px solid #e0e0e0' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>🔔</div>
              <div style={{ fontWeight: '600', fontSize: '0.95rem', color: '#1a1a1a' }}>Push Notifications</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>Real-time updates</div>
            </div>
            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '10px', border: '1px solid #e0e0e0' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>💳</div>
              <div style={{ fontWeight: '600', fontSize: '0.95rem', color: '#1a1a1a' }}>Digital Payments</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>UPI, Cards, Wallet</div>
            </div>
            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '10px', border: '1px solid #e0e0e0' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>📍</div>
              <div style={{ fontWeight: '600', fontSize: '0.95rem', color: '#1a1a1a' }}>Live Tracking</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>GPS location</div>
            </div>
            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '10px', border: '1px solid #e0e0e0' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>📋</div>
              <div style={{ fontWeight: '600', fontSize: '0.95rem', color: '#1a1a1a' }}>Order History</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>One tap reorder</div>
            </div>
            <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '10px', border: '1px solid #e0e0e0' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>⭐</div>
              <div style={{ fontWeight: '600', fontSize: '0.95rem', color: '#1a1a1a' }}>Loyalty Program</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>Points & rewards</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide2