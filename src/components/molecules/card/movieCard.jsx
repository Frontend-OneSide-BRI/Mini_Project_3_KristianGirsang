import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-slate-400 shadow-lg rounded-lg p-4">
      <img
        className="mt-4 rounded-lg w-full"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.original_title}
      />
      <h3 className="text-base font-bold">{movie.original_title}</h3>
    </div>
  );
};

export default MovieCard;
