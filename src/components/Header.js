import React, { useEffect } from 'react'
import { auth } from '../utils/Firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';
import { NETFLIX_LOGO } from '../utils/Constants';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = ()=>{

    signOut(auth).then(() => {
      // Sign-out successful.
      
     
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });

  }
  const dispatch = useDispatch(); 
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => { // According to firebase Docx onAuthStateChanged returns unsubscribe
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user


        const {uid, email, displayName ,photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
       
      }
    });

    return ()=>{
      //Unsiubscribe when component unmounts
      unsubscribe();//Unsubscribing whenever Compound unmount
    }
    
  },[]);

  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44'
             src={NETFLIX_LOGO}
            alt="logooo" 
        />

        {user && (
            <div className='flex p-2 items-center '>
              <img className='w-[48px] h-[48px] mx-2'
                src={user.photoURL} 
                alt="user icon" 
              />

              <button 
                onClick={handleSignOut}
                className='flex items-center justify-center bg-green-700 font-bold text-white p-2 rounded-2xl'>Sign Out</button>
          
            </div>
        )}
    </div>
  )
}

export default Header