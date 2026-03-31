import { motion } from 'framer-motion'

const Slide12 = () => {
  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        The Only Question
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{ marginTop: '50px', fontSize: '2rem', color: '#a0aec0' }}
      >
        Not "Can AI help my business?"
      </motion.p>

      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{ marginTop: '20px', fontSize: '2.5rem', color: '#4fc3f7', fontWeight: 'bold' }}
      >
        But "Who will be the first to bring it to our customers?"
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        style={{ marginTop: '60px' }}
      >
        <p style={{ fontSize: '1.5rem', color: '#ffffff' }}>I'm Rachit Ahuja</p>
        <p style={{ fontSize: '1.2rem', color: '#a0aec0', marginTop: '10px' }}>Founder & CEO, Quick Dry Cleaning Software</p>
        <p style={{ fontSize: '1rem', color: '#4fc3f7', marginTop: '20px' }}>www.quickdrycleaning.com</p>
      </motion.div>
    </div>
  )
}

export default Slide12