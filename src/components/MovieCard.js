import React from 'react'
import { IMG_CDN } from '../utils/Constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
        <img 
            src={IMG_CDN + posterPath}
            alt="MovieCardImage" 
        />
    </div>
  )
}

export default MovieCard