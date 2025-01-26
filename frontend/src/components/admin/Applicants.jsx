import React, { useEffect } from 'react'
import ApplicantsTable from './ApplicantsTable'
import axios from 'axios'
import { APPLICATIONS_API_END_POINT } from '../../utils/constant'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAllApplicants } from '../../redux/applicantsSlice'

function Applicants() {
  const params = useParams();
  const dispatch = useDispatch();
  const {applicants} = useSelector(store=> store.applicants)   
  useEffect(() => {
    const fetchedApplicants = async () => {
      await axios.get(`${APPLICATIONS_API_END_POINT}/${params.id}/applicants`,{
        withCredentials : true
      })
      .then(res => {
        dispatch(setAllApplicants(res.data.job.applications))
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    }
    fetchedApplicants();
  },[params.id])
  return (
    <div className='mx-40 mt-5'>
      <div>
        <h1 className='text-xl font-semibold'>Applicants ({applicants.length})</h1>
        <div>
          <ApplicantsTable />
        </div>
      </div>
    </div>
  )
}

export default Applicants