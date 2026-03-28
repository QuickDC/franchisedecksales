import { motion } from 'framer-motion'

const Slide6 = () => {
  const tiers = [
    {
      tier: 'Tier 1',
      idealFor: 'Owners ready to automate the current business',
      includes: 'QDC Store Automation',
      price: '₹24,000',
    },
    {
      tier: 'Tier 2',
      idealFor: 'Owners serious about convenience-led growth',
      includes: 'Tier 1 + Home Pickup & Delivery',
      price: '₹49,999',
    },
    {
      tier: 'Tier 3',
      idealFor: 'Owners who want premium positioning and modern setup',
      includes: 'QDC Software + Stylish POS Machine',
      price: '₹99,999',
    },
  ]

  return (
    <div className="slide slide-light" style={{ alignItems: 'flex-start' }}>
      <motion.h1
        className="slide-title-dark"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Three offers. Three ambition levels.
      </motion.h1>

      <motion.div
        className="comparison-table"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="table-header">
          <div className="col-tier">Tier</div>
          <div className="col-ideal">Ideal For</div>
          <div className="col-includes">Includes</div>
          <div className="col-price">Launchpad Price</div>
        </div>

        {tiers.map((tier, index) => (
          <div className="table-row" key={index}>
            <div className="col-tier">{tier.tier}</div>
            <div className="col-ideal">{tier.idealFor}</div>
            <div className="col-includes">{tier.includes}</div>
            <div className="col-price">{tier.price}</div>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="decision-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <p className="decision-label">Decision line</p>
        <p className="decision-text">
          Do not ask which offer is cheapest.<br />
          Ask which future you are ready to commit to.
        </p>
      </motion.div>
    </div>
  )
}

export default Slide6
