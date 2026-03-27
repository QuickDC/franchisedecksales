import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide11 = () => {
  const expectationItems = [
    { name: "Customer's Channel", desc: 'WhatsApp, App, Link' },
    { name: "Customer's Place", desc: 'Pickup at home' },
    { name: "Customer's Convenience", desc: 'Any time slots' },
    { name: "Customer's Time", desc: 'Real-time updates' }
  ]

  const realityItems = [
    { name: "Dry cleaner's Channel", desc: 'Phone calls only' },
    { name: "Dry cleaner's Place", desc: 'Visit the store' },
    { name: "Dry cleaner's Convenience", desc: 'Store hours only' },
    { name: "Dry cleaner's Time", desc: 'No updates' }
  ]

  const centerX = 600
  const centerY = 280
  const radius = 200

  // Left side - expectation items
  const leftItems = expectationItems.map((item, i) => {
    const angle = 180 + 40 - i * 30
    const rad = (angle * Math.PI) / 180
    const endX = centerX + Math.cos(rad) * (radius + 80)
    const endY = centerY + Math.sin(rad) * (radius + 80)
    return { ...item, endX, endY, rad }
  })

  // Right side - reality items
  const rightItems = realityItems.map((item, i) => {
    const angle = -40 + i * 30
    const rad = (angle * Math.PI) / 180
    const endX = centerX + Math.cos(rad) * (radius + 80)
    const endY = centerY + Math.sin(rad) * (radius + 80)
    return { ...item, endX, endY, rad }
  })

  return (
    <div className="slide" style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #0a1628 0%, #0f2847 50%, #0a1628 100%)',
      padding: '40px 50px',
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
          top: 30,
          right: 30,
          height: 35,
          objectFit: 'contain'
        }}
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#ffffff',
          textAlign: 'center',
          marginBottom: 10
        }}
      >
        The <span style={{ color: '#4fc3f7' }}>Expectation</span> vs <span style={{ color: '#ef8888' }}>Reality</span> Gap
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        style={{
          fontSize: '1.1rem',
          color: '#94a3b8',
          textAlign: 'center',
          marginBottom: 20
        }}
      >
        What customers expect vs. what most dry cleaners actually deliver
      </motion.p>

      {/* SVG layout */}
      <svg width="1200" height="550" style={{ display: 'block', margin: '0 auto' }}>
        <defs>
          <linearGradient id="cyanGrad11" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(79,195,247,0.9)" />
            <stop offset="100%" stopColor="rgba(79,195,247,0.15)" />
          </linearGradient>
          <linearGradient id="redGrad11" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(239,136,136,0.9)" />
            <stop offset="100%" stopColor="rgba(239,136,136,0.15)" />
          </linearGradient>
          <linearGradient id="leftBgGrad11" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(79,195,247,0.1)" />
            <stop offset="100%" stopColor="rgba(79,195,247,0)" />
          </linearGradient>
          <linearGradient id="rightBgGrad11" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(239,136,136,0.1)" />
            <stop offset="100%" stopColor="rgba(239,136,136,0)" />
          </linearGradient>
        </defs>

        {/* Background gradients */}
        <rect x="0" y="0" width="600" height="550" fill="url(#leftBgGrad11)" />
        <rect x="600" y="0" width="600" height="550" fill="url(#rightBgGrad11)" />

        {/* Center divider */}
        <line x1={centerX} y1="30" x2={centerX} y2="520" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="6,3" />

        {/* Center glow */}
        <circle cx={centerX} cy={centerY} r="100" fill="rgba(79,195,247,0.06)" />

        {/* Center circle */}
        <motion.circle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          cx={centerX}
          cy={centerY}
          r="60"
          fill="#0f2847"
          stroke="rgba(79,195,247,0.5)"
          strokeWidth="2"
        />
        <text x={centerX} y={centerY - 10} textAnchor="middle" fill="#ffffff" fontSize="22" fontWeight="700">THE GAP</text>
        <text x={centerX} y={centerY + 15} textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="600">Must be bridged</text>

        {/* Left side - EXPECTATION - Cyan */}
        {leftItems.map((item, i) => {
          const startX = centerX + Math.cos(item.rad) * 60
          const startY = centerY + Math.sin(item.rad) * 60
          const endX = item.endX - Math.cos(item.rad) * 55
          const endY = item.endY - Math.sin(item.rad) * 55
          return (
          <g key={`left-${i}`}>
            <motion.line
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              x1={startX}
              y1={startY}
              x2={endX}
              y2={endY}
              stroke="url(#cyanGrad11)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx={item.endX} cy={item.endY} r="55" fill="rgba(79,195,247,0.12)" stroke="rgba(79,195,247,0.5)" strokeWidth="1.5" />
            <text x={item.endX} y={item.endY - 8} textAnchor="middle" fill="#4fc3f7" fontSize="11" fontWeight="700">{item.name}</text>
            <text x={item.endX} y={item.endY + 18} textAnchor="middle" fill="#94a3b8" fontSize="10">{item.desc}</text>
          </g>
        )})}

        {/* Right side - REALITY - Red */}
        {rightItems.map((item, i) => {
          const startX = centerX + Math.cos(item.rad) * 60
          const startY = centerY + Math.sin(item.rad) * 60
          const endX = item.endX - Math.cos(item.rad) * 55
          const endY = item.endY - Math.sin(item.rad) * 55
          return (
          <g key={`right-${i}`}>
            <motion.line
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
              x1={startX}
              y1={startY}
              x2={endX}
              y2={endY}
              stroke="url(#redGrad11)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx={item.endX} cy={item.endY} r="55" fill="rgba(239,136,136,0.12)" stroke="rgba(239,136,136,0.5)" strokeWidth="1.5" />
            <text x={item.endX} y={item.endY - 8} textAnchor="middle" fill="#ef8888" fontSize="11" fontWeight="700">{item.name}</text>
            <text x={item.endX} y={item.endY + 18} textAnchor="middle" fill="#94a3b8" fontSize="10">{item.desc}</text>
          </g>
        )})}

        {/* Labels */}
        <text x="150" y="50" textAnchor="middle" fill="#4fc3f7" fontSize="24" fontWeight="700">EXPECTATION</text>
        <text x="1050" y="50" textAnchor="middle" fill="#ef8888" fontSize="24" fontWeight="700">REALITY</text>
      </svg>

      {/* Bottom message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{
          fontSize: '1.4rem',
          color: '#fbbf24',
          fontWeight: 600,
          textAlign: 'center',
          marginTop: 10
        }}
      >
        QDC Platform bridges this gap
      </motion.p>
    </div>
  )
}

export default Slide11