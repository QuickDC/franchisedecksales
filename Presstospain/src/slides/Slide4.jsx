import { motion } from 'framer-motion'

const Slide4 = () => {
  const risks = [
    {
      title: 'Compliance failure in Spain',
      desc: 'Financial penalties + audit risk'
    },
    {
      title: 'Slower global expansion',
      desc: 'Lost revenue opportunity'
    },
    {
      title: 'Inconsistent customer experience',
      desc: 'Lower retention & brand dilution'
    },
    {
      title: 'Technology limiting growth',
      desc: 'Every new country increases cost & complexity'
    }
  ]

  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Is At <span className="risk-highlight">RISK</span>
      </motion.h2>

      <div className="risk-list">
        {risks.map((risk, index) => (
          <motion.div
            key={index}
            className="risk-item"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
          >
            <div className="risk-icon">⚡</div>
            <div className="risk-content">
              <h3 className="risk-title">{risk.title}</h3>
              <p className="risk-desc">{risk.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Slide4