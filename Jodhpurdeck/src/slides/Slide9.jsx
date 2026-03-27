import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide9 = () => {
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

      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        top: '25%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 500,
        height: 400,
        background: 'radial-gradient(ellipse at center, rgba(79,195,247,0.15) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />

      {/* Top line - reduced emphasis */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        style={{
          fontSize: '2.4rem',
          fontWeight: 500,
          lineHeight: 1.2,
          color: '#64748b',
          marginBottom: 25,
          position: 'relative'
        }}
      >
        Modern store sirf <span style={{ color: '#94a3b8' }}>bada store</span> nahi hota
      </motion.h1>

      {/* Hero line - second line */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        style={{
          fontSize: '4rem',
          fontWeight: 800,
          lineHeight: 1.05,
          color: '#ffffff',
          marginBottom: 40,
          position: 'relative',
          textShadow: '0 0 40px rgba(79,195,247,0.3)'
        }}
      >
        <span style={{ color: '#4fc3f7' }}>Smart</span> store hota hai
      </motion.h2>

      {/* Clean premium transformation bar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          marginBottom: 40,
          padding: '22px 35px',
          background: 'linear-gradient(90deg, rgba(79,195,247,0.1) 0%, rgba(245,158,11,0.1) 100%)',
          borderRadius: 50,
          border: '1px solid rgba(79,195,247,0.3)'
        }}
      >
        <span style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem' }}>Single Store</span>
        <span style={{ color: '#4fc3f7', fontSize: '1.4rem' }}>→</span>
        <span style={{ color: '#fbbf24', fontWeight: 700, fontSize: '1.1rem' }}>Premium Brand</span>
      </motion.div>

      {/* Support line - refined */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{
          fontSize: '1.5rem',
          color: '#94a3b8',
          position: 'relative',
          letterSpacing: '0.5px'
        }}
      >
        Better customer experience. Better control. Stronger brand image.
      </motion.p>
    </div>
  )
}

export default Slide9