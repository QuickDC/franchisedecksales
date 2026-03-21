import { motion } from 'framer-motion'

const Slide1 = () => {
  return (
    <div className="slide" style={{ background: '#ffffff', padding: '40px 50px' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '30px' }}
      >
        <div style={{ background: '#4fc3f7', padding: '15px 40px', borderRadius: '8px', display: 'inline-block' }}>
          <h1 style={{ color: '#fff', fontSize: '2rem', fontWeight: '700', margin: 0 }}>QDC Software Suite</h1>
        </div>
        <p style={{ color: '#666', fontSize: '1.1rem', marginTop: '15px', fontWeight: '500' }}>
          Complete Laundry & Dry Cleaning Management Solution
        </p>
      </motion.div>

      {/* 6 Modules Grid */}
      <motion.div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          maxWidth: '950px',
          margin: '0 auto'
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {/* Module 1: Store */}
        <div style={{ background: '#f8f9fa', borderRadius: '12px', padding: '20px', border: '1px solid #e0e0e0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ fontSize: '2.2rem' }}>🏪</div>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1a1a1a' }}>QDC Store</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>In-store POS, Billing & Inventory</div>
            </div>
          </div>
          <ul style={{ fontSize: '0.8rem', color: '#444', paddingLeft: '18px', margin: 0, lineHeight: '1.6' }}>
            <li>Point of Sale</li>
            <li>Billing & Invoicing</li>
            <li>Inventory Management</li>
            <li>Customer Database</li>
          </ul>
        </div>

        {/* Module 2: Home Pickup & Delivery */}
        <div style={{ background: '#f8f9fa', borderRadius: '12px', padding: '20px', border: '1px solid #e0e0e0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ fontSize: '2.2rem' }}>🏠</div>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1a1a1a' }}>QDC Home Pickup & Delivery</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>Pickup & Delivery Management</div>
            </div>
          </div>
          <ul style={{ fontSize: '0.8rem', color: '#444', paddingLeft: '18px', margin: 0, lineHeight: '1.6' }}>
            <li>Online Booking</li>
            <li>Slot Scheduling</li>
            <li>Route Optimization</li>
            <li>Delivery Tracking</li>
          </ul>
        </div>

        {/* Module 3: Workshop */}
        <div style={{ background: '#f8f9fa', borderRadius: '12px', padding: '20px', border: '1px solid #e0e0e0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ fontSize: '2.2rem' }}>🏭</div>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1a1a1a' }}>QDC Workshop</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>Production Management</div>
            </div>
          </div>
          <ul style={{ fontSize: '0.8rem', color: '#444', paddingLeft: '18px', margin: 0, lineHeight: '1.6' }}>
            <li>Work Orders</li>
            <li>Process Tracking</li>
            <li>Quality Control</li>
            <li>Production Reports</li>
          </ul>
        </div>

        {/* Module 4: On-Demand App */}
        <div style={{ background: '#f8f9fa', borderRadius: '12px', padding: '20px', border: '1px solid #e0e0e0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ fontSize: '2.2rem' }}>📱</div>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1a1a1a' }}>QDC On-Demand App</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>Customer App for iOS & Android</div>
            </div>
          </div>
          <ul style={{ fontSize: '0.8rem', color: '#444', paddingLeft: '18px', margin: 0, lineHeight: '1.6' }}>
            <li>Easy Booking</li>
            <li>Order Tracking</li>
            <li>Payment Gateway</li>
            <li>Push Notifications</li>
          </ul>
        </div>

        {/* Module 5: Delivery Agent App */}
        <div style={{ background: '#f8f9fa', borderRadius: '12px', padding: '20px', border: '1px solid #e0e0e0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ fontSize: '2.2rem' }}>🚴</div>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1a1a1a' }}>QDC Delivery Agent App</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>Delivery Management</div>
            </div>
          </div>
          <ul style={{ fontSize: '0.8rem', color: '#444', paddingLeft: '18px', margin: 0, lineHeight: '1.6' }}>
            <li>Order Acceptance</li>
            <li>Navigation</li>
            <li>Proof of Delivery</li>
            <li>Earnings Tracking</li>
          </ul>
        </div>

        {/* Module 6: Super Admin */}
        <div style={{ background: '#f8f9fa', borderRadius: '12px', padding: '20px', border: '1px solid #e0e0e0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{ fontSize: '2.2rem' }}>👑</div>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1a1a1a' }}>QDC Super Admin</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>Admin Dashboard</div>
            </div>
          </div>
          <ul style={{ fontSize: '0.8rem', color: '#444', paddingLeft: '18px', margin: 0, lineHeight: '1.6' }}>
            <li>Multi-Store Control</li>
            <li>Analytics & Reports</li>
            <li>User Management</li>
            <li>Settings & Config</li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
}

export default Slide1