import { motion } from 'framer-motion'

const Slide6 = () => {
  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        The 5 <span className="highlight">Operational Layers</span>
      </motion.h2>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Everything You Need to Scale — Structured
      </motion.p>

      <div className="layers-grid">
        {[
          { num: '5', name: 'HQ Control', desc: 'Central oversight & analytics' },
          { num: '4', name: 'Growth Engine', desc: 'Marketing & retention' },
          { num: '3', name: 'Customer Experience', desc: 'App, notifications & payments' },
          { num: '2', name: 'Plant Operations', desc: 'Processing & QC' },
          { num: '1', name: 'Store Operations', desc: 'POS & garment tracking' },
        ].map((layer, index) => (
          <motion.div
            key={index}
            className="layer-card"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
          >
            <span className="layer-num">{layer.num}</span>
            <div className="layer-info">
              <h3>{layer.name}</h3>
              <p>{layer.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Slide6
