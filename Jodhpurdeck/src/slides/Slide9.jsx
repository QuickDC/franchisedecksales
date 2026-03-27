import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide9 = () => {
  return (
    <div className="slide" style={{
      background: 'linear-gradient(135deg, #0a1628 0%, #0f2847 50%, #0a1628 100%)',
      padding: '60px 80px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative'
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
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 400,
        height: 400,
        background: 'radial-gradient(circle, rgba(79,195,247,0.2) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          fontSize: '3rem',
          fontWeight: 700,
          lineHeight: 1.2,
          color: '#a0aec0',
          marginBottom: 20,
          position: 'relative'
        }}
      >
        Modern store sirf <span style={{ color: '#f59e0b' }}>bada store</span> nahi hota
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        style={{
          fontSize: '3.5rem',
          fontWeight: 800,
          lineHeight: 1.1,
          color: '#ffffff',
          marginBottom: 30,
          position: 'relative'
        }}
      >
        <span style={{ color: '#4fc3f7' }}>Smart</span> store hota hai
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        style={{
          fontSize: '1.6rem',
          color: '#a0aec0',
          position: 'relative'
        }}
      >
        Better experience. Better control. Better image.
      </motion.p>

      {/* Visual: Single premium compact store concept */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.7 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 15,
          marginTop: 40,
          padding: '20px 30px',
          background: 'rgba(79,195,247,0.1)',
          borderRadius: 50,
          border: '1px solid rgba(79,195,247,0.3)'
        }}
      >
        <span style={{ fontSize: '2rem' }}>🏪</span>
        <span style={{ color: '#4fc3f7', fontWeight: 600, fontSize: '1.2rem' }}>Single Store</span>
        <span style={{ color: '#a0aec0' }}>→</span>
        <span style={{ fontSize: '2rem' }}>✨</span>
        <span style={{ color: '#4fc3f7', fontWeight: 600, fontSize: '1.2rem' }}>Premium Brand</span>
      </motion.div>
    </div>
  )
}

export default Slide9