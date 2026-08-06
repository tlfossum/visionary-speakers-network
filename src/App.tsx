import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import { VSNLanding } from './pages/VSNLanding'
import { SpeakerProfile } from './pages/SpeakerProfile'
import { AboutVSN } from './pages/AboutVSN'
import { FindYourSpeaker } from './pages/FindYourSpeaker'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) { el.scrollIntoView(); return }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<VSNLanding />} />
        <Route path="/about" element={<AboutVSN />} />
        <Route path="/find-your-perfect-speaker" element={<FindYourSpeaker />} />
        <Route path="/speakers/:id" element={<SpeakerProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
