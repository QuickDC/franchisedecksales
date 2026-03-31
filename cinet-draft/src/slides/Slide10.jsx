import { motion } from 'framer-motion'

const Slide10 = () => {
  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why This Is Different From "AI for Everyone"
      </motion.h2>

      <div style={{ marginTop: '40px', textAlign: 'left', maxWidth: '900px' }}>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ fontSize: '1.4rem', marginBottom: '20px' }}
        >
          <span style={{ color: '#4caf50' }}>✓</span> We don't sell you a chatbot. We handle your PHONE calls.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{ fontSize: '1.4rem', marginBottom: '20px' }}
        >
          <span style={{ color: '#4caf50' }}>✓</span> We don't analyze your "data." We optimize your ROUTES.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          style={{ fontSize: '1.4rem', marginBottom: '20px' }}
        >
          <span style={{ color: '#4caf50' }}>✓</span> We don't give you dashboards. We make your STAFF faster.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          style={{ fontSize: '1.4rem', marginBottom: '20px' }}
        >
          <span style={{ color: '#4caf50' }}>✓</span> We don't guess. We know your CUSTOMERS by name.
        </motion.p>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{ marginTop: '40px', fontSize: '1.3rem', color: '#4fc3f7' }}
      >
        Generic AI gives you tools. We solve YOUR specific problems.
      </motion.p>
    </div>
  )
}

export default Slide10