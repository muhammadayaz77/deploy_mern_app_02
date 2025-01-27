import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { APPLICATIONS_API_END_POINT } from "../utils/constant";
import { setAllAppliedJobs } from "../redux/jobSlice";


const useGetAppliedJob = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchedJob = async() => {
      await axios.get(`${APPLICATIONS_API_END_POINT}/get`,{
        withCredentials:true
      })
      .then(res => {
        dispatch(setAllAppliedJobs(res.data.applications))
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    }
    fetchedJob()
  },[])
}

export default useGetAppliedJob