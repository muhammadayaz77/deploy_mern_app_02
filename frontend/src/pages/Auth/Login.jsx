import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Label } from '../../components/ui/label'
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group'
import axios from 'axios'
import { USER_API_END_POINT } from '../../utils/constant'
import { toast } from "sonner"
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '../../redux/authSlice'
import { Loader2 } from 'lucide-react'

function Login() {
  let {user} = useSelector(store => store.auth)
  let {loading} = useSelector(state => state.auth);
  let dispatch = useDispatch();
  const navigate = useNavigate();
  let [input, setInput] = useState({
    email : '',
    password : '',
    role : '',
  })
  let handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
    console.log(input)
  }
  const handleRoleChange = (value) => {
    setInput({
      ...input,
      role: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      await axios.post(`${USER_API_END_POINT  }/user/login`, input,{
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials : true
      })
      .then(res => {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
        navigate('/');
      })
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
    finally{
      dispatch(setLoading(false));   
    }
  }
  useEffect(() => {
    if(user){
      toast.success("You are already Login");
       navigate("/");
    }
  },[])
  return (
    <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
          Login    
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input
                      onChange={handleChange}
                      type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input
                      onChange={handleChange}
                      type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <RadioGroup value={input.role} onValueChange={handleRoleChange}>
                <div className="flex gap-5">
                <div className="flex items-center space-x-2">
                      <RadioGroupItem  name='role' value="student" id="r1" />
                      <Label htmlFor="r1">Student</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem name='role' value="recruiter" id="r2" />
                      <Label htmlFor="r2">Recruiter</Label>
                    </div>
                </div>
                  </RadioGroup>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div>
                  {
                    loading ?  <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 foc us:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex justify-center items-center "><Loader2 className='animate-spin' /> &nbsp;Please Wait</button> : 
                  <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 foc us:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                }
                
                  <Link to='/auth/signup' class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" class="font-medium  text-blue-600 hover:text-blue-700 hover:underline dark:text-primary-500">Sign up</a>
                  </Link>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default Login