import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Slide4 = () => {
  const [revealed, setRevealed] = useState(false)

  const includes = [
    'Everything in Tier 1',
    'Full Home Pickup & Delivery module',
    'Better customer convenience',
    'Stronger retention opportunity',
    'New growth potential beyond the store counter',
    'A more scalable operating model',
  ]

  return (
    <div className="slide" style={{ alignItems: 'flex-start' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '30px' }}
      >
        {/* <span style={{ fontSize: '1rem', color: '#4fc3f7', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Tier 2 Offer
        </span> */}
        <h2 className="slide-title" style={{ fontSize: '2.2rem', textAlign: 'left', marginTop: '10px' }}>
          Add Home Pickup & Delivery to Your Growth Engine
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{ marginBottom: '30px' }}
      >
        <p style={{ fontSize: '1.2rem', color: '#a0aec0', textAlign: 'left', marginBottom: '20px' }}>
          This includes:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {includes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
              style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
            >
              <span style={{ color: '#4fc3f7', fontSize: '1.2rem' }}>✓</span>
              <span style={{ fontSize: '1.1rem', color: '#e0e0e0' }}>{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {!revealed ? (
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          onClick={() => setRevealed(true)}
          style={{
            background: 'linear-gradient(135deg, #4fc3f7 0%, #29b6f6 100%)',
            border: 'none',
            borderRadius: '12px',
            padding: '20px 50px',
            fontSize: '1.3rem',
            fontWeight: '600',
            color: '#0a1628',
            cursor: 'pointer',
            marginTop: '20px',
            boxShadow: '0 4px 20px rgba(79, 195, 247, 0.4)',
          }}
        >
          I am desperate to grow my business
        </motion.button>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                padding: '30px 40px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                width: '100%',
                maxWidth: '600px',
                marginTop: '20px',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: '0.9rem', color: '#a0aec0', textTransform: 'uppercase', letterSpacing: '1px' }}>Regular Price</p>
                  <p style={{ fontSize: '1.6rem', color: '#e0e0e0', textDecoration: 'line-through' }}>₹70,000</p>
                </div>
                <div>
                  <p style={{ fontSize: '0.9rem', color: '#4fc3f7', textTransform: 'uppercase', letterSpacing: '1px' }}>Laundry Launchpad Special Price</p>
                  <p style={{ fontSize: '2rem', fontWeight: '700', color: '#4fc3f7' }}>₹49,999</p>
                </div>
              </div>
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '20px' }}>
                <p style={{ fontSize: '1.1rem', color: '#4caf50' }}>Your Benefit: Save ₹20,001 <strong>(28.57% OFF)</strong></p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              style={{ marginTop: '30px', fontSize: '1.1rem', color: '#4fc3f7', fontStyle: 'italic', textAlign: 'left' }}
            >
              This is for the owner who is not satisfied with just running the business smoothly — but wants to grow it aggressively.
            </motion.p>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}

export default Slide4
