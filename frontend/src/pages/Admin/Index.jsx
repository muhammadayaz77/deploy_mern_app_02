import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Companies from '../../components/admin/Companies'
function Index() {
  return (
    <div>
      <Routes>
        <Route path="/companies" element={<Companies />} />
      <Route path="/*" element={<>No Page Found</>} />
      </Routes>
    </div>
  )
}

export default Index