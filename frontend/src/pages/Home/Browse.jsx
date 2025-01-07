import React from 'react'
import Job from '../../components/Job'
const card = [1, 2, 3, 4, 52, 2];

function Browse() {
  return (
    <div className='mx-20'>
        <h1 className='text-xl mt-5 font-semibold'>Search Result ({card.length})</h1>
        <div className="grid grid-cols-3 mt-5 gap-5">
      {card.map((item, i) => (
       <Job />
      ))}
    </div>
    </div>
  )
}

export default Browse