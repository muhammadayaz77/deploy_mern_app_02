import React, { useState } from 'react'
import { Button } from "../components/ui/button"
import {
Dialog,
DialogContent,
DialogDescription,
DialogFooter,
DialogHeader,
DialogTitle,
DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Loader2 } from 'lucide-react'

function UpdateProfileDialog({open,setOpen}) {
  let [loading, setLoading] = useState(false);
  return (
    <div>

    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white" onInteractOutside={() => setOpen(false)}>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-12 items-center gap-4">
            <Label htmlFor="name" className="text-left col-span-2">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Name  "
              className="col-span-10"
            />
          </div>
          <div className="grid grid-cols-12 items-center gap-4">
            <Label htmlFor="email" className="text-left col-span-2">
              Email
            </Label>
            <Input
              id="email"
              defaultValue="name@gmail.com"
              className="col-span-10"
            />
          </div>
          <div className="grid grid-cols-12 items-center gap-4">
            <Label htmlFor="number" className="text-left col-span-2">
              Number
            </Label>
            <Input
              id="number"
              defaultValue="1234567890"
              className="col-span-10"
            />
          </div>
          <div className="grid grid-cols-12 items-center gap-4">
            <Label htmlFor="bio" className="text-left col-span-2">
              Bio
            </Label>
            <Input
              id="bio"
              defaultValue=""
              className="col-span-10"
            />
          </div>
          <div className="grid grid-cols-12 items-center gap-4">
            <Label htmlFor="skill" className="text-left col-span-2">
              Skill
            </Label>
            <Input
              id="skill"
              defaultValue="Pedro Duarte"
              className="col-span-10"
            />
          </div>
          <div className="grid grid-cols-12 items-center gap-4">
            <Label htmlFor="resume" className="text-left col-span-2">
              Resume
            </Label>
            <input
              id="res"
              type="file"
              className="col-span-10 border border-gray-200 p-2 rounded-lg"
              accept='application/pdf'
            />
          </div>
        </div>
        <DialogFooter>
        {
                    loading ?  <button type="submit" class={`w-full text-white bg-blue-600 focus:ring-4 foc us:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex justify-center items-center cursor-not-allowed`} disabled
                    ><Loader2 className='animate-spin' /> &nbsp;Please Wait</button> : 
                  <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 foc us:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border-none">Save Changes</button>
                }
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default UpdateProfileDialog