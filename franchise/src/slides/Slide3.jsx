import { motion } from 'framer-motion'

const Slide3 = () => {
  const problems = [
    { x: 120, y: 120, icon: '👕', label: 'Lost Garments' },
    { x: 380, y: 120, icon: '⏰', label: 'Delayed Orders' },
    { x: 120, y: 380, icon: '🔄', label: 'No Repeat' },
    { x: 380, y: 380, icon: '📝', label: 'Manual Tracking' },
  ]

  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What This Is <span style={{ color: '#ff6b6b' }}>Costing You</span>
      </motion.h2>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        All problems flow to one outcome — Revenue Loss
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="cost-circle-container"
      >
        <svg width="550" height="550" viewBox="0 0 550 550" className="cost-circle-svg">
          <defs>
            <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b6b" />
              <stop offset="100%" stopColor="#dc2626" />
            </linearGradient>
            <filter id="glowRed">
              <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <filter id="glowOuter">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Animated Flow Lines from Outer to Center */}
          <motion.path
            d="M175 175 L210 230"
            stroke="#f59e0b"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
          />
          <motion.path
            d="M375 175 L290 230"
            stroke="#f59e0b"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.1, duration: 0.8, ease: "easeInOut" }}
          />
          <motion.path
            d="M175 375 L210 320"
            stroke="#f59e0b"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }}
          />
          <motion.path
            d="M375 375 L290 320"
            stroke="#f59e0b"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.3, duration: 0.8, ease: "easeInOut" }}
          />

          {/* Connection Lines - properly aligned from center to outer circles */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {/* Line from center (250,250) to top-left (120,120) - straight line */}
            <line x1="250" y1="250" x2="175" y2="175" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6,4" />
            {/* Line from center (250,250) to top-right (380,120) - straight line */}
            <line x1="250" y1="250" x2="375" y2="175" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6,4" />
            {/* Line from center (250,250) to bottom-left (120,380) - straight line */}
            <line x1="250" y1="250" x2="175" y2="375" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6,4" />
            {/* Line from center (250,250) to bottom-right (380,380) - straight line */}
            <line x1="250" y1="250" x2="375" y2="375" stroke="#f59e0b" strokeWidth="2" strokeDasharray="6,4" />
          </motion.g>

          {/* Problem Circles - Outer */}
          {problems.map((problem, i) => (
            <motion.g
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.6, type: "spring" }}
            >
              {/* Circle background */}
              <circle cx={problem.x} cy={problem.y} r="65" fill="#1a2540" stroke="#ff6b6b" strokeWidth="3" filter="url(#glowOuter)" />

              {/* Icon on top */}
              <text x={problem.x} y={problem.y - 8} textAnchor="middle" fontSize="30">{problem.icon}</text>

              {/* Label below icon */}
              <text x={problem.x} y={problem.y + 40} textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700">{problem.label}</text>
            </motion.g>
          ))}

          {/* Central Cost Circle - Appears Last */}
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, duration: 0.7, type: "spring" }}
          >
            <circle cx="250" cy="250" r="85" fill="url(#centerGrad)" filter="url(#glowRed)" />
            <text x="250" y="240" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="800">REVENUE</text>
            <text x="250" y="268" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="800">LOSS</text>
          </motion.g>

          {/* Animated particles flowing to center */}
          {[0, 1, 2, 3].map((i) => (
            <motion.circle
              key={i}
              r="5"
              fill="#f59e0b"
              initial={{
                cx: problems[i].x,
                cy: problems[i].y
              }}
              animate={{
                cx: [problems[i].x, 250],
                cy: [problems[i].y, 250]
              }}
              transition={{
                delay: 1.5 + i * 0.2,
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </svg>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="impact-line coral"
      >
        Every problem compounds into lost revenue.
      </motion.p>
    </div>
  )
}

export default Slide3
