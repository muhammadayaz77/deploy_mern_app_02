import React from 'react'
import LatestJobCards from './LatestJobCards'
let random = [1,23,53,3,5,3]
function LatestJob() {
  return (
    <div className='mx-20 my-20'>
    <h1 className='text-4xl font-bold mb-10'><span className='text-[#6a38c2]'>Latest & Top </span>Job Openings</h1>
    <div className='grid grid-cols-3 gap-5'>
      {
        random.map((item,index)=> (
          <LatestJobCards />
        ))
      }

    </div>
    </div>
  )
}

export default LatestJob