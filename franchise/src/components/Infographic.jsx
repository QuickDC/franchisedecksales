import { motion } from 'framer-motion'

/* ========================================
   NETWORK DIAGRAM - For Title Slide
   ======================================== */

export const NetworkInfographic = () => (
  <svg width="500" height="300" viewBox="0 0 500 300" className="infographic-svg">
    <defs>
      <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00d4ff" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* HQ Node - Center */}
    <motion.g
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <circle cx="250" cy="50" r="40" fill="url(#nodeGradient)" filter="url(#glow)" />
      <text x="250" y="55" textAnchor="middle" fill="#0a0f1a" fontSize="20" fontWeight="bold">HQ</text>
    </motion.g>

    {/* Store Nodes */}
    {[
      { x: 100, y: 220, label: 'Store 1' },
      { x: 250, y: 250, label: 'Store 2' },
      { x: 400, y: 220, label: 'Store 3' },
      { x: 175, y: 180, label: 'Store 4' },
      { x: 325, y: 180, label: 'Store 5' },
    ].map((store, i) => (
      <motion.g
        key={i}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
      >
        <circle cx={store.x} cy={store.y} r="30" fill="#1a2540" stroke="#00d4ff" strokeWidth="2" />
        <text x={store.x} y={store.y + 5} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="600">
          {store.label}
        </text>
      </motion.g>
    ))}

    {/* Connection Lines */}
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <line x1="250" y1="90" x2="100" y2="190" stroke="#00d4ff" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
      <line x1="250" y1="90" x2="250" y2="220" stroke="#00d4ff" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
      <line x1="250" y1="90" x2="400" y2="190" stroke="#00d4ff" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
      <line x1="250" y1="90" x2="175" y2="150" stroke="#00d4ff" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
      <line x1="250" y1="90" x2="325" y2="150" stroke="#00d4ff" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
    </motion.g>

    {/* Data Flow Animation */}
    <motion.circle
      r="6"
      fill="#ff6b6b"
      initial={{ cx: 250, cy: 50 }}
      animate={{
        cx: [250, 100, 250, 400, 250, 175, 250, 325, 250],
        cy: [50, 220, 50, 220, 50, 180, 50, 180, 50]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    />
  </svg>
)

/* ========================================
   DISCONNECTED NODES - For Problem Slide
   ======================================== */

export const DisconnectedInfographic = () => (
  <svg width="600" height="250" viewBox="0 0 600 250" className="infographic-svg">
    <defs>
      <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
        <path d="M0,0 L0,6 L9,3 z" fill="#ff6b6b" />
      </marker>
    </defs>

    {[
      { x: 100, y: 125, label: 'Store A', color: '#ff6b6b' },
      { x: 300, y: 80, label: 'Store B', color: '#fb923c' },
      { x: 300, y: 170, label: 'Store C', color: '#a855f7' },
      { x: 500, y: 125, label: 'HQ', color: '#64748b' },
    ].map((node, i) => (
      <motion.g
        key={i}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: i * 0.2, type: "spring" }}
      >
        <circle cx={node.x} cy={node.y} r="35" fill="#1a2540" stroke={node.color} strokeWidth="3" />
        <text x={node.x} y={node.y + 5} textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">
          {node.label}
        </text>
      </motion.g>
    ))}

    {/* Broken Connections */}
    <motion.path
      d="M135,125 L265,80"
      stroke="#ff4444"
      strokeWidth="2"
      strokeDasharray="8,8"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay: 1, duration: 1 }}
    />
    <motion.path
      d="M135,125 L265,170"
      stroke="#ff4444"
      strokeWidth="2"
      strokeDasharray="8,8"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay: 1.2, duration: 1 }}
    />
    <motion.path
      d="M335,80 L465,125"
      stroke="#ff4444"
      strokeWidth="2"
      strokeDasharray="8,8"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay: 1.4, duration: 1 }}
    />
    <motion.path
      d="M335,170 L465,125"
      stroke="#ff4444"
      strokeWidth="2"
      strokeDasharray="8,8"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ delay: 1.6, duration: 1 }}
    />

    {/* X Marks for broken connections - exactly centered on each line */}
    {/* Line 1: (135,125) to (265,80) - center at (200, 102.5) */}
    <text x="200" y="106" textAnchor="middle" fontSize="28" fill="#ff4444" fontWeight="bold">✕</text>
    {/* Line 2: (135,125) to (265,170) - center at (200, 147.5) */}
    <text x="200" y="151" textAnchor="middle" fontSize="28" fill="#ff4444" fontWeight="bold">✕</text>
    {/* Line 3: (335,80) to (465,125) - center at (400, 102.5) */}
    <text x="400" y="106" textAnchor="middle" fontSize="28" fill="#ff4444" fontWeight="bold">✕</text>
    {/* Line 4: (335,170) to (465,125) - center at (400, 147.5) */}
    <text x="400" y="151" textAnchor="middle" fontSize="28" fill="#ff4444" fontWeight="bold">✕</text>
  </svg>
)

