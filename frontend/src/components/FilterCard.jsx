import React, { useEffect, useState } from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/jobSlice';

const filter = [
  {
    filterType : 'country',
    array : ["india","pakistan","bangladesh","nepal"]
  },
  {
    filterType : 'Industry',
    array : ["Frontend Developer","Backend Developer","Data science","FullStack Developer"]
  },
  {
    filterType : 'salary',
    array : ["0-40k","20-30k","100k","200k"]
  }
]

function FilterCard() {
  const [selectedVal,setSelectedVal] = useState("");
  let dispatch = useDispatch();
  const changeHandler = (value) => {
    setSelectedVal(value)
  }
  useEffect(() => {
dispatch(setSearchQuery(selectedVal))
  },[selectedVal])
  return (
    <div>
      <h1 className='text-xl font-semibold text-gray-500 mt-10'>Filter Jobs</h1>
      {
        filter.map((item,i)=>( 
        <>
        <h1 className='mt-3 font-semibold text-lg'>{item.filterType}</h1>
        {
          item.array.map((arr,idx) => (
            <RadioGroup value={selectedVal} onValueChange={changeHandler} >
            <div className="flex items-center space-x-2 mb-1 mt-1">
              <RadioGroupItem value={arr} id={arr._id - 1} />
              <Label htmlFor={arr._id - 1}>{arr}</Label>
            </div>
          </RadioGroup>
          ))
        }
   
    </>

        ))
      }
    </div>
  )
}

export default FilterCard