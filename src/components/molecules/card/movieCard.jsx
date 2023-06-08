import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import Genres from "../genre/Genre";
import Rating from "../../atoms/rating/Rating";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImages/Img";

const MovieCard = ({ data, loading, endpoint, title }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const skItem = () => {
    return (
      <div className="w-[32px] md:w-[calc(25%-15px)] lg:w-[calc(20%-16px)] flex-shrink-0">
        <div className="border rounded-lg w-full aspect-w-1 aspect-h-1.5 mb-[8px] skeleton"></div>
        <div className="flex flex-col">
          <div className="w-full flex-col skeleton"></div>
          <div className="border rounded-lg w-3/4 h-[5px] skeleton"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="mb-[50px]">
      <ContentWrapper className={`relative`}>
        {title && (
          <div className="text-2xl text-white mb-[20px] font-normal">
            {title}
          </div>
        )}
        <BsFillArrowLeftCircleFill
          className="left-[30px] text-3xl text-black absolute top-[44%] translate-y-[-50%] cursor-pointer opacity-50 z-[1] hidden md:block hover:opacity-80"
          onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill
          className="right-[30px] text-3xl text-black absolute top-[44%] translate-y-[-50%] cursor-pointer opacity-50 z-[1] hidden md:block hover:opacity-80"
          onClick={() => navigation("right")}
        />
        {!loading ? (
          <div
            className="flex gap-[10px] overflow-y-hidden -mx-[20px] px-[20px] md:gap-[20px] md:overflow-hidden md:mx-0 md:px-0"
            ref={carouselContainer}
          >
            {data?.map((item) => {
              const posterUrl = item.poster_path
                ? url.poster + item.poster_path
                : PosterFallback;
              return (
                <div
                  key={item.id}
                  className="w-[10px] cursor-pointer md:w-[calc(25%-15px)] lg:w-[calc(20%-16px)] flex-shrink-0"
                  onClick={() =>
                    navigate(`/${item.media_type || endpoint}/${item.id}`)
                  }
                >
                  <div className="relative w-full aspect-w-1 aspect-h-1.5 bg-cover bg-center mb-[30px] flex items-end justify-between p-[10px]">
                    <Img
                      className={`relative top-0 left-0 w-full h-full rounded-lg`}
                      src={posterUrl}
                    />
                    <Rating rating={item.vote_average.toFixed(1)} />
                    <Genres data={item.genre_ids.slice(0, 2)} />
                  </div>
                  <div className="text-white flex flex-col">
                    <span className="title text-base mb-[10px] leading-[6px] md:text-lg">
                      {item.title || item.name}
                    </span>
                    <span className="text-sm opacity-50">
                      {dayjs(item.release_date || item.first_air_date).format(
                        "MMM D, YYYY"
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex gap-[10px] overflow-y-hidden mr-[-20px] ml-[-20px] px-[20px] md:gap-[20px] md:overflow-hidden md:m-0 md:p-0">
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default MovieCard;
