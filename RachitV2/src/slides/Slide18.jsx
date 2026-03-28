import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'

const Slide18 = () => {
  const shopkeeperItems = [
    'Walk-in ka wait karta hai',
    'Phone aur memory par dependent rehta hai',
    'Customer ko adjust karne bolta hai',
    'Roz ki activity mein atka rehta hai',
    'Business uske bina weak padta hai'
  ]

  const businessmanItems = [
    'Customer demand build karta hai',
    'Systems aur process se kaam chalata hai',
    'Customer convenience design karta hai',
    'Team ko structure deta hai',
    'Business ko scalable banata hai'
  ]

  return (
    <div className="slide" style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #0a1628 0%, #0f2847 50%, #0a1628 100%)',
      padding: '40px 50px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      {/* Logo */}
      <motion.img
        src={logoImg}
        alt="QDC Logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{
          position: 'absolute',
          top: 30,
          right: 30,
          height: 35,
          objectFit: 'contain'
        }}
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          color: '#ffffff',
          textAlign: 'left',
          marginBottom: 30
        }}
      >
        Aap <span style={{ color: '#fbbf24' }}>shopkeeper</span> ho… ya <span style={{ color: '#34d399' }}>businessman</span>?
      </motion.h1>

      {/* Two column layout */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 60, flex: 1, alignItems: 'center' }}>

        {/* Left side - Shopkeeper */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            width: 400,
            background: 'linear-gradient(135deg, rgba(251,191,36,0.15) 0%, rgba(251,191,36,0.05) 100%)',
            borderRadius: 16,
            border: '1px solid rgba(251,191,36,0.3)',
            padding: '30px 35px'
          }}
        >
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: 700,
            color: '#fbbf24',
            marginBottom: 25,
            textAlign: 'left'
          }}>
            Shopkeeper
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
            {shopkeeperItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                style={{
                  fontSize: '1.1rem',
                  color: '#e2e8f0',
                  marginBottom: 16,
                  paddingLeft: 20,
                  position: 'relative',
                  lineHeight: 1.4
                }}
              >
                <span style={{
                  position: 'absolute',
                  left: 0,
                  top: 8,
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#fbbf24'
                }} />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right side - Businessman */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            width: 400,
            background: 'linear-gradient(135deg, rgba(52,211,153,0.15) 0%, rgba(52,211,153,0.05) 100%)',
            borderRadius: 16,
            border: '1px solid rgba(52,211,153,0.3)',
            padding: '30px 35px'
          }}
        >
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: 700,
            color: '#34d399',
            marginBottom: 25,
            textAlign: 'left'
          }}>
            Businessman
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
            {businessmanItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                style={{
                  fontSize: '1.1rem',
                  color: '#e2e8f0',
                  marginBottom: 16,
                  paddingLeft: 20,
                  position: 'relative',
                  lineHeight: 1.4
                }}
              >
                <span style={{
                  position: 'absolute',
                  left: 0,
                  top: 8,
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#34d399'
                }} />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Bottom punch line */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        style={{
          textAlign: 'left',
          marginTop: 20,
          padding: '20px 40px',
          background: 'linear-gradient(90deg, rgba(255,255,255,0.05), transparent)'
        }}
      >
        <p style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          color: '#ffffff',
          margin: 0
        }}>
          <span style={{ color: '#fbbf24' }}>Shopkeeper</span> dukaan chalata hai.{' '}
          <span style={{ color: '#34d399' }}>Businessman</span> system chalata hai.
        </p>
      </motion.div>
    </div>
  )
}

export default Slide18
