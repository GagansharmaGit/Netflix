import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryMAinContainer from './SecondaryMAinContainer';
const Browse = () => {
  useNowPlayingMovies(); //calling and getting  data from custon hook
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryMAinContainer/>
      {/*
          MainContainer
            -videoBaground
            -videoTitle
          SecondaryMainContainer
            -MoviesList * n
              -cards*n

      */}
    </div>
  )
}

export default Browse