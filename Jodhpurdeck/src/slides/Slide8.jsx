import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide8 = () => {
  return (
    <div className="slide" style={{
      background: 'linear-gradient(135deg, #0a1628 0%, #0f2847 50%, #0a1628 100%)',
      padding: '60px 80px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
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

      {/* Ambient light effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 70% 30%, rgba(79,195,247,0.15) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(41,182,246,0.1) 0%, transparent 40%)',
        pointerEvents: 'none'
      }} />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          fontSize: '3.2rem',
          fontWeight: 700,
          lineHeight: 1.1,
          color: '#ffffff',
          marginBottom: 15,
          position: 'relative',
          textAlign: 'center'
        }}
      >
        Kal aapka business <span style={{ color: '#4fc3f7' }}>aisa</span> dikh sakta hai
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        style={{
          fontSize: '1.8rem',
          color: '#a0aec0',
          textAlign: 'center',
          marginBottom: 40,
          position: 'relative'
        }}
      >
        Modern. Organized. Profitable. Respected.
      </motion.p>

      {/* Visual Elements Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gap: 20,
        flex: 1,
        position: 'relative'
      }}>
        {[
          { icon: '🏪', title: 'Modern Store', desc: 'Clean, branded space' },
          { icon: '📱', title: 'Digital Orders', desc: 'App & WhatsApp' },
          { icon: '🛵', title: 'Pickup Service', desc: 'Door-to-door' },
          { icon: '📊', title: 'Owner Control', desc: 'Full visibility' },
          { icon: '👨‍👩‍👧', title: 'Happy Team', desc: 'Professional staff' },
          { icon: '💳', title: 'Digital Payments', desc: 'UPI & online' },
          { icon: '📦', title: 'Premium Packaging', desc: 'Brand experience' },
          { icon: '⭐', title: 'Customer Trust', desc: 'Rated & reviewed' }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + i * 0.08, duration: 0.5 }}
            style={{
              background: 'rgba(255,255,255,0.05)',
              borderRadius: 16,
              padding: 25,
              border: '1px solid rgba(79,195,247,0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: 10 }}>{item.icon}</div>
            <div style={{
              fontSize: '1.1rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: 5
            }}>{item.title}</div>
            <div style={{
              fontSize: '0.9rem',
              color: '#a0aec0'
            }}>{item.desc}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Slide8