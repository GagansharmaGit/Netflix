import React from 'react'
import { IMG_CDN } from '../utils/Constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath){
    return null;
  }
  return (
    <div className='w-48 pr-4 rounded-md'>
        <img className='rounded-md'
            src={IMG_CDN + posterPath}
            alt="MovieCardImage" 
        />
    </div>
  )
}

export default MovieCard