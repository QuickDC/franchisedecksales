import { motion } from 'framer-motion'

const Slide9 = () => {
  return (
    <div className="slide">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="slide-title">The ROI That Matters</h2>
        <p className="slide-subtitle">Numbers that speak louder.</p>
      </motion.div>

      {/* Big Stats */}
      <motion.div
        style={{ display: 'flex', gap: '40px', marginTop: '40px', justifyContent: 'center', flexWrap: 'wrap' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', fontWeight: '800', color: 'var(--accent)' }}>↑30%</div>
          <div style={{ fontSize: '1.2rem', fontWeight: '600', marginTop: '10px' }}>More Orders</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Multi-channel reach</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', fontWeight: '800', color: 'var(--success)' }}>↓50%</div>
          <div style={{ fontSize: '1.2rem', fontWeight: '600', marginTop: '10px' }}>Less Errors</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Automated workflows</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', fontWeight: '800', color: 'var(--warning)' }}>⏱️</div>
          <div style={{ fontSize: '1.2rem', fontWeight: '600', marginTop: '10px' }}>Faster</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>End-to-end automation</div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', fontWeight: '800', color: 'var(--danger)' }}>💯%</div>
          <div style={{ fontSize: '1.2rem', fontWeight: '600', marginTop: '10px' }}>Visibility</div>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Complete control</div>
        </div>
      </motion.div>

      {/* Bottom Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        style={{ marginTop: '50px', padding: '25px', background: 'linear-gradient(135deg, rgba(79, 195, 247, 0.15), rgba(79, 195, 247, 0.05))', borderRadius: '20px', border: '1px solid var(--accent)', maxWidth: '600px' }}
      >
        <div style={{ fontSize: '1.3rem', textAlign: 'center' }}>
          <strong>Less time managing.</strong> <span style={{ color: 'var(--text-secondary)' }}>More time growing.</span>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide9