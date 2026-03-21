import { motion } from 'framer-motion'

const Slide15 = () => {
  const steps = [
    { icon: '🎯', title: 'Enterprise Demo', desc: 'Full platform walkthrough' },
    { icon: '🗺️', title: 'Workflow Mapping', desc: 'Custom Spain & global markets' },
    { icon: '💼', title: 'Commercial Discussion', desc: 'Pricing & rollout plan' }
  ]

  return (
    <div className="slide">
      <span className="slide-number">15</span>

      <motion.h1
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: '3rem' }}
      >
        Next Steps
      </motion.h1>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Let's begin your digital transformation journey
      </motion.p>

      {/* Steps */}
      <div style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'center', gap: '25px', marginTop: '40px', width: '100%' }}>
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.2 }}
            style={{ flex: 1, maxWidth: '300px' }}
          >
            <div style={{
              background: '#1f1f1f',
              borderRadius: '20px',
              padding: '35px 25px',
              textAlign: 'center',
              height: '100%',
              border: i === 1 ? '2px solid #E63946' : '1px solid #333',
              position: 'relative'
            }}>
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  right: '-25px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 1,
                  color: '#E63946',
                  fontSize: '1.5rem'
                }}>
                  ➜
                </div>
              )}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: i === 1 ? 'linear-gradient(135deg, #E63946, #B82D38)' : '#2a2a2a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  margin: '0 auto 20px',
                  boxShadow: i === 1 ? '0 0 30px rgba(230,57,70,0.4)' : 'none'
                }}
              >
                {step.icon}
              </motion.div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#fff' }}>{step.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{
          marginTop: '50px',
          padding: '30px 50px',
          background: 'linear-gradient(135deg, #E63946, #B82D38)',
          borderRadius: '20px',
          display: 'inline-block'
        }}
      >
        <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '15px' }}>Ready to Get Started?</h2>
        <div style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '1.2rem' }}>📧</span>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>sales@quickdrycleaning.com</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '1.2rem' }}>📞</span>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>+91 98765 43210</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '1.2rem' }}>🌐</span>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>www.pressto.com</p>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        style={{ marginTop: '30px', color: '#666', fontSize: '0.85rem' }}
      >
        Thank you for your time
      </motion.p>
    </div>
  )
}

export default Slide15
