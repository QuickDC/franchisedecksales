import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide5 = () => {
  const risks = [
    { icon: '📞', title: 'Missed Calls', subtitle: 'Orders walk out the door' },
    { icon: '📋', title: 'Missed Orders', subtitle: 'No tracking, no memory' },
    { icon: '👤', title: 'No Customer Data', subtitle: 'Who are your regulars?' },
    { icon: '💰', title: 'Cash Confusion', subtitle: 'Where did the money go?' },
    { icon: '👨‍👩‍👧', title: 'Staff Dependency', subtitle: 'Owner must always be present' },
    { icon: '📈', title: 'No Scale', subtitle: 'Growth hits a ceiling' }
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

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: '1rem',
          color: '#f59e0b',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginBottom: 15,
          fontWeight: 600
        }}
      >
        The Hidden Cost
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        style={{
          fontSize: '3rem',
          fontWeight: 700,
          marginBottom: 40,
          lineHeight: 1.2,
          color: '#ffffff'
        }}
      >
        Manual business ki <span style={{ color: '#f59e0b' }}>hidden cost</span>
      </motion.h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 20,
        marginBottom: 40
      }}>
        {risks.map((risk, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
            style={{
              background: 'rgba(255,255,255,0.03)',
              borderRadius: 16,
              padding: 25,
              border: '1px solid rgba(245,158,11,0.15)',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '2.2rem', marginBottom: 12 }}>{risk.icon}</div>
            <div style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              color: '#fca5a5',
              marginBottom: 5
            }}>{risk.title}</div>
            <div style={{
              fontSize: '0.95rem',
              color: '#a0aec0'
            }}>{risk.subtitle}</div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{
          fontSize: '2rem',
          fontWeight: 700,
          color: '#f59e0b',
          textAlign: 'center',
          padding: '20px 40px',
          background: 'rgba(245,158,11,0.1)',
          borderRadius: 12,
          border: '1px solid rgba(245,158,11,0.2)'
        }}
      >
        Mehnat zyada. Growth kam.
      </motion.p>
    </div>
  )
}

export default Slide5