import React from "react";
import { useSelector } from "react-redux";


const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);

  return (
    <div className="flex gap-5">
      {data?.map((g) => {
        if (!genres[g]?.name) return;
        return (
          <div
            key={g}
            className="bg-pink-500 px-2 py-1 text-xs rounded text-white whitespace-nowrap"
          >
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
