import { motion } from 'framer-motion'

const Slide6 = () => {
  return (
    <div className="slide">
      <motion.p
        className="overline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        The Reality
      </motion.p>

      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Agar aap nahi badlenge, toh market <span className="text-accent">aapka wait nahi karega</span>
      </motion.h2>

      <div className="pressure-list">
        <motion.div
          className="pressure-item"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <span className="bullet">01</span>
          <div className="pressure-content">
            <h3>Young customers want convenience</h3>
            <p>Next generation prioritizes ease over loyalty</p>
          </div>
        </motion.div>

        <motion.div
          className="pressure-item"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span className="bullet">02</span>
          <div className="pressure-content">
            <h3>Organized brands capture premium</h3>
            <p>Big players are already positioning for growth</p>
          </div>
        </motion.div>

        <motion.div
          className="pressure-item"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <span className="bullet">03</span>
          <div className="pressure-content">
            <h3>Walk-ins alone won't build future</h3>
            <p>Relying only on store visitors limits growth</p>
          </div>
        </motion.div>
      </div>
{/* 
      <motion.div
        className="question-highlight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <div className="question-text">
          <p className="main-question">Why do we expect customer to behave differently only for dry cleaning?</p>
          <p className="answer-text">In every other industry, customer decides based on their convenience. Why should laundry be different?</p>
        </div>
      </motion.div> */}

      <motion.p
        className="final-question"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        Will you evolve to meet customer expectations?
      </motion.p>
    </div>
  )
}

export default Slide6