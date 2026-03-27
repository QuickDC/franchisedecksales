import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide13 = () => {
  const locations = [
    { icon: '🏠', label: 'Home', top: '20%', left: '15%' },
    { icon: '🏢', label: 'Office', top: '15%', left: '70%' },
    { icon: '🏢', label: 'PG/Hostel', top: '35%', left: '80%' },
    { icon: '🏠', label: 'Apartment', top: '70%', left: '20%' },
    { icon: '🏠', label: 'Home', top: '75%', left: '65%' },
    { icon: '🏢', label: 'Society', top: '45%', left: '10%' },
  ]

  return (
    <div className="slide" style={{
      position: 'relative',
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
          marginBottom: 15,
          fontWeight: 600,
          textAlign: 'center'
        }}
      >
        Growth Engine
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        style={{
          fontSize: '3rem',
          fontWeight: 700,
          color: '#ffffff',
          marginBottom: 40,
          textAlign: 'center'
        }}
      >
        Pickup & Delivery = <span style={{ color: '#f59e0b' }}>Growth Channel</span>
      </motion.h1>

      {/* Map Visualization */}
      <div style={{
        flex: 1,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {/* Store (Center) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            position: 'absolute',
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #4fc3f7 0%, #0288d1 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            boxShadow: '0 0 40px rgba(79,195,247,0.5)'
          }}
        >
          <span style={{ fontSize: '2rem' }}>🏪</span>
          <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.9rem' }}>YOUR STORE</span>
        </motion.div>

        {/* Location nodes */}
        {locations.map((loc, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
            style={{
              position: 'absolute',
              top: loc.top,
              left: loc.left,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 5
            }}
          >
            <div style={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              border: '2px solid rgba(245,158,11,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem'
            }}>
              {loc.icon}
            </div>
            <span style={{ color: '#a0aec0', fontSize: '0.8rem' }}>{loc.label}</span>
          </motion.div>
        ))}

        {/* Connection lines (decorative) */}
        <svg style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}>
          {locations.map((_, i) => (
            <motion.line
              key={i}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.8 }}
              x1="50%"
              y1="50%"
              x2={locations[i].left}
              y2={locations[i].top}
              stroke="rgba(79,195,247,0.3)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          ))}
        </svg>
      </div>

      {/* Bottom statement */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        style={{
          fontSize: '1.6rem',
          fontWeight: 600,
          color: '#ffffff',
          textAlign: 'center',
          marginTop: 20
        }}
      >
        Aap customer ka wait nahi karte.<br />
        <span style={{ color: '#4fc3f7' }}>Aap customer tak pahuchte ho.</span>
      </motion.p>
    </div>
  )
}

export default Slide13