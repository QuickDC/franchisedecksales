import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide3 = () => {
  const behaviorItems = [
    {
      visual: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          {/* Lightning bolt - fast/quick */}
          <path d="M28 4L18 24H26L22 46L38 20H28L32 4H28Z" stroke="#4fc3f7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
      title: 'Instant',
      desc: 'Quick response, quick booking'
    },
    {
      visual: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          {/* Phone with UPI/payment symbol */}
          <rect x="10" y="6" width="30" height="38" rx="4" stroke="#4fc3f7" strokeWidth="2" opacity="0.4" />
          <path d="M18 20H32" stroke="#4fc3f7" strokeWidth="2" strokeLinecap="round" />
          <path d="M18 26H28" stroke="#4fc3f7" strokeWidth="2" strokeLinecap="round" />
          <path d="M25 32L23 36H27" stroke="#4fc3f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {/* ₹ symbol for UPI */}
          <text x="32" y="16" fontSize="10" fill="#4fc3f7" fontWeight="bold">₹</text>
        </svg>
      ),
      title: 'Digital',
      desc: 'UPI, app, online payment'
    },
    {
      visual: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          {/* House with delivery */}
          <path d="M8 22L25 8L42 22V40H8V22Z" stroke="#4fc3f7" strokeWidth="2" strokeLinejoin="round" opacity="0.4" />
          <path d="M20 40V28H30V40" stroke="#4fc3f7" strokeWidth="2" />
          {/* Package/delivery box */}
          <rect x="18" y="32" width="14" height="10" rx="1" stroke="#4fc3f7" strokeWidth="2" fill="none" />
          <path d="M25 32V37" stroke="#4fc3f7" strokeWidth="2" />
        </svg>
      ),
      title: 'Doorstep',
      desc: 'Pickup & delivery convenience'
    },
    {
      visual: (
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          {/* Simple one-click/easy path */}
          <circle cx="12" cy="25" r="4" stroke="#4fc3f7" strokeWidth="2" fill="none" opacity="0.5" />
          <path d="M18 25H38" stroke="#4fc3f7" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M32 18L38 25L32 32" stroke="#4fc3f7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Easy',
      desc: 'Less effort, less friction'
    }
  ]

  return (
    <div className="slide" style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #0a1628 0%, #0f2847 50%, #0a1628 100%)',
      padding: '60px 100px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      {/* Logo */}
      <motion.img
        src={logoImg}
        alt="QDC Logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{
          position: 'absolute',
          top: 40,
          right: 30,
          height: 40,
          objectFit: 'contain'
        }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        style={{
          fontSize: '3rem',
          fontWeight: 700,
          marginBottom: 50,
          lineHeight: 1.1,
          color: '#ffffff',
          textAlign: 'center'
        }}
      >
        Customer ab <span style={{ color: '#4fc3f7' }}>convenience</span> compare karta hai
      </motion.h1>

      {/* Behavior panels - real, human, soft */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{
          display: 'flex',
          gap: 18,
          marginBottom: 50
        }}
      >
        {behaviorItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.12, duration: 0.6 }}
            style={{
              flex: 1,
              background: 'rgba(30,45,65,0.25)',
              borderRadius: 16,
              padding: '28px 18px',
              textAlign: 'center'
            }}
          >
            <div style={{ marginBottom: 18 }}>{item.visual}</div>
            <div style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: 8
            }}>{item.title}</div>
            <div style={{
              fontSize: '0.95rem',
              color: '#94a3b8',
              lineHeight: 1.4
            }}>{item.desc}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Premium keynote-style emphasis */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{
          textAlign: 'center'
        }}
      >
        <p style={{
          fontSize: '2.2rem',
          fontWeight: 700,
          color: '#fbbf24',
          margin: 0,
          textShadow: '0 0 30px rgba(251,191,36,0.3)'
        }}>
          Dry cleaning ab exception nahi ho sakti.
        </p>
      </motion.div>
    </div>
  )
}

export default Slide3