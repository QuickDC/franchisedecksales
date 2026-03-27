import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide10 = () => {
  return (
    <div className="slide" style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #0a1628 0%, #0f2847 50%, #0a1628 100%)',
      padding: '60px 100px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          fontSize: '3rem',
          fontWeight: 700,
          marginBottom: 40,
          lineHeight: 1.2,
          color: '#ffffff',
          textAlign: 'center'
        }}
      >
        Traditional <span style={{ color: '#64748b' }}>vs</span> Modern<br />
        <span style={{ color: '#4fc3f7' }}>Laundry Business</span>
      </motion.h1>

      {/* Three-zone layout: Left -> Center -> Right */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
        flex: 1
      }}>
        {/* LEFT ZONE - Traditional Model */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{
            width: '34%',
            padding: '35px 40px',
            background: 'linear-gradient(135deg, rgba(20,15,25,0.85) 0%, rgba(25,20,35,0.7) 100%)',
            borderRadius: '20px 8px 8px 20px',
            borderRight: '3px solid rgba(252,165,165,0.3)',
            minHeight: 240
          }}
        >
          <h3 style={{
            fontSize: '0.95rem',
            color: '#ef8888',
            marginBottom: 25,
            fontWeight: 600,
            letterSpacing: '2px',
            textAlign: 'left'
          }}>
            TRADITIONAL MODEL
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Walk-in only', 'Call for updates', 'Cash only', 'Paper register', 'Owner memory'].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                style={{
                  padding: '14px 0',
                  borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  color: '#d4dce8',
                  fontSize: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  textAlign: 'left'
                }}
              >
                <span style={{ color: '#ef8888', fontSize: '0.8rem', opacity: 0.7 }}>●</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* CENTER ZONE - Dramatic Transition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            width: '120px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 15px'
          }}
        >
          {/* Dramatic glowing arrow with continuous animation */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* Large beam glow */}
            <div style={{
              position: 'absolute',
              width: 120,
              height: 6,
              background: 'linear-gradient(90deg, transparent, #f59e0b, #fbbf24, #f59e0b, transparent)',
              borderRadius: 3,
              boxShadow: '0 0 30px rgba(245,158,11,0.8), 0 0 60px rgba(245,158,11,0.5), 0 0 90px rgba(245,158,11,0.3)'
            }} />
            {/* Glow effect behind */}
            <div style={{
              position: 'absolute',
              width: 140,
              height: 30,
              background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.3), transparent)',
              filter: 'blur(8px)'
            }} />
            {/* Moving animated arrow head */}
            <motion.div
              animate={{
                x: [0, 15, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                position: 'absolute',
                right: 5,
                width: 0,
                height: 0,
                borderTop: '14px solid transparent',
                borderBottom: '14px solid transparent',
                borderLeft: '22px solid #fbbf24',
                filter: 'drop-shadow(0 0 12px rgba(251,191,36,0.9))'
              }}
            />
            {/* Moving beam effect */}
            <motion.div
              animate={{
                opacity: [0.3, 1, 0.3],
                x: [-20, 20, -20]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                position: 'absolute',
                width: 60,
                height: 4,
                background: 'linear-gradient(90deg, transparent, #fbbf24, #f59e0b)',
                borderRadius: 2,
                left: '10%',
                boxShadow: '0 0 20px rgba(251,191,36,0.8)'
              }}
            />
          </div>

          {/* Transition message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            style={{
              fontSize: '1rem',
              color: '#fbbf24',
              fontWeight: 600,
              textAlign: 'center',
              marginTop: 20,
              lineHeight: 1.4,
              textShadow: '0 0 20px rgba(251,191,36,0.5)'
            }}
          >
            Time to<br />modernize
          </motion.p>
        </motion.div>

        {/* RIGHT ZONE - Modern Model */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          style={{
            width: '34%',
            padding: '35px 40px',
            background: 'linear-gradient(135deg, rgba(30,50,70,0.5) 0%, rgba(35,60,85,0.4) 100%)',
            borderRadius: '8px 20px 20px 8px',
            borderLeft: '3px solid rgba(79,195,247,0.4)',
            minHeight: 240
          }}
        >
          <h3 style={{
            fontSize: '0.95rem',
            color: '#4fc3f7',
            marginBottom: 25,
            fontWeight: 600,
            letterSpacing: '2px',
            textAlign: 'left'
          }}>
            MODERN MODEL
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {['Pickup request', 'Timely communication', 'Digital payments', 'Live tracking', 'System control'].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0 + i * 0.1, duration: 0.4 }}
                style={{
                  padding: '14px 0',
                  borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  color: '#ffffff',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  textAlign: 'left'
                }}
              >
                <span style={{ color: '#4fc3f7', fontSize: '0.8rem' }}>→</span>
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default Slide10