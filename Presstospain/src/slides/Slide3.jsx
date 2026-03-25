import { motion } from 'framer-motion'

const Slide3 = () => {
  const points = [
    'Country-specific compliance handled manually',
    'Difficulty adapting to new fiscal laws',
    'Fragmented systems across regions',
    'Dependency on outdated systems'
  ]

  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        The Current Challenge
      </motion.h2>

      <div className="challenge-grid">
        {points.map((point, index) => (
          <motion.div
            key={index}
            className="challenge-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
          >
            <div className="challenge-number">{index + 1}</div>
            <p className="challenge-text">{point}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Slide3