import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggest from './GptMovieSuggest'
import { LOGIN_PAGE_BG_IMG } from '../utils/Constants';

const GptSearch = () => {
  return (
    <>
      <div>
          <div className='fixed -z-10 '>
              <img 
                  className='h-screen object-cover'
                  src={LOGIN_PAGE_BG_IMG} 
                  alt="BagroundImage" 
              />
          </div>
          <div className=''>
            <GptSearchBar/>
            <GptMovieSuggest/>
          </div>
      </div>
    </>
  )
}

export default GptSearch