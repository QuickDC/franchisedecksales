import { motion } from 'framer-motion'

const config = {
  // Base circle radii (reduced to fit screen)
  radii: {
    hq: 55,
    plant: 40,
    store: 28,
    rider: 22,
    customer: 22,
    flowSmall: 4,
    flowMedium: 3,
    glow: 8
  },

  // Font sizes - reduced to fit screen
  fonts: {
    hqTitle: 23,
    hqSubtitle: 16,
    plantTitle: 15,
    plantSubtitle: 14,
    storeTitle: 12,
    storeSubtitle: 8,
    riderTitle: 12,
    riderNumber: 10,
    customerIcon: 16,
    customerName: 6,
    flowLabel: 12,
    flowLabelLarge: 14,
    layerLabel: 12,
    layerLabelSub: 10
  },

  // Vertical offsets for text within circles (reduced)
  offsets: {
    hqSubtitle: 18,
    plantSubtitle: 14,
    storeSubtitle: 12,
    riderTitle: -3,
    riderNumber: 10,
    customerIcon: -1,
    customerName: 14,
    layerLabelMain: 10,
    layerLabelSub: 24,
    flowLabelOffset: 3,
    flowLabelUpper: -20,
    flowLabelLower: 8,
    flowLabelSmall: -5,
    flowLabelSmall2: 8,
    storeTitleAdjust: -1
  },

  // Text Y positions (reduced)
  textY: {
    hqTitle: 0,
    hqSubtitle: 18,
    plantTitle: 0,
    plantSubtitle: 14,
    storeTitle: -1,
    storeSubtitle: 12,
    riderTitle: -3,
    riderNumber: 10,
    customerIcon: -1,
    customerName: 14,
    layerLabelMain: 10,
    layerLabelSub: 24
  },

  // SVG dimensions (scaled down to fit screen)
  svg: {
    width: 500,
    height: 750
  },

  // Y positions for each layer - scaled down to fit screen
  centers: {
    hq: 70,
    plant: 220,
    store: 380,
    rider: 540,
    customer: 700
  }
}

// Use config values directly (no SCALE needed)
const radii = config.radii
const fonts = config.fonts
const offsets = config.offsets
const textY = config.textY