/* ========================================
   LAYERED PLATFORM STACK
   ======================================== */

export const PlatformStackInfographic = () => (
  <svg width="400" height="350" viewBox="0 0 400 350" className="infographic-svg">
    <defs>
      <linearGradient id="layer5" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
      <linearGradient id="layer4" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
      <linearGradient id="layer3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0284c7" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
      <linearGradient id="layer2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#0284c7" />
      </linearGradient>
      <linearGradient id="layer1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00d4ff" />
        <stop offset="100%" stopColor="#0ea5e9" />
      </linearGradient>
    </defs>

    {[
      { y: 20, label: 'HQ Control', gradient: 'url(#layer5)', height: 50 },
      { y: 85, label: 'Growth Engine', gradient: 'url(#layer4)', height: 50 },
      { y: 150, label: 'Customer Exp', gradient: 'url(#layer3)', height: 50 },
      { y: 215, label: 'Plant Ops', gradient: 'url(#layer2)', height: 50 },
      { y: 280, label: 'Store Ops', gradient: 'url(#layer1)', height: 50 },
    ].map((layer, i) => (
      <motion.g
        key={i}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: i * 0.15, duration: 0.6 }}
      >
        <rect
          x="50"
          y={layer.y}
          width="300"
          height={layer.height}
          rx="12"
          fill={layer.gradient}
        />
        <text
          x="200"
          y={layer.y + 32}
          textAnchor="middle"
          fill={i === 4 ? "#0a0f1a" : "#fff"}
          fontSize="16"
          fontWeight="700"
        >
          {layer.label}
        </text>
      </motion.g>
    ))}
  </svg>
)

/* ========================================
   HUB AND SPOKE - For HQ Control
   ======================================== */

export const HubAndSpokeInfographic = () => (
  <svg width="500" height="350" viewBox="0 0 500 350" className="infographic-svg">
    <defs>
      <linearGradient id="hubGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00d4ff" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>

    {/* Central HQ Hub */}
    <motion.g
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", duration: 0.8 }}
    >
      <circle cx="250" cy="175" r="50" fill="url(#hubGradient)" filter="url(#glow)" />
      <text x="250" y="180" textAnchor="middle" fill="#0a0f1a" fontSize="18" fontWeight="bold">HQ</text>
    </motion.g>

    {/* Spoke Nodes */}
    {[
      { x: 100, y: 80, label: 'Analytics' },
      { x: 400, y: 80, label: 'Royalty' },
      { x: 80, y: 250, label: 'Franchise' },
      { x: 420, y: 250, label: 'Permissions' },
      { x: 250, y: 320, label: 'Multi-store' },
    ].map((spoke, i) => (
      <motion.g
        key={i}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
      >
        <circle cx={spoke.x} cy={spoke.y} r="35" fill="#1a2540" stroke="#00d4ff" strokeWidth="2" />
        <text x={spoke.x} y={spoke.y + 5} textAnchor="middle" fill="#fff" fontSize="11" fontWeight="600">
          {spoke.label}
        </text>
      </motion.g>
    ))}

    {/* Connection Lines */}
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ delay: 1, duration: 0.8 }}
    >
      <line x1="280" y1="145" x2="130" y2="95" stroke="#00d4ff" strokeWidth="2" strokeDasharray="5,5" />
      <line x1="220" y1="145" x2="370" y2="95" stroke="#00d4ff" strokeWidth="2" strokeDasharray="5,5" />
      <line x1="285" y1="200" x2="105" y2="230" stroke="#00d4ff" strokeWidth="2" strokeDasharray="5,5" />
      <line x1="215" y1="200" x2="395" y2="230" stroke="#00d4ff" strokeWidth="2" strokeDasharray="5,5" />
      <line x1="250" y1="225" x2="250" y2="295" stroke="#00d4ff" strokeWidth="2" strokeDasharray="5,5" />
    </motion.g>
  </svg>
)

