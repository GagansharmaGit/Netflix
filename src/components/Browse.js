import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryMAinContainer from './SecondaryMAinContainer';
import usePopularMovies from '../customHooks/usePopularMovies';
import useUpcommingMovies from '../customHooks/useUpcommingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);

  useNowPlayingMovies(); //calling and getting  data from custon hook
  usePopularMovies();
  useUpcommingMovies();


  return (
    <div>
      <Header/>
      {showGptSearch ? ( 
        <GptSearch/> 
      ) : (
          <>
              <MainContainer/>
              <SecondaryMAinContainer/>
          </>
      )}
    </div>
  )
}

export default Browse;


