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
    <div>
      {!loading && <Img src={background} />}
      <ContentWrapper>
        <div>
          <div>
            <span>Hello, friend.</span>
            <span>Find millions of movies and shows here.</span>
            <div>
              <input
                type="text"
                placeholder="Search for a movie or show..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchHandler}
              />
              <button>Search</button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
