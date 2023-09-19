import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import SecondaryContainer from './SecondaryContainer';
import MainBackGroundContainer from './MainBackGroundContainer';
import usePopularMovies from '../hooks/usePopularMovies';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header/>
      <MainBackGroundContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse