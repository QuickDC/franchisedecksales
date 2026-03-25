# Presentation Boilerplate

A ready-to-use React presentation framework with PDF export.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Create your slides
# Edit src/slides/Slide1.jsx, Slide2.jsx, etc.

# 4. Register slides in App.jsx
# Add imports and add to slides array
```

## Creating Slides

### 1. Create a new slide file

```jsx
// src/slides/Slide4.jsx
import { motion } from 'framer-motion'

const Slide4 = () => {
  return (
    <div className="slide">
      <h2 className="slide-title">Your Title</h2>
      <p className="slide-subtitle">Your subtitle</p>

      {/* Add content here */}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        style={{ marginTop: '40px', color: '#4fc3f7' }}
      >
        Key takeaway
      </motion.p>
    </div>
  )
}

export default Slide4
```

### 2. Register in App.jsx

```jsx
import Slide4 from './slides/Slide4'

const slides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,  // Add here
]
```

### 3. Update configuration

```js
// generate-pdfs.js
const TOTAL_SLIDES = 4  // Update count

// merge-pdfs.js
const TOTAL_SLIDES = 4  // Update count
```

## Generating PDFs

```bash
# Terminal 1: Start dev server
npm run dev

# Terminal 2: Generate PDFs
npm run generate-pdfs

# Merge into one file
npm run merge-pdfs
```

## Navigation

- **Arrow Right**: Next slide
- **Arrow Left**: Previous slide

## Animation Tips

Use Framer Motion for smooth animations:

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.6 }}
>
  Content here
</motion.div>
```

## Available CSS Classes

- `.slide` - Main slide container
- `.slide-title` - Main title (3.5rem)
- `.slide-subtitle` - Subtitle (1.8rem)
- `.slide-footer` - Footer text
- `.benefits-grid` - Flex container for benefit items
- `.benefit-item` - Individual benefit card

## Project Structure

```
boilerplate/
├── src/
│   ├── slides/
│   │   ├── Slide1.jsx
│   │   ├── Slide2.jsx
│   │   └── Slide3.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── pdfs/           # Generated PDFs
├── generate-pdfs.js
├── merge-pdfs.js
├── package.json
├── vite.config.js
└── index.html
```
