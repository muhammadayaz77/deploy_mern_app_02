import Home from './Home'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import Navbar from '../../components/shared/Navbar'

function Index() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path="/*" element={<>No Page Found</>} />
    </Routes>
    </>
  )
}

export default Index