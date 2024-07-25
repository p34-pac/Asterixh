/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About/About'
import Works from './Pages/Works/Works'
import Contact from './Pages/Contact/Contact'
import Services from './Pages/Services/Services'

function App() {

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/works' element={<Works />} />
        <Route path='/contact-me' element={<Contact />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </>
  )
}

export default App
