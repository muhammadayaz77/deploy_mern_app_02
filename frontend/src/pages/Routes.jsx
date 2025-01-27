import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home/Index.jsx'
import Auth from './Auth/Index.jsx'
import Admin from './Admin/Index.jsx'
import ProtectedRoutes from '../ProtectedRoutes/ProtectedRoutes.jsx'

function Index() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/admin/*" element={<ProtectedRoutes><Admin /></ProtectedRoutes>} />
    </Routes>   
    </BrowserRouter>

    </>
  )
}

export default Index