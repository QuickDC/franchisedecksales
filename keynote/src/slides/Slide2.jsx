import { motion } from 'framer-motion'

const Slide2 = () => {
  return (
    <div className="slide">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: '2.5rem', color: '#4fc3f7', marginBottom: '20px' }}
      >
        Good morning everyone,
      </motion.p>

      {/* <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{ fontSize: '2rem', marginBottom: '40px' }}
      >
        First of all, thank you all for being here today.
      </motion.p> */}

      {/* <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{ fontSize: '3rem', color: '#ff9800', marginTop: '40px' }}
      >
        Today, we welcome two kinds of guests:
      </motion.h2> */}

      <div style={{ marginTop: '50px', display: 'flex', gap: '60px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          style={{ textAlign: 'center', padding: '30px' }}
        >
          <span style={{ fontSize: '4rem' }}>🚀</span>
          <p style={{ fontSize: '1.8rem', marginTop: '15px' }}><br/>New laundry or dry cleaning business</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          style={{ textAlign: 'center', padding: '30px' }}
        >
          <span style={{ fontSize: '4rem' }}>📈</span>
          <p style={{ fontSize: '1.8rem', marginTop: '15px' }}>Existing laundry or dry cleaning business<br/>looking to improve & grow</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Slide2