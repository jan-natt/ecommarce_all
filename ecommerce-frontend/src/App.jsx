import { Routes, Route, Link } from 'react-router-dom'
import Login from './page/Login'
import Register from './page/Register'
import Home from './page/Home'
import About from './page/About'
import './App.css'

function App() {
  return (
    
    <div className="App">

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
