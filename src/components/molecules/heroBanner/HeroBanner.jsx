import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";

import Img from "../lazyLoadImages/Img";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="relative w-full h-[700px] md:h-screen">
      {!loading && (
        <div className="w-full h-full top-0 left-0 opacity-50 absolute overflow-hidden">
          <Img
            className={`w-full h-full object-cover object-center block`}
            src={background}
          />
        </div>
      )}
      <div className="w-full h-[300px] bg-gradient-to-t from-[#04152d] to-transparent absolute bottom-0 left-0"></div>
      <ContentWrapper>
        <div className="flex flex-col items-center text-white text-center  max-w-800 mx-auto">
          <span className="title text-4xl font-bold mb-2 md:mb-0 md:text-7xl">
            Hello, friend.
          </span>
          <span className="subTitle text-base font-medium mb-4 md:text-lg md:mb-4">
            Find millions of movies and shows here.
          </span>
          <div className="w-full flex items-center">
            <input
              type="text"
              placeholder="Search for a movie or show..."
              className="w-full h-12 bg-white text-black outline-none border-0 rounded-l-xl  md:h-14 px-3 text-base md:text-lg"
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchHandler}
            />
            <button className="w-24 h-12 bg-gradient-to-r from-blue-500 to-green-600 text-white outline-none border-0 rounded-r-xl rounded-l-none text-base md:w-36 md:h-14 md:text-lg">
              Search
            </button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
