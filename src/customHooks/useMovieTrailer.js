import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addTrailerVideo } from "../utils/MoviesSlice";
import { useEffect } from "react";

const useMovieTrailer=(movieId)=>{
    // fetching trailer here 
    const dispatch = useDispatch();
    const getMovieVideos = async ()=>{

    const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS);
    const json = await data.json();
    // console.log(json);

    const filteredData = json.results.filter((video)=> video.type=="Trailer");
    const trailer = filteredData.length != 0 ? filteredData[1] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer))
    // setTrailerId(trailer.key);
};
useEffect(()=>{
    getMovieVideos();
},[])
}

export default useMovieTrailer;