import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";



const useGetAppliedJob = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchedJob = async() => {
      await axios.get()
      .then(res)
    }
  })
}