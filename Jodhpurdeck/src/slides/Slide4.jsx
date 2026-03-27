import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide4 = () => {
  return (
    <div className="slide" style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #0a1628 0%, #0f2847 50%, #0a1628 100%)',
      padding: '60px 100px',
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

      {/* Subtle ambient glow */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 600,
        height: 400,
        background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.08) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />

      {/* First line - smaller and quieter */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        style={{
          fontSize: '1.8rem',
          fontWeight: 500,
          color: '#64748b',
          marginBottom: 20,
          letterSpacing: '0.5px'
        }}
      >
        Laundry business nahi khatam ho raha
      </motion.p>

      {/* Second line - dominant focal point */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        style={{
          fontSize: '4.5rem',
          fontWeight: 800,
          lineHeight: 1.15,
          color: '#ffffff',
          marginBottom: 40
        }}
      >
        Purana tareeka <span style={{ color: '#f59e0b' }}>khatam</span> ho raha hai
      </motion.h1>

      {/* Support line - subtle but readable */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{
          fontSize: '1.4rem',
          color: '#94a3b8',
          fontWeight: 500,
          letterSpacing: '0.5px'
        }}
      >
        Outdated stores lose relevance first.
      </motion.p>
    </div>
  )
}

export default Slide4