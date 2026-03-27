import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide12 = () => {
  return (
    <div className="slide" style={{ position: 'relative',
      background: 'linear-gradient(135deg, #0a1628 0%, #0f2847 50%, #0a1628 100%)',
      padding: '60px 80px',
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
          fontSize: '2.8rem',
          fontWeight: 700,
          color: '#ffffff',
          marginBottom: 40,
          textAlign: 'center',
          lineHeight: 1.2
        }}
      >
        <span style={{ color: '#4fc3f7' }}>Customer</span> ke liye convenience.<br />
        <span style={{ color: '#f59e0b' }}>Owner</span> ke liye control.
      </motion.h1>

      <div style={{
        display: 'flex',
        gap: 40,
        flex: 1,
        alignItems: 'center'
      }}>
        {/* LEFT - Customer Benefit */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            flex: 1,
            background: 'linear-gradient(180deg, rgba(79,195,247,0.1) 0%, rgba(79,195,247,0.05) 100%)',
            borderRadius: 20,
            padding: 30,
            border: '1px solid rgba(79,195,247,0.2)'
          }}
        >
          <h3 style={{
            fontSize: '1.3rem',
            color: '#4fc3f7',
            marginBottom: 25,
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: 10
          }}>
            👤 Customer Experience
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              'One-tap pickup request',
              'Real-time order tracking',
              'WhatsApp updates',
              'Online payment',
              'Doorstep delivery'
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                style={{
                  padding: '12px 0',
                  borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  color: '#ffffff',
                  fontSize: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12
                }}
              >
                <span style={{ color: '#4fc3f7' }}>✓</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT - Owner Benefit */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            flex: 1,
            background: 'linear-gradient(180deg, rgba(245,158,11,0.1) 0%, rgba(245,158,11,0.05) 100%)',
            borderRadius: 20,
            padding: 30,
            border: '1px solid rgba(245,158,11,0.2)'
          }}
        >
          <h3 style={{
            fontSize: '1.3rem',
            color: '#f59e0b',
            marginBottom: 25,
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: 10
          }}>
            📊 Owner Visibility
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              'All orders in one place',
              'Staff performance tracking',
              'Daily revenue reports',
              'Customer database',
              'Growth-ready system'
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                style={{
                  padding: '12px 0',
                  borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  color: '#ffffff',
                  fontSize: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12
                }}
              >
                <span style={{ color: '#f59e0b' }}>✓</span>
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