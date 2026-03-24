import { motion } from 'framer-motion'

const Slide18 = () => {
  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: '48px' }}
      >
        Powering Scalable Franchise Growth — <span className="highlight">Together</span>
      </motion.h2>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ fontSize: '22px', maxWidth: '900px' }}
      >
        Standardize operations, enforce business rules, and enable every franchise location to perform with consistency, control, and profitability—driven centrally through Apex.
      </motion.p>

      {/* Key Points */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{
          display: 'flex',
          gap: '30px',
          marginTop: '40px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
      >
        {[
          { icon: '🎯', text: 'Centralized control with local execution' },
          { icon: '⚡', text: 'Faster franchise onboarding and rollout' },
          { icon: '🎂', text: 'Consistent customer experience across all locations' },
          { icon: '📊', text: 'Data-driven decision-making at every level' },
        ].map((point, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6 + i * 0.1, type: 'spring' }}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '16px',
              padding: '24px',
              width: '240px',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '36px', marginBottom: '12px' }}>{point.icon}</div>
            <div style={{ color: '#fff', fontSize: '14px', fontWeight: '500' }}>{point.text}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Closing Statement */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="impact-line"
        style={{ marginTop: '50px', fontSize: '22px' }}
      >
        Let's build a high-performance franchise network with <span className="highlight">Apex</span> at the core.
      </motion.p>

      {/* Navigation hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{ marginTop: '50px', opacity: 0.3, fontSize: '0.9rem' }}
      >
        Use arrow keys to navigate
      </motion.p>
    </div>
  )
}

export default Slide18
