import { motion } from 'framer-motion'

const Slide17 = () => {
  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Implementation <span className="highlight">Approach</span>
      </motion.h2>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Go Live in Phases — Not Chaos
      </motion.p>

      <div className="phases-timeline">
        {[
          { num: '01', title: 'Store Operations', desc: 'POS, tagging, tracking', duration: 'Weeks 1-4' },
          { num: '02', title: 'Plant Integration', desc: 'Dispatch, QC, processing', duration: 'Weeks 5-8' },
          { num: '03', title: 'Growth & Automation', desc: 'Marketing, loyalty, app', duration: 'Weeks 9-12' },
        ].map((phase, index) => (
          <motion.div
            key={index}
            className="phase-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.2, duration: 0.5 }}
          >
            <span className="phase-num">{phase.num}</span>
            <h3>{phase.title}</h3>
            <p>{phase.desc}</p>
            <span className="phase-duration">{phase.duration}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="impact-line"
      >
        12 weeks to full deployment. No business disruption.
      </motion.p>
    </div>
  )
}

export default Slide17
