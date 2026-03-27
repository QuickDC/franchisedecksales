import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide5 = () => {
  const categories = [
    {
      title: 'Lost Revenue',
      color: '#ef4444',
      items: [
        { title: 'Missed Calls', desc: 'Orders walk out the door' },
        { title: 'Missed Orders', desc: 'No tracking, no memory' }
      ]
    },
    {
      title: 'Lost Control',
      color: '#f59e0b',
      items: [
        { title: 'No Customer Data', desc: 'Who are your regulars?' },
        { title: 'Cash Confusion', desc: 'Where did money go?' }
      ]
    },
    {
      title: 'Lost Growth',
      color: '#4fc3f7',
      items: [
        { title: 'Staff Dependency', desc: 'Owner must always be present' },
        { title: 'No Scale', desc: 'You\'ve hit your ceiling' }
      ]
    }
  ]

  return (
    <div className="slide" style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #0a1628 0%, #0f2847 50%, #0a1628 100%)',
      padding: '60px 100px',
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

      {/* Warning atmosphere */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(ellipse at 50% 20%, rgba(239,68,68,0.06) 0%, transparent 40%)',
        pointerEvents: 'none'
      }} />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        style={{
          fontSize: '3rem',
          fontWeight: 700,
          marginBottom: 50,
          lineHeight: 1.2,
          color: '#ffffff',
          textAlign: 'center'
        }}
      >
        Manual business ki <span style={{ color: '#f59e0b' }}>hidden cost</span>
      </motion.h1>

      {/* Three damage columns */}
      <div style={{
        display: 'flex',
        gap: 30,
        marginBottom: 50
      }}>
        {categories.map((cat, colIndex) => (
          <motion.div
            key={colIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + colIndex * 0.15, duration: 0.6 }}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Category header */}
            <div style={{
              textAlign: 'center',
              marginBottom: 20,
              paddingBottom: 15,
              borderBottom: `2px solid ${cat.color}40`
            }}>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 700,
                color: cat.color,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                margin: 0
              }}>{cat.title}</h3>
            </div>

            {/* Two pain points per category */}
            {cat.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + colIndex * 0.15 + i * 0.1, duration: 0.4 }}
                style={{
                  background: 'rgba(30,40,55,0.35)',
                  borderRadius: 10,
                  padding: '14px 16px',
                  marginBottom: 10,
                  borderLeft: `3px solid ${cat.color}60`
                }}
              >
                <div style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: 3
                }}>{item.title}</div>
                <div style={{
                  fontSize: '0.85rem',
                  color: '#94a3b8'
                }}>{item.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Bottom verdict */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        style={{
          textAlign: 'center'
        }}
      >
        <p style={{
          fontSize: '2.4rem',
          fontWeight: 800,
          color: '#f59e0b',
          margin: 0,
          letterSpacing: '1px',
          textShadow: '0 0 40px rgba(245,158,11,0.4)'
        }}>
          Mehnat zyada. Growth kam.
        </p>
      </motion.div>
    </div>
  )
}

export default Slide5