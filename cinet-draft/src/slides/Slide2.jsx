import { motion } from 'framer-motion'

const Slide2 = () => {
  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Does Google Say?
      </motion.h2>

      <div style={{ marginTop: '40px', textAlign: 'left', maxWidth: '900px' }}>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ fontSize: '1.5rem', marginBottom: '30px', color: '#a0aec0' }}
        >
          "Use AI to analyze customer data and improve marketing"
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{ fontSize: '1.5rem', marginBottom: '30px', color: '#a0aec0' }}
        >
          "Automate your inventory management with AI"
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          style={{ fontSize: '1.5rem', marginBottom: '30px', color: '#a0aec0' }}
        >
          "Use chatbots for customer service"
        </motion.p>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{ marginTop: '40px', fontSize: '1.4rem', color: '#4fc3f7' }}
      >
        Sound familiar? That's what EVERY business gets.
      </motion.p>
    </div>
  )
}

export default Slide2