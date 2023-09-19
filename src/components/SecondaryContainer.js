import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)
  console.log("movies 2",movies)


  return (
    <div className='bg-black'>
      <div className='-mt-52 relative pl-6 z-20'>
      <MovieList title={"Now Playing"} movies={movies.addNowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.addNowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.addPopularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.addNowPlayingMovies}/>
      <MovieList title={"Horror Movies"} movies={movies.addNowPlayingMovies}/>
      </div>

    </div>
  )
}

export default SecondaryContainer