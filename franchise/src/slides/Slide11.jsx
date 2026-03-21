import { motion } from 'framer-motion'
import { HQDashboardInfographic, StorePerformanceInfographic } from '../components/Infographic'

const Slide11 = () => {
  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        HQ Control - <span className="highlight">Business Health Dashboard</span>
      </motion.h2>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Real-time visibility into overall business health
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="infographic-container"
      >
        <HQDashboardInfographic />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="impact-line"
      >
        One dashboard. Complete visibility. Data-driven decisions.
      </motion.p>
    </div>
  )
}

export default Slide11
