import React from "react";
import HeroBanner from "../../components/molecules/heroBanner/HeroBanner";
import Trending from "./Trending";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <div style={{ height: 1000 }}></div>
    </div>
  );
};

export default Home;
