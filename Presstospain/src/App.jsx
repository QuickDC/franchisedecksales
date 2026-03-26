import { useState, useEffect } from 'react'
import './App.css'

// Import all slides
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
import Slide17 from './slides/Slide17'
import Slide18 from './slides/Slide18'
import Slide19 from './slides/Slide19'
import Slide20 from './slides/Slide20'

// Logo component
import Logo from './components/Logo'
import PresstoLogo from './components/PresstoLogo'

// Slide registry
const slides = [
  Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10,
  Slide11, Slide12, Slide13, Slide14, Slide15, Slide16, Slide17, Slide18, Slide19, Slide20
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

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
      <PresstoLogo />
      <Logo />
      <CurrentSlideComponent />
      <div className="slide-counter">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  )
}

export default App