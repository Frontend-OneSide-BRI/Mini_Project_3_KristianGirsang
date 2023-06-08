import React from "react";
import HeroBanner from "../../components/molecules/heroBanner/HeroBanner";
import Trending from "./Trending";
import Popular from "./Popular";
import TopRated from "./TopRated";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
