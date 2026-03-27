import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide2 = () => {
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
        transition={{ duration: 0.6 }}
        style={{
          fontSize: '1rem',
          color: '#4fc3f7',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginBottom: 15,
          fontWeight: 600
        }}
      >
        Market Reality
      </motion.div>

      <motion.h1
        className="slide-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        style={{
          fontSize: '3rem',
          fontWeight: 700,
          marginBottom: 50,
          lineHeight: 1.2,
          color: '#ffffff'
        }}
      >
        Jodhpur ka market aaj bhi<br />
        <span style={{ color: '#f59e0b' }}>traditional hai</span>
      </motion.h1>

      <div style={{
        display: 'flex',
        gap: 40,
        flex: 1,
        alignItems: 'center'
      }}>
        {/* LEFT - Traditional */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{
            flex: 1,
            background: 'linear-gradient(180deg, rgba(255,100,100,0.1) 0%, rgba(255,100,100,0.05) 100%)',
            borderRadius: 20,
            padding: 35,
            border: '1px solid rgba(255,100,100,0.2)'
          }}
        >
          <h3 style={{
            fontSize: '1.3rem',
            color: '#fca5a5',
            marginBottom: 25,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: 10
          }}>
            <span style={{ fontSize: '1.5rem' }}>⚠️</span>
            Most Stores Today
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Walk-in dependent', 'Manual operations', 'Family-run'].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.15, duration: 0.5 }}
                style={{
                  padding: '12px 0',
                  borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  color: '#a0aec0',
                  fontSize: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12
                }}
              >
                <span style={{ color: '#fca5a5', fontSize: '0.9rem' }}>●</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT - Modern */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{
            flex: 1,
            background: 'linear-gradient(180deg, rgba(79,195,247,0.1) 0%, rgba(79,195,247,0.05) 100%)',
            borderRadius: 20,
            padding: 35,
            border: '1px solid rgba(79,195,247,0.2)'
          }}
        >
          <h3 style={{
            fontSize: '1.3rem',
            color: '#4fc3f7',
            marginBottom: 25,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: 10
          }}>
            <span style={{ fontSize: '1.5rem' }}>🚀</span>
            What's Entering the Market
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Pickup & delivery', 'Digital convenience', 'Better brand experience'].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                style={{
                  padding: '12px 0',
                  borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  color: '#ffffff',
                  fontSize: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12
                }}
              >
                <span style={{ color: '#4fc3f7', fontSize: '0.9rem' }}>●</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default Slide2