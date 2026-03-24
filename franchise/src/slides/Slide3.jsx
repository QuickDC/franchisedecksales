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

              {/* Icon centered in circle */}
              <text x={problem.x} y={problem.y + 5} textAnchor="middle" fontSize="32">{problem.icon}</text>

              {/* Label below icon */}
              <text x={problem.x} y={problem.y + 38} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">{problem.label}</text>
            </motion.g>
          ))}

          {/* Central Cost Circle - Appears Last */}
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, duration: 0.7, type: "spring" }}
          >
            <circle cx="250" cy="250" r="85" fill="url(#centerGrad)" filter="url(#glowRed)" />
            <text x="250" y="240" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800">REVENUE</text>
            <text x="250" y="262" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="800">LOSS</text>
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
