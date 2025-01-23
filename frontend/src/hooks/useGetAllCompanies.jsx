import axios from 'axios'
import React, { useEffect } from 'react'
import { COMPANY_API_END_POINT } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { setCompanies } from '../redux/CompanySlice';

function useGetAllCompanies() {
  let dispatch = useDispatch();
  useEffect(() => {
    console.log('hi')
    const fetchedAllCompanies = async() => {
      await axios.get(`${COMPANY_API_END_POINT}/get`,{
        withCredentials : true
      })
      .then(res => {
        dispatch(setCompanies(res.data.companies))
        console.log(res)
      })
      .catch(err => {
        console.log("Error"+err)
      })
    }
    fetchedAllCompanies();
  },[])
}

export default useGetAllCompanies