import { motion } from 'framer-motion'

const Slide6 = () => {
  const campaigns = [
    { type: 'Brand-wide Offers', icon: '🎯', color: '#E63946' },
    { type: 'Promo Codes', icon: '🏷️', color: '#457B9D' },
    { type: 'Seasonal Campaigns', icon: '🎄', color: '#10b981' },
    { type: 'Loyalty Wallet', icon: '💳', color: '#f59e0b' }
  ]

  return (
    <div className="slide">
      <span className="slide-number">06</span>

      <motion.h1
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Offers, Promotions & Loyalty
      </motion.h1>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Central Campaign Management - Unified Across Network
      </motion.p>

      {/* Campaign Flow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{
          background: 'linear-gradient(135deg, #1f1f1f, #141414)',
          borderRadius: '20px',
          padding: '30px',
          marginTop: '20px',
          border: '1px solid rgba(230,57,70,0.2)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px' }}>
          {/* HQ Campaign Builder */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #E63946, #B82D38)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              margin: '0 auto',
              boxShadow: '0 0 40px rgba(230,57,70,0.4)'
            }}>
              🎯
            </div>
            <h3 style={{ color: '#E63946', marginTop: '15px', fontSize: '1.1rem' }}>Campaign Manager</h3>
            <p style={{ color: '#666', fontSize: '0.85rem' }}>HQ creates offers</p>
          </div>

          {/* Arrow */}
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{ color: '#E63946', fontSize: '2rem' }}
          >
            ➜
          </motion.div>

          {/* Campaign Types */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
            {campaigns.map((campaign, i) => (
              <motion.div
                key={campaign.type}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                style={{
                  background: '#2a2a2a',
                  borderRadius: '12px',
                  padding: '20px',
                  textAlign: 'center',
                  border: `2px solid ${campaign.color}40`
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{campaign.icon}</div>
                <h4 style={{ fontSize: '0.95rem', color: campaign.color }}>{campaign.type}</h4>
              </motion.div>
            ))}
          </div>

          {/* Arrow */}
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
            style={{ color: '#E63946', fontSize: '2rem' }}
          >
            ➜
          </motion.div>

          {/* All Stores */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: '#2a2a2a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2.5rem',
              margin: '0 auto',
              border: '2px solid #333'
            }}>
              🏪🏪🏪
            </div>
            <h3 style={{ color: '#fff', marginTop: '15px', fontSize: '1rem' }}>All Stores</h3>
            <p style={{ color: '#666', fontSize: '0.85rem' }}>Deploy instantly</p>
          </div>
        </div>
      </motion.div>

      {/* Loyalty Wallet */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{
          marginTop: '25px',
          padding: '20px',
          background: 'rgba(245,158,11,0.1)',
          borderRadius: '12px',
          border: '1px solid rgba(245,158,11,0.2)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
          <span style={{ fontSize: '1.5rem' }}>💳</span>
          <span style={{ color: '#f59e0b', fontWeight: '600' }}>Unified Loyalty Wallet</span>
          <span style={{ color: '#666' }}>|</span>
          <span style={{ color: '#a0a0a0', fontSize: '0.9rem' }}>Earn & redemption rules centrally managed</span>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide6
