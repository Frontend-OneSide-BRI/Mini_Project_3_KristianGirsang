import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";

import Img from "../lazyLoadImages/Img";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQUery] = useState("");
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
    <div>
      {!loading && (
        <div>
          <Img src={background} />
        </div>
      )}
      <div></div>
      <ContentWrapper>
        <div>
          <span>Hello, friend.</span>
          <span>Find a millions of movies and Shows here. </span>
          <div>
            <input
              type="text"
              placeholder="Search for a movie or show..."
              onChange={(e) => setQUery(e.target.value)}
              onKeyUp={searchHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
