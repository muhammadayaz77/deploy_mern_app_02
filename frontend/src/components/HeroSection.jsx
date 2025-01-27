import React, { useState } from 'react'
import {Search} from 'lucide-react'
import {Button} from './ui/button'
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/jobSlice';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const [query,setQuery] = useState("");
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let handleButton = () => {
    dispatch(setSearchQuery(query));
    navigate('/browse')
  }
  return (
    <div className='flex flex-col items-center w-full'>
      <p className='bg-gray-100 text-[#f83002] px-2 py-[1px] mt-9 mb-5 font-semibold rounded-xl'>No. 1 Job Hunt Website.</p>
      <h1 className='text-h1 leading-tight'><span>Search Apply & <br /> Get Your</span> <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nulla quisquam libero autem facil</p>
      <div className='w-[40%] mx-auto flex items-center justify-center mt-5'>
  <input 
    type="text" 
    onChange={(e) => setQuery(e.target.value)}
    className='outline-none border border-gray-200 shadow-lg px-4 py-2 w-full h-[40px] rounded-l-xl' 
    placeholder='Find your dream job' 
  />
  <Button
  onClick={handleButton}
  className='h-[40px] flex items-center justify-center bg-[#6A38c2] hover:bg-[#592da4] shadow-xl rounded-none text-white rounded-r-xl'>
    <Search className=' w-5' />
  </Button>
</div>

    </div>
  )
}

export default HeroSection