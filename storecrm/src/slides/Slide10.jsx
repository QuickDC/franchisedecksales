import { motion } from 'framer-motion'

const Slide10 = () => {
  return (
    <div className="slide">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div style={{ fontSize: '5rem', marginBottom: '20px' }}>🚀</div>
        <h1 className="slide-title" style={{ fontSize: '3rem' }}>
          Ready to Transform?
        </h1>
      </motion.div>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ fontSize: '1.4rem', marginTop: '20px' }}
      >
        Let's build your laundry business together.
      </motion.p>

      {/* What You Get */}
      <motion.div
        style={{ display: 'flex', gap: '25px', marginTop: '40px', flexWrap: 'wrap', justifyContent: 'center' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px 30px', borderRadius: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.5rem' }}>🌐</span> Website
        </div>
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px 30px', borderRadius: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.5rem' }}>💬</span> WhatsApp Bot
        </div>
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px 30px', borderRadius: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.5rem' }}>📱</span> Mobile App
        </div>
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px 30px', borderRadius: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.5rem' }}>🏢</span> CRM
        </div>
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '20px 30px', borderRadius: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.5rem' }}>🚴</span> Rider App
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        style={{ marginTop: '50px' }}
      >
        <div style={{ fontSize: '1.5rem', color: 'var(--accent)', fontWeight: '600' }}>Thank You!</div>
        <div style={{ marginTop: '15px', fontSize: '1rem', color: 'var(--text-secondary)' }}>questions@company.com</div>
      </motion.div>
    </div>
  )
}

export default Slide10