import React from "react";
import HeroBanner from "../../components/molecules/heroBanner/HeroBanner";
import Trending from "./Trending";
import Popular from "./Popular";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <div style={{ height: 1000 }}></div>
    </div>
  );
};

export default Home;