/* ========================================
   JOURNEY PIPELINE
   ======================================== */

export const JourneyPipelineInfographic = () => (
  <svg width="800" height="120" viewBox="0 0 800 120" className="infographic-svg">
    <defs>
      <linearGradient id="pipeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00d4ff" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>

    {/* Pipeline Background */}
    <rect x="20" y="40" width="760" height="40" rx="20" fill="url(#pipeGradient)" opacity="0.2" />

    {/* Journey Steps */}
    {[
      { x: 60, icon: '👤', label: 'Customer' },
      { x: 165, icon: '🏪', label: 'Store' },
      { x: 270, icon: '🏭', label: 'Plant' },
      { x: 375, icon: '✅', label: 'QC' },
      { x: 480, icon: '🚚', label: 'Delivery' },
      { x: 585, icon: '💳', label: 'Payment' },
      { x: 690, icon: '💚', label: 'Retention' },
    ].map((step, i) => (
      <motion.g
        key={i}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: i * 0.1, type: "spring" }}
      >
        <circle cx={step.x} cy="60" r="28" fill="#1a2540" stroke="#00d4ff" strokeWidth="2" />
        <text x={step.x} y="65" textAnchor="middle" fontSize="18">{step.icon}</text>
        <text x={step.x} y="105" textAnchor="middle" fill="#94a3b8" fontSize="11" fontWeight="600">
          {step.label}
        </text>
      </motion.g>
    ))}

    {/* Animated flow dots - flowing from Customer through all circles to end (orange color) */}
    <motion.circle
      r="6"
      fill="#f59e0b"
      initial={{ cx: 60, cy: 60 }}
      animate={{
        cx: [60, 165, 270, 375, 480, 585, 690, 690],
        cy: [60, 60, 60, 60, 60, 60, 60, 60]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear"
      }}
    />

    {/* Second dot for continuous flow */}
    <motion.circle
      r="6"
      fill="#f59e0b"
      initial={{ cx: 60, cy: 60 }}
      animate={{
        cx: [60, 165, 270, 375, 480, 585, 690, 690],
        cy: [60, 60, 60, 60, 60, 60, 60, 60]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear",
        delay: 2
      }}
    />

    {/* Flow line with dashes - static dashed line */}
    <line
      x1="88" y1="60"
      x2="662" y2="60"
      stroke="#f59e0b"
      strokeWidth="2"
      strokeDasharray="10,6"
      opacity="0.6"
    />
  </svg>
)

/* ========================================
   METRIC COUNTER - For Results
   ======================================== */

export const MetricCounterInfographic = ({ value, label, prefix = '' }) => (
  <div className="result-card">
    <motion.span
      className="result-value"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {prefix}<motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >{value}</motion.span>
    </motion.span>
    <h3>{label}</h3>
  </div>
)

/* ========================================
   COMPARISON SPLIT - For Before/After
   ======================================== */

