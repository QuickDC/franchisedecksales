import { motion } from 'framer-motion'

const Slide9 = () => {
  return (
    <div className="slide">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: '2rem', marginBottom: '30px', color: '#a0aec0' }}
      >
        My hope is that when we meet next time...
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        style={{
          marginTop: '30px',
          padding: '50px',
          background: 'rgba(79, 195, 247, 0.1)',
          borderRadius: '20px',
          maxWidth: '800px'
        }}
      >
        <p style={{ fontSize: '2.5rem', fontWeight: '700', color: '#4fc3f7' }}>
          You are not at the same place where you are today.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{ marginTop: '40px' }}
      >
        <p style={{ fontSize: '1.8rem', color: '#4caf50', marginBottom: '15px' }}>
          More informed
        </p>
        <p style={{ fontSize: '1.8rem', color: '#4caf50', marginBottom: '15px' }}>
          Better equipped
        </p>
        <p style={{ fontSize: '1.8rem', color: '#4caf50' }}>
          Running a better business
        </p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        style={{ fontSize: '4rem', color: '#ff9800', marginTop: '60px' }}
      >
        Thank you, and welcome to Laundry Launchpad.
      </motion.h1>
    </div>
  )
}

export default Slide9