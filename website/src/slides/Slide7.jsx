import { motion } from 'framer-motion'

const Slide7 = () => {
  const roles = [
    { name: 'Enterprise Admin', icon: '🏢', color: '#E63946', access: 'Full Control' },
    { name: 'Regional Admin', icon: '🌍', color: '#457B9D', access: 'Region Level' },
    { name: 'Store Owner', icon: '🏪', color: '#10b981', access: 'Store Level' },
    { name: 'Cashier', icon: '💰', color: '#f59e0b', access: 'Limited' }
  ]

  const permissions = [
    { allowed: '✓', feature: 'View Orders', color: '#10b981' },
    { allowed: '✓', feature: 'Create Orders', color: '#10b981' },
    { allowed: '✗', feature: 'Edit Pricing', color: '#ef4444' },
    { allowed: '✗', feature: 'Apply Discounts >10%', color: '#ef4444' },
    { allowed: '✗', feature: 'Process Refunds', color: '#ef4444' },
    { allowed: '✓', feature: 'View Reports', color: '#10b981' }
  ]

  return (
    <div className="slide">
      <span className="slide-number">07</span>

      <motion.h1
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        User Management & Permissions
      </motion.h1>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Enterprise Role Structure with Granular Access Control
      </motion.p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '25px', width: '100%' }}>

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h3 style={{ color: '#E63946', marginBottom: '15px', fontSize: '1.1rem' }}>Role Hierarchy</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {roles.map((role, i) => (
              <motion.div
                key={role.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  padding: '15px 20px',
                  background: '#1f1f1f',
                  borderRadius: '12px',
                  borderLeft: `4px solid ${role.color}`
                }}
              >
                <span style={{ fontSize: '1.8rem' }}>{role.icon}</span>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1rem', color: '#fff' }}>{role.name}</h4>
                  <p style={{ fontSize: '0.8rem', color: '#666' }}>{role.access}</p>
                </div>
                <div style={{
                  padding: '4px 10px',
                  background: `${role.color}20`,
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  color: role.color
                }}>
                  Level {i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Permissions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h3 style={{ color: '#E63946', marginBottom: '15px', fontSize: '1.1rem' }}>Access Control Example</h3>
          <div style={{
            background: '#1f1f1f',
            borderRadius: '12px',
            padding: '20px',
            border: '1px solid #333'
          }}>
            <table style={{ width: '100%', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #333' }}>
                  <th style={{ textAlign: 'left', padding: '10px', color: '#666' }}>Feature</th>
                  <th style={{ textAlign: 'center', padding: '10px', color: '#666' }}>Store Owner</th>
                  <th style={{ textAlign: 'center', padding: '10px', color: '#666' }}>Cashier</th>
                </tr>
              </thead>
              <tbody>
                {permissions.map((perm, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #2a2a2a' }}>
                    <td style={{ padding: '12px 10px', color: '#a0a0a0' }}>{perm.feature}</td>
                    <td style={{ textAlign: 'center', padding: '12px', color: perm.color, fontWeight: '600' }}>
                      {perm.allowed}
                    </td>
                    <td style={{ textAlign: 'center', padding: '12px', color: i < 2 ? '#10b981' : '#ef4444', fontWeight: '600' }}>
                      {i < 2 ? '✓' : '✗'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{
            marginTop: '15px',
            padding: '12px',
            background: 'rgba(230,57,70,0.1)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{ fontSize: '1.2rem' }}>🛡️</span>
            <span style={{ color: '#a0a0a0', fontSize: '0.85rem' }}>Audit logs for compliance & accountability</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Slide7
