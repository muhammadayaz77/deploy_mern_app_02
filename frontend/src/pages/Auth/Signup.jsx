import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { Label } from "../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import { USER_API_END_POINT } from "../../utils/constant";
import { toast } from "sonner"
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  let [input, setInput] = React.useState({
    fullname : '',
    email : '',
    phoneNumber : '',
    password : '',
    role : '',
    file : ''
  });
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
  })
  }
  const handleChangeFile = (e) => {
    setInput({
      ...input,
      file: e.target.files[0]
  })
  }
  const handleRoleChange = (value) => {
    setInput({
      ...input,
      role: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('fullname', input.fullname);
    formData.append('email', input.email);
    formData.append('phoneNumber', input.phoneNumber);
    formData.append('password', input.password);
    formData.append('role', input.role);
    if(input.file){
      formData.append('file', input.file);
    }
      await axios.post(`${USER_API_END_POINT}/user/create`, formData,{
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials : true
      })
      .then(res => {
        toast.success(res.data.message);
        navigate('/auth/login');
      })
     .catch(error => {
      console.log(error);
      toast.error(error.response.data.message);
    });
    console.log(input);
  }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Signup
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign up to your account
            </h1>
            <form 
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="fullname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name..."
                  required=""
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="phoneNumber"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="03•• •••••••"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
                  <RadioGroup value={input.role} onValueChange={handleRoleChange}>
                <div className="flex gap-5">
                <div className="flex items-center space-x-2">
                      <RadioGroupItem
                      name="role"
                      value="student" id="r1" />

                      <Label htmlFor="r1">Student</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                      name="role"
                      value="recruiter" id="r2" />
                      <Label htmlFor="r2">Recruiter</Label>
                    </div>
                </div>
                  </RadioGroup>
                <div>
                  <input
                  onChange={handleChangeFile}       
                  name="file"
                  accept="image/*"
                  type="file" />
                </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 foc us:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Signup
              </button>
              <span className="text-sm">Already have an account? </span>
              <Link
                to="/auth/login"
                className="font-medium  text-blue-600 hover:text-blue-700 hover:underline dark:text-primary-500"
              >
                Login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
