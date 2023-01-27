import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landing/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="landing-container">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
    </div>
  )
}

export default App
