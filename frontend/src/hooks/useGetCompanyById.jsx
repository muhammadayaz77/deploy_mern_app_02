import axios from 'axios'
import React, { useEffect } from 'react'
import { COMPANY_API_END_POINT, JOB_API_END_POINT } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { setSingleCompany } from '../redux/CompanySlice';

function useGetCompanyById(companyId) {
  let dispatch = useDispatch();
  useEffect(() => {
    const fetchedSingleCompany = async() => {
      await axios.get(`${COMPANY_API_END_POINT}/get/${companyId}`,{
        withCredentials : true
      })
      .then(res => {
        dispatch(setSingleCompany(res.data.company))
        console.log(res)
      })
      .catch(err => {
        console.log("Error"+err)
      })
    }
    fetchedSingleCompany();
  },[companyId,dispatch])
}

export default useGetCompanyById  