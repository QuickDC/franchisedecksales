import { motion } from 'framer-motion'

const PresstoLogo = () => {
  const logoSrc = '/Presstologo.png'

  return (
    <motion.div
      className="pressto-logo-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <img
        src={logoSrc}
        alt="Pressto Logo"
        className="pressto-logo"
      />
    </motion.div>
  )
}

export default PresstoLogo