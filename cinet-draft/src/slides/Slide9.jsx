import { motion } from 'framer-motion'

const Slide9 = () => {
  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        So What Is AI Actually Doing Here?
      </motion.h2>

      <div className="benefits-grid" style={{ marginTop: '40px' }}>
        <motion.div
          className="benefit-item"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ flexDirection: 'column', textAlign: 'center', minHeight: '150px' }}
        >
          <span style={{ fontSize: '2.5rem' }}>🎯</span>
          <span style={{ fontSize: '1.2rem', marginTop: '10px', color: '#4fc3f7' }}>Making Your Team Faster</span>
        </motion.div>

        <motion.div
          className="benefit-item"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{ flexDirection: 'column', textAlign: 'center', minHeight: '150px' }}
        >
          <span style={{ fontSize: '2.5rem' }}>📞</span>
          <span style={{ fontSize: '1.2rem', marginTop: '10px', color: '#4fc3f7' }}>Never Missing A Call</span>
        </motion.div>

        <motion.div
          className="benefit-item"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          style={{ flexDirection: 'column', textAlign: 'center', minHeight: '150px' }}
        >
          <span style={{ fontSize: '2.5rem' }}>🚛</span>
          <span style={{ fontSize: '1.2rem', marginTop: '10px', color: '#4fc3f7' }}>Using Your Routes Better</span>
        </motion.div>

        <motion.div
          className="benefit-item"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          style={{ flexDirection: 'column', textAlign: 'center', minHeight: '150px' }}
        >
          <span style={{ fontSize: '2.5rem' }}>💤</span>
          <span style={{ fontSize: '1.2rem', marginTop: '10px', color: '#4fc3f7' }}>Waking Up Lost Customers</span>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{ marginTop: '40px', fontSize: '1.4rem', color: '#ffffff' }}
      >
        Not replacing you. <span style={{ color: '#4fc3f7' }}>Multiplying what you already have.</span>
      </motion.p>
    </div>
  )
}

export default Slide9