import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide10 = () => {
  const oldStyle = [
    { icon: '🚶', title: 'Walk-in only' },
    { icon: '📞', title: 'Call for updates' },
    { icon: '💵', title: 'Cash' },
    { icon: '📓', title: 'Register' },
    { icon: '🧠', title: 'Owner memory' }
  ]

  const modernStyle = [
    { icon: '📱', title: 'Pickup request' },
    { icon: '💬', title: 'Timely communication' },
    { icon: '📲', title: 'Digital payments' },
    { icon: '📍', title: 'Tracking' },
    { icon: '⚙️', title: 'System control' }
  ]

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

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#ffffff',
          marginBottom: 40,
          textAlign: 'center'
        }}
      >
        Old Style <span style={{ color: '#a0aec0' }}>vs</span> Modern Laundry Business
      </motion.h1>

      <div style={{
        display: 'flex',
        gap: 30,
        flex: 1,
        alignItems: 'stretch'
      }}>
        {/* LEFT - Old Style */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            flex: 1,
            background: 'linear-gradient(180deg, rgba(100,100,100,0.2) 0%, rgba(60,60,60,0.1) 100%)',
            borderRadius: 20,
            padding: 30,
            border: '1px solid rgba(255,100,100,0.2)'
          }}
        >
          <h3 style={{
            fontSize: '1.4rem',
            color: '#fca5a5',
            marginBottom: 25,
            fontWeight: 700,
            textAlign: 'center',
            paddingBottom: 15,
            borderBottom: '2px solid rgba(255,100,100,0.3)'
          }}>
            ❌ Old Style
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
            {oldStyle.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 15,
                  padding: '12px 15px',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: 10
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                <span style={{ color: '#a0aec0', fontSize: '1.1rem' }}>{item.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT - Modern */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            flex: 1,
            background: 'linear-gradient(180deg, rgba(79,195,247,0.15) 0%, rgba(79,195,247,0.08) 100%)',
            borderRadius: 20,
            padding: 30,
            border: '1px solid rgba(79,195,247,0.3)'
          }}
        >
          <h3 style={{
            fontSize: '1.4rem',
            color: '#4fc3f7',
            marginBottom: 25,
            fontWeight: 700,
            textAlign: 'center',
            paddingBottom: 15,
            borderBottom: '2px solid rgba(79,195,247,0.3)'
          }}
          >
            ✓ Modern
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
            {modernStyle.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 15,
                  padding: '12px 15px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: 10
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                <span style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 500 }}>{item.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Slide10