import React from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const[formData,setFormData] =useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        lastname:""
    })

    const [showPassword,setShowPassword] = useState(false);
    const [showPasswordConfirm,setShowPasswordConfirm] = useState(false);
    const [accountType , setAccountType] =useState("student")

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("Password do not match")
            return;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };

        const finalData ={
            ...accountData,
            accountType
        }

        console.log("printing account data");
        console.log(finalData);

        navigate("/dashboard");
    }

  return (
    <div>
        {/* student-instructor tab */}
        <div className='flex bg-richblack-800 gap-x-1 p-1 my-6 rounded-full max-w-max'>
            <button
            className={`${accountType === "student"
            ?
            "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all  duration-100`}
             onClick={() =>setAccountType("student")}>
                Student
            </button>


            <button
             className={`${accountType === "instructor"
            ?
            "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all  duration-100`}
             onClick={() =>setAccountType("instructor")}>
                instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>
            <div className='flex justify-between '>
                <label>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>First Name<sup className='text-pink-200'>*</sup></p>
                    <input
                    required
                    type='text'
                    name='firstname'
                    onChange={changeHandler}
                    placeholder='Enter first name'
                    value={FormData.firstname}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>
                </label>

                <label >
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>Last Name<sup className='text-pink-200'>*</sup></p>
                    <input
                    required
                    type='text'
                    name='lastname'
                    onChange={changeHandler}
                    placeholder='Enter last name'
                    value={FormData.lastName}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>
                </label>
           </div>
           {/* email address */}
            <div className='flex gap-x-4 '>
            <label className='w-full mt-[20px]'>
                <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>Email Address<sup className='text-pink-200'>*</sup></p>
                <input
                required
                type='email'
                name='email'
                onChange={changeHandler}
                placeholder='Enter email address'
                value={FormData.email}
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>
            </label>  
            </div>
          
            {/* password/confirm password */}
            <div className='flex  justify-between mt-[20px]'>
                
                <label className='relative '>
                    <p
                    className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '
                    >Create Password<sup className='text-pink-200'>*</sup></p>
                    <input
                    required
                    type={showPassword ? ("text"):("password")}
                    name='password'
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    value={FormData.password}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>

                    <span
                     className='absolute right-3 top-[38px] cursor-pointer'
                     onClick={()=> setShowPassword((prev)=> !prev)}>
                        {showPassword ?(<AiOutlineEye fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>

                <label className='relative '>
                    <p  className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem] '>Confirm Password<sup className='text-pink-200'>*</sup></p>
                    <input
                    required
                    type={showPasswordConfirm ? ("text"):("password")}
                    name='confirmPassword'
                    onChange={changeHandler}
                    placeholder='Confirm Password'
                    value={FormData.confirmPassword}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'></input>

                    <span
                     className='absolute right-3 top-[38px] cursor-pointer'
                     onClick={()=> setShowPasswordConfirm((prev)=> !prev)}>
                        {showPasswordConfirm ? (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>):(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>
            </div>
            <button className='bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 w-full'>
                Create Account
            </button>
        </form>
    </div>
  )
}

export default SignupForm
