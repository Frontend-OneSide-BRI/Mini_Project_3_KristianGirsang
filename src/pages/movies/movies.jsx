import React, { useState, useEffect } from "react";
import { fetchDataFromApi } from "../../helper/api";
import MovieCard from "../../components/molecules/card/movieCard";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const data = await fetchDataFromApi("/movie/popular");
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <div className="grid grid-cols-7 gap-4 p-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
  );
};

export default MoviePage;
