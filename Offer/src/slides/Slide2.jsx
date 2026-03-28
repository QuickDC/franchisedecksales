import { motion } from 'framer-motion'

const Slide2 = () => {
  const tiers = [
    {
      number: '1',
      title: 'Automate Your Store',
      description: 'For those ready to move from manual operations to smarter business control',
    },
    {
      number: '2',
      title: 'Automate + Accelerate Growth',
      description: 'For those ready to go beyond the counter and build stronger customer convenience and business expansion',
    },
    {
      number: '3',
      title: 'Compete Like a Brand',
      description: 'For those ready to build a modern, premium-looking business that stands out in the market',
    },
  ]

  return (
    <div className="slide" style={{ alignItems: 'flex-start' }}>
      <motion.h2
        className="slide-title"
        style={{ fontSize: '2.4rem', marginBottom: '50px', textAlign: 'left' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Three Levels of Growth
      </motion.h2>

      <motion.p
        className="slide-subtitle"
        style={{ textAlign: 'left', marginBottom: '40px', fontSize: '1.3rem' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Choose the future you want to build
      </motion.p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '900px' }}>
        {tiers.map((tier, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '25px',
              padding: '25px 30px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: '#4fc3f7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#0a1628',
              flexShrink: 0,
            }}>
              {tier.number}
            </div>
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '600', marginBottom: '8px', color: '#ffffff' }}>
                Tier {tier.number} — {tier.title}
              </h3>
              <p style={{ fontSize: '1.1rem', color: '#a0aec0', lineHeight: '1.5' }}>
                {tier.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        style={{ marginTop: '40px', fontSize: '1.3rem', color: '#4fc3f7', textAlign: 'left', fontStyle: 'italic' }}
      >
        This is not just pricing. This is a choice about the kind of business you want to become.
      </motion.p>
    </div>
  )
}

export default Slide2
