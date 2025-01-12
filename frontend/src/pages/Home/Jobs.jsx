import React from "react";
import FilterCard from "../../components/FilterCard";
import Job from "../../components/Job";
import { useSelector } from "react-redux";

function Jobs() {
  const {allJobs} = useSelector(store => store.job);
  return (
    <div className="mx-20 grid grid-cols-12">
      <div className="col-span-2">
        <FilterCard></FilterCard>
      </div>
      <div className="col-span-10">
    <div className="grid grid-cols-3 mt-10 gap-5">
      {
      allJobs.length >= 1 ?
      allJobs.map((item, i) => (
       <Job key={item._id} item={item} />
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
