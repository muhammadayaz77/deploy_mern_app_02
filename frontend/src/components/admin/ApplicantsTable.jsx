import React from 'react'
import {Button} from '@/components/ui/button'
import { Label } from '@radix-ui/react-label'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { toast } from 'sonner'
import axios from 'axios'
import { APPLICATIONS_API_END_POINT } from '../../utils/constant'

const shortlistStatus = ['Rejected','Accepted']
function ApplicantsTable() {
  const {applicants} = useSelector(store => store.applicants);
const statusHandler = async(status,id) => {
    axios.defaults.withCredentials = true;
    await axios.put(`${APPLICATIONS_API_END_POINT}/status/${id}/update`,{status},).then(res => {
      toast.success(res.data.message)
    })
    .catch(err => {
      toast.error(err.response.data.message)
    })
  
}
  return (
    <div>
      <Table className='mt-5'>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow className="bg-gray-100 hover:bg-gray-100">
      <TableHead className="w-[100px]">Full Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Contact</TableHead>
      <TableHead>Resume</TableHead>
      <TableHead>Date</TableHead>
      <TableHead className="text-right">Action</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
      {
          applicants?.map(app => (
          <TableRow key={app._id} className="hover:bg-gray-50">
        
      <TableCell className="">{app?.applicant?.fullname}</TableCell>
      <TableCell>{app?.applicant?.email}</TableCell>
      <TableCell>{app?.applicant?.phoneNumber}</TableCell>
      <TableCell><a className='text-blue-600 underline' href={app?.applicant?.profile?.resume} target='_blank'>{app?.applicant?.profile?.resumeOriginalName || 'NA'}</a></TableCell>
      <TableCell>{app?.applicant?.createdAt.split("T")[0] || 'NA'}</TableCell>
      <TableCell className="text-right">
      <Popover className=''>
      <PopoverTrigger asChild className='cursor-pointer float-end'>
        <MoreHorizontal >Open popover</MoreHorizontal>
      </PopoverTrigger>
      <PopoverContent className="w-fit">
        {
          shortlistStatus.map(status => (
            <Label 
            onClick={() => statusHandler(status,app?._id)}
            className='block hover:bg-gray-200 transition-all p-2'>
              {status}
            </Label>
          ))
        }
      </PopoverContent>
    </Popover>
      </TableCell>
    </TableRow>
        ))
      }
  </TableBody>
</Table>

    </div>
  )
}

export default ApplicantsTable