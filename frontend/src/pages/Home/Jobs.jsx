import React from "react";
import FilterCard from "../../components/FilterCard";
import Job from "../../components/Job";

const card = [1, 2, 3, 4, 52, 2];

function Jobs() {
  return (
    <div className="mx-20 grid grid-cols-12">
      <div className="col-span-2">
        <FilterCard></FilterCard>
      </div>
      <div className="col-span-10">
    <div className="grid grid-cols-3 mt-10 gap-5">
      {card.map((item, i) => (
       <Job />
      ))}
    </div>
    </div>
    </div>

  )
}

export default Jobs;
