import { motion } from 'framer-motion'

const Slide3 = () => {
  const challenges = [
    {
      number: '1',
      title: 'Compliance handled country-by-country',
      subtitle: 'High manual effort & risk of errors'
    },
    {
      number: '2',
      title: 'Every regulatory change = new development',
      subtitle: 'Delays market expansion'
    },
    {
      number: '3',
      title: 'Fragmented systems across regions',
      subtitle: 'Lack of visibility & control'
    },
    {
      number: '4',
      title: 'Legacy systems not built for scale',
      subtitle: 'Increasing long-term cost'
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

      <div className="challenge-list">
        {challenges.map((item, index) => (
          <motion.div
            key={index}
            className="challenge-item"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
          >
            <span className="challenge-icon">{item.number}️⃣</span>
            <div className="challenge-content">
              <span className="challenge-title">{item.title}</span>
              <span className="challenge-subtitle">→ {item.subtitle}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Slide3