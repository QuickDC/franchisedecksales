import { motion } from 'framer-motion'

const Slide6 = () => {
  return (
    <div className="slide perspective-container" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '40px'
    }}>
      {/* 3D orbs */}
      <div className="orb-3d orb-3d-1" style={{ width: '400px', height: '400px' }} />
      <div className="orb-3d orb-3d-2" style={{ width: '300px', height: '300px', animationDelay: '-3s' }} />

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.8 }}
        style={{ transform: 'translateZ(30px)' }}
      >
        <div style={{ fontSize: '5rem', marginBottom: '20px', transform: 'translateZ(15px)' }}>🤝</div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30, rotateX: -15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          fontSize: '3.5rem',
          fontWeight: '800',
          color: '#fff',
          marginBottom: '20px',
          transform: 'translateZ(25px)',
          textShadow: '0 15px 40px rgba(0,0,0,0.3)'
        }}
      >
        Let's Build Together
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{
          fontSize: '1.6rem',
          color: 'rgba(255,255,255,0.9)',
          maxWidth: '700px',
          lineHeight: 1.6,
          marginBottom: '40px',
          transform: 'translateZ(15px)'
        }}
      >
        Ready to transform your laundry operations with a proven, scalable platform?
        <br />
        Let's discuss which features match your Phase 1 vision.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          display: 'flex',
          gap: '25px',
          marginBottom: '50px',
          perspective: '1000px'
        }}
      >
        <motion.div
          whileHover={{ scale: 1.05, translateZ: 20, rotateY: -5 }}
          style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '18px 35px',
            borderRadius: '15px',
            border: '1px solid rgba(255,255,255,0.3)',
            transform: 'translateZ(15px)',
            boxShadow: '0 15px 40px rgba(0,0,0,0.3)'
          }}
        >
          <span style={{ color: '#fff', fontSize: '1.15rem', fontWeight: '500' }}>📧 contact@quickdry.com</span>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05, translateZ: 20, rotateY: 5 }}
          style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '18px 35px',
            borderRadius: '15px',
            border: '1px solid rgba(255,255,255,0.3)',
            transform: 'translateZ(15px)',
            boxShadow: '0 15px 40px rgba(0,0,0,0.3)'
          }}
        >
          <span style={{ color: '#fff', fontSize: '1.15rem', fontWeight: '500' }}>📞 +1 (555) 123-4567</span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.8, duration: 0.5 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          color: '#fff',
          fontSize: '1.2rem',
          transform: 'translateZ(10px)'
        }}
      >
        QuickDry Pro — Enterprise Laundry Management
      </motion.div>
    </div>
  )
}

export default Slide6
