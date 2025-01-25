import React, { useState } from "react";
import { Button } from "../ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useSelector } from "react-redux";
let companyArray = [];
function postJobs() {
  let [loading, setLoading] = useState(false);
  let [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    location: "",
    salary: "",
    jobType: "",
    experience: "",
    position: 0,
    companyId: "",
  });
  const { companies } = useSelector((store) => store.company);
  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };
  const selectChangeHandler = (value) => {

  }
  return (
    <div className="flex justify-center pt-5">
      <form onSubmit={handleSubmit} className="w-[50%] mt-10">
        <div className="flex items-center gap-4">
          <Button
            type="button"
            onClick={() => navigate("/admin/companies")}
            variant="outline"
            className="text-gray-500 px-[5px] py-[1px]"
          >
            <ArrowLeft /> Back
          </Button>
          <h1 className="text-lg font-semibold">Job Post</h1>
        </div>
        <div className="w-full grid grid-cols-12 mt-5 gap-5">
          <div className="col-span-6">
            <label className="font-semibold">Title</label>
            <input
              onChange={changeEventHandler}
              name="title"
              value={input.title}
              type="text"
              className="border border-gray-300 outline-none w-full p-2 rounded-md"
            />
          </div>
          <div className="col-span-6">
            <label className="font-semibold">Description</label>
            <input
              onChange={changeEventHandler}
              name="description"
              value={input.description}
              type="text"
              className="border border-gray-300 outline-none w-full p-2 rounded-md"
            />
          </div>
          <div className="col-span-6">
            <label className="font-semibold">Requirements</label>
            <input
              onChange={changeEventHandler}
              name="requirements"
              value={input.requirements}
              type="text"
              className="border border-gray-300 outline-none w-full p-2 rounded-md"
            />
          </div>
          <div className="col-span-6">
            <label className="font-semibold">Location</label>
            <input
              onChange={changeEventHandler}
              name="location"
              value={input.location}
              type="text"
              className="border border-gray-300 outline-none w-full p-2 rounded-md"
            />
          </div>
          <div className="col-span-6">
            <label className="font-semibold">Salary</label>
            <input
              onChange={changeEventHandler}
              name="salary"
              type="text"
              className="border border-gray-300 outline-none w-full p-2 rounded-md"
            />
          </div>
          <div className="col-span-6">
            <label className="font-semibold">Job Type</label>
            <input
              onChange={changeEventHandler}
              name="jobType"
              type="text"
              className="border border-gray-300 outline-none w-full p-2 rounded-md"
            />
          </div>
          <div className="col-span-6">
            <label className="font-semibold">Experience</label>
            <input
              onChange={changeEventHandler}
              name="experience"
              type="text"
              className="border border-gray-300 outline-none w-full p-2 rounded-md"
            />
          </div>
          <div className="col-span-6">
            <label className="font-semibold">Position</label>
            <input
              onChange={changeEventHandler}
              name="position"
              type="number"
              className="border border-gray-300 outline-none w-full p-2 rounded-md"
            />
          </div>
          <div className="col-span-6">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Company" />
              </SelectTrigger>
              <SelectContent className='bg-white '>
                <SelectGroup>
                  {
                    companies.length > 0 && companies.map((company) => 
                       (
                        <SelectItem value={company._id}>{company.name}</SelectItem>
                       )
                      )
                  }
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-12">
            {loading ? (
              <button
                class={`w-full text-white bg-black focus:ring-4 foc us:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex justify-center items-center cursor-not-allowed`}
                disabled
              >
                <Loader2 className="animate-spin" /> &nbsp;Please Wait
              </button>
            ) : (
              <button
                type="submit"
                class="w-full text-white bg-black hover:shadow-lg  focus:ring-4 foc us:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 border-none"
              >
                Post New Job
              </button>
            )}
            {companies.length === 0 && (
              <p className="text-red-500 text-sm mt-2 text-center font-semibold">
                Please Create a Company First
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default postJobs;
