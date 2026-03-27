import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide14 = () => {
  const demandNodes = [
    { label: 'Homes', sublabel: 'Residential', color: '#4fc3f7', angle: -90 },
    { label: 'Apartments', sublabel: 'Societies', color: '#a855f7', angle: 0 },
    { label: 'Offices', sublabel: 'Commercial', color: '#f59e0b', angle: 90 },
    { label: 'Nearby Areas', sublabel: 'Local Reach', color: '#22c55e', angle: 180 }
  ]

  return (
    <div className="slide" style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #0a1628 0%, #0f2847 50%, #0a1628 100%)',
      padding: '50px 80px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start'
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
          top: 35,
          right: 30,
          height: 38,
          objectFit: 'contain'
        }}
      />

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          fontSize: '2.8rem',
          fontWeight: 700,
          color: '#ffffff',
          marginBottom: 30,
          textAlign: 'center'
        }}
      >
        Pickup & Delivery = <span style={{ color: '#f59e0b' }}>Growth Channel</span>
      </motion.h1>

      {/* Market Expansion Map */}
      <div style={{
        flex: 1,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {/* Service radius circle (subtle background) */}
        <div style={{
          position: 'absolute',
          width: 520,
          height: 520,
          borderRadius: '50%',
          border: '1px solid rgba(79,195,247,0.15)',
          background: 'radial-gradient(circle, rgba(79,195,247,0.05) 0%, transparent 70%)'
        }} />

        {/* CENTER - Your Store (Premium Hub) */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          style={{
            position: 'absolute',
            width: 130,
            height: 130,
            borderRadius: 24,
            background: 'linear-gradient(135deg, #0f2847 0%, #1e3a5f 100%)',
            border: '3px solid rgba(79,195,247,0.9)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 60px rgba(79,195,247,0.5), 0 0 100px rgba(79,195,247,0.2)',
            zIndex: 10
          }}
        >
          <span style={{ color: '#4fc3f7', fontSize: '1.5rem', fontWeight: 800 }}>Your Dry Clean Store</span>
          {/* Small service icon */}
          <div style={{ marginTop: 8, width: 30, height: 2, background: 'rgba(79,195,247,0.3)', borderRadius: 1 }} />
        </motion.div>

        {/* TOP Node - Homes */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{
            position: 'absolute',
            top: 50,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div style={{
            width: 90,
            height: 90,
            borderRadius: '50%',
            background: 'rgba(25,35,55,0.9)',
            border: `2px solid ${demandNodes[0].color}60`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 0 20px ${demandNodes[0].color}20`
          }}>
            <span style={{ color: '#fff', fontSize: '1.4rem' }}>🏠</span>
          </div>
          <span style={{ color: demandNodes[0].color, fontSize: '1rem', fontWeight: 700, marginTop: 10 }}>{demandNodes[0].label}</span>
          <span style={{ color: '#64748b', fontSize: '0.75rem', marginTop: 2 }}>{demandNodes[0].sublabel}</span>
        </motion.div>

        {/* LEFT Node - Apartments */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          style={{
            position: 'absolute',
            left: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div style={{
            width: 90,
            height: 90,
            borderRadius: '50%',
            background: 'rgba(25,35,55,0.9)',
            border: `2px solid ${demandNodes[1].color}60`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 0 20px ${demandNodes[1].color}20`
          }}>
            <span style={{ color: '#fff', fontSize: '1.4rem' }}>🏢</span>
          </div>
          <span style={{ color: demandNodes[1].color, fontSize: '1rem', fontWeight: 700, marginTop: 10 }}>{demandNodes[1].label}</span>
          <span style={{ color: '#64748b', fontSize: '0.75rem', marginTop: 2 }}>{demandNodes[1].sublabel}</span>
        </motion.div>

        {/* BOTTOM Node - Offices */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{
            position: 'absolute',
            bottom: 50,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div style={{
            width: 90,
            height: 90,
            borderRadius: '50%',
            background: 'rgba(25,35,55,0.9)',
            border: `2px solid ${demandNodes[2].color}60`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 0 20px ${demandNodes[2].color}20`
          }}>
            <span style={{ color: '#fff', fontSize: '1.4rem' }}>🏛️</span>
          </div>
          <span style={{ color: demandNodes[2].color, fontSize: '1rem', fontWeight: 700, marginTop: 10 }}>{demandNodes[2].label}</span>
          <span style={{ color: '#64748b', fontSize: '0.75rem', marginTop: 2 }}>{demandNodes[2].sublabel}</span>
        </motion.div>

        {/* RIGHT Node - Nearby Areas */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          style={{
            position: 'absolute',
            right: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <div style={{
            width: 90,
            height: 90,
            borderRadius: '50%',
            background: 'rgba(25,35,55,0.9)',
            border: `2px solid ${demandNodes[3].color}60`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 0 20px ${demandNodes[3].color}20`
          }}>
            <span style={{ color: '#fff', fontSize: '1.4rem' }}>📍</span>
          </div>
          <span style={{ color: demandNodes[3].color, fontSize: '1rem', fontWeight: 700, marginTop: 10 }}>{demandNodes[3].label}</span>
          <span style={{ color: '#64748b', fontSize: '0.75rem', marginTop: 2 }}>{demandNodes[3].sublabel}</span>
        </motion.div>

        {/* Glowing route lines from center to each node */}
        <svg style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}>
          <defs>
            <filter id="glowLine" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Top route - to Homes */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            d="M 400 285 L 400 140"
            fill="none"
            stroke="#4fc3f7"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            strokeDasharray="8,5"
            strokeLinecap="round"
            filter="url(#glowLine)"
          />

          {/* Right route - to Apartments */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            d="M 465 350 L 120 320"
            fill="none"
            stroke="#a855f7"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            strokeDasharray="8,5"
            strokeLinecap="round"
            filter="url(#glowLine)"
          />

          {/* Bottom route - to Offices */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            d="M 400 415 L 400 490"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            strokeDasharray="8,5"
            strokeLinecap="round"
            filter="url(#glowLine)"
          />

          {/* Left route - to Nearby Areas */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            d="M 335 350 L 680 320"
            fill="none"
            stroke="#22c55e"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            strokeDasharray="8,5"
            strokeLinecap="round"
            filter="url(#glowLine)"
          />
        </svg>
      </div>

      {/* Bottom statement - split clearly */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        style={{
          textAlign: 'center',
          marginTop: 15
        }}
      >
        <p style={{
          fontSize: '1.4rem',
          fontWeight: 500,
          color: '#94a3b8',
          marginBottom: 8,
          margin: 0
        }}>
          Aap customer ka wait nahi karte.
        </p>
        <p style={{
          fontSize: '1.65rem',
          fontWeight: 700,
          color: '#4fc3f7',
          margin: 0,
          textShadow: '0 0 25px rgba(79,195,247,0.5)'
        }}>
          Aap customer tak pahuchte ho.
        </p>
      </motion.div>
    </div>
  )
}

export default Slide14