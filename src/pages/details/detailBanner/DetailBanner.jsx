import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import useFetch from "../../../hooks/useFetch";
import ContentWrapper from "../../../components/molecules/contentWrapper/ContentWrapper";
import Genres from "../../../components/molecules/genre/Genre";
import Img from "../../../components/molecules/lazyLoadImages/Img";
import Rating from "../../../components/atoms/rating/Rating";
import { PlayIcon } from "../../../components/atoms/playButton/PlayButton";
import PosterFallback from "../../../assets/no-poster.png";
import "../../../index.css";

const DetailsBanner = ({ video, crew }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);

  const { url } = useSelector((state) => state.home);

  const _genres = data?.genres?.map((g) => g.id);

  const director = crew?.filter((f) => f.job === "Director");
  const writer = crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div className="w-full bg-black pt-[100px] mb-[50px] md:mb-0 md:pt-[120px] md:min-h-[700px]">
      {!loading ? (
        <>
          {!!data && (
            <React.Fragment>
              <div className="w-full h-full absolute top-0 left-0 opacity-10 overflow-hidden">
                <Img
                  className={`w-full h-full`}
                  src={url.backdrop + data.backdrop_path}
                />
              </div>
              <div className="w-full h-[300px] bg-gradient-to-t from-[#04152d] to-transparent absolute bottom-0 left-0"></div>
              <ContentWrapper>
                <div className="flex relative flex-col gap-[25px] md:gap-[50px] md:flex-row">
                  <div className="flex-shrink-0">
                    {data.poster_path ? (
                      <Img
                        className="w-full block rounded-[12px] md:max-w-[350px]"
                        src={url.backdrop + data.poster_path}
                      />
                    ) : (
                      <Img
                        className="w-full block rounded-[12px] md:max-w-[350px]"
                        src={PosterFallback}
                      />
                    )}
                  </div>
                  <div className="text-white">
                    <div className="text-3xl leading-10 md:text-4xl md:leading-[44px]">
                      {`${data.name || data.title} (${dayjs(
                        data?.release_date
                      ).format("YYYY")})`}
                    </div>
                    <div className="text-[16px] leading-[24px] mb-[15px] italic opacity-50 md:font-[20px] md:leading[28px]">
                      {data.tagline}
                    </div>

                    <Genres
                      className={`mb-[25px] flex flex-row flex-wrap`}
                      data={_genres}
                    />

                    <div className="flex items-center gap-[25px] mb-[25px]">
                      <Rating
                        className={`max-w-[70px] bg-black md:max-w-[90px] `}
                        rating={data.vote_average.toFixed(1)}
                      />
                      <div
                        className="flex items-centergap-[20px] cursor-pointer"
                        onClick={() => {
                          setShow(true);
                          setVideoId(video.key);
                        }}
                      >
                        <PlayIcon className={`w-[60px] md:w-[80px]`} />
                        <span className="font-[20px] transition-all duration-700 ease-in-out">
                          Watch Trailer
                        </span>
                      </div>
                    </div>

                    <div className="mb-[25px]">
                      <div className="font-[24px] mb-[10px]">Overview</div>
                      <div className="leading-[24px] md:pr-[100px]">
                        {data.overview}
                      </div>
                    </div>

                    <div className="border-b border-opacity-10 py-15 flex">
                      {data.status && (
                        <div className="mr-[10px] flex flex-row flex-wrap">
                          <span className="mr:[10px] opacity-50 leading-[24px] font-extrabold">
                            Status:{" "}
                          </span>
                          <span className="mr:[10px] opacity-50 leading-[24px]">
                            {data.status}
                          </span>
                        </div>
                      )}
                      {data.release_date && (
                        <div className="mr-[10px] flex flex-row flex-wrap">
                          <span className="mr:[10px] opacity-50 leading-[24px] font-extrabold">
                            Release Date:{" "}
                          </span>
                          <span className="mr:[10px] opacity-50 leading-[24px]">
                            {dayjs(data.release_date).format("MMM D, YYYY")}
                          </span>
                        </div>
                      )}
                      {data.runtime && (
                        <div className="mr-[10px] flex flex-row flex-wrap">
                          <span className="mr:[10px] opacity-50 leading-[24px] font-extrabold">
                            Runtime:{" "}
                          </span>
                          <span className="mr:[10px] opacity-50 leading-[24px]">
                            {toHoursAndMinutes(data.runtime)}
                          </span>
                        </div>
                      )}
                    </div>

                    {director?.length > 0 && (
                      <div className="border-b border-opacity-10 py-15 flex">
                        <span className="mr:[10px] opacity-50 leading-[24px] font-extrabold">
                          Director:{" "}
                        </span>
                        <span className="mr:[10px] opacity-50 leading-[24px]">
                          {director?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {director.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}

                    {writer?.length > 0 && (
                      <div className="border-b border-opacity-10 py-15 flex">
                        <span className="mr:[10px] opacity-50 leading-[24px] font-extrabold">
                          Writer:{" "}
                        </span>
                        <span className="mr:[10px] opacity-50 leading-[24px]">
                          {writer?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {writer.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}

                    {data?.created_by?.length > 0 && (
                      <div className="border-b border-opacity-10 py-15 flex">
                        <span className="mr:[10px] opacity-50 leading-[24px] font-extrabold">
                          Creator:{" "}
                        </span>
                        <span className="mr:[10px] opacity-50 leading-[24px]">
                          {data?.created_by?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {data?.created_by.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                {show && (
                  <VideoPopup
                    show={show}
                    setShow={setShow}
                    videoId={videoId}
                    setVideoId={setVideoId}
                  />
                )}
              </ContentWrapper>
            </React.Fragment>
          )}
        </>
      ) : (
        <div className="flex relative flex-col gap-[25px] md:gap-[50px] md:flex-row">
          <ContentWrapper>
            <div className="flex-shrink-0 w-full block rounded-[12px] aspect-[1/1.5] md:max-w-[350px] skeleton"></div>
            <div className="w-full">
              <div className="flex items-center gap-[25px] mb-[25px] skeleton"></div>
              <div className="flex items-center gap-[25px] mb-[25px] skeleton"></div>
              <div className="flex items-center gap-[25px] mb-[25px] skeleton"></div>
              <div className="flex items-center gap-[25px] mb-[25px] skeleton"></div>
              <div className="flex items-center gap-[25px] mb-[25px] skeleton"></div>
              <div className="flex items-center gap-[25px] mb-[25px] skeleton"></div>
              <div className="flex items-center gap-[25px] mb-[25px] skeleton"></div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
