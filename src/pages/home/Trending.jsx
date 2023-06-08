import React from "react";
import ContentWrapper from "../../components/molecules/contentWrapper/ContentWrapper";

const Trending = () => {
  return (
    <div className="relative mb-[70px]">
      <ContentWrapper className={`flex items-center justify-between mb-[20px]`}>
        <span className="text-2xl text-white font-normal">Trending</span>
      </ContentWrapper>
    </div>
  );
};

export default Trending;
