import React from 'react'
import { Button } from './ui/button'

function Description() {
  let isApplied = true;
  return (
      <div className='mx-20 mt-8'>
          <div className='flex justify-between'> 
            <div>
              <h2 className='text-xl font-semibold mb-3'>Frontend Developer</h2>
              <div className="text-[11px] flex gap-3">
      <div className="bg-gray-100 font-semibold text-blue-600 p-[1px] px-2">
        12 Positions
      </div>
      <div className="bg-gray-100 font-semibold text-red-600 p-[1px] px-2">
        Part Time
      </div>
      <div className="bg-gray-100 font-semibold text-purple-600 p-[1px] px-2">
        24 LPA
      </div>
    </div>
            </div>
            <div>
              <Button 
              disabled={`${isApplied ? 'true' : ''}`}
              className='bg-black text-white hover:text-white hover:bg-black'
              >{isApplied ? 'Already Applied' : "Apply Now"}</Button>
            </div>
          </div>
          <div className='mt-5 '>
            <h3 className='text-base font-semibold text-gray-800'>Job Description</h3>
            <hr className='my-3' />
            <div className='text-sm text-gray-600 tracking-tight space-y-1'>
              <p><span className='text-black font-semibold'>Role:</span> &nbsp;&nbsp;&nbsp;&nbsp;<span>Frontend</span></p>
              <p><span className='text-black font-semibold'>Location:</span> &nbsp;&nbsp;&nbsp;&nbsp;<span>Peshawar</span></p>
              <p><span className='text-black font-semibold'>Description:</span> &nbsp;&nbsp;&nbsp;&nbsp;<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, cumque?</span></p>
              <p><span className='text-black font-semibold'>Experience:</span> &nbsp;&nbsp;&nbsp;&nbsp;<span>1 yr</span></p>
              <p><span className='text-black font-semibold'>Salary:</span> &nbsp;&nbsp;&nbsp;&nbsp;<span>12 LPA</span></p>
              <p><span className='text-black font-semibold'>Total Applicant:</span> &nbsp;&nbsp;&nbsp;&nbsp;<span>4</span></p>
              <p><span className='text-black font-semibold'>Posted Date:</span> &nbsp;&nbsp;&nbsp;&nbsp;<span>4-3-2025</span></p>
            </div>
          </div>
      </div>
  )
}

export default Description