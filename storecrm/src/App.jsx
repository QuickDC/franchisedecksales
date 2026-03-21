import { useState, useEffect } from 'react'
import './App.css'

// QDC Software Suite Slides
import Slide1 from './slides/Slide1'  // Overview - 6 Modules
import Slide2 from './slides/Slide2'  // Customer App
import Slide3 from './slides/Slide3'  // Rider App
import Slide4 from './slides/Slide4'  // Store Management
import Slide5 from './slides/Slide5'  // Workshop Management
import Slide6 from './slides/Slide6'  // Home Pickup & Delivery
import Slide7 from './slides/Slide7'  // Super Admin
import Slide8 from './slides/Slide8'  // Data Flow & Integration

// SLIDE REGISTRY
const slides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
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
      <img src="/logo.png" alt="Logo" className="slide-logo" />
      <CurrentSlideComponent />
      <div className="slide-counter">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  )
}

export default App
