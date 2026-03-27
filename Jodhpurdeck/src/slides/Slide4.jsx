import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide4 = () => {
  return (
    <div className="slide" style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #0a1628 0%, #0f2847 50%, #0a1628 100%)',
      padding: '60px 80px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center'
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

      {/* Dark overlay for dramatic effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 50%, transparent 30%, rgba(0,0,0,0.5) 100%)',
        pointerEvents: 'none'
      }} />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          fontSize: '3.5rem',
          fontWeight: 700,
          lineHeight: 1.1,
          color: '#a0aec0',
          marginBottom: 20,
          position: 'relative'
        }}
      >
        Laundry business <span style={{ textDecoration: 'line-through', color: '#fca5a5' }}>khatam</span> nahi ho raha
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{
          fontSize: '4rem',
          fontWeight: 800,
          lineHeight: 1.1,
          color: '#ffffff',
          marginBottom: 30,
          position: 'relative',
          textShadow: '0 0 40px rgba(79,195,247,0.3)'
        }}
      >
        Purana tareeka <span style={{ color: '#f59e0b' }}>khatam</span> ho raha hai
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        style={{
          fontSize: '1.5rem',
          color: '#fca5a5',
          fontWeight: 500,
          marginTop: 20,
          position: 'relative'
        }}
      >
        Outdated stores lose relevance first.
      </motion.p>

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        style={{
          width: 200,
          height: 3,
          background: 'linear-gradient(90deg, #f59e0b, transparent)',
          margin: '40px auto 0',
          borderRadius: 2
        }}
      />
    </div>
  )
}

export default Slide4