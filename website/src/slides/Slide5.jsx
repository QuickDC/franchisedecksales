import { motion } from 'framer-motion'

const Slide5 = () => {
  return (
    <div className="slide">
      <span className="slide-number">05</span>

      {/* Left-aligned Title and Subtitle */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '15px',
          marginBottom: '10px',
          width: '100%',
          textAlign: 'left'
        }}
      >
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: '#fff',
          margin: 0
        }}>
          HQ Control Command Center
        </h1>
        <span style={{
          fontSize: '1.1rem',
          color: '#888',
          fontWeight: '400'
        }}>
          Capabilities - Connected to 5 Stores & 1 Plant
        </span>
      </motion.div>

      {/* Centered Organizational Diagram */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10px',
        width: '100%',
        flex: 1
      }}>

        {/* Brand Level HQ - Top Layer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          style={{
            background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
            borderRadius: '20px',
            padding: '16px 28px',
            border: '2px solid #E63946',
            boxShadow: '0 0 30px rgba(230, 57, 70, 0.3)',
            zIndex: 2
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontSize: '1.6rem' }}>🏢</div>
            <div>
              <h3 style={{ color: '#E63946', fontSize: '0.95rem', marginBottom: '2px' }}>HQ Control Command Center</h3>
              <p style={{ color: '#888', fontSize: '0.7rem' }}>Centralized Brand Management with Capabilities</p>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '6px',
            marginTop: '8px'
          }}>
            {[
              { icon: '💰', title: 'Price Control', desc: 'Master pricing' },
              { icon: '📦', title: 'Inventory', desc: 'Central stock' },
              { icon: '👔', title: 'Garment Rules', desc: 'Fabric standards' },
              { icon: '📊', title: 'Analytics', desc: 'Brand insights' }
            ].map((item, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '5px',
                padding: '6px 4px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '0.9rem', marginBottom: '2px' }}>{item.icon}</div>
                <h4 style={{ color: '#fff', fontSize: '0.55rem', marginBottom: '1px' }}>{item.title}</h4>
                <p style={{ color: '#666', fontSize: '0.5rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Vertical Connection Line from HQ - Animated */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: '30px' }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{
            width: '2px',
            background: '#E63946',
            position: 'relative',
            zIndex: 1
          }}
        >
          {/* Data flow from HQ downward - along the line */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`hq-down-${i}`}
              initial={{ top: '0px', opacity: 0 }}
              animate={{ top: '30px', opacity: [0, 1, 1, 0] }}
              transition={{
                delay: 1.5 + i * 0.5,
                duration: 1.2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              style={{
                position: 'absolute',
                left: '-4px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#4ECDC4',
                boxShadow: '0 0 12px #4ECDC4, 0 0 4px #4ECDC4'
              }}
            />
          ))}
        </motion.div>

        {/* Horizontal Branch Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '90%' }}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{
            height: '2px',
            background: '#E63946',
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            justifyContent: 'space-between',
            overflow: 'visible'
          }}
        >
          {/* Animated dots: HQ → left (Stores) */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`hq-to-stores-${i}`}
              initial={{ left: '50%', opacity: 0 }}
              animate={{ left: '8%', opacity: [0, 1, 1, 0] }}
              transition={{
                delay: 1.2 + i * 0.5,
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              style={{
                position: 'absolute',
                top: '-4px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#E63946',
                boxShadow: '0 0 12px #E63946, 0 0 4px #E63946',
                zIndex: 10
              }}
            />
          ))}

          {/* Animated dots: HQ → right (Plant) */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`hq-to-plant-${i}`}
              initial={{ left: '50%', opacity: 0 }}
              animate={{ left: '92%', opacity: [0, 1, 1, 0] }}
              transition={{
                delay: 1.4 + i * 0.5,
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              style={{
                position: 'absolute',
                top: '-4px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#E63946',
                boxShadow: '0 0 12px #E63946, 0 0 4px #E63946',
                zIndex: 10
              }}
            />
          ))}

          {/* Left vertical drop line to stores */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '20px' }}
            transition={{ delay: 0.9, duration: 0.4 }}
            style={{
              position: 'absolute',
              left: '8%',
              top: '0',
              width: '2px',
              background: '#E63946',
              overflow: 'visible'
            }}
          >
            {/* Animated dots flowing from stores UP to HQ - along the line */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`store-flow-${i}`}
                initial={{ top: '25px', opacity: 0 }}
                animate={{ top: '-5px', opacity: [0, 1, 1, 0] }}
                transition={{
                  delay: 2 + i * 0.5,
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                style={{
                  position: 'absolute',
                  left: '-4px',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#4ECDC4',
                  boxShadow: '0 0 12px #4ECDC4, 0 0 4px #4ECDC4',
                  zIndex: 10
                }}
              />
            ))}
          </motion.div>
          {/* Right vertical drop line to plant */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: '20px' }}
            transition={{ delay: 0.9, duration: 0.4 }}
            style={{
              position: 'absolute',
              right: '8%',
              top: '0',
              width: '2px',
              background: '#E63946',
              overflow: 'visible'
            }}
          >
            {/* Animated dots flowing from plant to HQ - along the line */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`plant-flow-${i}`}
                initial={{ top: '20px', opacity: 0 }}
                animate={{ top: '-10px', opacity: [0, 1, 1, 0] }}
                transition={{
                  delay: 2.2 + i * 0.5,
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                style={{
                  position: 'absolute',
                  right: '-4px',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#4ECDC4',
                  boxShadow: '0 0 12px #4ECDC4, 0 0 4px #4ECDC4'
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom Row - Stores/Customers and Plant */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          padding: '0 10%',
          marginTop: '15px',
          position: 'relative'
        }}>

          {/* Stores & Customers Section - Left Side */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '15px'
          }}>

            {/* Stores Label Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              style={{
                background: 'rgba(230, 57, 70, 0.15)',
                borderRadius: '8px',
                padding: '6px 20px',
                border: '1px solid rgba(230, 57, 70, 0.5)',
                textAlign: 'center',
                marginBottom: '5px'
              }}
            >
              <span style={{ color: '#E63946', fontSize: '0.7rem', fontWeight: '700' }}>STORES</span>
            </motion.div>

            {/* Store cards row - 5 stores */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              style={{ display: 'flex', gap: '5px' }}
            >
              {[1, 2, 3, 4, 5].map((store, i) => (
                <motion.div
                  key={`store-${i}`}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + i * 0.1, duration: 0.4 }}
                  style={{
                    background: 'linear-gradient(135deg, #2d2d44, #1f1f2e)',
                    borderRadius: '8px',
                    padding: '8px',
                    border: '1px solid #444',
                    textAlign: 'center',
                    width: '50px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                  }}
                >
                  <div style={{ fontSize: '1rem', marginBottom: '2px' }}>🏪</div>
                  <h4 style={{ color: '#fff', fontSize: '0.5rem' }}>Store {store}</h4>
                </motion.div>
              ))}
            </motion.div>

            {/* Connection line from customers to stores - with animation */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: '20px' }}
              transition={{ delay: 1.7, duration: 0.4 }}
              style={{
                width: '2px',
                background: '#457B9D',
                alignSelf: 'center',
                position: 'relative',
                overflow: 'visible'
              }}
            >
              {/* Animated dots flowing from customers UP to stores */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={`customer-to-store-${i}`}
                  initial={{ top: '25px', opacity: 0 }}
                  animate={{ top: '-5px', opacity: [0, 1, 1, 0] }}
                  transition={{
                    delay: 2.5 + i * 0.5,
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  style={{
                    position: 'absolute',
                    left: '-4px',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#F4A261',
                    boxShadow: '0 0 10px #F4A261, 0 0 4px #F4A261',
                    zIndex: 10
                  }}
                />
              ))}
            </motion.div>

            {/* Customer channels - 7 channels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              style={{ display: 'flex', gap: '4px' }}
            >
              {[
                { icon: '📱', name: 'Mobile' },
                { icon: '💬', name: 'WhatsApp' },
                { icon: '🌐', name: 'Website' },
                { icon: '🔗', name: 'Omni' },
                { icon: '🔗', name: 'Link' },
                { icon: '📞', name: 'Call' },
                { icon: '🚶', name: 'Walk In' }
              ].map((channel, i) => (
                <motion.div
                  key={`channel-${i}`}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.9 + i * 0.08, duration: 0.4 }}
                  style={{
                    background: 'linear-gradient(135deg, #1a3a52, #0f2436)',
                    borderRadius: '6px',
                    padding: '6px 4px',
                    border: '1px solid #457B9D',
                    textAlign: 'center',
                    width: '42px',
                    boxShadow: '0 4px 15px rgba(69, 123, 157, 0.2)'
                  }}
                >
                  <div style={{ fontSize: '0.85rem', marginBottom: '1px' }}>{channel.icon}</div>
                  <h4 style={{ color: '#A8DADC', fontSize: '0.4rem' }}>{channel.name}</h4>
                </motion.div>
              ))}
            </motion.div>

            {/* Customers label */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.4 }}
              style={{
                background: 'rgba(69, 123, 157, 0.15)',
                borderRadius: '8px',
                padding: '6px 20px',
                border: '1px solid rgba(69, 123, 157, 0.5)',
                textAlign: 'center'
              }}
            >
              <span style={{ color: '#457B9D', fontSize: '0.7rem', fontWeight: '700' }}>CUSTOMER CHANNELS</span>
            </motion.div>
          </div>

          {/* Plant Section - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            {/* Connection label */}
            <div style={{
              position: 'absolute',
              top: '-15px',
              right: '0%',
              color: '#E63946',
              fontSize: '0.6rem'
            }}>
              Connects to ↴
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.4 }}
              style={{
                background: 'linear-gradient(135deg, #2d2d44, #1f1f2e)',
                borderRadius: '8px',
                padding: '8px',
                border: '1px solid #444',
                textAlign: 'center',
                width: '60px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                marginTop: '15px'
              }}
            >
              <div style={{ fontSize: '1rem', marginBottom: '2px' }}>🏭</div>
              <h4 style={{ color: '#fff', fontSize: '0.55rem' }}>Plant</h4>
              <p style={{ color: '#666', fontSize: '0.45rem' }}>Manufacturing</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.4 }}
              style={{
                background: 'rgba(230, 57, 70, 0.15)',
                borderRadius: '5px',
                padding: '4px 14px',
                border: '1px solid rgba(230, 57, 70, 0.4)'
              }}
            >
              <span style={{ color: '#E63946', fontSize: '0.65rem', fontWeight: '600' }}>Production</span>
            </motion.div>
          </motion.div>

          {/* Plant to Stores Connection Line - Animated (both directions) */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '55%', opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
            style={{
              position: 'absolute',
              bottom: '85px',
              left: '23%',
              height: '2px',
              background: '#E63946',
              zIndex: 1
            }}
          >
            {/* Label */}
            <div style={{
              position: 'absolute',
              top: '-15px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#4ECDC4',
              fontSize: '0.55rem',
              whiteSpace: 'nowrap'
            }}>
              Plant ↔ Stores (Supply Flow)
            </div>

            {/* Animated dots: Plant → Stores (right to left) */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`plant-to-store-${i}`}
                initial={{ left: '100%', opacity: 0 }}
                animate={{ left: '0%', opacity: [0, 1, 1, 0] }}
                transition={{
                  delay: 2.5 + i * 0.8,
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                style={{
                  position: 'absolute',
                  top: '-4px',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#4ECDC4',
                  boxShadow: '0 0 12px #4ECDC4, 0 0 4px #4ECDC4'
                }}
              />
            ))}

            {/* Animated dots: Stores → Plant (left to right) */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={`store-to-plant-${i}`}
                initial={{ left: '0%', opacity: 0 }}
                animate={{ left: '100%', opacity: [0, 1, 1, 0] }}
                transition={{
                  delay: 3 + i * 0.8,
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                style={{
                  position: 'absolute',
                  top: '-12px',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#E9C46A',
                  boxShadow: '0 0 12px #E9C46A, 0 0 4px #E9C46A'
                }}
              />
            ))}
          </motion.div>

        </div>

      </div>

    </div>
  )
}

export default Slide5