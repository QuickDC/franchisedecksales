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

      <div className="risk-grid">
        {risks.map((risk, index) => (
          <motion.div
            key={index}
            className="risk-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.12, duration: 0.5 }}
          >
            <div className="risk-icon">⚡</div>
            <h3 className="risk-card-title">{risk.title}</h3>
            <p className="risk-card-desc">{risk.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Slide4