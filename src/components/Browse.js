import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import SecondaryContainer from './SecondaryContainer';
import MainBackGroundContainer from './MainBackGroundContainer';

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <MainBackGroundContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse