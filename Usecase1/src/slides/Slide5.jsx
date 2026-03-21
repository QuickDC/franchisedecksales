import { motion } from 'framer-motion'

const Slide5 = () => {
  const benefits = [
    {
      icon: '⚡',
      title: 'Faster Operations',
      desc: 'Automated workflows reduce manual effort by 60%',
      color: '#38ef7d'
    },
    {
      icon: '📈',
      title: 'Growth Ready',
      desc: 'Scale from 1 to 100+ stores seamlessly',
      color: '#667eea'
    },
    {
      icon: '💰',
      title: 'Cost Efficient',
      desc: 'Single platform replaces multiple disconnected tools',
      color: '#f093fb'
    },
    {
      icon: '🎯',
      title: 'Customer Focus',
      desc: 'Omni-channel experience boosts retention by 40%',
      color: '#fbbf24'
    },
    {
      icon: '🔗',
      title: 'Full Visibility',
      desc: 'Real-time tracking from order to delivery',
      color: '#f5576c'
    },
    {
      icon: '🛡️',
      title: 'Enterprise Grade',
      desc: 'Secure, reliable, and compliance ready',
      color: '#0ea5e9'
    }
  ]

  return (
    <div className="slide perspective-container" style={{
      background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
      padding: '40px 50px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* 3D orbs */}
      <div className="orb-3d orb-3d-1" style={{ animationDelay: '-2s' }} />
      <div className="orb-3d orb-3d-2" style={{ animationDelay: '-5s' }} />

      <motion.h2
        initial={{ opacity: 0, y: -20, rotateX: -10 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: '2.8rem',
          fontWeight: '700',
          color: '#fff',
          marginBottom: '10px',
          textAlign: 'center',
          transform: 'translateZ(30px)'
        }}
      >
        Why QuickDry Pro?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{
          fontSize: '1.3rem',
          color: '#a5b4fc',
          textAlign: 'center',
          marginBottom: '35px',
          transform: 'translateZ(20px)'
        }}
      >
        Enterprise Value Delivered
      </motion.p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        flex: 1,
        perspective: '1000px'
      }}>
        {benefits.map((benefit, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              translateZ: 30,
              rotateX: 5,
              rotateY: 5
            }}
            style={{
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '20px',
              padding: '25px 18px',
              textAlign: 'center',
              border: '1px solid rgba(255,255,255,0.1)',
              position: 'relative',
              overflow: 'hidden',
              transform: 'translateZ(15px)',
              boxShadow: '0 15px 40px rgba(0,0,0,0.3)'
            }}
          >
            {/* Top colored bar */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: benefit.color
            }} />

            <motion.div
              style={{
                fontSize: '2.8rem',
                marginBottom: '12px',
                transform: 'translateZ(10px)'
              }}
            >
              {benefit.icon}
            </motion.div>

            <h3 style={{
              color: '#fff',
              fontSize: '1.25rem',
              fontWeight: '600',
              marginBottom: '8px',
              transform: 'translateZ(10px)'
            }}>
              {benefit.title}
            </h3>

            <p style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '0.9rem',
              lineHeight: 1.5,
              transform: 'translateZ(5px)'
            }}>
              {benefit.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        style={{
          marginTop: '25px',
          textAlign: 'center',
          padding: '22px',
          background: 'linear-gradient(135deg, rgba(102,126,234,0.2) 0%, rgba(118,75,162,0.2) 100%)',
          borderRadius: '15px',
          border: '1px solid rgba(102,126,234,0.3)',
          transform: 'translateZ(25px)',
          boxShadow: '0 20px 50px rgba(102,126,234,0.2)'
        }}
      >
        <p style={{ color: '#fff', fontSize: '1.35rem', margin: 0, fontWeight: '500' }}>
          Trusted by 200+ laundry businesses worldwide
        </p>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', marginTop: '10px' }}>
          Join the industry leaders transforming their operations
        </p>
      </motion.div>
    </div>
  )
}

export default Slide5
