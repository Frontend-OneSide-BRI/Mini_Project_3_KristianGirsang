import React, { useState } from "react";

import ContentWrapper from "../../components/molecules/contentWrapper/ContentWrapper";
import SwitchTabs from "../../components/atoms/switchTabs/SwitchTabs";
import useFetch from "../../hooks/useFetch";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");

  const { data, loading } = useFetch(`/trending/all/${endpoint}`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };

  return (
    <div className="relative mb-[70px]">
      <ContentWrapper className="flex items-center justify-between mb-[20px]">
        <span className="text-2xl text-white font-normal">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
    </div>
  );
};

export default Trending;
