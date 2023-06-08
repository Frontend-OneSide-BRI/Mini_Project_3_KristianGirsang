import React from "react";
import { useSelector } from "react-redux";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);

  const genreNames = data
    .map((genreId) => genres[genreId]?.name)
    .filter(Boolean);

  return (
    <div className="flex gap-4">
      {genreNames.map((name) => (
        <div
          key={name}
          className="bg-pink-500 px-2 py-1 text-xs rounded text-white whitespace-nowrap"
        >
          {name}
        </div>
      ))}
    </div>
  );
};

export default Genres;