export const ComparisonSplitInfographic = () => (
  <svg width="900" height="300" viewBox="0 0 900 300" className="infographic-svg">
    {/* Left Side - Before */}
    <rect x="20" y="20" width="400" height="260" rx="20" fill="rgba(255,107,107,0.1)" stroke="#ff6b6b" strokeWidth="2" />
    <text x="220" y="50" textAnchor="middle" fill="#ff6b6b" fontSize="20" fontWeight="bold">BEFORE</text>

    {/* Before Icons */}
    {[
      { x: 80, y: 100, icon: '📝', label: 'Manual' },
      { x: 220, y: 100, icon: '⚡', label: 'Reactive' },
      { x: 360, y: 100, icon: '👁️', label: 'No Data' },
      { x: 80, y: 180, icon: '🔄', label: 'One-time' },
      { x: 220, y: 180, icon: '📉', label: 'Siloed' },
      { x: 360, y: 180, icon: '🏚️', label: 'Chaos' },
    ].map((item, i) => (
      <motion.g
        key={i}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: i * 0.1 }}
      >
        <circle cx={item.x} cy={item.y} r="30" fill="#1a2540" />
        <text x={item.x} y={item.y + 5} textAnchor="middle" fontSize="20">{item.icon}</text>
        <text x={item.x} y={item.y + 50} textAnchor="middle" fill="#94a3b8" fontSize="12">{item.label}</text>
      </motion.g>
    ))}

    {/* Right Side - After */}
    <rect x="480" y="20" width="400" height="260" rx="20" fill="rgba(0,212,255,0.1)" stroke="#00d4ff" strokeWidth="2" />
    <text x="680" y="50" textAnchor="middle" fill="#00d4ff" fontSize="20" fontWeight="bold">AFTER QDC</text>

    {/* After Icons */}
    {[
      { x: 540, y: 100, icon: '⚙️', label: 'Automated' },
      { x: 680, y: 100, icon: '🎯', label: 'Proactive' },
      { x: 820, y: 100, icon: '📊', label: 'Real-time' },
      { x: 540, y: 180, icon: '🔁', label: 'Repeat' },
      { x: 680, y: 180, icon: '📈', label: 'Unified' },
      { x: 820, y: 180, icon: '⚡', label: 'Control' },
    ].map((item, i) => (
      <motion.g
        key={i}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 + i * 0.1 }}
      >
        <circle cx={item.x} cy={item.y} r="30" fill="#1a2540" stroke="#00d4ff" strokeWidth="2" />
        <text x={item.x} y={item.y + 5} textAnchor="middle" fontSize="20">{item.icon}</text>
        <text x={item.x} y={item.y + 50} textAnchor="middle" fill="#94a3b8" fontSize="12">{item.label}</text>
      </motion.g>
    ))}

    {/* Arrow in Middle */}
    <motion.text
      x="450"
      y="150"
      textAnchor="middle"
      fontSize="40"
      fill="#00d4ff"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      ➝
    </motion.text>
  </svg>
)

/* ========================================
   BIG CTA ILLUSTRATION
   ======================================== */

export const BigCTAInfographic = () => (
  <svg width="400" height="250" viewBox="0 0 400 250" className="infographic-svg">
    <defs>
      <linearGradient id="ctaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff6b6b" />
        <stop offset="50%" stopColor="#feca57" />
        <stop offset="100%" stopColor="#00d4ff" />
      </linearGradient>
    </defs>

    {/* Central Circle */}
    <motion.circle
      cx="200"
      cy="125"
      r="80"
      fill="url(#ctaGradient)"
      filter="url(#glow)"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", duration: 1 }}
    />

    {/* Rocket Icon */}
    <motion.text
      x="200"
      y="135"
      textAnchor="middle"
      fontSize="50"
      initial={{ y: 200 }}
      animate={{ y: 135 }}
      transition={{ delay: 0.5, type: "spring" }}
    >
      🚀
    </motion.text>

    {/* Floating Elements */}
    {[...Array(6)].map((_, i) => (
      <motion.circle
        key={i}
        cx={200 + Math.cos(i * Math.PI / 3) * 120}
        cy={125 + Math.sin(i * Math.PI / 3) * 120}
        r="8"
        fill={i % 2 === 0 ? '#ff6b6b' : '#00d4ff'}
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ delay: 1 + i * 0.1, duration: 2, repeat: Infinity }}
      />
    ))}
  </svg>
)

