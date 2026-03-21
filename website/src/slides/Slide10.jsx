import { motion } from 'framer-motion'

const Slide10 = () => {
  const metrics = [
    { label: 'Total Revenue', value: '₹3.4Cr', change: '+12%', icon: '💰', color: '#10b981' },
    { label: 'Active Stores', value: '49', change: '+5', icon: '🏪', color: '#457B9D' },
    { label: 'Orders/Month', value: '9.1K', change: '+18%', icon: '📦', color: '#E63946' },
    { label: 'New Customers', value: '1,247', change: '+25%', icon: '👥', color: '#A8DADC' }
  ]

  const reports = [
    'Store-wise performance',
    'Customer acquisition & retention',
    'Revenue analytics',
    'Export-ready for ERP/BI'
  ]

  return (
    <div className="slide">
      <span className="slide-number">10</span>

      <motion.h1
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Reporting & Analytics
      </motion.h1>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        HQ Dashboards - Enterprise-wide visibility
      </motion.p>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginTop: '25px' }}>
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            style={{
              background: '#1f1f1f',
              borderRadius: '16px',
              padding: '25px',
              textAlign: 'center',
              border: '1px solid #333'
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{metric.icon}</div>
            <div style={{ fontSize: '2rem', fontWeight: '700', color: metric.color }}>{metric.value}</div>
            <div style={{ fontSize: '0.85rem', color: '#666', marginTop: '5px' }}>{metric.label}</div>
            <div style={{
              marginTop: '10px',
              padding: '4px 10px',
              background: `${metric.color}20`,
              borderRadius: '20px',
              fontSize: '0.75rem',
              color: metric.color,
              display: 'inline-block'
            }}>
              {metric.change}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dashboard Preview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        style={{
          marginTop: '25px',
          padding: '25px',
          background: 'linear-gradient(135deg, #1f1f1f, #141414)',
          borderRadius: '16px',
          border: '1px solid #333'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <h3 style={{ color: '#E63946', fontSize: '1.1rem' }}>📊 HQ Dashboard</h3>
          <div style={{ display: 'flex', gap: '10px' }}>
            {['Day', 'Week', 'Month', 'Year'].map((period, i) => (
              <button key={period} style={{
                padding: '6px 15px',
                background: i === 2 ? '#E63946' : 'transparent',
                border: '1px solid #333',
                borderRadius: '20px',
                color: i === 2 ? 'white' : '#666',
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}>
                {period}
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
          {/* Chart Placeholder */}
          <div style={{
            background: '#2a2a2a',
            borderRadius: '12px',
            padding: '20px',
            height: '150px',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-around'
          }}>
            {[65, 45, 80, 55, 90, 70, 85].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: 1 + i * 0.1, duration: 0.5 }}
                style={{
                  width: '30px',
                  background: 'linear-gradient(180deg, #E63946, #B82D38)',
                  borderRadius: '4px 4px 0 0'
                }}
              />
            ))}
          </div>

          {/* Report Types */}
          <div style={{
            background: '#2a2a2a',
            borderRadius: '12px',
            padding: '20px'
          }}>
            <h4 style={{ color: '#a0a0a0', fontSize: '0.9rem', marginBottom: '15px' }}>Available Reports</h4>
            {reports.map((report, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 0',
                borderBottom: '1px solid #333'
              }}>
                <span style={{ color: '#10b981' }}>✓</span>
                <span style={{ color: '#a0a0a0', fontSize: '0.85rem' }}>{report}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide10
