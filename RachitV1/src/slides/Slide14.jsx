import { motion } from 'framer-motion'

const Slide14 = () => {
  return (
    <div className="slide">
      <motion.p
        className="overline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Why Now?
      </motion.p>

      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        First mover <span className="text-accent">advantage</span>
      </motion.h2>

      <div className="advantage-content">
        <motion.div
          className="advantage-statement"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p>Jo businesses yeh shift pehle samajh lenge,</p>
          <p className="highlight">unko clear advantage milega.</p>
        </motion.div>

        <motion.div
          className="advantage-detail"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p>Jo pehle modern experience create karega,</p>
          <p>woh customer ke dimaag mein <span className="strong">strong position</span> le lega.</p>
        </motion.div>
      </div>

      <motion.div
        className="future-statement"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <p>Future unka hoga jo <span className="highlight-text">convenience</span>, <span className="highlight-text">control</span>, aur <span className="highlight-text">customer experience</span> ko seriously lenge.</p>
      </motion.div>

      <motion.div
        className="final-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <p className="question">Question yeh nahi hai ki market badlega ya nahi.</p>
        <p className="answer">Question yeh hai — <span className="strong">ki aap kab badloge?</span></p>
      </motion.div>
    </div>
  )
}

export default Slide14