import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from '../../components/shared/Navbar'
import Companies from './Companies'
import CompaniesCreate from '../../components/admin/CompaniesCreate'
function Index() {  

  return (
    <div>
      <Navbar />  
      <Routes>
        <Route path="/companies" element={<Companies />} />
        <Route path="/companies/create" element={<CompaniesCreate />} />
      <Route path="/*" element={<>No Page Found</>} />
      </Routes>
    </div>
  )
}

export default Index