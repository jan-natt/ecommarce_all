import { Routes, Route } from 'react-router-dom'
import Login from './page/Login'
import Register from './page/Register'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<div><h1>Welcome to E-commerce</h1><a href="/login">Login</a> | <a href="/register">Register</a></div>} />
      </Routes>
    </div>
  )
}

export default App
