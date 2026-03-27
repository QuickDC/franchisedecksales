import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide16 = () => {
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
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(79,195,247,0.1) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          fontSize: '3.5rem',
          fontWeight: 800,
          color: '#ffffff',
          marginBottom: 50,
          position: 'relative'
        }}
      >
        Take the <span style={{ color: '#4fc3f7' }}>first step</span> today
      </motion.h1>

      {/* CTA Buttons */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: 25,
        marginBottom: 50,
        position: 'relative'
      }}>
        {[
          { title: 'See the Demo', icon: '👁️' },
          { title: 'Understand the Fit', icon: '📋' },
          { title: 'Start Your Journey', icon: '🚀' }
        ].map((cta, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
            style={{
              padding: '25px 35px',
              background: i === 2
                ? 'linear-gradient(135deg, #4fc3f7 0%, #0288d1 100%)'
                : 'rgba(255,255,255,0.05)',
              borderRadius: 16,
              border: i === 2 ? 'none' : '1px solid rgba(79,195,247,0.3)',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 10,
              minWidth: 180
            }}
          >
            <span style={{ fontSize: '2rem' }}>{cta.icon}</span>
            <span style={{
              color: i === 2 ? '#0a1628' : '#ffffff',
              fontWeight: 700,
              fontSize: '1.1rem'
            }}>{cta.title}</span>
          </motion.div>
        ))}
      </div>

      {/* Bottom Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          position: 'relative',
          padding: '30px 40px',
          background: 'rgba(255,255,255,0.03)',
          borderRadius: 16,
          border: '1px solid rgba(79,195,247,0.2)',
          maxWidth: 600,
          margin: '0 auto'
        }}
      >
        <p style={{
          fontSize: '1.5rem',
          color: '#ffffff',
          fontWeight: 600,
          lineHeight: 1.5,
          margin: 0
        }}>
          Business aapka hai.<br />
          Agla version bhi <span style={{ color: '#4fc3f7' }}>aapka hi ho sakta hai.</span>
        </p>
      </motion.div>

      {/* Laundry Launchpad branding */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        style={{
          position: 'absolute',
          top: 40,
          right: 80,
          fontSize: '0.9rem',
          color: '#4fc3f7',
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}
      >
        Laundry Launchpad • Jodhpur
      </motion.div>
    </div>
  )
}

export default Slide16