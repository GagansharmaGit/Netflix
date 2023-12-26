import React, { useState } from 'react'
import Header from './Header'
const LoginPage = () => {
    const [isSignInForm , setIsSignInForm] = useState(true)
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    };
  return (
    <div className=' '>
        <Header/>
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
            alt="BagroundImage" />
        </div>
    
        <form className='bg-opacity-80 w-1/3 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg'>
            <h1 className='font-bold  text-4xl py-4'>
                {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm &&(
                <input className='p-4 my-4 w-full bg-gray-700 rounded-lg' type="text" placeholder='Full Name'/>
            )}
            <input className='p-4 my-4 w-full bg-gray-700 rounded-lg' type="text" placeholder='Your Email'/>
            <input className='p-4  my-4 w-full bg-gray-700 rounded-lg' type="password" placeholder='Password'/>
            <button className='select-none text-white bg-red-600 p-4 my-6 mt-2 w-full rounded-lg'>
                {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className='cursor-pointer select-none py-4 text-red-600' onClick={toggleSignInForm}>{isSignInForm ? "New to NetFlix Sign Up" : "Existing User? Sigh In"}</p>
        </form>
    </div>
  )
}

export default LoginPage