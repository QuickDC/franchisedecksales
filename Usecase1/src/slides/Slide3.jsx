import { motion } from 'framer-motion'

const Slide3 = () => {
  return (
    <div className="slide perspective-container" style={{
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      padding: '40px 50px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* 3D orbs */}
      <div className="orb-3d orb-3d-1" style={{ animationDelay: '-1s' }} />
      <div className="orb-3d orb-3d-2" style={{ top: '30%' }} />

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
        Complete Workflow
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{
          fontSize: '1.3rem',
          color: '#bfdbfe',
          textAlign: 'center',
          marginBottom: '25px',
          transform: 'translateZ(20px)'
        }}
      >
        From Customer Acquisition to Delivery - Full Visibility
      </motion.p>

      {/* Main Workflow Diagram */}
      <div style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px',
        perspective: '1000px'
      }}>
        {/* Left side - Customer Channels */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotateY: 15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            transform: 'translateZ(10px)'
          }}
        >
          {[
            { icon: '📱', text: 'Instagram / Meta Ads' },
            { icon: '🔍', text: 'Google Ads' },
            { icon: '🌐', text: 'Website' },
            { icon: '💬', text: 'WhatsApp Bot' },
            { icon: '📲', text: 'Mobile Apps' },
            { icon: '📞', text: 'Phone Calls' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              whileHover={{ scale: 1.05, translateX: 10 }}
              style={{
                background: 'rgba(255,255,255,0.15)',
                padding: '12px 18px',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.3)',
                color: '#fff',
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transform: 'translateZ(5px)',
                boxShadow: '0 5px 20px rgba(0,0,0,0.2)'
              }}
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Arrow with 3D effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          style={{
            fontSize: '2.5rem',
            color: '#fbbf24',
            transform: 'translateZ(30px)',
            animation: 'pulse-3d 2s ease-in-out infinite'
          }}
        >
          ➜
        </motion.div>

        {/* Center - Store CRM */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '20px',
            padding: '25px',
            boxShadow: `0 25px 60px rgba(0,0,0,0.4), 0 15px 40px rgba(102,126,234,0.3)`,
            minWidth: '250px',
            transform: 'translateZ(40px)'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '15px' }}>
            <div style={{ fontSize: '3rem', transform: 'translateZ(10px)' }}>🏪</div>
            <h3 style={{ color: '#fff', fontSize: '1.4rem', fontWeight: '700', margin: '10px 0 5px', transform: 'translateZ(10px)' }}>
              Store CRM
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem', transform: 'translateZ(5px)' }}>
              Order Processing Hub
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px',
            transform: 'translateZ(5px)'
          }}>
            {[
              { icon: '📋', text: 'Order' },
              { icon: '👤', text: 'Customer' },
              { icon: '🛵', text: 'Rider' },
              { icon: '📲', text: 'Alert' }
            ].map((item, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '10px',
                borderRadius: '8px',
                textAlign: 'center',
                color: '#fff',
                fontSize: '0.8rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}>
                <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Connection Lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            alignItems: 'center',
            transform: 'translateZ(20px)'
          }}
        >
          <div style={{ fontSize: '1.8rem', color: '#fbbf24' }}>↕️</div>
          <div style={{ fontSize: '1.8rem', color: '#fbbf24' }}>↕️</div>
          <div style={{ fontSize: '1.8rem', color: '#fbbf24' }}>↕️</div>
        </motion.div>

        {/* Right side - Plant & Delivery */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            transform: 'translateZ(10px)'
          }}
        >
          <div style={{
            background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
            borderRadius: '15px',
            padding: '18px 22px',
            boxShadow: '0 15px 40px rgba(56,239,125,0.3)',
            transform: 'translateZ(15px)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', transform: 'translateZ(10px)' }}>🏭</div>
              <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: '8px 0 5px', transform: 'translateZ(5px)' }}>Plant</h4>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem' }}>Processing Facility</p>
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            borderRadius: '15px',
            padding: '18px 22px',
            boxShadow: '0 15px 40px rgba(245,87,108,0.3)',
            transform: 'translateZ(15px)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', transform: 'translateZ(10px)' }}>🚚</div>
              <h4 style={{ color: '#fff', fontSize: '1.2rem', margin: '8px 0 5px', transform: 'translateZ(5px)' }}>Delivery</h4>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem' }}>Rider completes cycle</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom - Super Admin */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        style={{
          background: 'rgba(0,0,0,0.3)',
          borderRadius: '15px',
          padding: '12px 25px',
          marginTop: '15px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '30px',
          transform: 'translateZ(15px)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#fff' }}>
          <span style={{ fontSize: '1.5rem' }}>👑</span>
          <span style={{ fontWeight: '500' }}>Super Admin</span>
        </div>
        <div style={{ display: 'flex', gap: '15px', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>
          <span>📊 Analytics</span>
          <span>🔐 Permissions</span>
          <span>🎁 Promotions</span>
          <span>💎 Loyalty</span>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide3
