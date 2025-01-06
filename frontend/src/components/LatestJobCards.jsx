import React from 'react'

function LatestJobCards() {
  return (
    <div className='text-sm border shadow-lg px-4 py-2'>
      <div>
        <h1 className='font-semibold text-lg'>Company Name</h1>
        <p className='text-slate-500 font-semibold'>Country</p>
        <h2 className='font-bold text-lg'>Job Title</h2>
        <p className='text-slate-500 mt-2 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
       <div className='text-[11px] flex gap-3'>
       <div className='bg-gray-100 font-semibold text-blue-600 p-[1px] px-2'>12 Positions</div>
       <div className='bg-gray-100 font-semibold text-red-600 p-[1px] px-2'>Part Time</div>
       <div className='bg-gray-100 font-semibold text-purple-600 p-[1px] px-2'>24 LPA</div>
       </div>
    </div>
  )
}

export default LatestJobCards