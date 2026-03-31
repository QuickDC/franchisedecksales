import { motion } from 'framer-motion'

const Slide8 = () => {
  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What If... 1,700 Sleeping Customers Woke Up?
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{ marginTop: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', padding: '40px', maxWidth: '800px' }}
      >
        <p style={{ fontSize: '1.5rem', color: '#a0aec0', marginBottom: '20px' }}>
          You have 2,000 customers. <span style={{ color: '#f44336' }}>1,700 haven't ordered in 30+ days.</span>
        </p>
        <p style={{ fontSize: '1.5rem', color: '#4fc3f7' }}>
          → AI sends right message to right person: Discount? Free delivery? Personal note?
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{ marginTop: '30px', fontSize: '1.2rem', color: '#a0aec0' }}
      >
        Your best customers are not the ones who order every week. They're the ones who used to.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{ marginTop: '20px', fontSize: '1.3rem', color: '#4caf50' }}
      >
        Automated win-back campaigns that learn what works. No manual effort.
      </motion.p>
    </div>
  )
}

export default Slide8