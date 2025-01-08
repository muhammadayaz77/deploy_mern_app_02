import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Contact, Mail, Pen } from 'lucide-react';
import { Button } from "../../components/ui/button";
import AppliedJobTables from '../../components/AppliedJobTables';
import UpdateProfileDialog from '../../components/UpdateProfileDialog';

function Profile() {
  let [open,setOpen] = useState(false);
  return (
    <>
    <div className='border border-gray-200 max-w-3xl mx-auto p-6 mt-8'>
      <div className='flex justify-between'>
         <div className='flex items-center gap-4 mt-5'>
         <Avatar>
                      <AvatarImage
                        className="cursor-pointer"
                        src="https://github.com/shadcn.png"
                        />
                      <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h1 className='text-lg font-semibold'>Full Name</h1>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente incidunt nisi illum assumenda </p>
         </div >

          </div>
          <Button variant="outline"
           onClick={()=> setOpen(true)}>
          <Pen />
          </Button>
      </div>
      <div>
        <div className='flex items-center gap-4 mt-5 text-gray-600'>
          <Mail />
          mayaz@gmail.com
        </div>
        <div className='flex items-center gap-4 mt-2 text-gray-600'>
          <Contact />
          mayaz@gmail.com
        </div>
        <div className='my-4'>
          <h2 className='text-gray-600 mb-1'>Skills</h2>
          <div className='space-x-2'>
            <span className='bg-gray-200 px-2 py-1 rounded-full text-sm'>React</span>
            <span className='bg-gray-200 px-2 py-1 rounded-full text-sm'>Node</span>
            <span className='bg-gray-200 px-2 py-1 rounded-full text-sm'>Express</span>
            <span className='bg-gray-200 px-2 py-1 rounded-full text-sm'>MongoDB</span>  
          </div>
        </div>
        <div>
          <h2 className='font-semibold mb-[-5px]
          '>Resume</h2>
          <Button variant="link" className="text-blue-500 p-0">Download</Button>
        </div>
      </div>
    </div>
    <div className='max-w-3xl mx-auto mt-3'>
      <h2>Applied Jobs</h2>
      <AppliedJobTables />
    </div>
    <UpdateProfileDialog open={open} setOpen={setOpen} />
    </>
  )
}

export default Profile