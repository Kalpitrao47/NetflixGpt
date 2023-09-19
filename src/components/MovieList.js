import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("movies3", movies);

  return (
    <div className="px-6">
    <h1 className="text-white text-3xl font-semibold py-4">{title}</h1>
    <div className="flex overflow-x-scroll">
      <div className="flex">
        {movies && movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default MovieList;
