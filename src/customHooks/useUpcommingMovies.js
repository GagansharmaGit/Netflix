import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUpcommingMovies } from '../utils/MoviesSlice';
import { API_OPTIONS } from '../utils/Constants';

const useUpcommingMovies = () => {
    // Fetch Data from TMDB API and update store
    const dispatch = useDispatch();
    const getUpcoming = async ()=>{
       const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
       const json = await data.json();
       console.log(json.results);
       dispatch(addUpcommingMovies(json.results));
   }
 
   useEffect(()=>{
    getUpcoming();
   },[])
  
}

export default useUpcommingMovies