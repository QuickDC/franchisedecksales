import { motion } from 'framer-motion'

const Slide4 = () => {
  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        The <span className="highlight">Transformation</span>
      </motion.h2>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        See how QDC OS transforms your dry cleaning business
      </motion.p>

      <div className="transformation-container">
        {/* BEFORE SECTION */}
        <motion.div
          className="transform-section before"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="section-header">
            <span className="section-icon">📉</span>
            <h3>BEFORE</h3>
          </div>

          {/* Business Owner Visual - Stressed */}
          <div className="owner-visual">
            <svg width="280" height="100" viewBox="0 0 280 100">
              {/* Owner figure - crying */}
              <g transform="translate(90, 10)">
                <circle cx="50" cy="25" r="20" fill="#1f2937" stroke="#ef4444" strokeWidth="2" />
                {/* Crying eyes */}
                <circle cx="43" cy="22" r="3" fill="#ef4444" />
                <circle cx="57" cy="22" r="3" fill="#ef4444" />
                {/* Frowning mouth */}
                <path d="M43 38 Q50 32 57 38" stroke="#ef4444" strokeWidth="2" fill="none" />
                {/* Animated tears - continuously dropping */}
                <motion.circle cx="40" cy="28" r="2.5" fill="#00d4ff"
                  animate={{ opacity: [1, 1, 0], y: [28, 45, 45] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle cx="60" cy="28" r="2.5" fill="#00d4ff"
                  animate={{ opacity: [1, 1, 0], y: [28, 45, 45] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.75, ease: "linear" }}
                />
              </g>

              {/* Speech bubbles - problems */}
              <g>
                <rect x="10" y="5" width="70" height="25" rx="10" fill="#374151" />
                <path d="M50 30 L60 35 L60 30" fill="#374151" />
                <text x="45" y="22" textAnchor="middle" fill="#ef4444" fontSize="9">So stressed!</text>
              </g>

              {/* Chaos around owner */}
              <g>
                {/* Papers flying */}
                <motion.g animate={{ rotate: [0, 5, -5, 0], y: [0, -3, 3, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                  <rect x="180" y="15" width="20" height="25" fill="#4b5563" rx="2" />
                  <line x1="185" y1="22" x2="195" y2="22" stroke="#1f2937" strokeWidth="1" />
                  <line x1="185" y1="27" x2="193" y2="27" stroke="#1f2937" strokeWidth="1" />
                  <line x1="185" y1="32" x2="190" y2="32" stroke="#1f2937" strokeWidth="1" />
                </motion.g>

                {/* Ringing phone */}
                <motion.g animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 0.3, repeat: Infinity }}>
                  <rect x="220" y="50" width="25" height="40" fill="#1f2937" rx="4" />
                  <rect x="223" y="60" width="19" height="25" fill="#374151" rx="2" />
                  <path d="M232 55 L232 60" stroke="#ef4444" strokeWidth="2">
                    <animate attributeName="opacity" values="0;1;0" dur="0.5s" repeatCount="indefinite" />
                  </path>
                </motion.g>

                {/* Angry customer */}
                <g transform="translate(180, 65)">
                  <circle cx="15" cy="12" r="10" fill="#1f2937" stroke="#ef4444" strokeWidth="1" />
                  <text x="15" y="15" textAnchor="middle" fontSize="12">😠</text>
                </g>
              </g>
            </svg>
          </div>

          {/* Visual representation - Downward Trends */}
          <div className="trend-visual">
            <svg width="300" height="120" viewBox="0 0 300 120">
              {/* Revenue Graph - Erratic (ups and down) */}
              <g transform="translate(15, 15)">
                <text x="0" y="0" fill="#ef4444" fontSize="9" fontWeight="bold">REVENUE</text>
                <rect x="0" y="8" width="70" height="45" fill="#1f2937" rx="3" />
                {/* Erratic up and down pattern */}
                <polyline points="8,30 20,40 32,25 44,38 56,45" fill="none" stroke="#ef4444" strokeWidth="2" />
                <circle cx="8" cy="30" r="2" fill="#ef4444" />
                <circle cx="20" cy="40" r="2" fill="#ef4444" />
                <circle cx="32" cy="25" r="2" fill="#ef4444" />
                <circle cx="44" cy="38" r="2" fill="#ef4444" />
                <circle cx="56" cy="45" r="2" fill="#ef4444" />
              </g>

              {/* Orders Graph - Erratic */}
              <g transform="translate(100, 15)">
                <text x="0" y="0" fill="#ef4444" fontSize="9" fontWeight="bold">ORDERS</text>
                <rect x="0" y="8" width="70" height="45" fill="#1f2937" rx="3" />
                {/* Erratic up and down pattern */}
                <polyline points="8,38 20,28 32,42 44,30 56,44" fill="none" stroke="#ef4444" strokeWidth="2" />
                <circle cx="8" cy="38" r="2" fill="#ef4444" />
                <circle cx="20" cy="28" r="2" fill="#ef4444" />
                <circle cx="32" cy="42" r="2" fill="#ef4444" />
                <circle cx="44" cy="30" r="2" fill="#ef4444" />
                <circle cx="56" cy="44" r="2" fill="#ef4444" />
              </g>

              {/* Customer Churn */}
              <g transform="translate(185, 15)">
                <text x="50" y="0" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold">CHURN</text>
                <rect x="20" y="8" width="60" height="45" fill="#1f2937" rx="3" stroke="#ef4444" strokeWidth="1" />
                <text x="50" y="35" textAnchor="middle" fill="#ef4444" fontSize="16" fontWeight="bold">35%</text>
              </g>

              {/* Bottom metrics */}
              <g transform="translate(15, 70)">
                <rect x="0" y="0" width="270" height="35" fill="#1f2937" rx="4" />
                <text x="25" y="22" fill="#ef4444" fontSize="11" fontWeight="bold">$8,500/mo loss</text>
                <text x="130" y="22" fill="#9ca3af" fontSize="10">|</text>
                <text x="150" y="22" fill="#ef4444" fontSize="11" fontWeight="bold">35% churn</text>
              </g>

              {/* Cash vs Pilferage Visual */}
              <g transform="translate(15, 110)">
                <text x="0" y="0" fill="#ef4444" fontSize="9" fontWeight="bold">CASH PAYMENTS</text>
                <rect x="0" y="8" width="130" height="35" fill="#1f2937" rx="3" />
                {/* Money icon */}
                <text x="15" y="30" fontSize="16">💵</text>
                <text x="45" y="30" fill="#ef4444" fontSize="10" fontWeight="bold">Cash → Employee</text>
                {/* Animated pilferage arrow */}
                <motion.path d="M100 25 L115 25" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.5 }}
                />
                <motion.text x="118" y="29" fontSize="10"
                  animate={{ x: [118, 122, 118] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >👤</motion.text>
                <text x="85" y="30" fill="#ef4444" fontSize="9">Pilferage!</text>
              </g>
            </svg>
          </div>
        </motion.div>

        {/* TRANSITION */}
        <motion.div
          className="transform-arrow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="arrow-circle">
            <svg width="50" height="50" viewBox="0 0 50 50">
              <circle cx="25" cy="25" r="22" fill="url(#arrowGrad)" />
              <path d="M15 25 L35 25 M28 18 L35 25 L28 32" stroke="#0a0f1a" strokeWidth="3" strokeLinecap="round" fill="none" />
              <defs>
                <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff6b6b" />
                  <stop offset="100%" stopColor="#00d4ff" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>

        {/* AFTER SECTION */}
        <motion.div
          className="transform-section after"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="section-header">
            <span className="section-icon">📈</span>
            <h3>AFTER QDC</h3>
          </div>

          {/* Business Owner Visual - Happy */}
          <div className="owner-visual">
            <svg width="280" height="100" viewBox="0 0 280 100">
              {/* Owner figure - happy with brushing teeth */}
              <g transform="translate(90, 10)">
                <circle cx="50" cy="25" r="20" fill="#1f2937" stroke="#22c55e" strokeWidth="2" />
                {/* Happy eyes */}
                <circle cx="43" cy="22" r="3" fill="#22c55e" />
                <circle cx="57" cy="22" r="3" fill="#22c55e" />
                {/* Big smile with teeth - constantly shining */}
                <path d="M40 32 Q50 45 60 32" stroke="#22c55e" strokeWidth="2" fill="none" />
                <motion.rect x="42" y="34" width="16" height="8" rx="2" fill="#fff" stroke="#22c55e" strokeWidth="1"
                  animate={{ fill: ["#fff", "#e0f2fe", "#fff"] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
                {/* Teeth lines */}
                <line x1="46" y1="35" x2="46" y2="40" stroke="#22c55e" strokeWidth="1" />
                <line x1="50" y1="35" x2="50" y2="40" stroke="#22c55e" strokeWidth="1" />
                <line x1="54" y1="35" x2="54" y2="40" stroke="#22c55e" strokeWidth="1" />
                {/* Sparkle effect on teeth */}
                <motion.g animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 0.8, repeat: Infinity }}>
                  <text x="50" y="42" textAnchor="middle" fontSize="8">✨</text>
                </motion.g>
                {/* Stars */}
                <motion.g animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity }}>
                  <text x="72" y="15" fontSize="10">⭐</text>
                </motion.g>
              </g>

              {/* Speech bubbles - happy */}
              <g>
                <rect x="10" y="5" width="70" height="25" rx="10" fill="#064e3b" />
                <path d="M50 30 L60 35 L60 30" fill="#064e3b" />
                <text x="45" y="22" textAnchor="middle" fill="#22c55e" fontSize="9">So happy!</text>
              </g>

              {/* Happy elements around owner */}
              <g>
                {/* Tablet/system */}
                <motion.g animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <rect x="200" y="15" width="30" height="35" fill="#0f172a" rx="4" stroke="#22c55e" strokeWidth="1" />
                  <rect x="203" y="20" width="24" height="25" fill="#1e293b" rx="2" />
                  <rect x="207" y="25" width="16" height="4" fill="#22c55e" rx="1" />
                  <rect x="207" y="32" width="12" height="3" fill="#334155" rx="1" />
                  <rect x="207" y="37" width="10" height="3" fill="#334155" rx="1" />
                </motion.g>

                {/* Happy customer */}
                <g transform="translate(170, 60)">
                  <circle cx="15" cy="12" r="10" fill="#1f2937" stroke="#22c55e" strokeWidth="1" />
                  <text x="15" y="15" textAnchor="middle" fontSize="12">😊</text>
                </g>

                {/* Checkmarks */}
                <motion.g animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <text x="245" y="75" fontSize="14">✅</text>
                </motion.g>
              </g>
            </svg>
          </div>

          {/* Visual representation - Upward Trends */}
          <div className="trend-visual">
            <svg width="300" height="120" viewBox="0 0 300 120">
              {/* Revenue Graph - Growing */}
              <g transform="translate(15, 15)">
                <text x="0" y="0" fill="#22c55e" fontSize="9" fontWeight="bold">REVENUE ↑</text>
                <rect x="0" y="8" width="70" height="45" fill="#1f2937" rx="3" />
                <polyline points="8,42 20,35 32,25 44,18 56,10" fill="none" stroke="#22c55e" strokeWidth="2" />
                <circle cx="8" cy="42" r="2" fill="#22c55e" />
                <circle cx="20" cy="35" r="2" fill="#22c55e" />
                <circle cx="32" cy="25" r="2" fill="#22c55e" />
                <circle cx="44" cy="18" r="2" fill="#22c55e" />
                <circle cx="56" cy="10" r="2" fill="#22c55e" />
              </g>

              {/* Orders Graph - Growing */}
              <g transform="translate(100, 15)">
                <text x="0" y="0" fill="#22c55e" fontSize="9" fontWeight="bold">ORDERS ↑</text>
                <rect x="0" y="8" width="70" height="45" fill="#1f2937" rx="3" />
                <polyline points="8,40 20,30 32,22 44,14 56,8" fill="none" stroke="#22c55e" strokeWidth="2" />
                <circle cx="8" cy="40" r="2" fill="#22c55e" />
                <circle cx="20" cy="30" r="2" fill="#22c55e" />
                <circle cx="32" cy="22" r="2" fill="#22c55e" />
                <circle cx="44" cy="14" r="2" fill="#22c55e" />
                <circle cx="56" cy="8" r="2" fill="#22c55e" />
              </g>

              {/* Customer Retention */}
              <g transform="translate(185, 15)">
                <text x="50" y="0" textAnchor="middle" fill="#22c55e" fontSize="9" fontWeight="bold">RETENTION</text>
                <rect x="20" y="8" width="60" height="45" fill="#1f2937" rx="3" stroke="#22c55e" strokeWidth="1" />
                <text x="50" y="35" textAnchor="middle" fill="#22c55e" fontSize="16" fontWeight="bold">92%</text>
              </g>

              {/* Bottom metrics */}
              <g transform="translate(15, 70)">
                <rect x="0" y="0" width="270" height="35" fill="#1f2937" rx="4" />
                <text x="25" y="22" fill="#22c55e" fontSize="11" fontWeight="bold">+28% growth</text>
                <text x="130" y="22" fill="#9ca3af" fontSize="10">|</text>
                <text x="150" y="22" fill="#22c55e" fontSize="11" fontWeight="bold">92% retention</text>
              </g>

              {/* Digital Payments - No Pilferage */}
              <g transform="translate(15, 110)">
                <text x="0" y="0" fill="#22c55e" fontSize="9" fontWeight="bold">DIGITAL PAYMENTS</text>
                <rect x="0" y="8" width="130" height="35" fill="#1f2937" rx="3" />
                {/* Digital payment icons */}
                <text x="10" y="30" fontSize="14">📱</text>
                <text x="30" y="30" fontSize="14">💳</text>
                <text x="50" y="30" fontSize="14">🏦</text>
                <text x="80" y="30" fill="#22c55e" fontSize="10" fontWeight="bold">→ HQ Directly</text>
                {/* Secure arrow */}
                <motion.path d="M115 25 L135 25" stroke="#22c55e" strokeWidth="2" strokeDasharray="3,2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.5 }}
                />
                {/* Checkmark */}
                <motion.g animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                  <text x="140" y="30" fontSize="12">✅</text>
                </motion.g>
                <text x="155" y="30" fill="#22c55e" fontSize="9">No Pilferage</text>
              </g>
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Slide4
