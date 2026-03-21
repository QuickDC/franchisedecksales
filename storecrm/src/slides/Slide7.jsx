import { motion } from 'framer-motion'

const Slide7 = () => {
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
          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontWeight: '700', margin: 0 }}>QDC Super Admin</h2>
        </div>
        <p style={{ color: '#666', fontSize: '1rem', marginTop: '12px', fontWeight: '500' }}>
          Admin Dashboard
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginBottom: '25px', maxWidth: '850px', margin: '0 auto 25px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div style={{ background: '#e3f2fd', padding: '20px', borderRadius: '12px', textAlign: 'center', border: '1px solid #4fc3f7' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#4fc3f7' }}>📈</div>
          <div style={{ fontWeight: '600', marginTop: '8px', color: '#1a1a1a' }}>Analytics</div>
          <div style={{ fontSize: '0.75rem', color: '#666' }}>All stores</div>
        </div>
        <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', textAlign: 'center', border: '1px solid #e0e0e0' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#666' }}>🏪</div>
          <div style={{ fontWeight: '600', marginTop: '8px', color: '#1a1a1a' }}>Multi-Store</div>
          <div style={{ fontSize: '0.75rem', color: '#666' }}>Central control</div>
        </div>
        <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', textAlign: 'center', border: '1px solid #e0e0e0' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#666' }}>💰</div>
          <div style={{ fontWeight: '600', marginTop: '8px', color: '#1a1a1a' }}>Revenue</div>
          <div style={{ fontSize: '0.75rem', color: '#666' }}>Consolidated</div>
        </div>
        <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', textAlign: 'center', border: '1px solid #e0e0e0' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#666' }}>👥</div>
          <div style={{ fontWeight: '600', marginTop: '8px', color: '#1a1a1a' }}>Customers</div>
          <div style={{ fontSize: '0.75rem', color: '#666' }}>Database</div>
        </div>
      </motion.div>

      {/* Admin Features */}
      <motion.div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', maxWidth: '750px', margin: '0 auto' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '10px', border: '1px solid #e0e0e0', textAlign: 'center' }}>
          <div style={{ fontSize: '1.3rem', marginBottom: '6px' }}>⚙️</div>
          <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Settings</div>
          <div style={{ fontSize: '0.7rem', color: '#666' }}>Global config</div>
        </div>
        <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '10px', border: '1px solid #e0e0e0', textAlign: 'center' }}>
          <div style={{ fontSize: '1.3rem', marginBottom: '6px' }}>📊</div>
          <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Reports</div>
          <div style={{ fontSize: '0.7rem', color: '#666' }}>Customizable</div>
        </div>
        <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '10px', border: '1px solid #e0e0e0', textAlign: 'center' }}>
          <div style={{ fontSize: '1.3rem', marginBottom: '6px' }}>🔒</div>
          <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Roles & Access</div>
          <div style={{ fontSize: '0.7rem', color: '#666' }}>Permissions</div>
        </div>
        <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '10px', border: '1px solid #e0e0e0', textAlign: 'center' }}>
          <div style={{ fontSize: '1.3rem', marginBottom: '6px' }}>📱</div>
          <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>App Management</div>
          <div style={{ fontSize: '0.7rem', color: '#666' }}>Push updates</div>
        </div>
        <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '10px', border: '1px solid #e0e0e0', textAlign: 'center' }}>
          <div style={{ fontSize: '1.3rem', marginBottom: '6px' }}>💵</div>
          <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Pricing</div>
          <div style={{ fontSize: '0.7rem', color: '#666' }}>Rate management</div>
        </div>
        <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '10px', border: '1px solid #e0e0e0', textAlign: 'center' }}>
          <div style={{ fontSize: '1.3rem', marginBottom: '6px' }}>🔔</div>
          <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Notifications</div>
          <div style={{ fontSize: '0.7rem', color: '#666' }}>Bulk alerts</div>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide7