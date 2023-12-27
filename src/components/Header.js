import React from 'react'
import { auth } from '../utils/Firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = ()=>{

    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
     
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });

  }
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44'
             src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
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