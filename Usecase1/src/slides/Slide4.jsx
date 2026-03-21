import { motion } from 'framer-motion'

const Slide4 = () => {
  const features = {
    phase1: [
      { name: 'Store CRM - Basic', desc: 'Customer management, order intake' },
      { name: 'Store CRM - Order Management', desc: 'Order creation, tracking, status updates' },
      { name: 'Rider Assignment', desc: 'Manual/automatic rider allocation' },
      { name: 'Pickup & Delivery Tracking', desc: 'Real-time delivery status' },
      { name: 'WhatsApp/SMS Notifications', desc: 'Order alerts, status updates' },
      { name: 'Basic Reporting', desc: 'Sales, orders, rider performance' },
    ],
    phase2: [
      { name: 'Plant Management System', desc: 'Garment tracking through processing' },
      { name: 'Omni-Channel Acquisition', desc: 'Instagram, Google, Website integration' },
      { name: 'WhatsApp Bot', desc: 'Automated customer support' },
      { name: 'Mobile Apps', desc: 'Branded iOS/Android applications' },
      { name: 'Super Admin Dashboard', desc: 'Multi-store analytics & control' },
      { name: 'Referral System', desc: 'Customer referral program' },
      { name: 'Loyalty Points', desc: 'Points-based rewards' },
      { name: 'Prepaid Packages', desc: 'Subscription plans' },
      { name: 'Offers & Promotions', desc: 'Campaign management' },
      { name: 'Advanced Analytics', desc: 'AI-powered insights' },
    ]
  }

  return (
    <div className="slide perspective-container" style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      padding: '40px 50px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* 3D orbs */}
      <div className="orb-3d orb-3d-1" style={{ animationDelay: '-3s' }} />

      <motion.h2
        initial={{ opacity: 0, y: -20, rotateX: -10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: '2.8rem',
          fontWeight: '700',
          color: '#fff',
          marginBottom: '10px',
          textAlign: 'center',
          transform: 'translateZ(30px)'
        }}
      >
        Feature Roadmap
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{
          fontSize: '1.3rem',
          color: '#a5b4fc',
          textAlign: 'center',
          marginBottom: '25px',
          transform: 'translateZ(20px)'
        }}
      >
        Phase 1: Core Operations &nbsp;|&nbsp; Phase 2: Full Suite
      </motion.p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '30px',
        flex: 1,
        perspective: '1000px'
      }}>
        {/* Phase 1 */}
        <motion.div
          initial={{ opacity: 0, x: -30, rotateY: 10 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div style={{
            background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
            borderRadius: '15px',
            padding: '12px 22px',
            display: 'inline-block',
            marginBottom: '15px',
            transform: 'translateZ(15px)',
            boxShadow: '0 10px 30px rgba(56,239,125,0.3)'
          }}>
            <h3 style={{ color: '#fff', margin: 0, fontSize: '1.3rem', fontWeight: '600' }}>
              Phase 1 - Launch
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {features.phase1.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.02, translateX: 10 }}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: '14px 18px',
                  borderLeft: '4px solid #38ef7d',
                  transform: 'translateZ(10px)',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.2)'
                }}
              >
                <div style={{ color: '#fff', fontWeight: '600', fontSize: '1.05rem', marginBottom: '4px' }}>
                  ✓ {feature.name}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                  {feature.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Phase 2 */}
        <motion.div
          initial={{ opacity: 0, x: 30, rotateY: -10 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
            borderRadius: '15px',
            padding: '12px 22px',
            display: 'inline-block',
            marginBottom: '15px',
            transform: 'translateZ(15px)',
            boxShadow: '0 10px 30px rgba(139,92,246,0.3)'
          }}>
            <h3 style={{ color: '#fff', margin: 0, fontSize: '1.3rem', fontWeight: '600' }}>
              Phase 2 - Expansion
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {features.phase2.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.08, duration: 0.4 }}
                whileHover={{ scale: 1.02, translateX: -10 }}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                  padding: '14px 18px',
                  borderLeft: '4px solid #8b5cf6',
                  transform: 'translateZ(10px)',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.2)'
                }}
              >
                <div style={{ color: '#fff', fontWeight: '600', fontSize: '1.05rem', marginBottom: '4px' }}>
                  ⭐ {feature.name}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                  {feature.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        style={{
          textAlign: 'center',
          marginTop: '15px',
          padding: '15px',
          background: 'rgba(251,191,36,0.15)',
          borderRadius: '10px',
          border: '1px solid rgba(251,191,36,0.3)',
          transform: 'translateZ(20px)'
        }}
      >
        <span style={{ color: '#fbbf24', fontSize: '1.1rem', fontWeight: '500' }}>
          💡 Phase 1 can go live in 4-6 weeks. Phase 2 adds advanced capabilities as you scale.
        </span>
      </motion.div>
    </div>
  )
}

export default Slide4
