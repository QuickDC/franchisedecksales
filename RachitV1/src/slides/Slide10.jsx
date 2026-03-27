import { motion } from 'framer-motion'

const Slide10 = () => {
  return (
    <div className="slide">
      <motion.p
        className="overline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Comparison
      </motion.p>

      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Traditional vs <span className="highlight-line">Modern Drycleaning Business</span>
      </motion.h2>

      <div className="comparison-table">
        <motion.div
          className="table-header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="header-cell empty"></div>
          <div className="header-cell traditional">Traditional</div>
          <div className="header-cell modern">Modern</div>
        </motion.div>

        <motion.div
          className="table-row"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="row-label">Customer Approach</div>
          <div className="row-value traditional">Walk-in only</div>
          <div className="row-value modern">Multiple Channels</div>
        </motion.div>

        <motion.div
          className="table-row"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="row-label">Updates</div>
          <div className="row-value traditional">Call to check</div>
          <div className="row-value modern">Timely communication</div>
        </motion.div>

        <motion.div
          className="table-row"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="row-label">Payment</div>
          <div className="row-value traditional">Cash</div>
          <div className="row-value modern">Multiple Payment Modes</div>
        </motion.div>

        <motion.div
          className="table-row"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="row-label">Tracking</div>
          <div className="row-value traditional">Paper register</div>
          <div className="row-value modern">Live tracking</div>
        </motion.div>

        <motion.div
          className="table-row"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="row-label">Owner Control</div>
          <div className="row-value traditional">Owner memory</div>
          <div className="row-value modern">System control</div>
        </motion.div>
      </div>

      <motion.p
        className="table-note"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        Difference is not just tools — it's the entire business experience for customer, team, and owner.
      </motion.p>
    </div>
  )
}

export default Slide10