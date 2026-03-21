import { motion } from 'framer-motion'

const Slide9 = () => {
  const channels = [
    { icon: '📱', title: 'Mobile App', desc: 'Branded digital experience' },
    { icon: '🌐', title: 'Website', desc: 'Online booking portal' },
    { icon: '💬', title: 'WhatsApp', desc: 'Automated updates' },
    { icon: '📧', title: 'SMS/Email', desc: 'Notifications' },
    { icon: '🏪', title: 'Walk-in', desc: 'In-store POS' }
  ]

  return (
    <div className="slide">
      <span className="slide-number">09</span>

      <motion.h1
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Omni-Channel Customer Experience
      </motion.h1>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Consistent Pressto-branded communications across all touchpoints
      </motion.p>

      {/* Channels Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '15px', marginTop: '25px' }}>
        {channels.map((channel, i) => (
          <motion.div
            key={channel.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            style={{
              background: '#1f1f1f',
              borderRadius: '16px',
              padding: '25px 15px',
              textAlign: 'center',
              border: '1px solid #333'
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: i * 0.2 }}
              style={{ fontSize: '2.5rem', marginBottom: '15px' }}
            >
              {channel.icon}
            </motion.div>
            <h4 style={{ fontSize: '1rem', marginBottom: '8px', color: '#fff' }}>{channel.title}</h4>
            <p style={{ fontSize: '0.8rem', color: '#666' }}>{channel.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{
          marginTop: '25px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '15px'
        }}
      >
        {[
          { icon: '🧾', title: 'Digital Invoices', desc: 'Branded invoices' },
          { icon: '🔔', title: 'Notifications', desc: 'SMS/WhatsApp' },
          { icon: '📦', title: 'Pickup Links', desc: 'Online requests' },
          { icon: '💳', title: 'Payments', desc: 'Multiple options' }
        ].map((feature, i) => (
          <div key={feature.title} style={{
            background: 'rgba(230,57,70,0.1)',
            borderRadius: '12px',
            padding: '20px',
            textAlign: 'center',
            border: '1px solid rgba(230,57,70,0.2)'
          }}>
            <span style={{ fontSize: '1.5rem' }}>{feature.icon}</span>
            <p style={{ color: '#a0a0a0', fontSize: '0.9rem', marginTop: '8px' }}>{feature.title}</p>
            <p style={{ color: '#666', fontSize: '0.75rem' }}>{feature.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Brand Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
        style={{
          marginTop: '20px',
          padding: '12px 20px',
          background: '#1f1f1f',
          borderRadius: '25px',
          display: 'inline-block'
        }}
      >
        <span style={{ color: '#E63946', fontWeight: '600' }}>All communications remain </span>
        <span style={{ color: '#fff', fontWeight: '600' }}>Pressto-branded</span>
      </motion.div>
    </div>
  )
}

export default Slide9
