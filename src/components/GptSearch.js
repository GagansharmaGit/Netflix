import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggest from './GptMovieSuggest'
import { LOGIN_PAGE_BG_IMG } from '../utils/Constants';

const GptSearch = () => {
  return (
    <div>
        <div className='fixed -z-10 '>
            <img 
                src={LOGIN_PAGE_BG_IMG} 
                alt="BagroundImage" 
            />
        </div>
        <GptSearchBar/>
        <GptMovieSuggest/>
    </div>
  )
}

export default GptSearch