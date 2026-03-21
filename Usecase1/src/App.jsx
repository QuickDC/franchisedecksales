import { useState, useEffect, Suspense, lazy } from 'react'
import './App.css'

// IMPORT YOUR SLIDES HERE
// Add new slides as you create them
import Slide1 from './slides/Slide1'
import Slide2 from './slides/Slide2'
import Slide3 from './slides/Slide3'
import Slide4 from './slides/Slide4'
import Slide5 from './slides/Slide5'
import Slide6 from './slides/Slide6'

// Lazy load 3D scene for performance
const Scene3D = lazy(() => import('./components/Scene3D'))
// import Slide4 from './slides/Slide4'
// import Slide5 from './slides/Slide5'

// SLIDE REGISTRY - Add your slide components here
const slides = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
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
      <Suspense fallback={null}>
        <Scene3D slide={currentSlide} />
      </Suspense>
      <div className="slide-3d">
        <CurrentSlideComponent />
      </div>
      <div className="slide-counter">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  )
}

export default App
