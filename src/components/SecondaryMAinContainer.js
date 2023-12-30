import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryMAinContainer = () => {
  const movies = useSelector((store)=>store.movies)
  return (
   movies.nowPlayingMovies && ( 
   <div className=' bg-black'>
      <div className='mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
        <MovieList title={"Action"} movies={movies.nowPlayingMovies}/>

      </div>

    </div>)
  );
}

export default SecondaryMAinContainer;



{/*



  MovieList-Popular
    -MovieCards * n
  MovieList-NowPlaying
  MovieList-Trending
  MovieList-Action
  MovieList-ECT.

*/}