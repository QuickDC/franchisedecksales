import { motion } from 'framer-motion'

const Slide14 = () => {
  const pillars = [
    {
      title: 'Customer Acquisition',
      items: ['Pickup Link', 'Mobile App', 'WhatsApp Bot', 'Call / Walk-in'],
      color: '#4fc3f7'
    },
    {
      title: 'Store Operations',
      items: ['Billing', 'Tagging', 'Tracking', 'Reporting'],
      color: '#81c784'
    },
    {
      title: 'Pickup & Delivery',
      items: ['Rider Flow', 'Doorstep Billing', 'Digital Payment', 'Delivery Status'],
      color: '#ffb74d'
    },
    {
      title: 'Customer Remarketing',
      items: ['Campaigns', 'Segmentation', 'Push Notifications', 'At-Risk Follow-up'],
      color: '#ba68c8'
    },
    {
      title: 'Customer Retention',
      items: ['Packages', 'Subscriptions', 'Loyalty Points', 'Referrals'],
      color: '#4dd0e1'
    }
  ]

  // CONFIGURABLE VARIABLES - Adjust these to control layout
  const centerX = 500              // Center X position
  const centerY = 340              // Center Y position
  const centerRadius = 60          // Radius of center circle
  const pillarDistance = 240       // Distance from center to pillar center - CHANGE THIS TO ADJUST HOW FAR PILLS ARE

  // Calculate pillar positions based on pillarDistance
  const pillarPositions = [
    { x: centerX, y: centerY - pillarDistance },  // Customer Acquisition - top
    { x: centerX + pillarDistance * 0.95, y: centerY - pillarDistance * 0.31 },  // Store Operations - top right
    { x: centerX + pillarDistance * 0.95, y: centerY + pillarDistance * 0.31 },  // Pickup & Delivery - bottom right
    { x: centerX - pillarDistance * 0.95, y: centerY + pillarDistance * 0.31 },  // Customer Remarketing - bottom left
    { x: centerX - pillarDistance * 0.95, y: centerY - pillarDistance * 0.31 }   // Customer Retention - top left
  ]

  // Calculate line start points based on pillarDistance
  const getLineStart = (pos) => {
    const dx = pos.x - centerX
    const dy = pos.y - centerY
    const dist = Math.sqrt(dx * dx + dy * dy)
    return {
      x: centerX + (centerRadius * dx / dist),
      y: centerY + (centerRadius * dy / dist)
    }
  }

  return (
    <div className="slide" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 15,
      background: 'linear-gradient(180deg, #0f172a 0%, #0a1628 50%, #0d1f3c 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Soft ambient glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700,
        height: 450,
        background: 'radial-gradient(ellipse at center, rgba(79, 195, 247, 0.06) 0%, transparent 60%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      <motion.p
        className="overline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        The Vision
      </motion.p>

      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Ek ideal dry cleaning business system <span className="text-accent">kaisa dikhta hai?</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{
          fontSize: '1.1rem',
          color: '#94a3b8',
          marginTop: 3,
          marginBottom: 10,
          fontWeight: 500
        }}
      >
        A modern dry cleaning business needs <span style={{ color: '#4fc3f7' }}>5 connected systems</span>
      </motion.p>

      {/* SVG Diagram */}
      <svg
        viewBox="0 0 1000 620"
        style={{
          width: '100%',
          maxWidth: '850px',
          height: 'auto',
          zIndex: 5
        }}
      >
        <defs>
          <radialGradient id="hubGradient14" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </radialGradient>
          <filter id="glow14" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Connecting Lines */}
        {pillarPositions.map((pos, i) => {
          const start = getLineStart(pos)
          return (
            <line
              key={`line-${i}`}
              x1={start.x}
              y1={start.y}
              x2={pos.x}
              y2={pos.y}
              stroke="#4fc3f7"
              strokeWidth="2"
              strokeDasharray="8 4"
              strokeOpacity="0.8"
            />
          )
        })}

        {/* Pillar Cards - centered on pillar positions */}
        {pillars.map((pillar, i) => {
          const pos = pillarPositions[i]
          const cardWidth = 210
          const cardX = pos.x - cardWidth / 2

          return (
            <g key={`pillar-${i}`}>
              <motion.rect
                x={cardX}
                y={pos.y - 55}
                width={cardWidth}
                height={110}
                rx={8}
                fill="rgba(30, 41, 59, 0.95)"
                stroke={pillar.color}
                strokeOpacity={0.5}
                strokeWidth={1.5}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                style={{ filter: `drop-shadow(0 3px 10px ${pillar.color}20)` }}
              />

              <text
                x={pos.x - 80}
                y={pos.y - 34}
                fill={pillar.color}
                fontSize="15"
                fontWeight="700"
                fontFamily="system-ui, sans-serif"
                textTransform="uppercase"
                letterSpacing="0.5"
              >
                {pillar.title}
              </text>

              <line
                x1={pos.x - 80}
                y1={pos.y - 24}
                x2={pos.x + 75}
                y2={pos.y - 24}
                stroke={pillar.color}
                strokeOpacity={0.3}
                strokeWidth="1"
              />

              {/* Items - increased font size */}
              {pillar.items.map((item, j) => (
                <text
                  key={j}
                  x={pos.x - 75}
                  y={pos.y - 8 + j * 13}
                  fill="#94a3b8"
                  fontSize="14"
                  fontFamily="system-ui, sans-serif"
                >
                  <tspan fill={pillar.color} fontSize="11">• </tspan>
                  {item}
                </text>
              ))}
            </g>
          )
        })}

        {/* Center Hub */}
        <motion.circle
          cx={centerX}
          cy={centerY}
          r={centerRadius}
          fill="url(#hubGradient14)"
          stroke="rgba(79, 195, 247, 0.7)"
          strokeWidth={2}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ filter: 'url(#glow14)' }}
        />

        <motion.text
          x={centerX}
          y={centerY - 3}
          textAnchor="middle"
          fill="#e2e8f0"
          fontSize="16"
          fontWeight="600"
          fontFamily="system-ui, sans-serif"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Business
        </motion.text>
        <motion.text
          x={centerX}
          y={centerY + 14}
          textAnchor="middle"
          fill="#e2e8f0"
          fontSize="16"
          fontWeight="600"
          fontFamily="system-ui, sans-serif"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          System
        </motion.text>
      </svg>

      {/* Bottom punch line */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          marginTop: 'auto',
          marginBottom: 10,
          textAlign: 'center'
        }}
      >
        <p style={{
          fontSize: '1rem',
          color: '#e2e8f0',
          fontWeight: 500,
          maxWidth: 550
        }}>
          System jitna connected hoga, business utna professional chalega.
        </p>
      </motion.div>
    </div>
  )
}

export default Slide14