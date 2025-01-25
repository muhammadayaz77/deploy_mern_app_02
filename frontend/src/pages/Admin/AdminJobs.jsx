import React from 'react'
import {Button} from '../../components/ui/button'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useGetAllAdminJobs from '../../hooks/useGetAllAdminJobs'
import AdminJobsTable from '../../components/admin/AdminJobsTable'
import { setSearchJobByText } from '../../redux/jobSlice'
function AdminJobs() {
  useGetAllAdminJobs();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input,setInput] = useState('');
  useEffect(() => {
    dispatch(setSearchJobByText(input))
  },[input])
  return (
    <div className='mx-40 mt-5'>
      <div className='flex justify-between'>
        <input
        onChange={(e) => setInput(e.target.value)}
       type="text" 
        className='border border-gray-400 p-2 w-1/2'
        placeholder='Filter By Name ,Role' />
        <Button
        onClick={() => navigate("/admin/jobs/create")}
        className='text-white bg-black hover:text-white hover:bg-black hover:shadow-lg'>New Job</Button>
      </div>
      <div className='mt-5'>
        <AdminJobsTable />
      </div>
    </div>
  )
}

export default AdminJobs