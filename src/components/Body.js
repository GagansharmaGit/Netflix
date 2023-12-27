import React, { useEffect } from 'react'
import LoginPage from './LoginPage'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { auth } from '../utils/Firebase'
import {  onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/UserSlice'

const Body = () => {
    const dispatch = useDispatch();
   

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<LoginPage/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
    ])

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user


          const {uid, email, displayName ,photoURL} = user;
          dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
          
        } else {
          // User is signed out
          // ...
          dispatch(removeUser());
         
        }
      });
      
    },[])
  return (
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body