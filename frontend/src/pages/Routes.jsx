import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home/Index.jsx'
import Auth from './Auth/Index.jsx'
import Navbar from '../components/shared/Navbar'

function Index() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/auth/*" element={<Auth />} />
    </Routes>   
    </BrowserRouter>

    </>
  )
}

export default Index