import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide11 = () => {
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
          marginBottom: 20,
          fontWeight: 600,
          textAlign: 'center'
        }}
      >
        The Solution
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        style={{
          fontSize: '3.5rem',
          fontWeight: 800,
          color: '#ffffff',
          marginBottom: 10,
          textAlign: 'center'
        }}
      >
        Quick Dry Cleaning
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        style={{
          fontSize: '1.8rem',
          color: '#4fc3f7',
          marginBottom: 40,
          textAlign: 'center',
          fontWeight: 600
        }}
      >
        Modern laundry business ka operating system
      </motion.p>

      {/* Ecosystem Diagram */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
        flex: 1
      }}>
        {/* CUSTOMER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 15
          }}
        >
          <div style={{
            width: 100,
            height: 100,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #4fc3f7 0%, #29b6f6 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.5rem',
            boxShadow: '0 0 30px rgba(79,195,247,0.4)'
          }}>
            👤
          </div>
          <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.1rem' }}>Customers</span>
          <span style={{ color: '#a0aec0', fontSize: '0.9rem' }}>App • WhatsApp • Phone</span>
        </motion.div>

        {/* Arrows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          style={{ color: '#4fc3f7', fontSize: '1.5rem' }}
        >
          ➜
        </motion.div>

        {/* CENTER - QDC Core */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{
            width: 160,
            height: 160,
            borderRadius: 24,
            background: 'linear-gradient(135deg, #4fc3f7 0%, #0288d1 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 50px rgba(79,195,247,0.5)'
          }}
        >
          <span style={{ fontSize: '3rem', marginBottom: 5 }}>⚡</span>
          <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.3rem' }}>QDC</span>
          <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>Software</span>
        </motion.div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          style={{ color: '#4fc3f7', fontSize: '1.5rem' }}
        >
          ➜
        </motion.div>

        {/* RIDER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 15
          }}
        >
          <div style={{
            width: 100,
            height: 100,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.5rem',
            boxShadow: '0 0 30px rgba(245,158,11,0.4)'
          }}>
            🛵
          </div>
          <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '1.1rem' }}>Pickup & Delivery</span>
          <span style={{ color: '#a0aec0', fontSize: '0.9rem' }}>Route • Timing • Status</span>
        </motion.div>
      </div>

      {/* Bottom - Owner Control */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 15,
          marginTop: 30,
          padding: '15px 25px',
          background: 'rgba(79,195,247,0.1)',
          borderRadius: 50,
          border: '1px solid rgba(79,195,247,0.3)'
        }}
      >
        <span style={{ fontSize: '1.3rem' }}>📊</span>
        <span style={{ color: '#4fc3f7', fontWeight: 600 }}>Owner Control Dashboard</span>
      </motion.div>
    </div>
  )
}

export default Slide11