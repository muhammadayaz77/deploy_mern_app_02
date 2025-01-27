import React from 'react'
import { Button } from './ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"
import { useDispatch } from 'react-redux'
import { setSearchQuery } from '../redux/jobSlice'
import { useNavigate } from 'react-router-dom'

const category = [
  "Frontend Developer",
  "Backend Developer",
  "FullStack Developer",
  "Graphic Designer",
  "Data Science"
]
function CategoryCarousel() {
  let dispatch = useDispatch()
  let navigate = useNavigate()
  let handleButton = (query) => {
      dispatch(setSearchQuery(query));
      navigate('/browse')
    }
  return (
    <>
   <div className='flex justify-center mt-5'>
   <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm"
    >
      <CarouselContent>
        {category.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ml-10">
          
              <Button 
              onClick={() => handleButton(item)}
              >
                <div className="">
                  <div className="text-sm bg-gray-100 text-black font-semibold p-2">{item}</div>
                </div>
              </Button>

          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
   </div>
    </>
  )
}

export default CategoryCarousel