import { motion } from 'framer-motion'

const Slide1New = () => {
  const layers = [
    { num: '5', name: 'HQ Control', desc: 'Dashboard, Analytics, Royalty & Brand Management', color: '#ef4444' },
    { num: '4', name: 'Growth Engine', desc: 'Customer Acquisition & Retention', color: '#a855f7' },
    { num: '3', name: 'Store Operations', desc: 'POS, Billing, Tracking & Customer Management', color: '#00d4ff' },
    { num: '2', name: 'Plant Operations', desc: 'Processing, QC & Garment Management', color: '#ec4899' },
    { num: '1', name: 'Delivery Network', desc: 'Riders, Pickup & Delivery', color: '#22c55e' },
  ]

  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        QDC OS - <span className="highlight">Platform Architecture</span>
      </motion.h2>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Complete Operating System for Franchise Laundry Chains
      </motion.p>

      {/* HQ Quick View */}
      <motion.div
        className="hq-mini-panel"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="hq-stat">
          <span className="hq-stat-value">$2.4M</span>
          <span className="hq-stat-label">Revenue</span>
        </div>
        <div className="hq-stat">
          <span className="hq-stat-value">1,847</span>
          <span className="hq-stat-label">Orders</span>
        </div>
        <div className="hq-stat">
          <span className="hq-stat-value">12.5K</span>
          <span className="hq-stat-label">Customers</span>
        </div>
        <div className="hq-stat">
          <span className="hq-stat-value">92%</span>
          <span className="hq-stat-label">Retention</span>
        </div>
      </motion.div>

      {/* Layer List - Referenced from Slide 6 */}
      <div className="layers-grid">
        {layers.map((layer, index) => (
          <motion.div
            key={index}
            className="layer-card"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            style={{ borderLeftColor: layer.color }}
          >
            <span className="layer-num" style={{ color: layer.color }}>{layer.num}</span>
            <div className="layer-info">
              <h3 style={{ color: layer.color }}>{layer.name}</h3>
              <p>{layer.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Flow Indicators */}
      <motion.div
        className="flow-indicators"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flow-row">
          <span className="flow-label">Channels:</span>
          <span className="flow-icons">🌐 📱 💬 📞 🚶</span>
          <span className="flow-to">→</span>
          <span className="flow-target">Stores</span>
        </div>
        <div className="flow-row">
          <span className="flow-label">Orders:</span>
          <span className="flow-target">Store</span>
          <span className="flow-to">→</span>
          <span className="flow-target">Plant</span>
          <span className="flow-to">↔</span>
          <span className="flow-target">Store</span>
          <span className="flow-to">→</span>
          <span className="flow-target">Rider</span>
          <span className="flow-to">→</span>
          <span className="flow-target">Customer</span>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide1New
