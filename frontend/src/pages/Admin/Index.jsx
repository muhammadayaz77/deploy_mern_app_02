import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from '../../components/shared/Navbar'
import Companies from '../../components/admin/Companies'
function Index() {
  return (
    <div>
      <Navbar>
      <Routes>
        <Route path="/companies" element={<Companies />} />
      <Route path="/*" element={<>No Page Found</>} />
      </Routes>
      </Navbar>
    </div>
  )
}

export default Index