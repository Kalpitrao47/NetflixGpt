import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store => store.movies?.addTrailerVideo)
  console.log("trailerVideo",trailerVideo)
  // const dispatch = useDispatch();

  // // const [trailerId,setTrailerId] = useState(null);

  // //fetch trailor
  // const getMovieVideos = async () => {
  //   const data = await fetch(
  //     "https://api.themoviedb.org/3/movie/1008042/videos?language=en-US",
  //     API_OPTIONS
  //   );
  //   const json = await data.json();
  //   console.log(json);

  //   const filterData = json.results.filter((video) => video.type === "Trailer");
  //   const trailer = filterData.length ? filterData[0] : json.results[0];
  //   console.log(trailer);
  //   console.log(filterData);
  //   // setTrailerId(trailer.key)
  //   dispatch(addTrailerVideo(trailer))
    
  // };

  // useEffect(() => {
  //   getMovieVideos();
  // }, []);

  useMovieTrailer({movieId});

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

// {
//   "id": 1008042,
//   "results": [
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Preview",
//       "key": "jlIDtfOzrqQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2023-09-12T21:00:29.000Z",
//       "id": "6500df851bf26600e25e23c7"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "'Who's First?' Clip",
//       "key": "x_TSgCjSoOQ",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Clip",
//       "official": true,
//       "published_at": "2023-07-31T10:43:26.000Z",
//       "id": "64c8d73489f7490126accc4e"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "‘Viral’ TV Spot",
//       "key": "mAbWxKLBkbY",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2023-07-24T10:48:36.000Z",
//       "id": "64c8d792d5191f011c65a11d"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Behind the Scenes",
//       "key": "msZabC0rsPM",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Behind the Scenes",
//       "official": true,
//       "published_at": "2023-07-19T23:00:08.000Z",
//       "id": "64c971f3dd83fa00e2a0b45a"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official Promo",
//       "key": "zeCL4bt7K6w",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Teaser",
//       "official": true,
//       "published_at": "2023-07-03T15:35:48.000Z",
//       "id": "64d41623dd926a01ea9d5a6e"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official US Trailer 2",
//       "key": "PGo4wfCejsk",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2023-06-06T13:00:18.000Z",
//       "id": "647f41f517497300fb3ca23c"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Official US Trailer",
//       "key": "aLAKJu9aJys",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Trailer",
//       "official": true,
//       "published_at": "2023-04-11T13:00:00.000Z",
//       "id": "643559e7e6357100f27a0662"
//     },
//     {
//       "iso_639_1": "en",
//       "iso_3166_1": "US",
//       "name": "Michael & Danny Philippou on “Talk to Me\"",
//       "key": "VIUHY4YeAiE",
//       "site": "YouTube",
//       "size": 1080,
//       "type": "Featurette",
//       "official": true,
//       "published_at": "2022-12-09T21:13:13.000Z",
//       "id": "63c246a3df857c008927f568"
//     }
//   ]
// }
