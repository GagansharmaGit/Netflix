import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validate';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/UserSlice';
import { LOGIN_PAGE_BG_IMG, USER_AVATAR } from '../utils/Constants';

const LoginPage = () => {
    const dispatch = useDispatch();
    const [errorMessage , setErrorMessage] = useState(null);
    const [isSignInForm , setIsSignInForm] = useState(true)
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    };
    const Name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const handeButtonClick = ()=>{
        //step-1 Validate the form data
        //    console.log(email.current.value);
        //    console.log(password.current.value);
        const message = checkValidData(email.current.value , password.current.value);
        setErrorMessage(message);
        // console.log(message);
       
        if(message != null) return;
        
        if(!isSignInForm){
            // Then only create a new user
            //we  do signUp logic over here
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                updateProfile(user, {
                    displayName: Name.current.value, 
                    photoURL: USER_AVATAR,
                  }).then(() => {
                    // Profile updated!
                    const {uid, email, displayName ,photoURL} = auth.currentUser ;
                    dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    setErrorMessage (error.message);
                    // ...
                  });
                  

                // ...
                // console.log(user);
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "--" + errorMessage);
            });

        }else{
            //we  do signIn logic over here
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                // console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "--" + errorMessage); 
            });

        }
    };


  return (
    <div className=' '>
        <Header/>
        <div className='absolute'>
        <img src={LOGIN_PAGE_BG_IMG} 
            alt="BagroundImage" />
        </div>
    
        <form onSubmit={(e)=>{e.preventDefault()}} className='bg-opacity-80 w-1/3 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg'>
            <h1 className='font-bold  text-4xl py-4'>
                {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm &&(
                <input ref={Name} className='p-4 my-4 w-full bg-gray-700 rounded-lg' type="text" placeholder='Full Name'/>
            )}
            <input ref={email} className='p-4 my-4 w-full bg-gray-700 rounded-lg' type="text" placeholder='Your Email'/>
            <input ref={password} className='p-4  my-4 w-full bg-gray-700 rounded-lg' type="password" placeholder='Password'/>
            <p className='text-red-600 font-bold text-lg py-2'>  {errorMessage} </p>
            <button className='select-none text-white bg-red-600 p-4 my-6 mt-2 w-full rounded-lg' 
                onClick={handeButtonClick}>
                {isSignInForm ? "Sign In" : "Sign Up"}
                
            </button>
            <p className='cursor-pointer select-none py-4 text-red-600' onClick={toggleSignInForm}>{isSignInForm ? "New to NetFlix Sign Up" : "Existing User? Sigh In"}</p>
        </form>
    </div>
  )
}

export default LoginPage