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
function CompaniesTable() {
  return (
    <>
     <Table>
      <TableCaption>A list of your applied jobs.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Logo</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">
            <Avatar>
                      <AvatarImage
                        className="cursor-pointer w-10 h-10"
                        src="https://github.com/shadcn.png"
                        />
                      <AvatarFallback>CN</AvatarFallback>
          </Avatar>
            </TableCell>
            <TableCell>Frontend Developer</TableCell>
            <TableCell>Google</TableCell>
            <TableCell className="text-right">
            <Popover>
      <PopoverTrigger asChild>
        <Button><MoreHorizontal /></Button>
      </PopoverTrigger>
      <PopoverContent className="w-50 bg-white">
       <div className='flex items-center gap-2 cursor-pointer'>
       <Edit2 className='w-5' />
       <span className='text-base'>Edit</span>
       </div>
      </PopoverContent>
    </Popover>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </>
  )
}

export default CompaniesTable