import React from "react";
import ReactPlayer from "react-player/youtube";

import "./style.scss";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };
  return (
    <div
      className={`flex justify-center items-center w-full h-full fixed top-0 left-0 opacity-0 z-10 ${
        show ? "visible" : ""
      }`}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 backdrop-filter backdrop-blur-[3.5px] -webkit-backdrop-filter opacity-0 transition-opacity duration-400"
        onClick={hidePopup}
      ></div>
      <div className="relative w-[800px] aspect-[16/9] bg-white transform scale-20 transition-transform duration-250 ">
        <span
          className="absolute top-[-20px] right-0 text-white cursor-pointer"
          onClick={hidePopup}
        >
          Close
        </span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
          // playing={true}
        />
      </div>
    </div>
  );
};

export default VideoPopup;
