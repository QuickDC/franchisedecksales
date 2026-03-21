import { motion } from 'framer-motion'

const Slide5 = () => {
  // Increased width by 20%
  const centerX = 1150
  const width = 2304
  const height = 1080

  // Layer positions
  const layerY = {
    hq: 40,
    plant: 200,
    store: 460,
    rider: 750,
    customer: 980
  }

  // Bigger circles (scaled up)
  const hq = { x: centerX, y: layerY.hq, r: 120 }
  const plant = { x: centerX, y: layerY.plant, r: 85 }

  // 5 stores - spread across wider area
  const storeWidth = width * 0.75
  const storeSpacing = storeWidth / 4
  const storeStartX = centerX - (storeWidth / 2)

  const stores = [
    { id: 'store1', x: storeStartX, y: layerY.store, name: 'Store 1' },
    { id: 'store2', x: storeStartX + storeSpacing, y: layerY.store, name: 'Store 2' },
    { id: 'store3', x: storeStartX + storeSpacing * 2, y: layerY.store, name: 'Store 3' },
    { id: 'store4', x: storeStartX + storeSpacing * 3, y: layerY.store, name: 'Store 4' },
    { id: 'store5', x: storeStartX + storeSpacing * 4, y: layerY.store, name: 'Store 5' },
  ]

  const riders = stores.map((store) => ({
    id: `rider-${store.id}`,
    x: store.x,
    y: layerY.rider
  }))

  const customers = stores.map((store, i) => ({
    id: `customer-${store.id}`,
    x: store.x,
    y: layerY.customer,
    icon: ['📱', '💬', '🌐', '📞', '🚶'][i],
    name: ['Mobile Apps', 'WhatsApp', 'Website', 'Call', 'Walk Ins'][i]
  }))

  const colors = {
    hq: '#7c3aed',
    plant: '#059669',
    store: '#2563eb',
    rider: '#dc2626',
    customer: '#ea580c',
    storeToPlant: '#2563eb',
    plantToStore: '#22c55e',
    storeToHQ: '#2563eb',
    hqToStore: '#7c3aed',
    customerToStore: '#f59e0b',
    storeToRider: '#2563eb',
    riderToCustomer: '#dc2626',
  }

  return (
    <div className="slide">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: '56px', fontWeight: 800, marginBottom: '8px', textAlign: 'center', width: '100%' }}
      >
        Introducing <span className="highlight">QDC OS</span>
      </motion.h2>

      <motion.p
        className="slide-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{
          fontSize: '28px',
          fontWeight: 400,
          opacity: 0.85,
          marginBottom: '20px',
          whiteSpace: 'nowrap',
          textAlign: 'center',
          width: '100%',
          maxWidth: '100%',
          paddingLeft: '0'
        }}
      >
        One Unified System Managing Orders, Stores, and Customers in Real Time
      </motion.p>

      <div className="platform-visual-container" style={{ width: '100%', maxWidth: '100%' }}>
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="platform-svg">
          {/* ==================== CONNECTION LINES ==================== */}

          {/* HQ → Store */}
          {stores.map((store) => (
            <line
              key={`hq-store-${store.id}`}
              x1={hq.x} y1={hq.y + hq.r}
              x2={store.x} y2={store.y - 60}
              stroke={colors.hq}
              strokeWidth="2"
              opacity="0.25"
            />
          ))}

          {/* Plant → Store */}
          {stores.map((store) => (
            <line
              key={`plant-store-${store.id}`}
              x1={plant.x} y1={plant.y + plant.r}
              x2={store.x} y2={store.y - 60}
              stroke={colors.plant}
              strokeWidth="2.5"
              opacity="0.4"
            />
          ))}

          {/* Customer → Store */}
          {customers.map((cust, i) => (
            <line
              key={`customer-store-${i}`}
              x1={cust.x} y1={cust.y + 45}
              x2={stores[i].x} y2={stores[i].y - 60}
              stroke={colors.customer}
              strokeWidth="2.5"
              opacity="0.4"
            />
          ))}

          {/* Store → Rider */}
          {stores.map((store, i) => (
            <line
              key={`store-rider-${i}`}
              x1={store.x} y1={store.y + 60}
              x2={riders[i].x} y2={riders[i].y - 45}
              stroke={colors.store}
              strokeWidth="2.5"
              opacity="0.4"
            />
          ))}

          {/* Rider → Customer */}
          {riders.map((rider, i) => (
            <line
              key={`rider-customer-${i}`}
              x1={rider.x} y1={rider.y + 45}
              x2={customers[i].x} y2={customers[i].y - 45}
              stroke={colors.rider}
              strokeWidth="2"
              opacity="0.3"
            />
          ))}

          {/* ==================== FLOW LABELS - CENTERED ==================== */}

          {/* HQ Labels */}
          <text x={hq.x - 200} y={hq.y + 5} textAnchor="end" fontSize="16" fontWeight="700" fill="#7c3aed">DATA</text>
          <text x={hq.x + 200} y={hq.y + 5} textAnchor="start" fontSize="16" fontWeight="700" fill="#7c3aed">CONTROL</text>

          {/* Order Request - CENTERED between Customer and Store (moved up) */}
          <text x={centerX} y={(layerY.customer + layerY.store) / 2 - 50} textAnchor="middle" fontSize="24" fontWeight="700" fill="#f59e0b">ORDER REQUEST</text>

          {/* Pickup Assigned - CENTERED between Store and Rider (moved up) */}
          <text x={centerX} y={(layerY.store + layerY.rider) / 2 - 50} textAnchor="middle" fontSize="24" fontWeight="700" fill="#2563eb">PICKUP ASSIGNED</text>

          {/* Delivery - CENTERED between Rider and Customer (moved down) */}
          <text x={centerX} y={(layerY.rider + layerY.customer) / 2 + 30} textAnchor="middle" fontSize="22" fontWeight="700" fill="#dc2626">DELIVERY</text>

          {/* Garment Processing - FAR LEFT */}
          <text x="30" y={(plant.y + layerY.store) / 2 - 10} textAnchor="start" fontSize="20" fontWeight="700" fill="#2563eb">GARMENT</text>
          <text x="30" y={(plant.y + layerY.store) / 2 + 18} textAnchor="start" fontSize="20" fontWeight="700" fill="#2563eb">PROCESSING →</text>

          {/* QC Complete - FAR RIGHT */}
          <text x={width - 30} y={(plant.y + layerY.store) / 2 - 10} textAnchor="end" fontSize="20" fontWeight="700" fill="#22c55e">← QC</text>
          <text x={width - 30} y={(plant.y + layerY.store) / 2 + 18} textAnchor="end" fontSize="20" fontWeight="700" fill="#22c55e">COMPLETE</text>

          {/* Control & Rules - FAR RIGHT */}
          <text x={width - 30} y={(hq.y + layerY.store) / 2 - 10} textAnchor="end" fontSize="20" fontWeight="700" fill="#7c3aed">← CONTROL</text>
          <text x={width - 30} y={(hq.y + layerY.store) / 2 + 18} textAnchor="end" fontSize="20" fontWeight="700" fill="#7c3aed">& RULES</text>

          {/* ==================== LAYER LABELS - FAR LEFT ==================== */}
          <g fontSize="24" fontWeight="800" fill="#94a3b8">
            <text x="30" y={hq.y + 18} textAnchor="start">LAYER 1</text>
            <text x="30" y={hq.y + 48} textAnchor="start" fontSize="18" fontWeight="600">HQ CONTROL</text>

            <text x="30" y={plant.y + 18} textAnchor="start">LAYER 2</text>
            <text x="30" y={plant.y + 48} textAnchor="start" fontSize="18" fontWeight="600">PROCESSING</text>

            <text x="30" y={layerY.store + 18} textAnchor="start">LAYER 3</text>
            <text x="30" y={layerY.store + 48} textAnchor="start" fontSize="18" fontWeight="600">STORE OPERATIONS</text>

            <text x="30" y={layerY.rider + 18} textAnchor="start">LAYER 4</text>
            <text x="30" y={layerY.rider + 48} textAnchor="start" fontSize="18" fontWeight="600">DELIVERY</text>

            <text x="30" y={layerY.customer + 18} textAnchor="start">LAYER 5</text>
            <text x="30" y={layerY.customer + 48} textAnchor="start" fontSize="18" fontWeight="600">CUSTOMER</text>
          </g>

          {/* ==================== ANIMATED DATA FLOW ==================== */}

          {/* Customer → Store (ORANGE) */}
          {customers.map((cust, i) => (
            <motion.circle
              key={`cust-store-${i}`}
              r="6"
              fill={colors.customerToStore}
              initial={{ cx: cust.x, cy: cust.y + 45 }}
              animate={{ cx: cust.x, cy: [cust.y + 45, stores[i].y - 60] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.3
              }}
            />
          ))}

          {/* Store → Rider (BLUE) */}
          {stores.map((store, i) => (
            <motion.circle
              key={`store-rider-${i}`}
              r="6"
              fill={colors.storeToRider}
              initial={{ cx: store.x, cy: store.y + 60 }}
              animate={{ cx: store.x, cy: [store.y + 60, riders[i].y - 45] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
                delay: 0.5 + i * 0.3
              }}
            />
          ))}

          {/* Rider → Customer (RED) */}
          {riders.map((rider, i) => (
            <motion.circle
              key={`rider-customer-${i}`}
              r="5"
              fill={colors.riderToCustomer}
              initial={{ cx: rider.x, cy: rider.y + 45 }}
              animate={{ cx: rider.x, cy: [rider.y + 45, customers[i].y - 45] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
                delay: 1 + i * 0.3
              }}
            />
          ))}

          {/* Store → Plant (BLUE) */}
          {stores.map((store, i) => (
            <motion.circle
              key={`store-plant-${i}`}
              r="6"
              fill={colors.storeToPlant}
              initial={{ cx: store.x, cy: store.y - 60 }}
              animate={{ cx: [store.x, centerX], cy: [store.y - 60, plant.y + plant.r] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: 1.5 + i * 0.3
              }}
            />
          ))}

          {/* Plant → Store (GREEN) */}
          {stores.map((store, i) => (
            <motion.circle
              key={`plant-store-${i}`}
              r="5"
              fill={colors.plantToStore}
              initial={{ cx: centerX, cy: plant.y + plant.r }}
              animate={{ cx: [centerX, store.x], cy: [plant.y + plant.r, store.y - 60] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: 2.5 + i * 0.3
              }}
            />
          ))}

          {/* Store → HQ (BLUE) */}
          {stores.map((store, i) => (
            <motion.circle
              key={`store-hq-${i}`}
              r="5"
              fill={colors.storeToHQ}
              initial={{ cx: store.x, cy: store.y - 60 }}
              animate={{ cx: [store.x, hq.x], cy: [store.y - 60, hq.y + hq.r] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
                delay: 3 + i * 0.3
              }}
            />
          ))}

          {/* HQ → Store (PURPLE) */}
          {stores.map((store, i) => (
            <motion.circle
              key={`hq-store-anim-${i}`}
              r="5"
              fill={colors.hqToStore}
              initial={{ cx: hq.x, cy: hq.y + hq.r }}
              animate={{ cx: [hq.x, store.x], cy: [hq.y + hq.r, store.y - 60] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
                delay: 4 + i * 0.3
              }}
            />
          ))}

          {/* ==================== NODES ==================== */}

          {/* HQ Node */}
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <circle cx={hq.x} cy={hq.y} r={hq.r + 18} fill="none" stroke={colors.hq} strokeWidth="2" opacity="0.2"/>
            <circle cx={hq.x} cy={hq.y} r={hq.r} fill={colors.hq} stroke="#fff" strokeWidth="3"/>
            <text x={hq.x} y={hq.y} textAnchor="middle" fill="#fff" fontSize="36" fontWeight="800">HQ</text>
            <text x={hq.x} y={hq.y + 35} textAnchor="middle" fill="#fff" fontSize="22" fontWeight="600">CONTROL</text>
          </motion.g>

          {/* Plant Node */}
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <circle cx={plant.x} cy={plant.y} r={plant.r} fill={colors.plant} stroke="#fff" strokeWidth="3"/>
            <text x={plant.x} y={plant.y} textAnchor="middle" fill="#fff" fontSize="24" fontWeight="800">PLANT</text>
            <text x={plant.x} y={plant.y + 28} textAnchor="middle" fill="#fff" fontSize="18" fontWeight="600">QC</text>
          </motion.g>

          {/* Store Nodes */}
          {stores.map((store, i) => (
            <motion.g
              key={store.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
            >
              <circle cx={store.x} cy={store.y} r="60" fill={colors.store} stroke="#fff" strokeWidth="2.5"/>
              <text x={store.x} y={store.y - 3} textAnchor="middle" fill="#fff" fontSize="20" fontWeight="700">{store.name}</text>
              <text x={store.x} y={store.y + 20} textAnchor="middle" fill="#fff" fontSize="14" fontWeight="500">Operations</text>
            </motion.g>
          ))}

          {/* Rider Nodes */}
          {riders.map((rider, i) => (
            <motion.g
              key={rider.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8 + i * 0.06, duration: 0.5 }}
            >
              <circle cx={rider.x} cy={rider.y} r="45" fill={colors.rider} stroke="#fff" strokeWidth="2.5"/>
              <text x={rider.x} y={rider.y - 5} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">RIDER</text>
              <text x={rider.x} y={rider.y + 14} textAnchor="middle" fill="#fff" fontSize="14" fontWeight="600">{i + 1}</text>
            </motion.g>
          ))}

          {/* Customer Nodes */}
          {customers.map((cust, i) => (
            <motion.g
              key={cust.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + i * 0.06, duration: 0.5 }}
            >
              <circle cx={cust.x} cy={cust.y} r="45" fill={colors.customer} stroke="#fff" strokeWidth="2.5"/>
              <text x={cust.x} y={cust.y - 2} textAnchor="middle" fontSize="24">{cust.icon}</text>
              <text x={cust.x} y={cust.y + 24} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="600">{cust.name}</text>
            </motion.g>
          ))}

        </svg>
      </div>

      {/* Explanation line */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          fontSize: '20px',
          fontWeight: 400,
          color: '#94a3b8',
          textAlign: 'center',
          marginTop: '15px',
          width: '100%'
        }}
      >
        From request to delivery and centralized control — every step is seamlessly connected and fully visible.
      </motion.p>
    </div>
  )
}

export default Slide5
