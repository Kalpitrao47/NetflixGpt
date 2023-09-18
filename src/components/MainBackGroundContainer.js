import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainBackGroundContainer = () => {
    const movies = useSelector(store => store.movies?.addNowPlayingMovies)
    if (!movies) return;
    // const mainMovie = movies ? movies[0] : null; // Use a ternary operator to handle the case where movies is falsy
    const mainMovie = movies[0];
    console.log("mainMovie", mainMovie)

    const {original_title, overview, id} = mainMovie;

return (
    <div>
    <VideoTitle title = {original_title} overview={overview} />
    <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainBackGroundContainer;