const Slide19 = () => {
  const centerX = config.svg.width / 2
  const width = config.svg.width
  const height = config.svg.height

  // Layer positions from config
  const layerY = config.centers

  // Node definitions using config
  const hq = { x: centerX, y: layerY.hq, r: radii.hq }
  const plant = { x: centerX, y: layerY.plant, r: radii.plant }

  // Animation edge positions - using layerY directly
  const edges = {
    hqBottom: layerY.hq,
    plantBottom: layerY.plant,
    storeTop: layerY.store - radii.store,
    storeBottom: layerY.store + radii.store,
    riderTop: layerY.rider - radii.rider,
    riderBottom: layerY.rider + radii.rider,
    customerTop: layerY.customer - radii.customer,
    customerBottom: layerY.customer + radii.customer
  }

  // 5 stores
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
    // Flow colors based on connection type
    storePlant: '#22c55e',    // green - Store ↔ Plant
    storeHQ: '#7c3aed',        // purple - Store ↔ HQ
    storeRider: '#dc2626',     // red - Store ↔ Rider
    storeCustomer: '#ea580c',  // orange - Store ↔ Customer
  }

  return (
    <div className="slidex">
      <motion.h2
        className="slide-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: '25px', fontWeight: 800, marginBottom: '6px', textAlign: 'center', width: '100%' }}
      >
        One Unified System Managing Orders, Stores, and Customers in Real Time
      </motion.h2>

      
      <div className="platform-visual-container" style={{ width: '100%', maxWidth: '100%' }}>
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="platform-svg">
          {/* ==================== CONNECTION LINES ==================== */}

          {/* HQ → Store (PURPLE) */}
          {stores.map((store) => (
            <line
              key={`hq-store-${store.id}`}
              x1={hq.x} y1={edges.hqBottom}
              x2={store.x} y2={edges.storeTop}
              stroke={colors.storeHQ}
              strokeWidth="2"
              opacity="1"
            />
          ))}

          {/* Plant → Store (GREEN) */}
          {stores.map((store) => (
            <line
              key={`plant-store-${store.id}`}
              x1={plant.x} y1={edges.plantBottom}
              x2={store.x} y2={edges.storeTop}
              stroke={colors.storePlant}
              strokeWidth="2.5"
              opacity="0.4"
            />
          ))}

          {/* Customer → Store (ORANGE) */}
          {customers.map((cust, i) => (
            <line
              key={`customer-store-${i}`}
              x1={cust.x} y1={edges.customerBottom}
              x2={stores[i].x} y2={edges.storeTop}
              stroke={colors.storeCustomer}
              strokeWidth="2.5"
              opacity="0.4"
            />
          ))}

          {/* Store → Rider (RED) */}
          {stores.map((store, i) => (
            <line
              key={`store-rider-${i}`}
              x1={store.x} y1={edges.storeBottom}
              x2={riders[i].x} y2={edges.riderTop}
              stroke={colors.storeRider}
              strokeWidth="2.5"
              opacity="0.4"
            />
          ))}

          {/* Rider → Customer (RED) */}
          {riders.map((rider, i) => (
            <line
              key={`rider-customer-${i}`}
              x1={rider.x} y1={edges.riderBottom}
              x2={customers[i].x} y2={edges.customerBottom}
              stroke={colors.storeRider}
              strokeWidth="2"
              opacity="0.3"
            />
          ))}

          {/* Store → Customer (ORANGE) - reverse direction */}
          {customers.map((cust, i) => (
            <line
              key={`store-customer-${i}`}
              x1={cust.x} y1={edges.storeTop}
              x2={cust.x} y2={edges.customerBottom}
              stroke={colors.storeCustomer}
              strokeWidth="2"
              opacity="0.25"
            />
          ))}

          {/* Rider → Store (RED) - reverse direction */}
          {riders.map((rider, i) => (
            <line
              key={`rider-store-${i}`}
              x1={rider.x} y1={edges.riderTop}
              x2={stores[i].x} y2={edges.storeBottom}
              stroke={colors.storeRider}
              strokeWidth="2"
              opacity="0.25"
            />
          ))}

          {/* ==================== FLOW LABELS ==================== */}

          {/* HQ Labels */}
          <text x={hq.x - 360} y={hq.y + offsets.flowLabelOffset} textAnchor="end" fontSize={fonts.flowLabel} fontWeight="700" fill="#7c3aed">DATA</text>
          <text x={hq.x + 360} y={hq.y + offsets.flowLabelOffset} textAnchor="start" fontSize={fonts.flowLabel} fontWeight="700" fill="#7c3aed">CONTROL</text>

          {/* Order Request */}
          <text x={centerX} y={(layerY.customer + layerY.store - 20) / 2 + offsets.flowLabelUpper} textAnchor="middle" fontSize={fonts.flowLabelLarge} fontWeight="700" fill="#dc2626">ORDER REQUEST</text>

          {/* Pickup Assigned */}
          <text x={centerX} y={(layerY.store + layerY.rider+30) / 2 + offsets.flowLabelUpper} textAnchor="middle" fontSize={fonts.flowLabelLarge} fontWeight="700" fill="#2563eb">PICKUP ASSIGNED</text>

          {/* Delivery */}
          <text x={centerX} y={(layerY.rider + layerY.customer) / 2 + offsets.flowLabelLower} textAnchor="middle" fontSize={fonts.flowLabel} fontWeight="700" fill="#f59e0b">DELIVERY</text>

          {/* Garment Processing - FAR LEFT */}
          <text x="3" y={(plant.y + layerY.store) / 2 + offsets.flowLabelSmall} textAnchor="start" fontSize={fonts.flowLabel} fontWeight="700" fill="#2563eb">GARMENT</text>
          <text x="3" y={(plant.y + layerY.store) / 2 + offsets.flowLabelSmall2} textAnchor="start" fontSize={fonts.flowLabel} fontWeight="700" fill="#2563eb">PROCESSING →</text>

          {/* QC Complete - FAR RIGHT */}
          <text x={width - 3} y={(plant.y + layerY.store) / 2 + offsets.flowLabelSmall} textAnchor="end" fontSize={fonts.flowLabel} fontWeight="700" fill="#22c55e">← QC</text>
          <text x={width - 3} y={(plant.y + layerY.store) / 2 + offsets.flowLabelSmall2} textAnchor="end" fontSize={fonts.flowLabel} fontWeight="700" fill="#22c55e">COMPLETE</text>

          {/* Control & Rules - FAR RIGHT */}
          <text x={width - 3} y={(hq.y + layerY.store) / 2 + offsets.flowLabelSmall} textAnchor="end" fontSize={fonts.flowLabel} fontWeight="700" fill="#7c3aed">← CONTROL</text>
          <text x={width - 3} y={(hq.y + layerY.store) / 2 + offsets.flowLabelSmall2} textAnchor="end" fontSize={fonts.flowLabel} fontWeight="700" fill="#7c3aed">& RULES</text>

          {/* ==================== LAYER LABELS ==================== */}
          <g fontSize={fonts.layerLabel} fontWeight="800" fill="#94a3b8">
            <text x="3" y={hq.y + textY.layerLabelMain} textAnchor="start">LAYER 1</text>
            <text x="3" y={hq.y + textY.layerLabelSub} textAnchor="start" fontSize={fonts.layerLabelSub} fontWeight="600">HQ CONTROL</text>

            <text x="3" y={plant.y + textY.layerLabelMain} textAnchor="start">LAYER 2</text>
            <text x="3" y={plant.y + textY.layerLabelSub} textAnchor="start" fontSize={fonts.layerLabelSub} fontWeight="600">PROCESSING</text>

            <text x="3" y={layerY.store + textY.layerLabelMain} textAnchor="start">LAYER 3</text>
            <text x="3" y={layerY.store + textY.layerLabelSub} textAnchor="start" fontSize={fonts.layerLabelSub} fontWeight="600">STORES</text>

            <text x="3" y={layerY.rider + textY.layerLabelMain} textAnchor="start">LAYER 4</text>
            <text x="3" y={layerY.rider + textY.layerLabelSub} textAnchor="start" fontSize={fonts.layerLabelSub} fontWeight="600">DELIVERY</text>

            <text x="3" y={layerY.customer + textY.layerLabelMain} textAnchor="start">LAYER 5</text>
            <text x="3" y={layerY.customer + textY.layerLabelSub} textAnchor="start" fontSize={fonts.layerLabelSub} fontWeight="600">CUSTOMER</text>
          </g>

          {/* ==================== ANIMATED DATA FLOW ==================== */}

          {/* ==================== ANIMATED DATA FLOW DOTS ==================== */}

          {/* Customer → Store (ORANGE) */}
          {customers.map((cust, i) => (
            <motion.circle
              key={`cust-store-${i}`}
              r={radii.flowSmall}
              fill={colors.storeCustomer}
              initial={{ cx: cust.x, cy: edges.customerBottom }}
              animate={{ cx: cust.x, cy: [edges.customerBottom, edges.storeTop] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.4
              }}
            />
          ))}

          {/* Store → Customer (ORANGE) - reverse direction */}
          {customers.map((cust, i) => (
            <motion.circle
              key={`store-customer-${i}`}
              r={radii.flowSmall}
              fill={colors.storeCustomer}
              initial={{ cx: cust.x, cy: edges.storeTop }}
              animate={{ cx: cust.x, cy: [edges.storeTop, edges.customerBottom] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                delay: 1.5 + i * 0.4
              }}
            />
          ))}

          {/* Store → Rider (RED) */}
          {stores.map((store, i) => (
            <motion.circle
              key={`store-rider-${i}`}
              r={radii.flowMedium}
              fill={colors.storeRider}
              initial={{ cx: store.x, cy: edges.storeBottom }}
              animate={{ cx: store.x, cy: [edges.storeBottom, edges.riderTop] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: 0.3 + i * 0.3
              }}
            />
          ))}

          {/* Rider → Store (RED) - reverse direction */}
          {riders.map((rider, i) => (
            <motion.circle
              key={`rider-store-${i}`}
              r={radii.flowSmall}
              fill={colors.storeRider}
              initial={{ cx: rider.x, cy: edges.riderTop }}
              animate={{ cx: rider.x, cy: [edges.riderTop, edges.storeBottom] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear",
                delay: 1.5 + i * 0.3
              }}
            />
          ))}

          {/* Store → Rider (BLUE) - NEW animation */}
          {stores.map((store, i) => (
            <motion.circle
              key={`store-rider-blue-${i}`}
              r={radii.flowSmall}
              fill={colors.store}
              initial={{ cx: store.x, cy: edges.storeBottom }}
              animate={{ cx: store.x, cy: [edges.storeBottom, edges.riderTop] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: 2 + i * 0.4
              }}
            />
          ))}

          {/* Rider → Store (BLUE) - NEW animation */}
          {/* {riders.map((rider, i) => (
            <motion.circle
              key={`rider-store-blue-${i}`}
              r={radii.flowSmall}
              fill={colors.store}
              initial={{ cx: rider.x, cy: edges.riderTop }}
              animate={{ cx: rider.x, cy: [edges.riderTop, edges.storeBottom] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: 3 + i * 0.4
              }}
            />
          ))} */}

          {/* Rider → Customer (RED) */}
          {riders.map((rider, i) => (
            <motion.circle
              key={`rider-customer-${i}`}
              r={radii.flowSmall}
              fill={colors.storeRider}
              initial={{ cx: rider.x, cy: edges.riderBottom }}
              animate={{ cx: rider.x, cy: [edges.riderBottom, edges.customerBottom] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: 0.6 + i * 0.3
              }}
            />
          ))}

          {/* Customer → Rider (RED) - NEW flow
          {customers.map((cust, i) => (
            <motion.circle
              key={`customer-rider-${i}`}
              r={radii.flowSmall}
              fill={colors.storeRider}
              initial={{ cx: cust.x, cy: edges.customerTop }}
              animate={{ cx: cust.x, cy: [edges.customerTop, edges.riderTop] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: 1.2 + i * 0.3
              }}
            />
          ))} */}

          {/* Store → Plant (BLUE) */}
          {stores.map((store, i) => (
            <motion.circle
              key={`store-plant-${i}`}
              r={radii.flowSmall}
              fill={'#2563eb'}
              initial={{ cx: store.x, cy: edges.storeTop }}
              animate={{ cx: [store.x, centerX], cy: [edges.storeTop, edges.plantBottom] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: 0.4 + i * 0.4
              }}
            />
          ))}

          {/* Plant → Store (GREEN) - reverse direction */}
          {stores.map((store, i) => (
            <motion.circle
              key={`plant-store-${i}`}
              r={radii.flowSmall}
              fill={colors.storePlant}
              initial={{ cx: centerX, cy: edges.plantBottom }}
              animate={{ cx: [centerX, store.x], cy: [edges.plantBottom, edges.storeTop] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: 1.8 + i * 0.4
              }}
            />
          ))}

          {/* Store → HQ (PURPLE) */}
          {stores.map((store, i) => (
            <motion.circle
              key={`store-hq-${i}`}
              r={radii.flowSmall}
              fill={'#2563eb'}
              initial={{ cx: store.x, cy: edges.storeTop }}
              animate={{ cx: [store.x, hq.x], cy: [edges.storeTop, edges.hqBottom] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "linear",
                delay: 0.5 + i * 0.4
              }}
            />
          ))}

          {/* HQ → Store (PURPLE) - reverse direction */}
          {stores.map((store, i) => (
            <motion.circle
              key={`hq-store-${i}`}
              r={radii.flowSmall}
              fill={colors.storeHQ}
              initial={{ cx: hq.x, cy: edges.hqBottom }}
              animate={{ cx: [hq.x, store.x], cy: [edges.hqBottom, edges.storeTop] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "linear",
                delay: 2 + i * 0.4
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
            <circle cx={hq.x} cy={hq.y} r={hq.r + radii.glow} fill="none" stroke={colors.hq} strokeWidth="2" opacity="0.2"/>
            <circle cx={hq.x} cy={hq.y} r={hq.r} fill={colors.hq} stroke="#fff" strokeWidth="3"/>
            <text x={hq.x} y={hq.y} textAnchor="middle" fill="#fff" fontSize={fonts.hqTitle} fontWeight="800">HQ</text>
            <text x={hq.x} y={hq.y + textY.hqSubtitle} textAnchor="middle" fill="#fff" fontSize={fonts.hqSubtitle} fontWeight="600">CONTROL</text>
          </motion.g>

          {/* Plant Node */}
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <circle cx={plant.x} cy={plant.y} r={plant.r} fill={colors.plant} stroke="#fff" strokeWidth="3"/>
            <text x={plant.x} y={plant.y} textAnchor="middle" fill="#fff" fontSize={fonts.plantTitle} fontWeight="800">PLANT</text>
            <text x={plant.x} y={plant.y + textY.plantSubtitle} textAnchor="middle" fill="#fff" fontSize={fonts.plantSubtitle} fontWeight="600">QC</text>
          </motion.g>

          {/* Store Nodes */}
          {stores.map((store, i) => (
            <motion.g
              key={store.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
            >
              <circle cx={store.x} cy={store.y} r={radii.store} fill={colors.store} stroke="#fff" strokeWidth="2.5"/>
              <text x={store.x} y={store.y + textY.storeTitle} textAnchor="middle" fill="#fff" fontSize={fonts.storeTitle} fontWeight="700">{store.name}</text>
              <text x={store.x} y={store.y + textY.storeSubtitle} textAnchor="middle" fill="#fff" fontSize={fonts.storeSubtitle} fontWeight="500">Operations</text>
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
              <circle cx={rider.x} cy={rider.y} r={radii.rider} fill={colors.rider} stroke="#fff" strokeWidth="2.5"/>
              <text x={rider.x} y={rider.y + textY.riderTitle} textAnchor="middle" fill="#fff" fontSize={fonts.riderTitle} fontWeight="700">RIDER</text>
              <text x={rider.x} y={rider.y + textY.riderNumber} textAnchor="middle" fill="#fff" fontSize={fonts.riderNumber} fontWeight="600">{i + 1}</text>
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
              <circle cx={cust.x} cy={cust.y} r={radii.customer} fill={colors.customer} stroke="#fff" strokeWidth="2.5"/>
              <text x={cust.x} y={cust.y + textY.customerIcon} textAnchor="middle" fontSize={fonts.customerIcon}>{cust.icon}</text>
              <text x={cust.x} y={cust.y + textY.customerName} textAnchor="middle" fill="#fff" fontSize={fonts.customerName} fontWeight="600">{cust.name}</text>
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

export default Slide19