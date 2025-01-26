import React from 'react'
import { useNavigate } from 'react-router-dom'

function Job({item}) {
  let navigate = useNavigate();
  let daysAgoFtn = (mongodbTime) => {
    let time = new Date(mongodbTime);
    let currentTime = new Date();
    let timeDiff = currentTime - time;
    return Math.floor(timeDiff / (1000 * 24 * 60 * 60))
  }
  return (
    <div className="text-sm border shadow-lg px-4 py-2">
    <div className="flex justify-between items-center">
      <p>{daysAgoFtn(item.createdAt) == 0 ? "Today" : `${daysAgoFtn(item.createdAt)} days ago`}</p>
    </div>
    <div className="flex my-3 items-center">
      <div>
       {
        item.company &&  <img
        className="w-10 rounded-full mr-2 border object-fit"
        src={item.company?.logo || "https://via.placeholder.com/150"}
        alt="company image"
      /> 
       }
      </div>
      <div>
        <h1 className="font-semibold text-lg">{item.company?.name}</h1>
        <p className="text-slate-500 font-semibold">{item.location}</p>
      </div>
    </div>
    <h2 className="font-bold text-lg">{item.title}</h2>
    <p className="text-slate-500 mt-2 mb-4">
    {item.description}
    </p>
    <div className="text-[11px] flex gap-3">
      <div className="bg-gray-100 font-semibold text-blue-600 p-[1px] px-2">
        {item.position}
      </div>
      <div className="bg-gray-100 font-semibold text-red-600 p-[1px] px-2">
        {item.jobType}
      </div>
      <div className="bg-gray-100 font-semibold text-purple-600 p-[1px] px-2">
        {item.salary} LPA
      </div>
    </div>
    <div className="text-sm my-3">
      <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg font-semibold mr-2"
      onClick={() => navigate(`/description/${item._id}`)}
      >Details</button>
      <button className="bg-[#6A38C2] hover:bg-[#6435b6] text-white px-4 py-2 rounded-lg font-semibold">Save For Laters</button>
    </div>
  </div>
  )
}

export default Job