import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide6 = () => {
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

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        style={{
          fontSize: '2.8rem',
          fontWeight: 700,
          lineHeight: 1.3,
          color: '#ffffff',
          marginBottom: 40,
          position: 'relative'
        }}
      >
        Agar aap nahi badlenge,<br />
        toh <span style={{ color: '#f59e0b' }}>market aapka wait nahi karega</span>
      </motion.h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
        {[
          'Young customers want convenience',
          'Organized brands will capture premium demand',
          'Walk-ins alone will not build the future'
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
            style={{
              padding: '12px 0',
              borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              color: i === 2 ? '#f59e0b' : '#ffffff',
              fontSize: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: 12
            }}
          >
            <span style={{ color: i === 2 ? '#f59e0b' : '#4fc3f7', fontSize: '0.9rem' }}>●</span>
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Slide6