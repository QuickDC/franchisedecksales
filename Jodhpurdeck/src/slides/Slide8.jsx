import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide8 = () => {
  return (
    <div className="slide" style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #0a1628 0%, #0f2847 50%, #0a1628 100%)',
      padding: '50px 100px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
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
          objectFit: 'contain',
          zIndex: 30
        }}
      />

      {/* TOP: Title + Sub-line */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          fontSize: '3rem',
          fontWeight: 700,
          lineHeight: 1.1,
          color: '#ffffff',
          marginBottom: 6,
          textAlign: 'center'
        }}
      >
        Kal aapka business <span style={{ color: '#4fc3f7' }}>aise</span> chal sakta hai
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        style={{
          fontSize: '1.4rem',
          color: '#94a3b8',
          textAlign: 'center',
          marginBottom: 50,
          letterSpacing: '1px'
        }}
      >
        Connected. Convenient. Controlled.
      </motion.p>

      {/* Full layout */}
      <div style={{ flex: 1, position: 'relative' }}>
        {/* TOP-RIGHT: CXO Control */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            padding: '14px 20px',
            background: 'rgba(15,23,41,0.95)',
            borderRadius: 10,
            border: '2px solid rgba(245,158,11,0.5)',
            zIndex: 20
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <div style={{ width: 6, height: 6, background: '#22c55e', borderRadius: '50%' }} />
            <span style={{ color: '#fbbf24', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '1px' }}>CXO CONTROL</span>
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            {[
              { label: 'Customers', value: '1,247', color: '#fff' },
              { label: 'Revenue', value: '₹8.5L', color: '#4fc3f7' },
              { label: 'Orders', value: '342', color: '#fff' },
              { label: 'In Process', value: '28', color: '#fbbf24' }
            ].map((m, i) => (
              <div key={i}>
                <div style={{ color: '#64748b', fontSize: '0.5rem', marginBottom: 1 }}>{m.label}</div>
                <div style={{ color: m.color, fontSize: '0.95rem', fontWeight: 700 }}>{m.value}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* LEFT: App, WhatsApp, Website row */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{
            position: 'absolute',
            left: '5%',
            top: '10%'
          }}
        >
          {/* Booking channels - horizontal row */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 30 }}>
            {[
              { name: 'App', color: '#4fc3f7' },
              { name: 'WhatsApp', color: '#22c55e' },
              { name: 'Website', color: '#a855f7' }
            ].map((ch, i) => (
              <motion.div
                key={ch.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                style={{
                  padding: '8px 14px',
                  background: 'rgba(30,40,55,0.6)',
                  borderRadius: 18,
                  border: `1px solid ${ch.color}40`
                }}
              >
                <span style={{ color: ch.color, fontSize: '0.75rem', fontWeight: 600 }}>{ch.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Customer directly below */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            style={{
              width: 110,
              height: 110,
              borderRadius: 22,
              background: 'linear-gradient(135deg, #1e293b 0%, #0f1729 100%)',
              border: '2px solid rgba(79,195,247,0.5)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span style={{ color: '#4fc3f7', fontSize: '2rem', fontWeight: 700 }}>C</span>
            <span style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>Customer</span>
          </motion.div>
        </motion.div>

        {/* CENTER: Store */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          style={{
            position: 'absolute',
            left: '50%',
            top: '45%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div style={{
            width: 140,
            height: 140,
            borderRadius: 26,
            background: 'linear-gradient(135deg, #1e293b 0%, #0f1729 100%)',
            border: '3px solid rgba(79,195,247,0.7)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 15px 50px rgba(0,0,0,0.5), 0 0 50px rgba(79,195,247,0.15)'
          }}>
            <span style={{ color: '#4fc3f7', fontSize: '2.8rem', fontWeight: 700 }}>S</span>
            <span style={{ color: '#fff', fontSize: '1rem', fontWeight: 700 }}>Store</span>
          </div>
        </motion.div>

        {/* RIGHT: Workshop */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          style={{
            position: 'absolute',
            right: '10%',
            top: '25%'
          }}
        >
          <div style={{
            width: 120,
            height: 120,
            borderRadius: 22,
            background: 'linear-gradient(135deg, #1e293b 0%, #0f1729 100%)',
            border: '2px solid rgba(168,85,247,0.5)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ color: '#a855f7', fontSize: '2.2rem', fontWeight: 700 }}>W</span>
            <span style={{ color: '#a855f7', fontSize: '0.9rem', fontWeight: 600 }}>Workshop</span>
          </div>
        </motion.div>

        {/* Rider on lower path */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.4 }}
          style={{
            position: 'absolute',
            left: '22%',
            top: '68%'
          }}
        >
          <div style={{
            width: 55,
            height: 55,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 6px 20px rgba(245,158,11,0.4)'
          }}>
            <span style={{ color: '#fbbf24', fontSize: '1.4rem', fontWeight: 700 }}>R</span>
          </div>
          <div style={{
            marginTop: 4,
            padding: '4px 12px',
            background: 'rgba(245,158,11,0.2)',
            borderRadius: 12,
            textAlign: 'center'
          }}>
            <span style={{ color: '#fbbf24', fontSize: '0.7rem', fontWeight: 600 }}>Rider</span>
          </div>
        </motion.div>

        {/* Delivered beside Customer at end */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 4, duration: 0.4 }}
          style={{
            position: 'absolute',
            left: '10%',
            top: '52%',
            padding: '10px 20px',
            background: 'rgba(34,197,94,0.15)',
            borderRadius: 24,
            border: '2px solid rgba(34,197,94,0.4)'
          }}
        >
          <span style={{ color: '#22c55e', fontSize: '0.9rem', fontWeight: 700 }}>✓ Delivered</span>
        </motion.div>

        {/* Connection paths */}
        <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
          <defs>
            <linearGradient id="c1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(79,195,247,0)" />
              <stop offset="100%" stopColor="rgba(79,195,247,0.5)" />
            </linearGradient>
            <linearGradient id="c2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(245,158,11,0)" />
              <stop offset="50%" stopColor="rgba(245,158,11,0.5)" />
              <stop offset="100%" stopColor="rgba(245,158,11,0)" />
            </linearGradient>
            <linearGradient id="c3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(168,85,247,0)" />
              <stop offset="100%" stopColor="rgba(168,85,247,0.4)" />
            </linearGradient>
            <linearGradient id="c4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(34,197,94,0)" />
              <stop offset="100%" stopColor="rgba(34,197,94,0.5)" />
            </linearGradient>
          </defs>

          {/* Booking: App/WhatsApp/Website → Customer → Store */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            d="M 135 145 Q 280 165 450 160"
            fill="none"
            stroke="url(#c1)"
            strokeWidth="3"
            strokeDasharray="8,4"
          />

          {/* Pickup: Customer ← Rider ← Store (lower path) */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 2, duration: 1 }}
            d="M 450 310 Q 350 370 280 390 Q 180 410 135 370"
            fill="none"
            stroke="url(#c2)"
            strokeWidth="2"
            strokeDasharray="6,4"
          />

          {/* Processing: Store → Workshop */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 2.6, duration: 0.8 }}
            d="M 500 160 Q 620 140 800 130"
            fill="none"
            stroke="url(#c3)"
            strokeWidth="2"
            strokeDasharray="6,4"
          />

          {/* Return: Workshop → Store */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 3.2, duration: 0.8 }}
            d="M 800 170 Q 620 200 500 230"
            fill="none"
            stroke="url(#c3)"
            strokeWidth="2"
            strokeDasharray="6,4"
          />

          {/* Delivery: Store → Rider → Customer */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 3.8, duration: 0.8 }}
            d="M 280 410 Q 200 420 135 400"
            fill="none"
            stroke="url(#c4)"
            strokeWidth="2"
            strokeDasharray="6,4"
          />
        </svg>
      </div>
    </div>
  )
}

export default Slide8