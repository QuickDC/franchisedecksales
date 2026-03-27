import { motion } from 'framer-motion'
import logoImg from '../QDCwhitelogo.png'
import ownerImg from '../owner.svg'

const Slide8 = () => {
  return (
    <div className="slide" style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #0a1628 0%, #0f2847 50%, #0a1628 100%)',
      padding: '40px 60px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      overflow: 'hidden'
    }}>
      {/* Logo */}
      <motion.img
        src={logoImg}
        alt="QDC Logo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{
          position: 'absolute',
          top: 30,
          right: 30,
          height: 35,
          objectFit: 'contain',
          zIndex: 30
        }}
      />

      {/* TOP: Title + Sub-line */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          fontSize: '2.8rem',
          fontWeight: 700,
          lineHeight: 1.1,
          color: '#ffffff',
          marginBottom: 4,
          textAlign: 'center'
        }}
      >
        Kal aapka business <span style={{ color: '#4fc3f7' }}>aise</span> chal sakta hai
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        style={{
          fontSize: '1.2rem',
          color: '#94a3b8',
          textAlign: 'center',
          marginBottom: 20,
          letterSpacing: '1px'
        }}
      >
        Connected. Convenient. Controlled.
      </motion.p>

      {/* Full SVG layout */}
      <svg
        viewBox="0 0 1200 600"
        style={{
          flex: 1,
          width: '100%',
          height: '100%'
        }}
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a2744" />
            <stop offset="100%" stopColor="#0f1729" />
          </linearGradient>
          <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f1729" />
          </linearGradient>
          <linearGradient id="pathGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4fc3f7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#4fc3f7" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="pathGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="pathGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="pathGrad4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.1" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* CENTER: Circular Owner Image */}
        <g transform="translate(600, 320)">
          <circle
            r="130"
            fill="url(#centerGrad)"
            stroke="#fbbf24"
            strokeWidth="3"
            strokeOpacity="0.5"
            filter="url(#glow)"
          />
          {/* Owner SVG */}
          <image
            href={ownerImg}
            x="-100"
            y="-100"
            width="200"
            height="200"
            preserveAspectRatio="xMidYMid meet"
          />
          <text
            x="0"
            y="145"
            textAnchor="middle"
            fill="#fbbf24"
            fontSize="14"
            fontWeight="700"
            letterSpacing="2"
          >SMART OWNER</text>
          <text
            x="0"
            y="158"
            textAnchor="middle"
            fill="#94a3b8"
            fontSize="12"
          >Everything on phone</text>
        </g>

        {/* SEMICIRCLE ELEMENTS AROUND THE CENTER */}

        {/* TOP: CXO CONTROL */}
        <g transform="translate(600, 80)">
          <rect
            x="-90"
            y="-35"
            width="180"
            height="70"
            rx="12"
            fill="rgba(15,23,41,0.95)"
            stroke="#f59e0b"
            strokeWidth="2"
            strokeOpacity="0.5"
          />
          <circle cx="-70" cy="-12" r="4" fill="#22c55e" />
          <text x="-60" y="-8" fill="#fbbf24" fontSize="10" fontWeight="700" letterSpacing="1">CXO CONTROL</text>
          <text x="-70" y="15" fill="#64748b" fontSize="8">Customers</text>
          <text x="-70" y="28" fill="#fff" fontSize="14" fontWeight="700">1,247</text>
          <text x="0" y="15" fill="#64748b" fontSize="8">Revenue</text>
          <text x="0" y="28" fill="#4fc3f7" fontSize="14" fontWeight="700">₹8.5L</text>
          <text x="50" y="15" fill="#64748b" fontSize="8">Orders</text>
          <text x="50" y="28" fill="#fff" fontSize="14" fontWeight="700">342</text>
        </g>

        {/* TOP LEFT: Booking Channels */}
        <g transform="translate(280, 160)">
          {/* App */}
          <rect x="-130" y="-20" width="60" height="40" rx="20" fill="rgba(30,40,55,0.8)" stroke="#4fc3f7" strokeWidth="1" strokeOpacity="0.4" />
          <text x="-100" y="5" fill="#4fc3f7" fontSize="11" fontWeight="600" textAnchor="middle">App</text>
          {/* WhatsApp */}
          <rect x="-60" y="-20" width="80" height="40" rx="20" fill="rgba(30,40,55,0.8)" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.4" />
          <text x="-20" y="5" fill="#22c55e" fontSize="11" fontWeight="600" textAnchor="middle">WhatsApp</text>
          {/* Website */}
          <rect x="30" y="-20" width="75" height="40" rx="20" fill="rgba(30,40,55,0.8)" stroke="#a855f7" strokeWidth="1" strokeOpacity="0.4" />
          <text x="67" y="5" fill="#a855f7" fontSize="11" fontWeight="600" textAnchor="middle">Website</text>
        </g>

        {/* LEFT: Customer */}
        <g transform="translate(180, 320)">
          <rect x="-55" y="-55" width="110" height="110" rx="20" fill="url(#boxGrad)" stroke="#4fc3f7" strokeWidth="2" strokeOpacity="0.5" />
          <text x="0" y="-10" fill="#4fc3f7" fontSize="36" fontWeight="700" textAnchor="middle">C</text>
          <text x="0" y="25" fill="#fff" fontSize="14" fontWeight="600" textAnchor="middle">Customer</text>
        </g>

        {/* BOTTOM LEFT: Delivered */}
        <g transform="translate(280, 480)">
          <rect x="-70" y="-22" width="140" height="44" rx="22" fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeWidth="2" strokeOpacity="0.4" />
          <text x="0" y="5" fill="#22c55e" fontSize="14" fontWeight="700" textAnchor="middle">✓ Delivered</text>
        </g>

        {/* BOTTOM: Rider */}
        <g transform="translate(600, 530)">
          <circle r="30" fill="url(#boxGrad)" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.5" />
          <text x="0" y="5" fill="#fbbf24" fontSize="22" fontWeight="700" textAnchor="middle">R</text>
          <rect x="-35" y="35" width="70" height="25" rx="12" fill="rgba(245,158,11,0.2)" />
          <text x="0" y="50" fill="#fbbf24" fontSize="10" fontWeight="600" textAnchor="middle">Rider</text>
        </g>

        {/* BOTTOM RIGHT: Workshop */}
        <g transform="translate(1020, 480)">
          <rect x="-50" y="-50" width="100" height="100" rx="18" fill="url(#boxGrad)" stroke="#a855f7" strokeWidth="2" strokeOpacity="0.5" />
          <text x="0" y="-5" fill="#a855f7" fontSize="32" fontWeight="700" textAnchor="middle">W</text>
          <text x="0" y="28" fill="#a855f7" fontSize="12" fontWeight="600" textAnchor="middle">Workshop</text>
        </g>

        {/* RIGHT: Store */}
        <g transform="translate(1020, 320)">
          <rect x="-60" y="-60" width="120" height="120" rx="22" fill="url(#boxGrad)" stroke="#4fc3f7" strokeWidth="3" strokeOpacity="0.6" filter="url(#glow)" />
          <text x="0" y="-10" fill="#4fc3f7" fontSize="42" fontWeight="700" textAnchor="middle">S</text>
          <text x="0" y="30" fill="#fff" fontSize="14" fontWeight="700" textAnchor="middle">Store</text>
        </g>

        {/* TOP RIGHT: Customer */}
        <g transform="translate(1020, 160)">
          <rect x="-50" y="-50" width="100" height="100" rx="16" fill="url(#boxGrad)" stroke="#4fc3f7" strokeWidth="2" strokeOpacity="0.5" />
          <text x="0" y="-5" fill="#4fc3f7" fontSize="32" fontWeight="700" textAnchor="middle">C</text>
          <text x="0" y="28" fill="#fff" fontSize="12" fontWeight="600" textAnchor="middle">Customer</text>
        </g>

        {/* CURVED PATHS IN SEMICIRCLE */}

        {/* Top left booking to left customer */}
        <path
          d="M 280 185 Q 200 250 180 290"
          fill="none"
          stroke="url(#pathGrad1)"
          strokeWidth="2"
          strokeDasharray="6,4"
        />

        {/* Left customer to center */}
        <path
          d="M 180 350 Q 350 340 500 320"
          fill="none"
          stroke="url(#pathGrad1)"
          strokeWidth="2"
          strokeDasharray="6,4"
        />

        {/* Left customer to delivered */}
        <path
          d="M 180 390 Q 200 440 280 460"
          fill="none"
          stroke="url(#pathGrad1)"
          strokeWidth="2"
          strokeDasharray="6,4"
        />

        {/* Delivered to rider */}
        <path
          d="M 280 500 Q 450 520 570 530"
          fill="none"
          stroke="url(#pathGrad4)"
          strokeWidth="2"
          strokeDasharray="6,4"
        />

        {/* Rider to workshop */}
        <path
          d="M 630 530 Q 800 520 970 470"
          fill="none"
          stroke="url(#pathGrad3)"
          strokeWidth="2"
          strokeDasharray="6,4"
        />

        {/* Workshop to store */}
        <path
          d="M 1020 430 Q 1030 380 1020 350"
          fill="none"
          stroke="url(#pathGrad2)"
          strokeWidth="2"
          strokeDasharray="6,4"
        />

        {/* Store to top right customer */}
        <path
          d="M 1020 280 Q 1020 220 1020 190"
          fill="none"
          stroke="url(#pathGrad1)"
          strokeWidth="2"
          strokeDasharray="6,4"
        />

        {/* Top right customer to center */}
        <path
          d="M 980 160 Q 800 200 680 280"
          fill="none"
          stroke="url(#pathGrad1)"
          strokeWidth="2"
          strokeDasharray="6,4"
        />

        {/* Top right customer to CXO control */}
        <path
          d="M 980 140 Q 850 100 680 100"
          fill="none"
          stroke="url(#pathGrad1)"
          strokeWidth="2"
          strokeDasharray="6,4"
        />

        {/* CXO to booking channels */}
        <path
          d="M 510 80 Q 400 100 320 150"
          fill="none"
          stroke="url(#pathGrad1)"
          strokeWidth="2"
          strokeDasharray="6,4"
        />

        {/* Store to center (closing) */}
        <path
          d="M 960 320 Q 780 300 700 310"
          fill="none"
          stroke="url(#pathGrad1)"
          strokeWidth="2"
          strokeDasharray="6,4"
          strokeOpacity="0.3"
        />
      </svg>
    </div>
  )
}

export default Slide8
