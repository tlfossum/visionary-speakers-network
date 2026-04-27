import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { VSNLanding } from './pages/VSNLanding'
import { SpeakerProfile } from './pages/SpeakerProfile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VSNLanding />} />
        <Route path="/speakers/:id" element={<SpeakerProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
