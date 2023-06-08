import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <div className="w-full flex flex-row justify-between max-w-[1200px] my-0 mx-auto py-0 px-20px">
      {children}
    </div>
  );
};

export default ContentWrapper;
