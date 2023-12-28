import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBaground from './VideoBaground'

const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    if(movies == null){
        return;
    }
    const mainMovie = movies[0];
    console.log(mainMovie);
  return (
    <div>
        <VideoTitle/>
        <VideoBaground/>
    </div>
  )
}

export default MainContainer