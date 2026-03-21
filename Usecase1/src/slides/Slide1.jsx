import { motion } from 'framer-motion'

const Slide1 = () => {
  return (
    <div className="slide" style={{
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* 3D Animated orbs */}
      <div className="orb-3d orb-3d-1" style={{ animation: 'float-slow 8s ease-in-out infinite' }} />
      <div className="orb-3d orb-3d-2" style={{ animation: 'float-slow 6s ease-in-out infinite reverse' }} />

      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: -20 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ textAlign: 'center', zIndex: 1, perspective: '1000px' }}
      >
        {/* 3D Logo with floating animation */}
        <motion.div
          initial={{ scale: 0, rotateY: 180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ delay: 0.3, duration: 1, type: "spring" }}
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px'
          }}
        >
          <div style={{
            width: '140px',
            height: '140px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '35px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 40px',
            boxShadow: `0 30px 60px rgba(102,126,234,0.5), 0 20px 40px rgba(102,126,234,0.4), 0 10px 20px rgba(102,126,234,0.3), inset 0 2px 10px rgba(255,255,255,0.2)`,
            transform: 'translateZ(30px)',
            animation: 'pulse-3d 4s ease-in-out infinite'
          }}>
            <span style={{ fontSize: '70px', transform: 'translateZ(10px)' }}>👔</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            fontSize: '5rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #fff 0%, #a5b4fc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0,
            lineHeight: 1.1,
            transform: 'translateZ(20px)',
            textShadow: '0 10px 30px rgba(102,126,234,0.3)'
          }}
        >
          QuickDry Pro
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{
            fontSize: '2rem',
            color: '#a5b4fc',
            marginTop: '20px',
            fontWeight: '300',
            transform: 'translateZ(10px)'
          }}
        >
          Enterprise Laundry Management Solution
        </motion.p>

        {/* 3D Floating badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{
            marginTop: '60px',
            display: 'flex',
            gap: '25px',
            justifyContent: 'center',
            perspective: '1000px'
          }}
        >
          {[
            { icon: '🏪', text: 'Store CRM', color: '#667eea' },
            { icon: '🏭', text: 'Plant Management', color: '#38ef7d' },
            { icon: '📱', text: 'Omni-Channel', color: '#f093fb' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 1.3 + i * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.1, translateZ: 20 }}
              style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                padding: '20px 35px',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.2)',
                transform: 'translateZ(15px)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
              <span style={{ color: item.color, fontSize: '1rem', marginLeft: '8px', fontWeight: '500' }}>{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 0.5 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          color: '#fff',
          fontSize: '1rem',
          opacity: 0.5
        }}
      >
        Press → to navigate
      </motion.p>
    </div>
  )
}

export default Slide1
