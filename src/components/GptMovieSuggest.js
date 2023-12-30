import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"

const GptMovieSuggest = () => {
  const gpt = useSelector((store)=>store.gpt);
  const {movieResults , moviesNames} = gpt;
  if(!movieResults){
    return null;
  }
  
  return (
    <div className='p-4 m-4  bg-black text-white rounded-md bg-opacity-90'>
      {moviesNames.map((movie,index)=>( 
          <MovieList 
              key={movie} 
              title={movie} 
              movies={movieResults[index]} /> 
      ))} 
    </div>
  )
}

export default GptMovieSuggest