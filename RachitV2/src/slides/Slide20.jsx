import { motion } from 'framer-motion'

const Slide20 = () => {
  return (
    <div className="slide" style={{
      background: 'linear-gradient(180deg, #0f172a 0%, #0a1628 50%, #0d1f3c 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Soft ambient glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        height: 600,
        background: 'radial-gradient(ellipse at center, rgba(79, 195, 247, 0.08) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          fontSize: '4rem',
          fontWeight: 800,
          color: '#ffffff',
          textAlign: 'center',
          lineHeight: 1.2
        }}
      >
        Shopkeeper <span style={{ color: '#4fc3f7' }}>Vs</span> Businessman
      </motion.h2>
    </div>
  )
}

export default Slide20