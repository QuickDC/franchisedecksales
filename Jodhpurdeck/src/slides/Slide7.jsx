import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide7 = () => {
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
        The Opportunity
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        style={{
          fontSize: '2.8rem',
          fontWeight: 700,
          lineHeight: 1.2,
          color: '#ffffff',
          marginBottom: 50,
          textAlign: 'center'
        }}
      >
        Good news: aapko naya business<br />
        <span style={{ color: '#4fc3f7' }}>shuru nahi karna</span>
      </motion.h1>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 30,
        flex: 1
      }}>
        {/* LEFT - What you already have */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{
            flex: 1,
            background: 'linear-gradient(135deg, rgba(255,200,100,0.1) 0%, rgba(255,150,50,0.05) 100%)',
            borderRadius: 20,
            padding: 35,
            border: '1px solid rgba(255,200,100,0.2)'
          }}
        >
          <h3 style={{
            fontSize: '1.3rem',
            color: '#fbbf24',
            marginBottom: 25,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: 10
          }}>
            ✨ Aapke paas already hai
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Trust', 'Customers', 'Experience', 'Reputation'].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                style={{
                  padding: '14px 0',
                  borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  color: '#ffffff',
                  fontSize: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12
                }}
              >
                <span style={{ color: '#fbbf24' }}>✓</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* CENTER - Plus/Bridge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #4fc3f7 0%, #29b6f6 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#0a1628',
            boxShadow: '0 0 30px rgba(79,195,247,0.4)'
          }}
        >
          +
        </motion.div>

        {/* RIGHT - What to add */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          style={{
            flex: 1,
            background: 'linear-gradient(135deg, rgba(79,195,247,0.15) 0%, rgba(41,182,246,0.08) 100%)',
            borderRadius: 20,
            padding: 35,
            border: '1px solid rgba(79,195,247,0.3)'
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
            ➜ Ab add karna hai
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Convenience', 'Control', 'Communication', 'Modern systems'].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                style={{
                  padding: '14px 0',
                  borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                  color: '#ffffff',
                  fontSize: '1.2rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12
                }}
              >
                <span style={{ color: '#4fc3f7' }}>→</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default Slide7