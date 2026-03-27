import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide3 = () => {
  const convenienceItems = [
    { icon: '⚡', title: 'Instant', desc: 'One-tap ordering' },
    { icon: '📱', title: 'Digital', desc: 'App & online payment' },
    { icon: '🚪', title: 'Doorstep', desc: 'Pickup & delivery' },
    { icon: '✨', title: 'Easy', desc: 'Seamless experience' }
  ]

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

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: '1rem',
          color: '#4fc3f7',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginBottom: 15,
          fontWeight: 600
        }}
      >
        Customer Behavior
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        style={{
          fontSize: '3.2rem',
          fontWeight: 700,
          marginBottom: 15,
          lineHeight: 1.1,
          color: '#ffffff'
        }}
      >
        Customer ab <span style={{ color: '#4fc3f7' }}>convenience</span> compare karta hai
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        style={{
          display: 'flex',
          gap: 25,
          marginTop: 40,
          marginBottom: 40
        }}
      >
        {convenienceItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.12, duration: 0.6 }}
            style={{
              flex: 1,
              background: 'rgba(255,255,255,0.03)',
              borderRadius: 16,
              padding: 30,
              border: '1px solid rgba(79,195,247,0.15)',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: 15 }}>{item.icon}</div>
            <div style={{
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: 8
            }}>{item.title}</div>
            <div style={{
              fontSize: '1rem',
              color: '#a0aec0'
            }}>{item.desc}</div>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          fontSize: '1.8rem',
          fontWeight: 600,
          color: '#f59e0b',
          textAlign: 'center',
          marginTop: 20
        }}
      >
        Dry cleaning ab exception nahi ho sakti.
      </motion.p>
    </div>
  )
}

export default Slide3