import React, { useEffect } from 'react'
import Job from '../../components/Job'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchQuery } from '../../redux/jobSlice';
import useGetAllJobs from '../../hooks/useGetAllJobs';

function Browse() {
  useGetAllJobs()
  const {allJobs} = useSelector(store => store.job)
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(setSearchQuery(""))
    }
  },[])
  return (
    <div className='mx-20'>
        <h1 className='text-xl mt-5 font-semibold'>Search Result ({allJobs.length})</h1>
        <div className="grid grid-cols-3 mt-5 gap-5">
      {allJobs.map((item, i) => (
       <Job item={item} />
      ))}
    </div>
    </div>
  )
}

export default Browse