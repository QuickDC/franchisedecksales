import { motion } from 'framer-motion'

const Slide1 = () => {
  return (
    <div className="slide slide-title-slide">
      <motion.div
        className="title-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="main-title">Pressto Spain</h1>
        <h2 className="main-subtitle">Digital & Compliance Transformation</h2>
        <div className="title-divider"></div>
        <p className="tagline">Building a Scalable, Compliance-Ready Operating Platform</p>
      </motion.div>

      <motion.p
        className="navigation-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        Use arrow keys to navigate
      </motion.p>
    </div>
  )
}

export default Slide1