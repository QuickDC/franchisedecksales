import { motion } from 'framer-motion'

const Slide5 = () => {
  const storeNodes = [
    { id: 'store1', x: 150, y: 200, name: 'Store 1' },
    { id: 'store2', x: 280, y: 200, name: 'Store 2' },
    { id: 'store3', x: 410, y: 200, name: 'Store 3' },
    { id: 'store4', x: 540, y: 200, name: 'Store 4' },
    { id: 'store5', x: 670, y: 200, name: 'Store 5' },
  ]

  const customerNodes = [
    { id: 'app', x: 150, y: 400, icon: '📱', name: 'Mobile App' },
    { id: 'whatsapp', x: 280, y: 400, icon: '💬', name: 'WhatsApp' },
    { id: 'web', x: 410, y: 400, icon: '🌐', name: 'Website' },
    { id: 'pay', x: 540, y: 400, icon: '💳', name: 'Online Pay' },
    { id: 'growth', x: 670, y: 400, icon: '📈', name: 'Growth' },
  ]

  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Introducing <span className="highlight">QDC OS</span>
      </motion.h2>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Your Complete Laundry Business Operating System
      </motion.p>

      <div className="platform-visual-container">
        <svg width="820" height="550" viewBox="0 0 820 550" className="platform-svg">
          <defs>
            <linearGradient id="hqGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            <linearGradient id="storeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="100%" stopColor="#0ea5e9" />
            </linearGradient>
            <linearGradient id="plantGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#16a34a" />
            </linearGradient>
            <linearGradient id="custGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#db2777" />
            </linearGradient>
            <filter id="glowHQ" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* ==================== FLOW ANIMATIONS ==================== */}

          {/* Customer → Stores */}
          <g>
            {customerNodes.map((node, i) => (
              <motion.path
                key={`cust-${i}`}
                d={`M${node.x} 370 Q${node.x + 80} 300 ${storeNodes[i]?.x || 200} ${storeNodes[i]?.y || 200}`}
                stroke="#fb923c"
                strokeWidth="1.5"
                strokeDasharray="4,3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.5 + i * 0.5, duration: 1.5 }}
              />
            ))}
            {/* Particles: Customer → Stores */}
            {customerNodes.map((cust, i) => (
              <motion.circle
                key={`p-cust-${i}`}
                r="3"
                fill="#fb923c"
                initial={{ cx: cust.x, cy: 370 }}
                animate={{
                  cx: [cust.x, cust.x + 50, storeNodes[i]?.x || 200],
                  cy: [370, 300, storeNodes[i]?.y || 200]
                }}
                transition={{
                  delay: 2 + i * 0.5,
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </g>

          {/* Stores → Plant */}
          <g>
            {storeNodes.map((store, i) => (
              <motion.path
                key={`store-plant-${i}`}
                d={`M${store.x} ${store.y + 32} Q${store.x + 20} 280 410 180`}
                stroke="#00d4ff"
                strokeWidth="1.5"
                strokeDasharray="4,3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 6 + i * 0.5, duration: 1.5 }}
              />
            ))}
            {/* Particles: Store → Plant */}
            {storeNodes.map((store, i) => (
              <motion.circle
                key={`p-sp-${i}`}
                r="3"
                fill="#00d4ff"
                initial={{ cx: store.x, cy: store.y + 32 }}
                animate={{
                  cx: [store.x, store.x + 20, 410],
                  cy: [store.y + 32, 280, 180]
                }}
                transition={{
                  delay: 8 + i * 0.5,
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </g>

          {/* Plant → Stores */}
          <g>
            {storeNodes.map((store, i) => (
              <motion.path
                key={`plant-store-${i}`}
                d={`M410 220 Q${store.x + 20} 280 ${store.x} ${store.y - 32}`}
                stroke="#22c55e"
                strokeWidth="1.5"
                strokeDasharray="4,3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 12 + i * 0.5, duration: 1.5 }}
              />
            ))}
          </g>

          {/* Stores → HQ */}
          <g>
            {storeNodes.map((store, i) => (
              <motion.path
                key={`store-hq-${i}`}
                d={`M${store.x} ${store.y - 32} Q${store.x} 80 410 100`}
                stroke="#00d4ff"
                strokeWidth="2"
                strokeDasharray="4,3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 18 + i * 0.5, duration: 1.5 }}
              />
            ))}
            {/* Particles: Store → HQ */}
            {storeNodes.map((store, i) => (
              <motion.circle
                key={`p-sh-${i}`}
                r="3"
                fill="#00d4ff"
                initial={{ cx: store.x, cy: store.y - 32 }}
                animate={{
                  cx: [store.x, store.x, 410],
                  cy: [store.y - 32, 80, 100]
                }}
                transition={{
                  delay: 20 + i * 0.5,
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </g>

          {/* Plant → HQ */}
          <g>
            <motion.path
              d="M410 140 L410 100"
              stroke="#22c55e"
              strokeWidth="2"
              strokeDasharray="4,3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 24, duration: 1.5 }}
            />
            <motion.circle
              r="3"
              fill="#22c55e"
              initial={{ cx: 410, cy: 140 }}
              animate={{ cx: [410, 410], cy: [140, 100] }}
              transition={{
                delay: 25,
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </g>

          {/* ==================== NODES ==================== */}

          {/* Brand Level */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
          >
            <rect x="355" y="0" width="110" height="25" rx="12" fill="url(#brandGrad)" />
            <text x="410" y="16" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="bold">BRAND LEVEL</text>
          </motion.g>

          {/* HQ Capabilities */}
          <g transform="translate(330, 10)">
            <rect x="0" y="0" width="160" height="55" rx="8" fill="#1a2540" stroke="#a855f7" strokeWidth="1" />
            <text x="80" y="18" textAnchor="middle" fill="#a855f7" fontSize="8" fontWeight="bold">HQ CAPABILITIES</text>
            <rect x="10" y="28" width="35" height="18" rx="4" fill="#a855f7" opacity="0.2" />
            <text x="27" y="40" textAnchor="middle" fill="#fff" fontSize="7">Offers</text>
            <rect x="50" y="28" width="35" height="18" rx="4" fill="#a855f7" opacity="0.2" />
            <text x="67" y="40" textAnchor="middle" fill="#fff" fontSize="7">Royalty</text>
            <rect x="90" y="28" width="35" height="18" rx="4" fill="#a855f7" opacity="0.2" />
            <text x="107" y="40" textAnchor="middle" fill="#fff" fontSize="7">Access</text>
            <rect x="130" y="28" width="25" height="18" rx="4" fill="#a855f7" opacity="0.2" />
            <text x="142" y="40" textAnchor="middle" fill="#fff" fontSize="7">Data</text>
          </g>

          {/* HQ Control */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
          >
            <circle cx="410" cy="100" r="45" fill="url(#hqGrad)" filter="url(#glowHQ)" />
            <text x="410" y="95" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="800">HQ CONTROL</text>
            <text x="410" y="110" textAnchor="middle" fill="#fff" fontSize="8">Command Center</text>
          </motion.g>

          {/* Plant Node */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
          >
            <circle cx="410" cy="180" r="40" fill="url(#plantGrad)" />
            <text x="410" y="175" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">PLANT</text>
            <text x="410" y="190" textAnchor="middle" fill="#fff" fontSize="8">Processing & QC</text>
          </motion.g>

          {/* Store Nodes */}
          {storeNodes.map((store, i) => (
            <motion.g
              key={store.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.5, type: "spring" }}
            >
              <circle cx={store.x} cy={store.y} r="32" fill="url(#storeGrad)" />
              <text x={store.x} y={store.y - 5} textAnchor="middle" fill="#0a0f1a" fontSize="8" fontWeight="bold">{store.name}</text>
              <text x={store.x} y={store.y + 10} textAnchor="middle" fill="#0a0f1a" fontSize="6">Operations</text>
            </motion.g>
          ))}

          {/* Customer Touchpoint Nodes */}
          {customerNodes.map((node, i) => (
            <motion.g
              key={node.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.5, type: "spring" }}
            >
              <circle cx={node.x} cy={node.y} r="30" fill="url(#custGrad)" />
              <text x={node.x} y={node.y - 3} textAnchor="middle" fontSize="18">{node.icon}</text>
              <text x={node.x} y={node.y + 18} textAnchor="middle" fill="#0a0f1a" fontSize="7" fontWeight="bold">{node.name}</text>
            </motion.g>
          ))}

          {/* Customer Box */}
          <motion.g
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <rect x="100" y="450" width="620" height="45" rx="8" fill="#1a2540" stroke="#fb923c" strokeWidth="2" />
            <text x="410" y="480" textAnchor="middle" fill="#fb923c" fontSize="14" fontWeight="bold">CUSTOMER</text>
            {/* Arrows to each channel */}
            <motion.path d="M150 450 L150 430" stroke="#fb923c" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ delay: 1, duration: 1 }}
            />
            <motion.path d="M280 450 L280 430" stroke="#fb923c" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            />
            <motion.path d="M410 450 L410 430" stroke="#fb923c" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
            />
            <motion.path d="M540 450 L540 430" stroke="#fb923c" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ delay: 1.6, duration: 1 }}
            />
            <motion.path d="M670 450 L670 430" stroke="#fb923c" strokeWidth="2"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ delay: 1.8, duration: 1 }}
            />
          </motion.g>
        </svg>
      </div>
    </div>
  )
}

export default Slide5