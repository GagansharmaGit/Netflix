import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utils/MoviesSlice';
import { API_OPTIONS } from '../utils/Constants';

const usePopularMovies = () => {
   const popularMovies = useSelector((store)=>store.movies.popularMovies);
    // Fetch Data from TMDB API and update store
    const dispatch = useDispatch();
    const getNowPlayingMovies = async ()=>{
       const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
       const json = await data.json();
    //    console.log(json.results);
       dispatch(addPopularMovies(json.results));
   }
 
   useEffect(()=>{
    if(!popularMovies){
      getNowPlayingMovies();
    }
   // getNowPlayingMovies();
   },[])
  
}


export default usePopularMovies