import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// ========================================
// SLIDE 1 - HERO
// ========================================
const Hero = () => {
  return (
    <section className="slide-section bg-gradient grid-bg">
      <div className="slide-content content-center">
        <motion.p
          className="label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Jodhpur | 28 March 2026
        </motion.p>
        <motion.h1
          className="headline headline-lg mt-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          The Future of Dry Cleaning & Laundry Business in 2026
        </motion.h1>
        <motion.p
          className="subheadline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          How modern drycleaners can attract more customers, increase repeat business, and scale with control
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          style={{ marginTop: '60px', color: 'var(--text-muted)', fontSize: '0.9rem' }}
        >
          Use arrow keys or scroll to navigate
        </motion.div>
      </div>
    </section>
  )
}

// ========================================
// SLIDE 2 - PROBLEM
// ========================================
const Problem = () => {
  const problems = [
    { icon: '👔', title: 'Customer expectations are rising' },
    { icon: '🥇', title: 'Competition is increasing' },
    { icon: '📝', title: 'Manual operations break with growth' },
    { icon: '🔁', title: 'Repeat business is harder than it looks' },
    { icon: '📋', title: 'Most stores still run without systems' }
  ]

  return (
    <section className="slide-section bg-dark">
      <div className="slide-content content-center">
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Challenge
        </motion.p>
        <motion.h2
          className="headline headline-md mt-sm"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Running a drycleaning business is getting harder
        </motion.h2>
        <div className="grid-2 mt-xl">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              className="point-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <span className="point-block-icon">{item.icon}</span>
              <span className="point-block-title">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ========================================
// SLIDE 3 - MARKET SHIFT
// ========================================
const MarketShift = () => {
  const shifts = [
    { icon: '🔎', title: 'Customers discover businesses online' },
    { icon: '🛵', title: 'They expect pickup and delivery' },
    { icon: '📲', title: 'They want order updates' },
    { icon: '📱', title: 'They prefer digital payments' },
    { icon: '⚡', title: 'They reward consistency and speed' }
  ]

  return (
    <section className="slide-section bg-card grid-bg">
      <div className="slide-content content-center">
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Shift
        </motion.p>
        <motion.h2
          className="headline headline-md mt-sm"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Customer behavior has changed
        </motion.h2>
        <div className="flow-horizontal mt-xl">
          {shifts.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="flow-step"
            >
              <div className="flow-box">{item.icon}</div>
              <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '140px', lineHeight: '1.4' }}>{item.title}</span>
              {index < shifts.length - 1 && <span className="flow-arrow">→</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ========================================
// SLIDE 4 - REALITY CHECK
// ========================================
const RealityCheck = () => {
  return (
    <section className="slide-section bg-dark">
      <div className="slide-content content-center">
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Reality
        </motion.p>
        <motion.h2
          className="headline headline-md mt-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Walk-ins are no longer a growth strategy
        </motion.h2>
        <div className="contrast-block">
          <motion.div
            className="contrast-side old"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="contrast-title">
              <span>🏪</span> Old Model
            </h3>
            <ul className="bullet-list">
              <li>Walk-ins</li>
              <li>Referrals</li>
              <li>Manual booking</li>
              <li>No structured follow-up</li>
            </ul>
          </motion.div>
          <motion.div
            className="contrast-side new"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="contrast-title">
              <span>🚀</span> New Model
            </h3>
            <ul className="bullet-list">
              <li>Discovery online</li>
              <li>Convenience-led service</li>
              <li>Digital communication</li>
              <li>Repeat revenue systems</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ========================================
// SLIDE 5 - OPPORTUNITY FRAMEWORK
// ========================================
const Opportunity = () => {
  const pillars = [
    { icon: '🧲', title: 'Acquire customers better' },
    { icon: '⚡', title: 'Serve customers faster' },
    { icon: '💎', title: 'Retain customers longer' },
    { icon: '💳', title: 'Collect payments smarter' },
    { icon: '📈', title: 'Scale with control' }
  ]

  return (
    <section className="slide-section bg-gradient">
      <div className="slide-content content-center">
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Opportunity
        </motion.p>
        <motion.h2
          className="headline headline-md mt-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The winners will not always be cheaper — they will be more convenient
        </motion.h2>
        <div className="grid-5 mt-xl">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="card-icon">{pillar.icon}</div>
              <h3 className="card-title">{pillar.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ========================================
// SLIDE 6 - CUSTOMER ACQUISITION
// ========================================
const CustomerAcquisition = () => {
  const channels = [
    { icon: '🔎', title: 'Google visibility' },
    { icon: '⭐', title: 'Ratings & reviews' },
    { icon: '📘', title: 'Meta promotions' },
    { icon: '💬', title: 'WhatsApp enquiry' },
    { icon: '📢', title: 'Campaign-led acquisition' },
    { icon: '📞', title: 'Follow-up discipline' }
  ]

  return (
    <section className="slide-section bg-dark">
      <div className="slide-content content-center">
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Growth Engine 1
        </motion.p>
        <motion.h2
          className="headline headline-md mt-sm"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          More customers do not come by chance. They come by system.
        </motion.h2>
        <div className="grid-3 mt-xl">
          {channels.map((channel, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="card-icon">{channel.icon}</div>
              <h3 className="card-title">{channel.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ========================================
// SLIDE 7 - DISCOVERY & TRUST
// ========================================
const DiscoveryTrust = () => {
  return (
    <section className="slide-section bg-card">
      <div className="slide-content content-center">
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Visibility
        </motion.p>
        <motion.h2
          className="headline headline-md mt-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Your next customer may discover you before they ever visit you
        </motion.h2>
        <div className="grid-4 mt-xl" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { icon: '🔎', title: 'Google search matters', text: 'Be found when it matters' },
            { icon: '⭐', title: 'Reviews build trust', text: 'Social proof converts' },
            { icon: '📱', title: 'Social proof improves', text: 'Conversion gets easier' },
            { icon: '⚡', title: 'Fast response wins', text: 'Leads don\'t wait' }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="point-block"
              style={{ flexDirection: 'column', borderLeft: 'none', borderTop: '3px solid var(--accent)', borderRadius: '0 0 12px 12px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <span style={{ fontSize: '2rem' }}>{item.icon}</span>
              <span className="point-block-title mt-sm">{item.title}</span>
              <span className="point-block-text">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ========================================
// SLIDE 8 - PICKUP & DELIVERY
// ========================================
const PickupDelivery = () => {
  return (
    <section className="slide-section bg-dark">
      <div className="slide-content content-center">
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Growth Engine 2
        </motion.p>
        <motion.h2
          className="headline headline-md mt-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Convenience is now part of the service
        </motion.h2>
        <motion.div
          className="flow-horizontal mt-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {[
            { icon: '👤', label: 'Customer' },
            { icon: '🏪', label: 'Store' },
            { icon: '🏍️', label: 'Pickup' },
            { icon: '🏭', label: 'Processing' },
            { icon: '🏍️', label: 'Delivery' },
            { icon: '👤', label: 'Customer' }
          ].map((step, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '100px', height: '80px', background: 'var(--bg-card)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem' }}>{step.icon}</div>
                <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>{step.label}</span>
              </div>
              {index < 5 && <span style={{ fontSize: '2rem', color: 'var(--accent)' }}>→</span>}
            </div>
          ))}
        </motion.div>
        <motion.p
          className="subheadline mt-xl"
          style={{ textAlign: 'center' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Manual coordination creates chaos. Customers value time.
        </motion.p>
      </div>
    </section>
  )
}

// ========================================
// SLIDE 9 - OMNICHANNEL
// ========================================
const Omnichannel = () => {
  const channels = [
    { icon: '🏪', label: 'Store' },
    { icon: '💬', label: 'WhatsApp' },
    { icon: '📞', label: 'Phone' },
    { icon: '🌐', label: 'Website' },
    { icon: '📲', label: 'App' },
    { icon: '💳', label: 'Payment QR' }
  ]

  return (
    <section className="slide-section bg-card">
      <div className="slide-content content-center">
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Growth Engine 3
        </motion.p>
        <motion.h2
          className="headline headline-md mt-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Customers want to reach you from any channel — and get one seamless experience
        </motion.h2>
        <motion.div
          className="channels-grid mt-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {channels.map((channel, index) => (
            <div key={index} className="channel-item">
              <span className="channel-icon">{channel.icon}</span>
              <span className="channel-name">{channel.label}</span>
            </div>
          ))}
        </motion.div>
        <motion.p
          className="subheadline mt-lg"
          style={{ textAlign: 'center', maxWidth: '500px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          All channels → One system
        </motion.p>
      </div>
    </section>
  )
}

// ========================================
// SLIDE 10 - SERVICE VISIBILITY
// ========================================
const ServiceVisibility = () => {
  const statuses = [
    { label: 'Pickup Confirmed', active: true },
    { label: 'Garments Received', active: true },
    { label: 'Processing', active: true },
    { label: 'Ready for Delivery', active: false },
    { label: 'Delivered', active: false }
  ]

  return (
    <section className="slide-section bg-dark">
      <div className="slide-content content-center">
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Trust Builder
        </motion.p>
        <motion.h2
          className="headline headline-md mt-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Updates build trust
        </motion.h2>
        <motion.div
          className="timeline mt-xl"
          style={{ justifyContent: 'center' }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {statuses.map((status, index) => (
            <div key={index} className="timeline-item">
              <div
                className="timeline-dot"
                style={{
                  background: status.active ? 'var(--accent)' : 'var(--bg-elevated)',
                  boxShadow: status.active ? '0 0 20px var(--accent)' : 'none'
                }}
              />
              <span className="timeline-label" style={{ color: status.active ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                {status.label}
              </span>
            </div>
          ))}
        </motion.div>
        <motion.p
          className="subheadline mt-xl"
          style={{ textAlign: 'center' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Every status update is a trust signal
        </motion.p>
      </div>
    </section>
  )
}

// ========================================
// SLIDE 11 - RETENTION PROBLEM
// ========================================
const RetentionProblem = () => {
  const issues = [
    { icon: '🛒', title: 'One-time orders', desc: 'No repeat mechanism' },
    { icon: '📞', title: 'Weak follow-up', desc: 'No structured outreach' },
    { icon: '🎁', title: 'No return incentives', desc: 'No loyalty hooks' },
    { icon: '👁️', title: 'No visibility on drop-off', desc: 'Blind to churn' },
    { icon: '🔄', title: 'No habit-building', desc: 'No system for repeat' }
  ]

  return (
    <section className="slide-section bg-card">
      <div className="slide-content content-center">
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Gap
        </motion.p>
        <motion.h2
          className="headline headline-md mt-sm"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Most drycleaners do not have a customer problem. They have a repeat-business problem.
        </motion.h2>
        <div className="grid-2 mt-xl" style={{ gap: '20px' }}>
          {issues.map((issue, index) => (
            <motion.div
              key={index}
              className="point-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <span className="point-block-icon">{issue.icon}</span>
              <div>
                <span className="point-block-title">{issue.title}</span>
                <span className="point-block-text">{issue.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ========================================
// SLIDE 12 - LOYALTY ENGINE
// ========================================
const LoyaltyEngine = () => {
  const elements = [
    { icon: '✨', title: 'Loyalty points' },
    { icon: '🎫', title: 'Prepaid packages' },
    { icon: '📦', title: 'Subscription plans' },
    { icon: '🔄', title: 'Repeat campaigns' },
    { icon: '↩️', title: 'Win-back communication' }
  ]

  return (
    <section className="slide-section bg-gradient">
      <div className="slide-content content-center">
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Growth Engine 4
        </motion.p>
        <motion.h2
          className="headline headline-md mt-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Predictable revenue beats unpredictable footfall
        </motion.h2>
        <div className="grid-5 mt-xl">
          {elements.map((el, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="card-icon">{el.icon}</div>
              <h3 className="card-title">{el.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ========================================
// SLIDE 13 - BUSINESS IMPACT
// ========================================
const BusinessImpact = () => {
  const impacts = [
    { icon: '🔁', label: 'Higher repeat orders', placeholder: 'XX% increase' },
    { icon: '🚚', label: 'More pickups', placeholder: 'XX% growth' },
    { icon: '💎', label: 'Better retention', placeholder: 'XX% retention' },
    { icon: '💰', label: 'Better collections', placeholder: 'XX% collected' },
    { icon: '📊', label: 'Better control', placeholder: 'Full visibility' }
  ]

  return (
    <section className="slide-section bg-dark">
      <div className="slide-content content-center">
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Result
        </motion.p>
        <motion.h2
          className="headline headline-md mt-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          When repeat business is systemized, growth becomes easier
        </motion.h2>
        <div className="grid-5 mt-xl" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              className="card"
              style={{ textAlign: 'center', padding: '30px 20px' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <span style={{ fontSize: '2.5rem' }}>{impact.icon}</span>
              <h3 className="card-title mt-md">{impact.label}</h3>
              <p style={{ color: 'var(--accent)', fontWeight: '600', marginTop: '8px' }}>{impact.placeholder}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ========================================
// SLIDE 14 - DIGITAL PAYMENTS
// ========================================
const DigitalPayments = () => {
  return (
    <section className="slide-section bg-card">
      <div className="slide-content content-center">
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Growth Engine 5
        </motion.p>
        <motion.h2
          className="headline headline-md mt-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Revenue is not real until it is collected
        </motion.h2>
        <div className="contrast-block mt-xl">
          <motion.div
            className="contrast-side old"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="contrast-title">
              <span>⚠️</span> Manual Pain Points
            </h3>
            <ul className="bullet-list">
              <li>Pending dues hurt cash flow</li>
              <li>Manual follow-up is inconsistent</li>
              <li>Payment delays reduce confidence</li>
            </ul>
          </motion.div>
          <motion.div
            className="contrast-side new"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="contrast-title">
              <span>✓</span> Digital Solution
            </h3>
            <ul className="bullet-list">
              <li>Payment links reduce friction</li>
              <li>Faster collection improves confidence</li>
              <li>Automated reminders work 24/7</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ========================================
// SLIDE 15 - COLLECTION DISCIPLINE
// ========================================
const CollectionDiscipline = () => {
  const features = [
    { icon: '🔔', title: 'Automated reminders' },
    { icon: '🔗', title: 'Payment links' },
    { icon: '🏪', title: 'Store-wise visibility' },
    { icon: '📋', title: 'Reconciliation support' },
    { icon: '✅', title: 'Fewer missed payments' }
  ]

  return (
    <section className="slide-section bg-dark">
      <div className="slide-content content-center">
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Cash Flow
        </motion.p>
        <motion.h2
          className="headline headline-md mt-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Cash flow improves when payment follow-up becomes a process
        </motion.h2>
        <div className="grid-5 mt-xl">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="card-icon">{feature.icon}</div>
              <h3 className="card-title">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ========================================
// SLIDE 16 - MULTI-STORE CHALLENGE
// ========================================
const MultiStoreChallenge = () => {
  const challenges = [
    { icon: '👷', title: 'Staff inconsistency' },
    { icon: '🔧', title: 'Weak process control' },
    { icon: '🗂️', title: 'Fragmented customer history' },
    { icon: '📉', title: 'Unreliable reporting' },
    { icon: '👁️', title: 'Poor visibility across outlets' }
  ]

  return (
    <section className="slide-section bg-card">
      <div className="slide-content content-center">
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Complexity
        </motion.p>
        <motion.h2
          className="headline headline-md mt-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Growth creates complexity faster than it creates control
        </motion.h2>
        <div className="grid-5 mt-xl" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              className="card"
              style={{ textAlign: 'center' }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <span style={{ fontSize: '2rem' }}>{challenge.icon}</span>
              <h3 className="card-title mt-md" style={{ fontSize: '1rem' }}>{challenge.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ========================================
// SLIDE 17 - CENTRALIZED CONTROL
// ========================================
const CentralizedControl = () => {
  const features = [
    { icon: '📐', title: 'Standard business rules' },
    { icon: '📊', title: 'Central reporting' },
    { icon: '🔑', title: 'Access control' },
    { icon: '💲', title: 'Pricing consistency' },
    { icon: '👁️', title: 'Customer visibility' },
    { icon: '📈', title: 'Better accountability' }
  ]

  return (
    <section className="slide-section bg-gradient">
      <div className="slide-content content-center">
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Solution
        </motion.p>
        <motion.h2
          className="headline headline-md mt-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Multi-store growth works only when control is centralized
        </motion.h2>
        <motion.div
          className="mt-xl"
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '120px', height: '80px', background: 'var(--accent)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: 'var(--bg-primary)' }}>HQ</div>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Central Control</span>
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Store A', 'Store B', 'Store C'].map((store, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '80px', height: '50px', background: 'var(--bg-card)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', border: '1px solid rgba(255,255,255,0.1)' }}>{store}</div>
                <div style={{ width: '2px', height: '20px', background: 'var(--accent)' }} />
              </div>
            ))}
          </div>
        </motion.div>
        <div className="grid-6 mt-xl">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="point-block"
              style={{ borderLeft: 'none', borderTop: '3px solid var(--accent)', borderRadius: '0 0 12px 12px', flexDirection: 'column', textAlign: 'center', padding: '20px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              <span style={{ fontSize: '1.5rem' }}>{feature.icon}</span>
              <span className="point-block-title mt-sm">{feature.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ========================================
// SLIDE 18 - FRANCHISE OPPORTUNITY
// ========================================
const FranchiseOpportunity = () => {
  return (
    <section className="slide-section bg-dark">
      <div className="slide-content content-center">
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Path
        </motion.p>
        <motion.h2
          className="headline headline-md mt-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Strong operators can become strong brands
        </motion.h2>
        <motion.div
          className="flow-horizontal mt-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {[
            { icon: '🏪', label: 'Single Store' },
            { icon: '🏬', label: 'Multi-Store' },
            { icon: '🏢', label: 'Franchise Network' }
          ].map((step, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '100px', height: '80px', background: 'var(--bg-card)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', border: index === 2 ? '2px solid var(--accent)' : '1px solid rgba(255,255,255,0.1)' }}>{step.icon}</div>
                <span style={{ fontWeight: '600' }}>{step.label}</span>
              </div>
              {index < 2 && <span style={{ fontSize: '2rem', color: 'var(--accent)' }}>→</span>}
            </div>
          ))}
        </motion.div>
        <motion.p
          className="subheadline mt-xl"
          style={{ textAlign: 'center', maxWidth: '600px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Expansion needs repeatability. Brands need standardization. Systems make scale safer.
        </motion.p>
      </div>
    </section>
  )
}

// ========================================
// SLIDE 19 - FRANCHISE CONTROL FRAMEWORK
// ========================================
const FranchiseControl = () => {
  const elements = [
    { icon: '🏢', title: 'HQ visibility' },
    { icon: '🏪', title: 'Store-level control' },
    { icon: '⚙️', title: 'Standard service setup' },
    { icon: '🎨', title: 'Brand consistency' },
    { icon: '💳', title: 'Royalty & payment' },
    { icon: '📊', title: 'Central reporting' }
  ]

  return (
    <section className="slide-section bg-card">
      <div className="slide-content content-center">
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Framework
        </motion.p>
        <motion.h2
          className="headline headline-md mt-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Franchise growth fails when systems stay manual
        </motion.h2>
        <div className="grid-3 mt-xl">
          {elements.map((el, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="card-icon">{el.icon}</div>
              <h3 className="card-title">{el.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ========================================
// SLIDE 20 - MODERN BUSINESS FRAMEWORK
// ========================================
const ModernFramework = () => {
  const engines = [
    { icon: '🎯', title: 'Customer Acquisition' },
    { icon: '🚚', title: 'Pickup & Delivery' },
    { icon: '💬', title: 'Communication' },
    { icon: '💎', title: 'Retention & Loyalty' },
    { icon: '💰', title: 'Payments & Collections' },
    { icon: '🏪', title: 'Multi-store Control' }
  ]

  return (
    <section className="slide-section bg-gradient">
      <div className="slide-content content-center">
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Framework
        </motion.p>
        <motion.h2
          className="headline headline-md mt-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The modern garment care business runs on 6 engines
        </motion.h2>
        <div className="grid-6 mt-xl" style={{ gridTemplateColumns: 'repeat(6, 1fr)' }}>
          {engines.map((engine, index) => (
            <motion.div
              key={index}
              className="card"
              style={{ textAlign: 'center' }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="card-icon" style={{ margin: '0 auto 16px' }}>{engine.icon}</div>
              <h3 className="card-title" style={{ fontSize: '0.9rem' }}>{engine.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ========================================
// SLIDE 21 - WHY SYSTEMS MATTER
// ========================================
const WhySystemsMatter = () => {
  const issues = [
    { icon: '📞', title: 'Missed follow-ups' },
    { icon: '⏳', title: 'Delayed updates' },
    { icon: '💸', title: 'Collection gaps' },
    { icon: '🏪', title: 'Store inconsistency' },
    { icon: '📉', title: 'Weak reporting' },
    { icon: '📈', title: 'Poor scale readiness' }
  ]

  return (
    <section className="slide-section bg-dark">
      <div className="slide-content content-center">
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Cost
        </motion.p>
        <motion.h2
          className="headline headline-md mt-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Manual effort cannot scale modern service expectations
        </motion.h2>
        <div className="grid-3 mt-xl">
          {issues.map((issue, index) => (
            <motion.div
              key={index}
              className="point-block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <span className="point-block-icon">{issue.icon}</span>
              <span className="point-block-title">{issue.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ========================================
// SLIDE 22 - QDC POSITIONING
// ========================================
const QDCPositioning = () => {
  const outcomes = [
    { icon: '👥', text: 'Better customer handling' },
    { icon: '🚗', text: 'Pickup & delivery coordination' },
    { icon: '🔄', text: 'Repeat business & loyalty' },
    { icon: '💳', text: 'Faster payment collection' },
    { icon: '👁️', text: 'Multi-store visibility' },
    { icon: '🏢', text: 'Franchise-level control' }
  ]

  return (
    <section className="slide-section bg-card">
      <div className="slide-content content-center">
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Answer
        </motion.p>
        <motion.h2
          className="headline headline-md mt-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          QDC helps drycleaners build a stronger business — not just run software
        </motion.h2>
        <div className="grid-3 mt-xl" style={{ maxWidth: '900px', margin: '40px auto 0' }}>
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              className="point-block"
              style={{ borderLeft: 'none', borderTop: '3px solid var(--accent)', borderRadius: '0 0 12px 12px', flexDirection: 'column', textAlign: 'center', padding: '24px' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <span style={{ fontSize: '2rem' }}>{outcome.icon}</span>
              <span className="point-block-title mt-sm">{outcome.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ========================================
// SLIDE 23 - CAPABILITY ECOSYSTEM
// ========================================
const CapabilityEcosystem = () => {
  const capabilities = [
    { icon: '🏪', label: 'Store Operations' },
    { icon: '🏭', label: 'Plant / Processing' },
    { icon: '💬', label: 'Customer Communication' },
    { icon: '💳', label: 'Payments' },
    { icon: '💎', label: 'Loyalty & Growth' },
    { icon: '🏢', label: 'Multi-store Control' }
  ]

  return (
    <section className="slide-section bg-dark">
      <div className="slide-content content-center">
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Platform
        </motion.p>
        <motion.h2
          className="headline headline-md mt-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          One connected platform for growth, service, and control
        </motion.h2>
        <motion.div
          className="mt-xl"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {capabilities.slice(0, 3).map((cap, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 24px', background: 'var(--bg-card)', borderRadius: '30px', border: '1px solid var(--accent)' }}>
                <span style={{ fontSize: '1.5rem' }}>{cap.icon}</span>
                <span style={{ fontSize: '1rem', fontWeight: '500' }}>{cap.label}</span>
              </div>
            ))}
          </div>
          <div style={{ width: '140px', height: '140px', background: 'linear-gradient(135deg, var(--accent), var(--accent-secondary))', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', fontWeight: '700', color: 'var(--bg-primary)' }}>
            QDC Platform
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {capabilities.slice(3, 6).map((cap, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 24px', background: 'var(--bg-card)', borderRadius: '30px', border: '1px solid var(--accent)' }}>
                <span style={{ fontSize: '1.5rem' }}>{cap.icon}</span>
                <span style={{ fontSize: '1rem', fontWeight: '500' }}>{cap.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ========================================
// SLIDE 24 - VISION CLOSE
// ========================================
const VisionClose = () => {
  const visions = [
    { icon: '🔎', text: 'More visible' },
    { icon: '🛵', text: 'More convenient' },
    { icon: '⚙️', text: 'More systemized' },
    { icon: '👥', text: 'More customer-driven' },
    { icon: '📈', text: 'More scalable' }
  ]

  return (
    <section className="slide-section bg-gradient">
      <div className="slide-content content-center">
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          The Vision
        </motion.p>
        <motion.h2
          className="headline headline-lg mt-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The next generation of drycleaning businesses will be built differently
        </motion.h2>
        <div className="flex-center mt-xl" style={{ gap: '30px', flexWrap: 'wrap' }}>
          {visions.map((v, index) => (
            <motion.div
              key={index}
              className="card"
              style={{ padding: '24px 32px', display: 'flex', alignItems: 'center', gap: '12px' }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <span style={{ fontSize: '1.5rem' }}>{v.icon}</span>
              <span style={{ fontWeight: '600' }}>{v.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ========================================
// SLIDE 25 - CTA
// ========================================
const CTA = () => {
  const ctas = [
    { icon: '📅', title: 'Book a business consultation' },
    { icon: '🎬', title: 'Get a live demo' },
    { icon: '💬', title: 'Discuss your growth plan' },
    { icon: '🔍', title: 'Explore how QDC can fit your business' }
  ]

  return (
    <section className="slide-section bg-card">
      <div className="slide-content content-center">
        <motion.p
          className="label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Take Action
        </motion.p>
        <motion.h2
          className="headline headline-md mt-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The right time to modernize is before growth exposes the gaps
        </motion.h2>
        <div className="cta-grid mt-xl">
          {ctas.map((cta, index) => (
            <motion.div
              key={index}
              className="cta-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="cta-icon">{cta.icon}</div>
              <h3 className="cta-title">{cta.title}</h3>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{ textAlign: 'center' }}
        >
          <p style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--accent)' }}>Let's Grow Together</p>
        </motion.div>
      </div>
    </section>
  )
}

// ========================================
// MAIN APP
// ========================================
function App() {
  const [currentSection, setCurrentSection] = useState(0)

  const sections = [
    Hero,
    Problem,
    MarketShift,
    RealityCheck,
    Opportunity,
    CustomerAcquisition,
    DiscoveryTrust,
    PickupDelivery,
    Omnichannel,
    ServiceVisibility,
    RetentionProblem,
    LoyaltyEngine,
    BusinessImpact,
    DigitalPayments,
    CollectionDiscipline,
    MultiStoreChallenge,
    CentralizedControl,
    FranchiseOpportunity,
    FranchiseControl,
    ModernFramework,
    WhySystemsMatter,
    QDCPositioning,
    CapabilityEcosystem,
    VisionClose,
    CTA
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll('.slide-section')
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sectionElements.forEach((section, index) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setCurrentSection(index)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      const allSections = document.querySelectorAll('.slide-section')
      const windowHeight = window.innerHeight
      const scrollPos = window.scrollY
      const currentIndex = Math.round(scrollPos / windowHeight)

      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        const nextIndex = Math.min(currentIndex + 1, allSections.length - 1)
        allSections[nextIndex]?.scrollIntoView({ behavior: 'smooth' })
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'ArrowLeft') {
        e.preventDefault()
        const prevIndex = Math.max(currentIndex - 1, 0)
        allSections[prevIndex]?.scrollIntoView({ behavior: 'smooth' })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const CurrentSection = sections[currentSection]

  return (
    <div className="presentation">
      {sections.map((Section, index) => (
        <div key={index} style={{ position: 'relative' }}>
          <Section />
          <div className="slide-counter" style={{ position: 'absolute', bottom: '20px', right: '40px' }}>
            {index + 1} / {sections.length}
          </div>
        </div>
      ))}
    </div>
  )
}

export default App