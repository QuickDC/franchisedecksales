import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide6 = () => {
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

      {/* Forward motion background effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '60%',
        height: '100%',
        background: 'linear-gradient(135deg, transparent 0%, rgba(79,195,247,0.05) 50%, rgba(79,195,247,0.1) 100%)',
        pointerEvents: 'none'
      }} />

      {/* Directional lines */}
      <svg style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none'
      }}>
        <defs>
          <linearGradient id="motionGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(79,195,247,0)" />
            <stop offset="50%" stopColor="rgba(79,195,247,0.15)" />
            <stop offset="100%" stopColor="rgba(79,195,247,0.05)" />
          </linearGradient>
        </defs>
        {[30, 50, 70].map((y, i) => (
          <motion.line
            key={i}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ delay: 0.5 + i * 0.2, duration: 1 }}
            x1="10%"
            y1={`${y}%`}
            x2="90%"
            y2={`${y}%`}
            stroke="url(#motionGrad)"
            strokeWidth="1"
            strokeDasharray="4,8"
          />
        ))}
      </svg>

      {/* Main headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        style={{
          fontSize: '3rem',
          fontWeight: 700,
          lineHeight: 1.25,
          color: '#ffffff',
          marginBottom: 50,
          position: 'relative'
        }}
      >
        Agar aap nahi badlenge,<br />
        toh <span style={{ color: '#f59e0b' }}>market aapka wait nahi karega</span>
      </motion.h1>

      {/* Two smaller supporting warnings with arrow leading to verdict */}
      <div style={{
        display: 'flex',
        gap: 40,
        marginBottom: 30,
        alignItems: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{
            flex: 1,
            padding: '20px 25px',
            background: 'rgba(30,45,60,0.4)',
            borderRadius: 12,
            borderLeft: '3px solid rgba(79,195,247,0.4)'
          }}
        >
          <p style={{
            fontSize: '1.1rem',
            color: '#94a3b8',
            margin: 0,
            lineHeight: 1.4
          }}>
            Young customers want convenience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{
            flex: 1,
            padding: '20px 25px',
            background: 'rgba(30,45,60,0.4)',
            borderRadius: 12,
            borderLeft: '3px solid rgba(79,195,247,0.4)'
          }}
        >
          <p style={{
            fontSize: '1.1rem',
            color: '#94a3b8',
            margin: 0,
            lineHeight: 1.4
          }}>
            Organized brands capture premium demand
          </p>
        </motion.div>

        {/* Arrow pointing to verdict */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          style={{
            color: '#f59e0b',
            fontSize: '2rem'
          }}
        >
          →
        </motion.div>
      </div>

      {/* Main verdict - big and prominent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        style={{
          background: 'linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(245,158,11,0.05) 100%)',
          borderRadius: 16,
          padding: '30px 40px',
          border: '1px solid rgba(245,158,11,0.3)',
          borderLeft: '4px solid #f59e0b'
        }}
      >
        <p style={{
          fontSize: '2.2rem',
          fontWeight: 700,
          color: '#fbbf24',
          margin: 0,
          letterSpacing: '0.5px'
        }}>
          Walk-ins alone won't build the future
        </p>
      </motion.div>
    </div>
  )
}

export default Slide6