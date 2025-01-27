import axios from 'axios'
import React, { useEffect } from 'react'
import { JOB_API_END_POINT } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { setAllJobs } from '../redux/jobSlice';

function useGetAllJobs() {
  let dispatch = useDispatch();
  let {searchQuery} = useSelector(store => store.job)
  useEffect(() => {
    const fetchedAllJobs = async() => {
      await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchQuery}`,{
        withCredentials : true
      })
      .then(res => {
        dispatch(setAllJobs(res.data.jobs))
        console.log(res)
      })
      .catch(err => {
        console.log("Error"+err)
      })
    }
    fetchedAllJobs();
  },[])
}

export default useGetAllJobs