import React from 'react'
import {Button} from '../../components/ui/button'
import CompaniesTable from '../../components/admin/CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '../../hooks/useGetAllCompanies'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '../../redux/CompanySlice'
function Companies() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useGetAllCompanies();
  const [input,setInput] = useState('');
  useEffect(() => {
    dispatch(setSearchCompanyByText(input))
  },[input])
  return (
    <div className='mx-40 mt-5'>
      <div className='flex justify-between'>
        <input
        onChange={(e) => setInput(e.target.value)}
       type="text" 
        className='border border-gray-400 p-2 w-1/2'
        placeholder='Filter By Name' />
        <Button
        onClick={() => navigate("/admin/companies/create")}
        className='text-white bg-black hover:text-white hover:bg-black hover:shadow-lg'>New Company</Button>
      </div>
      <div className='mt-5'>
        <CompaniesTable />
      </div>
    </div>
  )
}

export default Companies