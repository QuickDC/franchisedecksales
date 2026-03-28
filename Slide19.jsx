import { motion } from 'framer-motion'

const Slide19 = () => {
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

      <motion.p
        className="overline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        The Question
      </motion.p>

      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          fontSize: '3.5rem',
          fontWeight: 800,
          color: '#ffffff',
          maxWidth: 800,
          lineHeight: 1.2
        }}
      >
        Aap <span style={{ color: '#4fc3f7' }}>shopkeeper</span> ho?<br />
        Ya <span style={{ color: '#81c784' }}>businessman</span>?
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{
          marginTop: 30,
          display: 'flex',
          justifyContent: 'center',
          gap: 40
        }}
      >
        <div style={{
          padding: '12px 24px',
          background: 'rgba(79, 195, 247, 0.1)',
          border: '1px solid rgba(79, 195, 247, 0.3)',
          borderRadius: 8,
          color: '#4fc3f7',
          fontSize: '1rem',
          fontWeight: 500
        }}>
          Shopkeeper
        </div>
        <div style={{
          padding: '12px 24px',
          background: 'rgba(129, 199, 132, 0.1)',
          border: '1px solid rgba(129, 199, 132, 0.3)',
          borderRadius: 8,
          color: '#81c784',
          fontSize: '1rem',
          fontWeight: 500
        }}>
          businessman
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: 40,
          fontSize: '1.1rem',
          color: '#64748b',
          fontStyle: 'italic'
        }}
      >
        Answer is important — decision aapke business ki direction define karega
      </motion.p>
    </div>
  )
}

export default Slide19