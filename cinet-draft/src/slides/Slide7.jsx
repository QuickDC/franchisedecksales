import { motion } from 'framer-motion'

const Slide7 = () => {
  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What If... Your Van Could "See" Opportunities?
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{ marginTop: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', padding: '40px', maxWidth: '800px' }}
      >
        <p style={{ fontSize: '1.5rem', color: '#a0aec0', fontStyle: 'italic', marginBottom: '20px' }}>
          Driver maps: Main Street → Oak Avenue → Pine Boulevard
        </p>
        <p style={{ fontSize: '1.5rem', color: '#4fc3f7' }}>
          → System automatically texts 47 nearby customers: "We're near you tomorrow 10-3. Free pickup?"
        </p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{ marginTop: '30px', fontSize: '1.2rem', color: '#a0aec0' }}
      >
        Your van is already going there. Why not pick up more on the way?
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{ marginTop: '20px', fontSize: '1.3rem', color: '#4caf50' }}
      >
        No extra fuel. No extra time. But more pickups every single day.
      </motion.p>
    </div>
  )
}

export default Slide7