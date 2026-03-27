import { useState, useEffect } from 'react'
import './App.css'

// IMPORT YOUR SLIDES HERE
// Add new slides as you create them
import Slide1 from './slides/Slide1'
import Slide2 from './slides/Slide2'
import Slide3 from './slides/Slide3'
import Slide4 from './slides/Slide4'
import Slide5 from './slides/Slide5'
import Slide6 from './slides/Slide6'
import Slide7 from './slides/Slide7'
import Slide8 from './slides/Slide8'
import Slide9 from './slides/Slide9'
import Slide10 from './slides/Slide10'
import Slide11 from './slides/Slide11'
import Slide12 from './slides/Slide12'
import Slide13 from './slides/Slide13'
import Slide14 from './slides/Slide14'
import Slide15 from './slides/Slide15'
import Slide16 from './slides/Slide16'

// SLIDE REGISTRY - Add your slide components here
const slides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
  Slide15,
  Slide16,
]

function App() {
  // Support URL parameter for PDF generation (e.g., ?slide=0)
  const getInitialSlide = () => {
    const params = new URLSearchParams(window.location.search)
    const slideParam = params.get('slide')
    return slideParam ? parseInt(slideParam, 10) : 0
  }

  const [currentSlide, setCurrentSlide] = useState(getInitialSlide)

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1)
      } else if (e.key === 'ArrowLeft' && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSlide])

  const CurrentSlideComponent = slides[currentSlide]

  return (
    <div className="presentation">
      <CurrentSlideComponent />
      <div className="slide-counter">
        {currentSlide + 1} / {slides.length}
      </div>
      {/* Optional: Add logo */}
      {/* <img src="/logo.png" alt="Logo" className="logo" /> */}
    </div>
  )
}

export default App
