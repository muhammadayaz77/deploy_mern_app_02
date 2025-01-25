import React from 'react'
import { Badge } from "../../components/ui/badge"   
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
Table,
TableBody,
TableCaption,
TableCell,
TableFooter,
TableHead,
TableHeader,
TableRow,
} from "@/components/ui/table"
import { Button } from '../ui/button';
import { Edit2, MoreHorizontal } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function AdminJobsTable() {
  const navigate = useNavigate();
  const {allAdminJobs,searchJobByText} = useSelector(store => store.job);
  const [filterJob,setFilterJobs] = useState(allAdminJobs);
  useEffect(() => {
      const filteredJob = allAdminJobs.length >= 0 && allAdminJobs.filter((job) => 
      {
        if(!searchJobByText)
        {
          return true;
        }
        return job?.title.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase());
      })  
      setFilterJobs(filteredJob);
  },[searchJobByText,allAdminJobs])
  return (
    <>
     <Table>
      <TableCaption>A list of your recent post jobs.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Company Name</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
        filterJob?.length <=0 ?
        <>
        <span>You haven't registered any company yet.</span>
        </>
        :
        filterJob?.slice().reverse().map((job) => (
          <TableRow key={job.company._id}>
            <TableCell className="font-medium">
            <Avatar>
                      <AvatarImage
                        className="cursor-pointer w-10 h-10"
                        src={job.company.logo}
                        />
                      <AvatarFallback>CN</AvatarFallback>
          </Avatar>
            </TableCell>
            <TableCell>{job.title}</TableCell>
            <TableCell>{job.company.createdAt.split("T")[0]}</TableCell>
            <TableCell className="text-right">
            <Popover>
      <PopoverTrigger asChild>
        <Button><MoreHorizontal /></Button>
      </PopoverTrigger>
      <PopoverContent className="w-50 bg-white">
       <div
       onClick={() => navigate(`/admin/companies/${job.company._id}`)}
       className='flex items-center gap-2 cursor-pointer'>
       <Edit2 className='w-5' />
       <span className='text-base'>Edit</span>
       </div>
      </PopoverContent>
    </Popover>
            </TableCell>
          </TableRow>
        ))
        
        }
      </TableBody>
    </Table>
    </>
  )
}

export default AdminJobsTable