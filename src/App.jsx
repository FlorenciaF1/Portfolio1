import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landing/LandingPage'
import About from './components/About/About'
import Work from './components/Work/Work'
import Skills from './components/Skills/Skills'
// import Contact from './components/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="landing-container">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/skills' element={<Skills/>}/>
        {/* <Route path='/contact' element={<Contact/>}/> */}
      </Routes>
    </div>
  )
}

export default App