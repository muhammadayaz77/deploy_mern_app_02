import React, { useEffect } from 'react'
import { Badge } from "../components/ui/badge"
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
import { useDispatch, useSelector } from 'react-redux'
import { setAllAppliedJobs } from '../redux/jobSlice'

function AppliedJobTables() {
  let {allAppliedJobs} = useSelector(store => store.job)
  let dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(setAllAppliedJobs([]))
    }
  },[])
  return (
    <div>

    <Table>
      <TableCaption>A list of your applied jobs.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Date</TableHead>
          <TableHead>Job Role</TableHead>
          <TableHead>Company</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
        allAppliedJobs.length <= 0 ?
        <span>You haven't applied any yet.</span>
        :
        allAppliedJobs?.map((item) => (
          <TableRow key={item?._id}>
            <TableCell>{item.job.title}</TableCell>
            <TableCell className="font-medium">{item.createdAt.split("T")[0]}</TableCell>
            <TableCell>{item.job.company?.name}</TableCell>
            <TableCell className="text-right"><Badge className={`${item?.status == 'rejected ' ? 'bg-red-400' : item?.status === 'pending' ? 'bg-gray-400 text-white hover:text-white hover:bg-gray-400' : 'bg-green-400'}`}>{item.status.toUpperCase()}</Badge></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  )
}

export default AppliedJobTables