import React, { useRef } from 'react'
import openai from "../utils/OpenAi"
import { API_OPTIONS } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addGptMoviesResult } from '../utils/GptSearchSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

   //Search Movie in Tmdb data base
   const searchMovieInTMDB = async (movieName)=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movieName +"&include_adult=false&language=en-US&page=1", API_OPTIONS);
    
    const json = await data.json()

    return json.results;
   }

  const gptSearchClick = async () => {
    // console.log(searchText.current.value);

    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query" 
                      + searchText.current.value 
                      + ". only give me names of 5 movies, comma seprated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmal, Koi Mil Gaya, Terminal, Avaitor, Lion King";

    // make an gpt api call to get movies
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    // if(!gptResults.choices){
      //Error Handling
    // }

    //this will give me array of movies
    const gptMoviesList = gptResults.choices?.[0]?.message?.content.split(", ");
    // console.log(gptMoviesList);

    const promiseArray = gptMoviesList.map(((movie)=>searchMovieInTMDB(movie)))//IT Returun array of promices

    const tmdbMovieResults = await Promise.all(promiseArray);
    console.log(tmdbMovieResults);

    dispatch(addGptMoviesResult({moviesNames:gptMoviesList , movieResults:tmdbMovieResults}));

    

  }
  return (
    <div className='pt-[10%] flex justify-center '>
        <form onSubmit={(e)=>e.preventDefault()} className='w-1/2 grid grid-cols-12  bg-black'>
            <input 
                ref={searchText}
                className='p-4 m-4 col-span-9 rounded-lg' 
                type="text" 
                placeholder='I know you want to watch movies 🎥' 
            />
            <button 
                onClick={gptSearchClick}
                className='hover:bg-red-800 m-4 col-span-3 py-2 px-4  bg-red-600 rounded-lg text-white font-bold fot'>
                    Search
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar