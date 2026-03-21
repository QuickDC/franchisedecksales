import { motion } from 'framer-motion'

const Slide2 = () => {
  const points = [
    {
      icon: '🎯',
      title: 'Centralized Command',
      desc: 'Central control over customers, pricing, users & offers',
      color: '#E63946'
    },
    {
      icon: '👁️',
      title: 'Real-time Visibility',
      desc: 'Full visibility across all Pressto locations',
      color: '#457B9D'
    },
    {
      icon: '✨',
      title: 'Consistent Experience',
      desc: 'Brand-led customer experience everywhere',
      color: '#A8DADC'
    },
    {
      icon: '📈',
      title: 'Scalable',
      desc: 'From 10 to 1,000+ stores seamlessly',
      color: '#10b981'
    }
  ]

  return (
    <div className="slide">
      <span className="slide-number">02</span>

      <motion.h1
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Executive Summary
      </motion.h1>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Centralized command with local execution
      </motion.p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px', width: '100%', marginTop: '30px' }}>
        {points.map((point, index) => (
          <motion.div
            key={point.title}
            className="pressto-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
            style={{ borderLeft: `4px solid ${point.color}` }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                background: `${point.color}20`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.8rem',
                flexShrink: 0
              }}>
                {point.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: point.color }}>
                  {point.title}
                </h3>
                <p style={{ color: '#a0a0a0', fontSize: '0.95rem', lineHeight: '1.5' }}>
                  {point.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Visual Element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        style={{
          marginTop: '35px',
          padding: '25px',
          background: 'linear-gradient(135deg, rgba(230,57,70,0.1), rgba(168,218,220,0.1))',
          borderRadius: '16px',
          border: '1px solid rgba(230,57,70,0.2)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
          <span style={{ fontSize: '2rem' }}>🏢</span>
          <span style={{ color: '#a0a0a0', fontSize: '1.1rem' }}>HQ</span>
          <span style={{ color: '#E63946', fontSize: '1.5rem' }}>←→</span>
          <span style={{ fontSize: '2rem' }}>🏪</span>
          <span style={{ color: '#a0a0a0', fontSize: '1.1rem' }}>All Stores</span>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide2
