import { motion } from 'framer-motion'

const Slide2 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -15 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="slide perspective-container" style={{
      background: 'linear-gradient(180deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
      padding: '50px 60px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* 3D orbs */}
      <div className="orb-3d orb-3d-1" style={{ animationDelay: '-2s' }} />
      <div className="orb-3d orb-3d-2" style={{ animationDelay: '-4s' }} />

      <motion.h2
        initial={{ opacity: 0, y: -20, rotateX: -10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: '3rem',
          fontWeight: '700',
          color: '#fff',
          marginBottom: '10px',
          textAlign: 'center',
          transform: 'translateZ(30px)',
          textShadow: '0 10px 30px rgba(0,0,0,0.3)'
        }}
      >
        Complete Ecosystem
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{
          fontSize: '1.4rem',
          color: '#a5b4fc',
          textAlign: 'center',
          marginBottom: '40px',
          transform: 'translateZ(20px)'
        }}
      >
        End-to-End Laundry Operations Platform
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '25px',
          flex: 1,
          alignItems: 'center',
          perspective: '1000px'
        }}
      >
        {/* Left Column - Customer Acquisition */}
        <motion.div
          variants={itemVariants}
          style={{ textAlign: 'center', transformStyle: 'preserve-3d' }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="card-3d shadow-3d" style={{
            background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
            borderRadius: '25px',
            padding: '30px 20px',
            transform: 'translateZ(20px)',
            transition: 'transform 0.3s ease'
          }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '15px', transform: 'translateZ(10px)' }}>🎯</div>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '15px', fontWeight: '600', transform: 'translateZ(10px)' }}>
              Customer Acquisition
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', transform: 'translateZ(5px)' }}>
              {['Instagram / Meta Ads', 'Google Ads', 'Website', 'WhatsApp Bot', 'iOS / Android Apps', 'Phone Calls'].map((item, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.15)',
                  padding: '10px 15px',
                  borderRadius: '10px',
                  color: '#fff',
                  fontSize: '0.9rem'
                }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Center Column - Core Platform */}
        <motion.div
          variants={itemVariants}
          style={{ textAlign: 'center', transformStyle: 'preserve-3d' }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="card-3d shadow-3d" style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '25px',
            padding: '30px 20px',
            transform: 'translateZ(40px) scale(1.05)',
            boxShadow: '0 25px 50px rgba(102,126,234,0.4)'
          }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '15px', transform: 'translateZ(15px)' }}>⚙️</div>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '15px', fontWeight: '600', transform: 'translateZ(10px)' }}>
              Central Platform
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', transform: 'translateZ(5px)' }}>
              <div style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '15px',
                borderRadius: '12px',
                color: '#fff',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}>
                🏪 Store CRM
              </div>
              {['Order Management', 'Rider Assignment', 'Pickup & Delivery', 'WhatsApp/SMS Alerts'].map((item, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.15)',
                  padding: '10px 15px',
                  borderRadius: '10px',
                  color: '#e0e7ff',
                  fontSize: '0.95rem'
                }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Management */}
        <motion.div
          variants={itemVariants}
          style={{ textAlign: 'center', transformStyle: 'preserve-3d' }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="card-3d shadow-3d" style={{
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            borderRadius: '25px',
            padding: '30px 20px',
            transform: 'translateZ(20px)',
            transition: 'transform 0.3s ease'
          }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '15px', transform: 'translateZ(10px)' }}>📊</div>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '15px', fontWeight: '600', transform: 'translateZ(10px)' }}>
              Super Admin
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', transform: 'translateZ(5px)' }}>
              {['Master Data Management', 'User & Permissions', 'Offers & Promotions', 'Referral System', 'Loyalty Points', 'Prepaid Packages', 'Subscriptions'].map((item, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.15)',
                  padding: '10px 15px',
                  borderRadius: '10px',
                  color: '#fff',
                  fontSize: '0.9rem'
                }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '30px',
          transform: 'translateZ(10px)'
        }}
      >
        <span style={{ color: '#fbbf24', fontSize: '1.2rem' }}>←</span>
        <span style={{ color: '#a5b4fc', fontSize: '1.2rem' }}>All channels flow into the Central Platform</span>
        <span style={{ color: '#fbbf24', fontSize: '1.2rem' }}>→</span>
      </motion.div>
    </div>
  )
}

export default Slide2
