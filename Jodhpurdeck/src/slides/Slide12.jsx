import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide12 = () => {
  return (
    <div className="slide" style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #0a1628 0%, #0f2847 50%, #0a1628 100%)',
      padding: '45px 70px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start'
    }}>
      {/* Logo - fixed top-right */}
      <motion.img
        src={logoImg}
        alt="QDC Logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{
          position: 'absolute',
          top: 35,
          right: 35,
          height: 38,
          objectFit: 'contain'
        }}
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          fontSize: '2.6rem',
          fontWeight: 800,
          color: '#ffffff',
          marginBottom: 8,
          textAlign: 'center',
          letterSpacing: '0.5px'
        }}
      >
        Quick Dry Cleaning Software
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        style={{
          fontSize: '1.35rem',
          color: '#94a3b8',
          marginBottom: 30,
          textAlign: 'center',
          fontWeight: 500
        }}
      >
        The operating system for growth, operations, and retention.
      </motion.p>

      {/* Main content area */}
      <div style={{ flex: 1, position: 'relative' }}>

        {/* CENTER - QDC Platform Hub - TRUE CENTER */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: 180,
            height: 180,
            borderRadius: 20,
            background: 'linear-gradient(135deg, #0f2847 0%, #1e3a5f 100%)',
            border: '3px solid rgba(79,195,247,0.9)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 80px rgba(79,195,247,0.35), inset 0 0 30px rgba(79,195,247,0.05)',
            zIndex: 10
          }}
        >
          <span style={{ color: '#4fc3f7', fontSize: '2.2rem', fontWeight: 800, letterSpacing: '1px' }}>QDC</span>
          <span style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: 600, marginTop: 4 }}>Platform</span>
          <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid rgba(79,195,247,0.3)', width: '70%' }} />
          <span style={{ color: '#64748b', fontSize: '0.65rem', fontWeight: 500, marginTop: 8, textAlign: 'center', lineHeight: 1.3 }}>
            Powers the full<br />business ecosystem
          </span>
        </motion.div>

        {/* TOP-LEFT: Customer Acquisition */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          style={{
            position: 'absolute',
            left: 40,
            top: 45,
            width: 210,
            padding: '16px 20px',
            background: 'rgba(25,35,55,0.9)',
            borderRadius: 14,
            border: '1px solid rgba(79,195,247,0.3)',
            borderTop: '3px solid #4fc3f7'
          }}
        >
          <div style={{ color: '#4fc3f7', fontSize: '0.9rem', fontWeight: 700, marginBottom: 10, letterSpacing: '0.5px' }}>Customer Acquisition</div>
          {['Omnichannel Pickup Link', 'Mobile App', 'WhatsApp Bot', 'Call & Walk-in'].map((item, i) => (
            <div key={i} style={{ color: '#94a3b8', fontSize: '0.7rem', padding: '3px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: '#4fc3f7', fontSize: '0.5rem' }}>●</span>{item}
            </div>
          ))}
        </motion.div>

        {/* TOP-RIGHT: Store Operations */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{
            position: 'absolute',
            right: 40,
            top: 45,
            width: 210,
            padding: '16px 20px',
            background: 'rgba(25,35,55,0.9)',
            borderRadius: 14,
            border: '1px solid rgba(168,85,247,0.3)',
            borderTop: '3px solid #a855f7'
          }}
        >
          <div style={{ color: '#a855f7', fontSize: '0.9rem', fontWeight: 700, marginBottom: 10, letterSpacing: '0.5px' }}>Store Operations</div>
          {['Billing', 'Tagging', 'Garment Tracking', 'Reporting'].map((item, i) => (
            <div key={i} style={{ color: '#94a3b8', fontSize: '0.7rem', padding: '3px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: '#a855f7', fontSize: '0.5rem' }}>●</span>{item}
            </div>
          ))}
        </motion.div>

        {/* BOTTOM-LEFT: Retention */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          style={{
            position: 'absolute',
            left: 40,
            bottom: 45,
            width: 210,
            padding: '16px 20px',
            background: 'rgba(25,35,55,0.9)',
            borderRadius: 14,
            border: '1px solid rgba(34,197,94,0.3)',
            borderTop: '3px solid #22c55e'
          }}
        >
          <div style={{ color: '#22c55e', fontSize: '0.9rem', fontWeight: 700, marginBottom: 10, letterSpacing: '0.5px' }}>Retention</div>
          {['WhatsApp Campaigns', 'Customer Segmentation', 'Packages & Subscriptions', 'Loyalty & Referrals'].map((item, i) => (
            <div key={i} style={{ color: '#94a3b8', fontSize: '0.7rem', padding: '3px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: '#22c55e', fontSize: '0.5rem' }}>●</span>{item}
            </div>
          ))}
        </motion.div>

        {/* BOTTOM-RIGHT: Remarketing */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          style={{
            position: 'absolute',
            right: 40,
            bottom: 45,
            width: 210,
            padding: '16px 20px',
            background: 'rgba(25,35,55,0.9)',
            borderRadius: 14,
            border: '1px solid rgba(245,158,11,0.3)',
            borderTop: '3px solid #f59e0b'
          }}
        >
          <div style={{ color: '#f59e0b', fontSize: '0.9rem', fontWeight: 700, marginBottom: 10, letterSpacing: '0.5px' }}>Remarketing</div>
          {['Re-engagement SMS', 'Abandoned Cart Recovery', 'Cross-sell Offers', 'Referral Programs'].map((item, i) => (
            <div key={i} style={{ color: '#94a3b8', fontSize: '0.7rem', padding: '3px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: '#f59e0b', fontSize: '0.5rem' }}>●</span>{item}
            </div>
          ))}
        </motion.div>

        {/* Glowing dashed connector lines from each pillar to center hub */}
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          <defs>
            <filter id="glowBlue">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Top-left: Customer Acquisition → QDC */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            d="M 145 85 L 400 275"
            fill="none"
            stroke="#4fc3f7"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            strokeDasharray="5,4"
            strokeLinecap="round"
            filter="url(#glowBlue)"
          />

          {/* Top-right: Store Operations → QDC */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            d="M 655 85 L 400 275"
            fill="none"
            stroke="#a855f7"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            strokeDasharray="5,4"
            strokeLinecap="round"
            filter="url(#glowBlue)"
          />

          {/* Bottom-left: Retention → QDC */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            d="M 145 425 L 400 275"
            fill="none"
            stroke="#22c55e"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            strokeDasharray="5,4"
            strokeLinecap="round"
            filter="url(#glowBlue)"
          />

          {/* Bottom-right: Remarketing → QDC */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            d="M 655 425 L 400 275"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            strokeDasharray="5,4"
            strokeLinecap="round"
            filter="url(#glowBlue)"
          />

          {/* Corner connection dots */}
          <circle cx="145" cy="85" r="3" fill="#4fc3f7" opacity="0.6" />
          <circle cx="655" cy="85" r="3" fill="#a855f7" opacity="0.6" />
          <circle cx="145" cy="425" r="3" fill="#22c55e" opacity="0.6" />
          <circle cx="655" cy="425" r="3" fill="#f59e0b" opacity="0.6" />
        </svg>
      </div>
    </div>
  )
}

export default Slide12