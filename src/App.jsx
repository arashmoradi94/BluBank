import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login/login'
import React from 'react'
import Help from './pages/Login/components/Help'
import Phoneverify from './pages/Login/components/Phoneverify'
function App() {
  return (
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/help' element={<Help/>} />
        <Route path='/phoneverify' element={<Phoneverify/>} />
      </Routes>
  )
}

export default App
