import React, { useState } from "react";
import MovieCard from "../../components/molecules/card/movieCard";
import ContentWrapper from "../../components/molecules/contentWrapper/ContentWrapper";
import SwitchTabs from "../../components/atoms/switchTabs/SwitchTabs";
import useFetch from "../../hooks/useFetch";

const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie");

  const { data, loading } = useFetch(`/${endpoint}/top_rated`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="relative mb-[70px]">
      <ContentWrapper className="flex items-center justify-between mb-[20px]">
        <span className="text-2xl text-white font-normal">
          Top Rated
        </span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <MovieCard data={data?.results} loading={loading} />
    </div>
  );
};

export default TopRated;
