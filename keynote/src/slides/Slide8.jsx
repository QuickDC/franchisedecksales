import { motion } from 'framer-motion'

const Slide8 = () => {
  const questions = [
    { icon: '❓', text: 'Where is my business weak today?' },
    { icon: '🔍', text: 'What am I missing?' },
    { icon: '🎯', text: 'What should I improve first?' },
    { icon: '💪', text: 'What can help me become better?' },
  ]

  return (
    <div className="slide">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: '3rem', color: '#ff9800', marginBottom: '30px' }}
      >
        My request to all of you today is simple:
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{ fontSize: '1.8rem', marginBottom: '40px', maxWidth: '800px', color: '#a0aec0' }}
      >
        Pay attention. Stay curious. Ask questions. Think deeply.
      </motion.p>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{ fontSize: '2rem', color: '#4fc3f7', marginBottom: '30px' }}
      >
        As experts share their knowledge, ask yourself:
      </motion.h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', maxWidth: '900px', marginTop: '30px' }}>
        {questions.map((q, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 + index * 0.2, duration: 0.5 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              padding: '20px 25px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '12px',
              textAlign: 'left'
            }}
          >
            <span style={{ fontSize: '2rem' }}>{q.icon}</span>
            <span style={{ fontSize: '1.4rem' }}>{q.text}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        style={{ marginTop: '50px', fontSize: '1.8rem', color: '#f44336' }}
      >
        The real value lies in what you take from here and what actions you decide to take after this.
      </motion.p>
    </div>
  )
}

export default Slide8