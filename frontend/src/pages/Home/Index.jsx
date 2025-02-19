import Home from './Home'
import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import About from './About'
import Navbar from '../../components/shared/Navbar'
import Jobs from './Jobs'
import Browse from './Browse'
import Profile from './Profile'
import Description from '../../components/Description'
import useGetAllJobs from '../../hooks/useGetAllJobs'
import { useSelector } from 'react-redux'

function Index() {
  useGetAllJobs();
  let navigate = useNavigate();
  let {user} = useSelector(store => store.auth);
  useEffect(() => {
    if(user == null){
      navigate("/auth/login");
    }
    else if(user.role === 'recruiter'){
      navigate("/admin/companies");
    }
  },[])
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/jobs' element={<Jobs />} />
      <Route path='/browse' element={<Browse />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/description/:id' element={<Description />} />
      <Route path="/*" element={<>No Page Found</>} />
    </Routes>
    </>
  )
}

export default Index