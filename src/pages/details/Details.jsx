import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailBanner/DetailBanner";

const Details = () => {
  return (
    <div>
      <DetailsBanner />
    </div>
  );
};

export default Details;
