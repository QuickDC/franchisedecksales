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

      {/* Spotlight effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 600,
        height: 600,
        background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.2) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          fontSize: '2.8rem',
          fontWeight: 700,
          color: '#ffffff',
          marginBottom: 20,
          textAlign: 'center',
          position: 'relative'
        }}
      >
        Jo pehle modern banega,<br />
        <span style={{ color: '#f59e0b' }}>wahi premium position le lega</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{
          fontSize: '2rem',
          fontWeight: 600,
          color: '#a0aec0',
          textAlign: 'center',
          marginBottom: 50,
          position: 'relative'
        }}
      >
        Question yeh nahi hai ki market badlega ya nahi.<br />
        Question yeh hai ki <span style={{ color: '#ffffff' }}>aap kab badloge.</span>
      </motion.p>

      {/* Visual: Race position metaphor */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        marginBottom: 40,
        position: 'relative'
      }}>
        {/* Left - Behind */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          style={{
            padding: '20px 30px',
            background: 'rgba(100,100,100,0.2)',
            borderRadius: 12,
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <span style={{ fontSize: '2rem', opacity: 0.5 }}>🏪</span>
          <div style={{ color: '#a0aec0', marginTop: 8, fontSize: '0.9rem' }}>Traditional</div>
        </motion.div>

        {/* Middle - The leaders */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            padding: '25px 40px',
            background: 'linear-gradient(135deg, rgba(79,195,247,0.2) 0%, rgba(79,195,247,0.1) 100%)',
            borderRadius: 16,
            border: '2px solid #4fc3f7'
          }}
        >
          <span style={{ fontSize: '2.5rem' }}>✨🏪</span>
          <div style={{ color: '#4fc3f7', marginTop: 8, fontWeight: 600 }}>Modern Leaders</div>
          <div style={{ color: '#a0aec0', fontSize: '0.8rem' }}>Premium position captured</div>
        </motion.div>

        {/* Right - You */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          style={{
            padding: '20px 30px',
            background: 'rgba(245,158,11,0.15)',
            borderRadius: 12,
            border: '1px solid rgba(245,158,11,0.5)'
          }}
        >
          <span style={{ fontSize: '2rem' }}>❓</span>
          <div style={{ color: '#f59e0b', marginTop: 8, fontWeight: 600 }}>You?</div>
          <div style={{ color: '#a0aec0', fontSize: '0.8rem' }}>Your decision</div>
        </motion.div>
      </div>

      {/* Arrow indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        style={{
          textAlign: 'center',
          color: '#4fc3f7',
          fontSize: '1.5rem'
        }}
      >
        ➜ The market is moving. Be part of it.
      </motion.div>
    </div>
  )
}

export default Slide16