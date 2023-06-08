import React, { useState } from "react";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };

  return (
    <div className="h-9  flex bg-white rounded-full p-[2px]">
      <div className="flex items-center h-8 relative">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`h-full flex items-center justify-center w-[100px] color-black text-xl relative z-1 cursor-pointer ${
              selectedTab === index ? "active text-white z-10" : ""
            }`}
            onClick={() => activeTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <span
          className="h-8 w-24 rounded-full bg-gradient-to-r from-blue-500 to-green-500 absolute left-0 transition duration-400 
          ease-[cubic-bezier(0.88, -0.35, 0.565, 1.35)] hover:left-full"
          style={{ left: left }}
        ></span>
      </div>
    </div>
  );
};

export default SwitchTabs;
