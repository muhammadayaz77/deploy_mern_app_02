import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from '../../components/shared/Navbar'
import Companies from './Companies'
import CompaniesCreate from '../../components/admin/CompaniesCreate'
import CompaniesSetup from '../../components/admin/CompaniesSetup'
import AdminJobs from './AdminJobs'
import PostJobs from '../../components/admin/PostJobs'
import Applicants from '../../components/admin/Applicants'
function Index() {  

  return (
    <div>
      <Navbar />  
      <Routes>
        <Route path="/companies" element={<Companies />} />
        <Route path="/companies/create" element={<CompaniesCreate />} />
        <Route path="/companies/:id" element={<CompaniesSetup />} />
        <Route path="/jobs" element={<AdminJobs />} />
        <Route path="/jobs/create" element={<PostJobs />} />
        <Route path="/jobs/:id/applicants" element={<Applicants />} />
      <Route path="/*" element={<>No Page Found</>} />
      </Routes>
    </div>
  )
}

export default Index