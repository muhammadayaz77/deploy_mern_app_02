import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from '../../components/shared/Navbar'
import Signup from './Signup'
import Login from './Login'

function Index() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path="/*" element={<>No Page Found</>} />
    </Routes>
    </>
  )
}

export default Index