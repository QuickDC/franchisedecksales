import { motion } from 'framer-motion'

const Slide1 = () => {
  return (
    <div className="slide">
      <motion.h1
        className="slide-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        The Future of Your Laundry Business
      </motion.h1>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Not What You Think — And Not What Google Will Tell You
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{ marginTop: '60px', opacity: 0.6, fontSize: '1.2rem' }}
      >
        Rachit Ahuja • Quick Dry Cleaning Software • Interclean Amsterdam 2026
      </motion.p>
    </div>
  )
}

export default Slide1