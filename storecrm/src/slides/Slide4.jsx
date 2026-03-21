import { motion } from 'framer-motion'

const Slide4 = () => {
  return (
    <div className="slide" style={{ background: '#ffffff', padding: '40px 50px' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '25px' }}
      >
        <div style={{ background: '#4fc3f7', padding: '12px 30px', borderRadius: '8px', display: 'inline-block' }}>
          <h2 style={{ color: '#fff', fontSize: '1.6rem', fontWeight: '700', margin: 0 }}>QDC Store</h2>
        </div>
        <p style={{ color: '#666', fontSize: '1rem', marginTop: '12px', fontWeight: '500' }}>
          In-store POS, Billing & Inventory
        </p>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', maxWidth: '850px', margin: '0 auto' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* Point of Sale */}
        <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', border: '1px solid #e0e0e0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <div style={{ width: '45px', height: '45px', background: '#4fc3f7', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>💳</div>
            <div>
              <div style={{ fontWeight: '700', fontSize: '1rem', color: '#1a1a1a' }}>Point of Sale</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>In-store billing</div>
            </div>
          </div>
          <ul style={{ fontSize: '0.85rem', color: '#444', paddingLeft: '18px', margin: 0, lineHeight: '1.7' }}>
            <li>Walk-in customer orders</li>
            <li>Instant invoice generation</li>
            <li>Multiple payment modes</li>
            <li>Receipt printing</li>
          </ul>
        </div>

        {/* Inventory Management */}
        <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', border: '1px solid #e0e0e0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <div style={{ width: '45px', height: '45px', background: '#25D366', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>📦</div>
            <div>
              <div style={{ fontWeight: '700', fontSize: '1rem', color: '#1a1a1a' }}>Inventory Management</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>Stock control</div>
            </div>
          </div>
          <ul style={{ fontSize: '0.85rem', color: '#444', paddingLeft: '18px', margin: 0, lineHeight: '1.7' }}>
            <li>Raw material tracking</li>
            <li>Low stock alerts</li>
            <li>Supplier management</li>
            <li>Usage analytics</li>
          </ul>
        </div>

        {/* Customer Database */}
        <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', border: '1px solid #e0e0e0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <div style={{ width: '45px', height: '45px', background: '#ff9800', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>👥</div>
            <div>
              <div style={{ fontWeight: '700', fontSize: '1rem', color: '#1a1a1a' }}>Customer Database</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>CRM</div>
            </div>
          </div>
          <ul style={{ fontSize: '0.85rem', color: '#444', paddingLeft: '18px', margin: 0, lineHeight: '1.7' }}>
            <li>Customer profiles</li>
            <li>Order history</li>
            <li>Loyalty points</li>
            <li>Communication log</li>
          </ul>
        </div>

        {/* Financial Reports */}
        <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '12px', border: '1px solid #e0e0e0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
            <div style={{ width: '45px', height: '45px', background: '#f44336', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>💰</div>
            <div>
              <div style={{ fontWeight: '700', fontSize: '1rem', color: '#1a1a1a' }}>Financial Reports</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>Accounting</div>
            </div>
          </div>
          <ul style={{ fontSize: '0.85rem', color: '#444', paddingLeft: '18px', margin: 0, lineHeight: '1.7' }}>
            <li>Daily sales report</li>
            <li>Expense tracking</li>
            <li>Profit analysis</li>
            <li>Tax compliance</li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide4