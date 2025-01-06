import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  let user = false;
  return (
    <div className="flex p-4 justify-between items-center mx-20 h-15 text-black">
      <div>
        <h1 className="text-2xl font-bold">
          <span>Job</span>
          <span className="text-red-500">Portal</span>
        </h1>
      </div>
      <ul className="flex items-center gap-5">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/jobs'>Jobs</Link></li>
        <li><Link to='/browse'>Browse</Link></li>
        {
          !user ? (
            <div className="flex items-center gap-1">  
              <Link to='/auth/login'>
            <Button className=' rounded-lg border-[1px] border-gray-600'>
            Login
            </Button>
              </Link>
            <Link to='/auth/signup'>
            <Button className="bg-[#6A38C2] hover:bg-[#5829aa] rounded-lg text-white">
              Signup
            </Button>
            </Link>
            </div>
          ) : (
            <Popover>
          <PopoverTrigger asChild>
            <Avatar>
              <AvatarImage
                className="cursor-pointer"
                src="https://github.com/shadcn.png"
                />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage
                  className="cursor-pointer"
                  src="https://github.com/shadcn.png"
                  />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
              <h1 className="font-medium">Ayaz Mern Stack</h1>
              <p className="text-sm text-gray-500">Lorem ipsum dolor sit .</p>
              </div>
            </div>
              <ul className="text-sm text-gray-700 mt-3">
                <li className="flex items-center" ><User2 /> <Button variant="link">View Profile</Button></li>
                <li className="flex items-center" ><LogOut /> <Button variant="link">Logout</Button></li>
              </ul> 
          </PopoverContent>
        </Popover>
        )
        }
      </ul>
    </div>
  );
}

export default Navbar;
