import axios from 'axios'
import React, { useEffect } from 'react'
import { JOB_API_END_POINT } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { setAllAdminJobs } from '../redux/jobSlice';

function useGetAllAdminJobs() {
  let dispatch = useDispatch();
  useEffect(() => {
    const fetchedAllAdminJobs = async() => {
      await axios.get(`${JOB_API_END_POINT}/getadminjobs`,{
        withCredentials : true
      })
      .then(res => {
        dispatch(setAllAdminJobs(res.data.jobs))
        console.log(res)
      })
      .catch(err => {
        console.log("Error : "+err);
      })
    }
    fetchedAllAdminJobs();
  },[dispatch])
}

export default useGetAllAdminJobs