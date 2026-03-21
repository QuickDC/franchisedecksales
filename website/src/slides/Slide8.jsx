import { motion } from 'framer-motion'

const Slide8 = () => {
  const steps = [
    { icon: '⚡', title: 'Fast Billing', desc: 'Quick order creation', status: 'done' },
    { icon: '🏷️', title: 'Barcode/QR', desc: 'Garment tracking', status: 'done' },
    { icon: '📊', title: 'Real-time Status', desc: 'Live updates', status: 'done' },
    { icon: '📍', title: 'Order Flow', desc: 'Across all stores', status: 'done' },
    { icon: '⏱️', title: 'SLA Tracking', desc: 'Turnaround time', status: 'done' }
  ]

  return (
    <div className="slide">
      <span className="slide-number">08</span>

      <motion.h1
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Order Management & Store Operations
      </motion.h1>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        End-to-end order lifecycle with real-time tracking
      </motion.p>

      {/* Process Flow */}
      <div style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'center', gap: '10px', marginTop: '30px' }}>
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.15 }}
            style={{ flex: 1, maxWidth: '180px' }}
          >
            <div style={{
              background: '#1f1f1f',
              borderRadius: '16px',
              padding: '25px 20px',
              textAlign: 'center',
              height: '100%',
              border: '1px solid #333',
              position: 'relative'
            }}>
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  right: '-15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 1,
                  color: '#E63946',
                  fontSize: '1.2rem'
                }}>
                  ➜
                </div>
              )}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #E63946, #B82D38)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                  margin: '0 auto 15px'
                }}
              >
                {step.icon}
              </motion.div>
              <h4 style={{ fontSize: '1rem', marginBottom: '8px', color: '#fff' }}>{step.title}</h4>
              <p style={{ fontSize: '0.8rem', color: '#666' }}>{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Order Tracking Visual */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{
          marginTop: '30px',
          padding: '25px',
          background: 'linear-gradient(135deg, #1f1f1f, #141414)',
          borderRadius: '16px',
          border: '1px solid #333'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {[
            { label: 'Received', time: '10:30 AM', status: 'complete' },
            { label: 'Processing', time: '11:15 AM', status: 'active' },
            { label: 'Quality Check', time: '--:--', status: 'pending' },
            { label: 'Ready', time: '--:--', status: 'pending' },
            { label: 'Delivered', time: '--:--', status: 'pending' }
          ].map((step, i) => (
            <div key={step.label} style={{ textAlign: 'center', flex: 1 }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: step.status === 'complete' ? '#10b981' : step.status === 'active' ? '#E63946' : '#333',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 10px',
                fontSize: '1rem'
              }}>
                {step.status === 'complete' ? '✓' : step.status === 'active' ? '⏳' : '○'}
              </div>
              <p style={{ fontSize: '0.85rem', color: step.status !== 'pending' ? '#fff' : '#666' }}>{step.label}</p>
              <p style={{ fontSize: '0.7rem', color: '#666' }}>{step.time}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Slide8
