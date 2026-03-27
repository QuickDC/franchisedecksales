import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide13 = () => {
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

      {/* Main content - SVG-based with viewBox */}
      <svg
        viewBox="0 0 800 550"
        style={{ flex: 1, width: '100%', display: 'block' }}
      >
        <defs>
          <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f2847" />
            <stop offset="100%" stopColor="#1e3a5f" />
          </linearGradient>
          <filter id="glowBlue" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Connector lines */}
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

        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          d="M 145 465 L 400 275"
          fill="none"
          stroke="#22c55e"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          strokeDasharray="5,4"
          strokeLinecap="round"
          filter="url(#glowBlue)"
        />

        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          d="M 655 465 L 400 275"
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
        <circle cx="145" cy="465" r="3" fill="#22c55e" opacity="0.6" />
        <circle cx="655" cy="465" r="3" fill="#f59e0b" opacity="0.6" />

        {/* CENTER - QDC Platform Hub */}
        <g transform="translate(400, 275)">
          <motion.g
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ transformOrigin: '400px 275px' }}
          >
            <rect
              x="-90"
              y="-90"
              width="180"
              height="180"
              rx="20"
              fill="url(#centerGrad)"
              stroke="rgba(79,195,247,0.9)"
              strokeWidth="3"
              style={{ filter: 'drop-shadow(0 0 80px rgba(79,195,247,0.35))' }}
            />
            <text x="0" y="-15" textAnchor="middle" fill="#4fc3f7" fontSize="28" fontWeight="800" letterSpacing="1">QDC</text>
            <text x="0" y="15" textAnchor="middle" fill="#94a3b8" fontSize="13" fontWeight="600">Platform</text>
            <line x1="-50" y1="35" x2="50" y2="35" stroke="rgba(79,195,247,0.3)" strokeWidth="1" />
            <text x="0" y="60" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="500" lineHeight="1.3">Powers the full</text>
            <text x="0" y="72" textAnchor="middle" fill="#64748b" fontSize="11" fontWeight="500">business ecosystem</text>
          </motion.g>
        </g>

        {/* TOP-LEFT: Customer Acquisition */}
        <motion.g
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <rect
            x="40"
            y="40"
            width="210"
            height="130"
            rx="14"
            fill="rgba(25,35,55,0.9)"
            stroke="rgba(79,195,247,0.3)"
          />
          <rect x="40" y="40" width="210" height="3" fill="#4fc3f7" rx="1" />
          <text x="55" y="65" fill="#4fc3f7" fontSize="13" fontWeight="700">Customer Acquisition</text>
          <text x="55" y="88" fill="#94a3b8" fontSize="10">● Omnichannel Pickup Link</text>
          <text x="55" y="104" fill="#94a3b8" fontSize="10">● Mobile App</text>
          <text x="55" y="120" fill="#94a3b8" fontSize="10">● WhatsApp Bot</text>
          <text x="55" y="136" fill="#94a3b8" fontSize="10">● Call & Walk-in</text>
        </motion.g>

        {/* TOP-RIGHT: Store Operations */}
        <motion.g
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <rect
            x="550"
            y="40"
            width="210"
            height="130"
            rx="14"
            fill="rgba(25,35,55,0.9)"
            stroke="rgba(168,85,247,0.3)"
          />
          <rect x="550" y="40" width="210" height="3" fill="#a855f7" rx="1" />
          <text x="565" y="65" fill="#a855f7" fontSize="13" fontWeight="700">Store Operations</text>
          <text x="565" y="88" fill="#94a3b8" fontSize="10">● Billing</text>
          <text x="565" y="104" fill="#94a3b8" fontSize="10">● Tagging</text>
          <text x="565" y="120" fill="#94a3b8" fontSize="10">● Garment Tracking</text>
          <text x="565" y="136" fill="#94a3b8" fontSize="10">● Reporting</text>
        </motion.g>

        {/* BOTTOM-LEFT: Retention */}
        <motion.g
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <rect
            x="40"
            y="380"
            width="210"
            height="130"
            rx="14"
            fill="rgba(25,35,55,0.9)"
            stroke="rgba(34,197,94,0.3)"
          />
          <rect x="40" y="380" width="210" height="3" fill="#22c55e" rx="1" />
          <text x="55" y="405" fill="#22c55e" fontSize="13" fontWeight="700">Retention</text>
          <text x="55" y="428" fill="#94a3b8" fontSize="10">● WhatsApp Campaigns</text>
          <text x="55" y="444" fill="#94a3b8" fontSize="10">● Customer Segmentation</text>
          <text x="55" y="460" fill="#94a3b8" fontSize="10">● Packages & Subscriptions</text>
          <text x="55" y="476" fill="#94a3b8" fontSize="10">● Loyalty & Referrals</text>
        </motion.g>

        {/* BOTTOM-RIGHT: Remarketing */}
        <motion.g
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <rect
            x="550"
            y="380"
            width="210"
            height="130"
            rx="14"
            fill="rgba(25,35,55,0.9)"
            stroke="rgba(245,158,11,0.3)"
          />
          <rect x="550" y="380" width="210" height="3" fill="#f59e0b" rx="1" />
          <text x="565" y="405" fill="#f59e0b" fontSize="13" fontWeight="700">Remarketing</text>
          <text x="565" y="428" fill="#94a3b8" fontSize="10">● Re-engagement SMS</text>
          <text x="565" y="444" fill="#94a3b8" fontSize="10">● Abandoned Cart Recovery</text>
          <text x="565" y="460" fill="#94a3b8" fontSize="10">● Cross-sell Offers</text>
          <text x="565" y="476" fill="#94a3b8" fontSize="10">● Referral Programs</text>
        </motion.g>
      </svg>
    </div>
  )
}

export default Slide13