import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'
import kidImg from '../kid.png'
import zomatoImg from '../zomato.jpg'
import swiggyImg from '../swiggy.webp'
import amazonImg from '../amazon-png.png'
import blinkitImg from '../Blinkit-yellow-rounded.svg'

const Slide10 = () => {
  const modernItems = [
    { name: 'Zomato', desc: 'Food delivery', img: zomatoImg },
    { name: 'Swiggy', desc: 'Quick delivery', img: swiggyImg },
    { name: 'Amazon', desc: 'Same day', img: amazonImg },
    { name: 'Blinkit', desc: '10-min delivery', img: blinkitImg }
  ]

  const traditionalItems = [
    { name: 'Phone', desc: 'Manual updates' },
    { name: 'Store Visit', desc: 'Drop & pickup' },
    { name: 'Cash', desc: 'No digital' },
    { name: 'Paper', desc: 'No tracking' }
  ]

  const centerX = 600
  const centerY = 280
  const radius = 220

  // Left side - show modernItems (zomato, swiggy etc) - angles go to LEFT side
  const leftItems = modernItems.map((item, i) => {
    const angle = 180 + 30 - i * 25
    const rad = (angle * Math.PI) / 180
    const endX = centerX + Math.cos(rad) * (radius + 100) // End position (center of circle)
    const endY = centerY + Math.sin(rad) * (radius + 100)
    return { ...item, endX, endY, rad }
  })

  // Right side - show traditionalItems (phone, store visit etc) - angles go to RIGHT side
  const rightItems = traditionalItems.map((item, i) => {
    const angle = -30 + i * 25
    const rad = (angle * Math.PI) / 180
    const endX = centerX + Math.cos(rad) * (radius + 100) // End position (center of circle)
    const endY = centerY + Math.sin(rad) * (radius + 100)
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

      {/* Title - Middle of each side */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, padding: '0 120px' }}>
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontSize: '3rem',
            fontWeight: 700,
            color: '#4fc3f7',
            textAlign: 'center',
            position: 'absolute',
            left: '15%'
          }}
        >
          EXPECTATION
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontSize: '3rem',
            fontWeight: 700,
            color: '#ef8888',
            textAlign: 'center',
            position: 'absolute',
            right: '15%'
          }}
        >
          REALITY
        </motion.h1>
      </div>

      {/* SVG layout with lines and circles */}
      <svg width="1200" height="600" style={{ display: 'block', margin: '0 auto' }}>
        <defs>
          <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(79,195,247,0.9)" />
            <stop offset="100%" stopColor="rgba(79,195,247,0.15)" />
          </linearGradient>
          <linearGradient id="redGrad" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(239,136,136,0.9)" />
            <stop offset="100%" stopColor="rgba(239,136,136,0.15)" />
          </linearGradient>
          <linearGradient id="leftBgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(79,195,247,0.15)" />
            <stop offset="100%" stopColor="rgba(79,195,247,0)" />
          </linearGradient>
          <linearGradient id="rightBgGrad" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(239,136,136,0.15)" />
            <stop offset="100%" stopColor="rgba(239,136,136,0)" />
          </linearGradient>
          <clipPath id="circleClip">
            <circle cx={centerX} cy={centerY} r="80" />
          </clipPath>
        </defs>

        {/* Background gradients - left and right sides */}
        <rect x="0" y="0" width="600" height="600" fill="url(#leftBgGrad)" />
        <rect x="600" y="0" width="600" height="600" fill="url(#rightBgGrad)" />

        {/* Center divider line - full height */}
        <line x1={centerX} y1="20" x2={centerX} y2="580" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="8,4" />

        {/* Center glow */}
        <circle cx={centerX} cy={centerY} r="130" fill="rgba(79,195,247,0.08)" />

        {/* Center circle - drawn first so lines appear behind it */}
        <motion.circle
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          cx={centerX}
          cy={centerY}
          r="80"
          fill="#0f2847"
          stroke="rgba(79,195,247,0.5)"
          strokeWidth="2"
        />
        <image href={kidImg} x={centerX - 75} y={centerY - 75} width="150" height="150" clipPath="url(#circleClip)" />

        {/* Left side lines - Cyan - start from center circle edge, end at outer circle edge */}
        {leftItems.map((item, i) => {
          const startX = centerX + Math.cos(item.rad) * 80 // Start from center circle edge
          const startY = centerY + Math.sin(item.rad) * 80
          const endX = item.endX - Math.cos(item.rad) * 65 // End at outer circle edge (65 is circle radius)
          const endY = item.endY - Math.sin(item.rad) * 65
          return (
          <g key={`left-${i}`}>
            <motion.line
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.4 }}
              x1={startX}
              y1={startY}
              x2={endX}
              y2={endY}
              stroke="url(#cyanGrad)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx={item.endX} cy={item.endY} r="65" fill="rgba(79,195,247,0.15)" stroke="rgba(79,195,247,0.5)" strokeWidth="1.5" />
            {item.img && <image href={item.img} x={item.endX - 35} y={item.endY - 50} width="70" height="50" preserveAspectRatio='true' />}
            {/* <text x={item.endX} y={item.endY + (item.img ? 10 : -5)} textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="600">{item.name}</text> */}
            <text x={item.endX} y={item.endY + (item.img ? 25 : 16)} textAnchor="middle" fill="#94a3b8" fontSize="11">{item.desc}</text>
          </g>
        )})}

        {/* Right side lines - Red - start from center circle edge, end at outer circle edge */}
        {rightItems.map((item, i) => {
          const startX = centerX + Math.cos(item.rad) * 80 // Start from center circle edge
          const startY = centerY + Math.sin(item.rad) * 80
          const endX = item.endX - Math.cos(item.rad) * 65 // End at outer circle edge
          const endY = item.endY - Math.sin(item.rad) * 65
          return (
          <g key={`right-${i}`}>
            <motion.line
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.5 + i * 0.12, duration: 0.4 }}
              x1={startX}
              y1={startY}
              x2={endX}
              y2={endY}
              stroke="url(#redGrad)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle cx={item.endX} cy={item.endY} r="65" fill="rgba(239,136,136,0.15)" stroke="rgba(239,136,136,0.5)" strokeWidth="1.5" />
            <text x={item.endX} y={item.endY - 5} textAnchor="middle" fill="#ef8888" fontSize="20" fontWeight="700">{item.name}</text>
            <text x={item.endX} y={item.endY + 16} textAnchor="middle" fill="#94a3b8" fontSize="13">{item.desc}</text>
          </g>
        )})}

        {/* THE GAP label */}
        <text x={centerX} y={centerY + 130} textAnchor="middle" fill="#fbbf24" fontSize="18" fontWeight="700" letterSpacing="4">New age customer</text>
      </svg>

      {/* Bottom message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{
          fontSize: '1.5rem',
          color: '#fbbf24',
          fontWeight: 600,
          textAlign: 'center',
          marginTop: 15
        }}
      >
        People today expect convenience. Are you delivering?
      </motion.p>
    </div>
  )
}

export default Slide10