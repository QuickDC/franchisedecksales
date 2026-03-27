import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide1 = () => {
  return (
    <div className="slide" style={{
      background: 'linear-gradient(135deg, #0a0f1a 0%, #0f172a 40%, #0a1628 70%, #050a12 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Rich Center Glow */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 800,
        height: 600,
        background: 'radial-gradient(ellipse at center, rgba(79, 195, 247, 0.15) 0%, rgba(79, 195, 247, 0.05) 30%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      {/* Soft Vignette */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)',
        pointerEvents: 'none'
      }} />

      {/* Subtle Texture/Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(79, 195, 247, 0.03) 0%, transparent 25%), radial-gradient(circle at 70% 30%, rgba(79, 195, 247, 0.02) 0%, transparent 20%)',
        pointerEvents: 'none'
      }} />

      {/* Logo - exact same position */}
      <motion.img
        src={logoImg}
        alt="QDC Logo"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        style={{
          position: 'absolute',
          top: 40,
          right: 30,
          height: 40,
          objectFit: 'contain'
        }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          fontSize: '4.5rem',
          fontWeight: 800,
          letterSpacing: '-2px',
          lineHeight: 1.05,
          marginBottom: 15,
          color: '#ffffff',
          textShadow: '0 0 60px rgba(79, 195, 247, 0.3)'
        }}
      >
        Laundry Business Ka<br />
        <span style={{ color: '#4fc3f7', textShadow: '0 0 40px rgba(79, 195, 247, 0.5)' }}>Agla Zamana</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        style={{
          fontSize: '1.8rem',
          color: '#e2e8f0',
          maxWidth: 600,
          lineHeight: 1.5,
          fontWeight: 500
        }}
      >
        Customer badal gaya hai.<br />
        Kya aapka business bhi badla hai?
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{
          position: 'absolute',
          bottom: 40,
          fontSize: '1rem',
          color: '#4a5568',
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}
      >
        Laundry Launchpad • Jodhpur
      </motion.div>
    </div>
  )
}

export default Slide1