/* ========================================
   HQ DASHBOARD - Business Health Overview
   ======================================== */

export const HQDashboardInfographic = () => (
  <svg width="900" height="320" viewBox="0 0 900 320" className="infographic-svg">
    <defs>
      <linearGradient id="kpiGreen" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#84cc16" />
        <stop offset="100%" stopColor="#22c55e" />
      </linearGradient>
      <linearGradient id="kpiBlue" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#00d4ff" />
        <stop offset="100%" stopColor="#0ea5e9" />
      </linearGradient>
      <linearGradient id="kpiPurple" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
    </defs>

    {/* Main Dashboard Container */}
    <rect x="20" y="20" width="860" height="280" rx="20" fill="#121a2e" stroke="#1a2540" strokeWidth="2" />

    {/* Header */}
    <text x="450" y="55" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold">HQ COMMAND CENTER</text>

    {/* KPI Cards Row */}
    {[
      { x: 100, label: 'Total Revenue', value: '$2.4M', change: '+12%', gradient: 'url(#kpiGreen)' },
      { x: 330, label: 'Active Orders', value: '1,847', change: '+8%', gradient: 'url(#kpiBlue)' },
      { x: 560, label: 'Customer Count', value: '12.5K', change: '+15%', gradient: 'url(#kpiPurple)' },
      { x: 790, label: 'Store Count', value: '24', change: '+2', gradient: 'url(#kpiGreen)' },
    ].map((kpi, i) => (
      <motion.g key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
        <rect x={kpi.x - 70} y="80" width="140" height="90" rx="12" fill="#1a2540" />
        <text x={kpi.x} y="105" textAnchor="middle" fill="#94a3b8" fontSize="12">{kpi.label}</text>
        <text x={kpi.x} y="140" textAnchor="middle" fill="#fff" fontSize="28" fontWeight="bold">{kpi.value}</text>
        <text x={kpi.x} y="160" textAnchor="middle" fill="#84cc16" fontSize="11">{kpi.change}</text>
      </motion.g>
    ))}

    {/* Charts Section */}
    {/* Revenue Chart */}
    <rect x="50" y="190" width="250" height="90" rx="10" fill="#1a2540" />
    <text x="175" y="210" textAnchor="middle" fill="#94a3b8" fontSize="12">Revenue Trend</text>
    <path d="M70 260 L100 240 L130 250 L160 220 L190 230 L220 190 L250 200 L280 170"
          stroke="#84cc16" strokeWidth="2" fill="none" opacity="0.8" />

    {/* Orders Chart */}
    <rect x="325" y="190" width="250" height="90" rx="10" fill="#1a2540" />
    <text x="450" y="210" textAnchor="middle" fill="#94a3b8" fontSize="12">Order Volume</text>
    <rect x="345" y="230" width="15" height="40" rx="3" fill="#00d4ff" opacity="0.8" />
    <rect x="370" y="220" width="15" height="50" rx="3" fill="#00d4ff" opacity="0.8" />
    <rect x="395" y="235" width="15" height="35" rx="3" fill="#00d4ff" opacity="0.8" />
    <rect x="420" y="210" width="15" height="60" rx="3" fill="#00d4ff" opacity="0.8" />
    <rect x="445" y="225" width="15" height="45" rx="3" fill="#00d4ff" opacity="0.8" />
    <rect x="470" y="215" width="15" height="55" rx="3" fill="#00d4ff" opacity="0.8" />
    <rect x="495" y="205" width="15" height="65" rx="3" fill="#00d4ff" opacity="0.8" />
    <rect x="520" y="220" width="15" height="50" rx="3" fill="#00d4ff" opacity="0.8" />
    <rect x="545" y="215" width="15" height="55" rx="3" fill="#00d4ff" opacity="0.8" />

    {/* Alerts/Issues */}
    <rect x="600" y="190" width="250" height="90" rx="10" fill="#1a2540" />
    <text x="725" y="210" textAnchor="middle" fill="#94a3b8" fontSize="12">Active Alerts</text>
    <circle cx="635" cy="240" r="6" fill="#ff6b6b" />
    <text x="650" y="244" fill="#ff6b6b" fontSize="11">3 Orders Delayed</text>
    <circle cx="635" cy="265" r="6" fill="#fb923c" />
    <text x="650" y="269" fill="#fb923c" fontSize="11">5 QC Reworks</text>
  </svg>
)

