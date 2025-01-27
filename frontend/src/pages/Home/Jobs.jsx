import React, { useEffect, useState } from "react";
import FilterCard from "../../components/FilterCard";
import Job from "../../components/Job";
import { useSelector } from "react-redux";
import {motion} from 'framer-motion'
function Jobs() {
  const {allJobs,searchQuery} = useSelector(store => store.job);
  let [filterJobs,setFilterJobs] = useState(allJobs);
  
  useEffect(() => {
    if(searchQuery){
      const filteredJobs = allJobs.filter((job) => {
        return job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||  
       job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
       job.location.toLowerCase().includes(searchQuery.toLowerCase())   
      })
      setFilterJobs(filteredJobs)
    }else{
      setFilterJobs(allJobs)
    }
  },[allJobs,searchQuery])

  return (
    <div className="mx-20 grid grid-cols-12">
      <div className="col-span-2">
        <FilterCard></FilterCard>
      </div>
      <div className="col-span-10">
    <div className="grid grid-cols-3 mt-10 gap-5">
      {
      filterJobs.length >= 1 ?
      filterJobs.map((item, i) => (
        <motion.div
        initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}} 
        exit={{opacity:0,x:-100}} 
        transition={{duration:0.3}} 
         key={item._id}>
       <Job  item={item} />

        </motion.div>
      ))
      :
      <span className="text-gray-600">No Jobs Available</span>
    }
    </div>
    </div>
    </div>

  )
}

export default Jobs;
