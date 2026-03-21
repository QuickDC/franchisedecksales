import { motion } from 'framer-motion'

const Slide5 = () => {
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
          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontWeight: '700', margin: 0 }}>QDC Workshop</h2>
        </div>
        <p style={{ color: '#666', fontSize: '1rem', marginTop: '12px', fontWeight: '500' }}>
          Production Management
        </p>
      </motion.div>

      {/* Workshop Flow */}
      <motion.div
        style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px', justifyContent: 'center', flexWrap: 'wrap' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div style={{ background: '#f8f9fa', padding: '12px 18px', borderRadius: '10px', border: '1px solid #e0e0e0', textAlign: 'center' }}>
          <div style={{ fontSize: '1.8rem' }}>📥</div>
          <div style={{ fontWeight: '600', fontSize: '0.85rem', marginTop: '5px', color: '#1a1a1a' }}>Receive</div>
        </div>
        <span style={{ fontSize: '1.2rem', color: '#4fc3f7' }}>→</span>
        <div style={{ background: '#f8f9fa', padding: '12px 18px', borderRadius: '10px', border: '1px solid #e0e0e0', textAlign: 'center' }}>
          <div style={{ fontSize: '1.8rem' }}>🔍</div>
          <div style={{ fontWeight: '600', fontSize: '0.85rem', marginTop: '5px', color: '#1a1a1a' }}>QC</div>
        </div>
        <span style={{ fontSize: '1.2rem', color: '#4fc3f7' }}>→</span>
        <div style={{ background: '#f8f9fa', padding: '12px 18px', borderRadius: '10px', border: '1px solid #e0e0e0', textAlign: 'center' }}>
          <div style={{ fontSize: '1.8rem' }}>🏷️</div>
          <div style={{ fontWeight: '600', fontSize: '0.85rem', marginTop: '5px', color: '#1a1a1a' }}>Tag</div>
        </div>
        <span style={{ fontSize: '1.2rem', color: '#4fc3f7' }}>→</span>
        <div style={{ background: '#f8f9fa', padding: '12px 18px', borderRadius: '10px', border: '1px solid #e0e0e0', textAlign: 'center' }}>
          <div style={{ fontSize: '1.8rem' }}>👕</div>
          <div style={{ fontWeight: '600', fontSize: '0.85rem', marginTop: '5px', color: '#1a1a1a' }}>Process</div>
        </div>
        <span style={{ fontSize: '1.2rem', color: '#4fc3f7' }}>→</span>
        <div style={{ background: '#f8f9fa', padding: '12px 18px', borderRadius: '10px', border: '1px solid #e0e0e0', textAlign: 'center' }}>
          <div style={{ fontSize: '1.8rem' }}>✅</div>
          <div style={{ fontWeight: '600', fontSize: '0.85rem', marginTop: '5px', color: '#1a1a1a' }}>Finish</div>
        </div>
        <span style={{ fontSize: '1.2rem', color: '#4fc3f7' }}>→</span>
        <div style={{ background: '#f8f9fa', padding: '12px 18px', borderRadius: '10px', border: '1px solid #e0e0e0', textAlign: 'center' }}>
          <div style={{ fontSize: '1.8rem' }}>📦</div>
          <div style={{ fontWeight: '600', fontSize: '0.85rem', marginTop: '5px', color: '#1a1a1a' }}>Pack</div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', maxWidth: '850px', margin: '0 auto' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div style={{ background: '#f8f9fa', padding: '18px', borderRadius: '12px', border: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ fontSize: '1.8rem' }}>🏷️</div>
          <div>
            <div style={{ fontWeight: '700', fontSize: '1rem', color: '#1a1a1a' }}>QR Code Tagging</div>
            <div style={{ fontSize: '0.8rem', color: '#666' }}>Every garment tracked</div>
          </div>
        </div>
        <div style={{ background: '#f8f9fa', padding: '18px', borderRadius: '12px', border: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ fontSize: '1.8rem' }}>📊</div>
          <div>
            <div style={{ fontWeight: '700', fontSize: '1rem', color: '#1a1a1a' }}>Workstation Assignment</div>
            <div style={{ fontSize: '0.8rem', color: '#666' }}>Operator allocation</div>
          </div>
        </div>
        <div style={{ background: '#f8f9fa', padding: '18px', borderRadius: '12px', border: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ fontSize: '1.8rem' }}>⏱️</div>
          <div>
            <div style={{ fontWeight: '700', fontSize: '1rem', color: '#1a1a1a' }}>Production Tracking</div>
            <div style={{ fontSize: '0.8rem', color: '#666' }}>Real-time status</div>
          </div>
        </div>
        <div style={{ background: '#f8f9fa', padding: '18px', borderRadius: '12px', border: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ fontSize: '1.8rem' }}>⚠️</div>
          <div>
            <div style={{ fontWeight: '700', fontSize: '1rem', color: '#1a1a1a' }}>Issue Management</div>
            <div style={{ fontSize: '0.8rem', color: '#666' }}>Stains, damage alerts</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide5