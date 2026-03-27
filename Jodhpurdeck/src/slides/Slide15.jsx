import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

// Calculate position on circle circumference
const getPositionOnCircle = (centerX, centerY, radius, angleDeg) => {
  const angleRad = (angleDeg * Math.PI) / 180
  return {
    x: centerX + radius * Math.cos(angleRad),
    y: centerY + radius * Math.sin(angleRad)
  }
}

const Slide15 = () => {
  const centerX = 400
  const centerY = 300
  const circleRadius = 240

  const demandNodes = [
    { label: 'Homes', sublabel: 'Residential', color: '#4fc3f7', angle: -90, emoji: '🏠' },
    { label: 'Apartments', sublabel: 'Societies', color: '#a855f7', angle: 0, emoji: '🏢' },
    { label: 'Offices', sublabel: 'Commercial', color: '#f59e0b', angle: 90, emoji: '🏛️' },
    { label: 'Nearby Areas', sublabel: 'Local Reach', color: '#22c55e', angle: 180, emoji: '📍' }
  ]

  return (
    <div className="slide" style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #0a1628 0%, #0f2847 50%, #0a1628 100%)',
      padding: '50px 80px',
      display: 'flex',
      flexDirection: 'column'
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

      {/* Market Expansion Map - SVG-based */}
      <div style={{
        flex: 1,
        minHeight: 0,
        position: 'relative'
      }}>
        <svg
          viewBox="0 0 800 600"
          style={{
            width: '100%',
            height: '100%',
            display: 'block'
          }}
        >
          <defs>
            <filter id="glowLine" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <radialGradient id="radialGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(79,195,247,0.15)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f2847" />
              <stop offset="100%" stopColor="#1e3a5f" />
            </linearGradient>
          </defs>

          {/* Service radius circle (subtle background) */}
          <circle
            cx={centerX}
            cy={centerY}
            r={circleRadius}
            fill="none"
            stroke="rgba(79,195,247,0.3)"
            strokeWidth="2"
          />
          <circle
            cx={centerX}
            cy={centerY}
            r={circleRadius}
            fill="url(#radialGrad)"
          >
            <animate attributeName="r" values={`${circleRadius};${circleRadius + 10};${circleRadius}`} dur="3s" repeatCount="indefinite" />
          </circle>

          {/* Route lines from center to each node */}
          {demandNodes.map((node, i) => {
            const pos = getPositionOnCircle(centerX, centerY, circleRadius, node.angle)
            return (
              <motion.path
                key={`route-${i}`}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.1 + i * 0.1, duration: 0.6 }}
                d={`M ${centerX} ${centerY} L ${pos.x} ${pos.y}`}
                fill="none"
                stroke={node.color}
                strokeWidth="2"
                strokeOpacity="0.5"
                strokeDasharray="8,5"
                strokeLinecap="round"
                filter="url(#glowLine)"
              />
            )
          })}

          {/* CENTER - Your Store (Premium Hub) */}
          <g>
            <motion.rect
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              x={centerX - 65}
              y={centerY - 65}
              width={130}
              height={130}
              rx={24}
              fill="url(#centerGradient)"
              stroke="rgba(79,195,247,0.9)"
              strokeWidth="3"
              filter="url(#nodeGlow)"
            />
            <text
              x={centerX}
              y={centerY}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#4fc3f7"
              fontSize="1.1rem"
              fontWeight="800"
              fontFamily="system-ui"
            >
              Your Dry
            </text>
            <text
              x={centerX}
              y={centerY + 16}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#4fc3f7"
              fontSize="1.1rem"
              fontWeight="800"
              fontFamily="system-ui"
            >
              Clean Store
            </text>
            <rect
              x={centerX - 15}
              y={centerY + 35}
              width={30}
              height={2}
              fill="rgba(79,195,247,0.3)"
              rx={1}
            />
          </g>

          {/* 4 Demand Nodes on circumference */}
          {demandNodes.map((node, i) => {
            const pos = getPositionOnCircle(centerX, centerY, circleRadius, node.angle)
            return (
              <g key={node.label}>
                <motion.circle
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  cx={pos.x}
                  cy={pos.y}
                  r={58}
                  fill="rgba(25,35,55,0.95)"
                  stroke={`${node.color}`}
                  strokeWidth="3"
                  filter="url(#nodeGlow)"
                />
                <text
                  x={pos.x}
                  y={pos.y - 5}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="1.8rem"
                >
                  {node.emoji}
                </text>
                <text
                  x={pos.x}
                  y={pos.y + 25}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={node.color}
                  fontSize="0.9rem"
                  fontWeight="700"
                  fontFamily="system-ui"
                >
                  {node.label}
                </text>
                <text
                  x={pos.x}
                  y={pos.y + 38}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#64748b"
                  fontSize="0.65rem"
                  fontFamily="system-ui"
                >
                  {node.sublabel}
                </text>
              </g>
            )
          })}
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

export default Slide15