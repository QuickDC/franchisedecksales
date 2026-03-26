import { motion } from 'framer-motion'

const Slide3 = () => {
  const challenges = [
    {
      icon: '📋',
      title: 'Compliance handled country-by-country',
      subtitle: '→ High manual effort & risk of errors'
    },
    {
      icon: '⚙️',
      title: 'Every regulatory change = new development',
      subtitle: '→ Delays market expansion'
    },
    {
      icon: '🌐',
      title: 'Fragmented systems across regions',
      subtitle: '→ Lack of visibility & control'
    },
    {
      icon: '💰',
      title: 'Legacy systems not built for scale',
      subtitle: '→ Increasing long-term cost'
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
        The Current Challenges
      </motion.h2>

      <div className="challenge-grid">
        {challenges.map((item, index) => (
          <motion.div
            key={index}
            className="challenge-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.12, duration: 0.5 }}
          >
            <span className="challenge-card-icon">{item.icon}</span>
            <h3 className="challenge-card-title">{item.title}</h3>
            <p className="challenge-card-desc">{item.subtitle}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Slide3