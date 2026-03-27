import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide12 = () => {
  return (
    <div className="slide" style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #0a1628 0%, #0f2847 50%, #0a1628 100%)',
      padding: '50px 80px',
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
          top: 35,
          right: 30,
          height: 38,
          objectFit: 'contain'
        }}
      />

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          fontSize: '2.8rem',
          fontWeight: 700,
          color: '#ffffff',
          marginBottom: 35,
          textAlign: 'center',
          lineHeight: 1.2
        }}
      >
        <span style={{ color: '#4fc3f7' }}>Customer</span> ke liye convenience.<br />
        <span style={{ color: '#f59e0b' }}>Owner</span> ke liye control.
      </motion.h1>

      {/* Two-column layout */}
      <div style={{
        display: 'flex',
        gap: 30,
        flex: 1,
        alignItems: 'stretch'
      }}>
        {/* LEFT - Customer Convenience */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            flex: 1,
            background: 'rgba(30,45,65,0.5)',
            borderRadius: 16,
            padding: '28px 32px',
            borderTop: '2px solid rgba(79,195,247,0.6)',
            borderLeft: '2px solid rgba(79,195,247,0.3)'
          }}
        >
          <h3 style={{
            fontSize: '1.15rem',
            color: '#4fc3f7',
            marginBottom: 20,
            fontWeight: 700,
            letterSpacing: '0.5px'
          }}>
            Customer Convenience
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Easy pickup request', 'Live order tracking', 'WhatsApp updates', 'Online payment', 'Doorstep delivery'].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                style={{
                  padding: '10px 0',
                  borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  color: '#e2e8f0',
                  fontSize: '1.05rem',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  textAlign: 'left'
                }}
              >
                <span style={{ color: '#4fc3f7', fontSize: '0.9rem', fontWeight: 700 }}>→</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT - Owner Control */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            flex: 1,
            background: 'rgba(30,45,65,0.5)',
            borderRadius: 16,
            padding: '28px 32px',
            borderTop: '2px solid rgba(245,158,11,0.6)',
            borderLeft: '2px solid rgba(245,158,11,0.3)'
          }}
        >
          <h3 style={{
            fontSize: '1.15rem',
            color: '#f59e0b',
            marginBottom: 20,
            fontWeight: 700,
            letterSpacing: '0.5px'
          }}>
            Owner Control
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['All orders in one place', 'Team performance visibility', 'Daily revenue reports', 'Customer database', 'Growth-ready system'].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
                style={{
                  padding: '10px 0',
                  borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  color: '#e2e8f0',
                  fontSize: '1.05rem',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  textAlign: 'left'
                }}
              >
                <span style={{ color: '#f59e0b', fontSize: '0.9rem', fontWeight: 700 }}>→</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default Slide12