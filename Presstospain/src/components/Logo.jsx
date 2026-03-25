import { motion } from 'framer-motion'

const Logo = () => {
  const logoSrc = '/QDCwhitelogo.png'

  return (
    <motion.div
      className="logo-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <img
        src={logoSrc}
        alt="QDC Logo"
        className="company-logo"
      />
    </motion.div>
  )
}

export default Logo