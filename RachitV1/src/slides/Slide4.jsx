import { motion } from 'framer-motion'

const Slide4 = () => {
  return (
    <div className="slide">
      <motion.p
        className="overline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        The Shift
      </motion.p>

      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Laundry business khatam nahi ho raha.<br />
        <span className="text-accent">Purana tareeka khatam ho raha hai.</span>
      </motion.h2>

      <motion.div
        className="big-message"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="message-content">
          <div className="keep-side">
            <h3>Will Continue</h3>
            <ul>
              <li>Demand for laundry services</li>
              <li>Clothes will be dry cleaned</li>
              <li>Ironing & washing services</li>
            </ul>
          </div>
          <div className="end-side">
            <h3>Will End</h3>
            <ul>
              <li>Old-style model</li>
              <li>Outdated business approach</li>
              <li>Relevance of non-evolving stores</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.p
        className="impact-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="highlight-word">Outdated stores lose relevance first.</span>
      </motion.p>
    </div>
  )
}

export default Slide4