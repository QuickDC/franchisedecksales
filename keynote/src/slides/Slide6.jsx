import { motion } from 'framer-motion'

const Slide6 = () => {
  return (
    <div className="slide">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: '2rem', marginBottom: '20px', color: '#a0aec0' }}
      >
        That is exactly why we created
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ fontSize: '5rem', color: '#4fc3f7', marginBottom: '20px' }}
      >
        Laundry Launchpad
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{ fontSize: '1.8rem', maxWidth: '800px', color: '#a0aec0', marginTop: '20px' }}
      >
        A first-of-its-kind platform that brings together the tools, technologies, products, and service partners needed to build, run, and scale a modern laundry or dry cleaning business.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{
          marginTop: '50px',
          padding: '30px 50px',
          background: 'rgba(79, 195, 247, 0.1)',
          borderRadius: '15px'
        }}
      >
        <p style={{ fontSize: '2rem', color: '#4fc3f7' }}>
          Today, under one roof, you have access to ideas, systems, experts, and solutions.
        </p>
      </motion.div>
    </div>
  )
}

export default Slide6