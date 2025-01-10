import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Contact, Mail, Pen } from 'lucide-react';
import { Button } from "../../components/ui/button";
import AppliedJobTables from '../../components/AppliedJobTables';
import UpdateProfileDialog from '../../components/UpdateProfileDialog';
import { useSelector } from 'react-redux';

function Profile() {
  let [open,setOpen] = useState(false);
  let {user} = useSelector(store => store.auth);
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
            <h1 className='text-lg font-semibold'>{user?.fullname}</h1>
            <p className='text-sm text-gray-600'>{user?.profile?.bio}</p>
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
          {user?.email}
        </div>
        <div className='flex items-center gap-4 mt-2 text-gray-600'>
          <Contact />
          {user?.phoneNumber}
        </div>
        <div className='my-4'>
          <h2 className='text-gray-600 mb-1'>Skills</h2>
          <div className='space-x-2'>
          {

          user?.profile?.skills == 0 ? "Not Available" : user?.profile?.skills.map(skill => 
            <span className='bg-gray-200 px-2 py-1 rounded-full text-sm'>{skill}</span>
          )
         
        }
            {/* <span className='bg-gray-200 px-2 py-1 rounded-full text-sm'>Node</span>
            <span className='bg-gray-200 px-2 py-1 rounded-full text-sm'>Express</span>
            <span className='bg-gray-200 px-2 py-1 rounded-full text-sm'>MongoDB</span>   */}
          </div>
        </div>
        <div>
          <h2 className='font-semibold mb-[-5px]
          '>Resume</h2>
          <a target='_blank' href={user?.profile?.resume} className="text-blue-500 mt-2 inline-block hover:underline text-sm font-semibold">{user?.profile?.resumeOriginalName}</a>
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