/* ========================================
   STORE PERFORMANCE - Store-wise Metrics
   ======================================== */

export const StorePerformanceInfographic = () => (
  <svg width="900" height="320" viewBox="0 0 900 320" className="infographic-svg">
    {/* Header */}
    <text x="450" y="35" textAnchor="middle" fill="#fff" fontSize="18" fontWeight="bold">STORE PERFORMANCE RANKING</text>

    {/* Store Cards */}
    {[
      { rank: 1, name: 'Store A - Downtown', revenue: '$125K', orders: '1,247', rating: '4.9', status: 'top' },
      { rank: 2, name: 'Store B - Mall', revenue: '$98K', orders: '982', rating: '4.7', status: 'top' },
      { rank: 3, name: 'Store C - Suburb', revenue: '$87K', orders: '856', rating: '4.5', status: 'good' },
      { rank: 4, name: 'Store D - Airport', revenue: '$76K', orders: '734', rating: '4.4', status: 'good' },
      { rank: 5, name: 'Store E - Station', revenue: '$65K', orders: '612', rating: '4.2', status: 'avg' },
    ].map((store, i) => (
      <motion.g key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
        <rect x="50" y={60 + i * 50} width="800" height="40" rx="8" fill={store.status === 'top' ? 'rgba(132,204,22,0.15)' : store.status === 'good' ? 'rgba(0,212,255,0.1)' : 'rgba(251,146,60,0.1)'} stroke={store.status === 'top' ? '#84cc16' : store.status === 'good' ? '#00d4ff' : '#fb923c'} strokeWidth="1" />
        <text x="75" y={85 + i * 50} fill="#94a3b8" fontSize="14" fontWeight="bold">#{store.rank}</text>
        <text x="130" y={85 + i * 50} fill="#fff" fontSize="14" fontWeight="600">{store.name}</text>
        <text x="400" y={85 + i * 50} fill="#00d4ff" fontSize="14" fontWeight="bold">{store.revenue}</text>
        <text x="520" y={85 + i * 50} fill="#94a3b8" fontSize="14">{store.orders} orders</text>
        <text x="650" y={85 + i * 50} fill="#fb923c" fontSize="14" fontWeight="bold">⭐ {store.rating}</text>
        {store.status === 'top' && <text x="780" y={85 + i * 50} fill="#84cc16" fontSize="12" fontWeight="bold">TOP PERFORMER</text>}
        {store.status === 'good' && <text x="780" y={85 + i * 50} fill="#00d4ff" fontSize="12">ABOVE AVG</text>}
        {store.status === 'avg' && <text x="780" y={85 + i * 50} fill="#fb923c" fontSize="12">NEEDS ATTENTION</text>}
      </motion.g>
    ))}

    {/* Legend */}
    <rect x="600" y="300" width="250" height="20" rx="4" fill="#0a0f1a" />
    <circle cx="625" cy="310" r="5" fill="#84cc16" />
    <text x="640" y="314" fill="#94a3b8" fontSize="10">Top Performer</text>
    <circle cx="725" cy="310" r="5" fill="#00d4ff" />
    <text x="740" y="314" fill="#94a3b8" fontSize="10">Above Avg</text>
    <circle cx="825" cy="310" r="5" fill="#fb923c" />
    <text x="840" y="314" fill="#94a3b8" fontSize="10">Needs Work</text>
  </svg>
)
