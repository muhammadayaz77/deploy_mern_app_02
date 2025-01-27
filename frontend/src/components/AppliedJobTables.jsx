import React from 'react'
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
import { useSelector } from 'react-redux'

const invoices = [
{
invoice: "INV001",
paymentStatus: "Paid",
totalAmount: "$250.00",
paymentMethod: "Credit Card",
},
{
invoice: "INV002",
paymentStatus: "Pending",
totalAmount: "$150.00",
paymentMethod: "PayPal",
},
]

function AppliedJobTables() {
  let {allAppliedJobs} = useSelector(store => store.job)
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
        allAppliedJobs.map((item) => (
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