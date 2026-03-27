import { motion } from 'framer-motion'

const Slide2 = () => {
  return (
    <div className="slide">
      <motion.p
        className="overline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Current Reality
      </motion.p>

      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Jodhpur ka market aaj bhi <span className="text-accent">traditional hai</span>
      </motion.h2>

      <div className="reality-grid">
        <motion.div
          className="reality-card"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="card-number">01</div>
          <h3>Walk-in Dependent</h3>
          <p>Business largely depends on walk-in customers visiting the store</p>
        </motion.div>

        <motion.div
          className="reality-card"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="card-number">02</div>
          <h3>Store Timings Fixed</h3>
          <p>Customers must follow store operating hours</p>
        </motion.div>

        <motion.div
          className="reality-card"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="card-number">03</div>
          <h3>Phone Dependent</h3>
          <p>For any query, customers must call — if busy, call again later</p>
        </motion.div>

        <motion.div
          className="reality-card"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="card-number">04</div>
          <h3>Limited Payment Options</h3>
          <p>Payment and convenience as per what business offers</p>
        </motion.div>
      </div>

      <motion.div
        className="insight-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="highlight">This model has worked for years.</span>
        <span className="muted"> But the problem is — the customer has changed.</span>
      </motion.div>
    </div>
  )
}

export default Slide2