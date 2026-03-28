import { motion } from 'framer-motion'

const Slide1 = () => {
  return (
    <div className="slide" style={{ alignItems: 'center', textAlign: 'center' }}>
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: '2.8rem', marginBottom: '30px' }}
      >
        Laundry Launchpad Exclusive Founder Offer
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '20px', color: '#ffffff', maxWidth: '800px' }}
      >
        Only for participants in this room. Only for today.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{ marginTop: '40px', textAlign: 'center' }}
      >
        <p style={{ fontSize: '1.6rem', color: '#a0aec0', maxWidth: '800px', lineHeight: '1.6' }}>
          You came here to learn how to grow your business.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        style={{ marginTop: '50px', padding: '30px', borderLeft: '4px solid #4fc3f7', background: 'rgba(79, 195, 247, 0.1)', textAlign: 'center' }}
      >
        <p style={{ fontSize: '1.8rem', fontWeight: '600', color: '#4fc3f7' }}>
          Now it is time to decide how serious you are about that growth.
        </p>
      </motion.div>
    </div>
  )
}

export default Slide1
