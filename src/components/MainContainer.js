import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBaground from './VideoBaground'

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    if(movies == null){
        return;
    }
    const mainMovie = movies[3];
    // console.log(mainMovie);

    const {original_title , overview , id} = mainMovie;
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBaground movieId={id}/>
    </div>
  )
}

export default MainContainer