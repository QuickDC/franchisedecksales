import { motion } from 'framer-motion'

const Slide16 = () => {
  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Not <span style={{ color: '#ff6b6b' }}>Build This Internally</span>?
      </motion.h2>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Build vs Buy Reality Check
      </motion.p>

      <div className="build-vs-buy">
        <motion.div
          className="build-column"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3>Build It Yourself</h3>
          <ul>
            <li>💸 <strong>High cost</strong> — $200K+ development</li>
            <li>⏱️ <strong>Long timelines</strong> — 12-18 months</li>
            <li>🔧 <strong>Continuous maintenance</strong> — ongoing expense</li>
            <li>👥 <strong>Hire & retain</strong> — tech talent shortage</li>
            <li>🎯 <strong>Distraction</strong> — not your core business</li>
          </ul>
        </motion.div>

        <motion.div
          className="buy-column"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h3>Choose QDC OS</h3>
          <ul>
            <li>✅ <strong>Ready now</strong> — deploy in weeks</li>
            <li>✅ <strong>Proven</strong> — built for your use case</li>
            <li>✅ <strong>Supported</strong> — we maintain it</li>
            <li>✅ <strong>Evolving</strong> — continuous improvements</li>
            <li>✅ <strong>Focus</strong> — on growth, not code</li>
          </ul>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="impact-line"
      >
        You're not a tech company. Focus on growth.
      </motion.p>
    </div>
  )
}

export default Slide16
