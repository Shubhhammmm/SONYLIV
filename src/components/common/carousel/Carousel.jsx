import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import "./Carousel.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Carousel = () => {
  const [movies, setMovies] = useState([]);
  const [movieDisplayLimit, setLimit] = useState(10);
  const maxMoviesToFetch = 200;
  const [hideShowMore, sethideShowMore] = useState(false);
  const imagesList = [
    "./caro1.png",
    "./caro2.png",
    "./caro3.png",
    "./caro4.png"
  ];

  useEffect(() => {
    getMovies();
  }, [movieDisplayLimit]);

  const getMovies = () => {
    axios.get(`https://api.tvmaze.com/shows`).then((r) => {
      // sort response
      r.data.sort(
        (a, b) => parseFloat(b.rating.average) - parseFloat(a.rating.average)
      );
      setMovies(r.data);
    });
  };
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopfillgroupwithblank="true"
        pagination={{
          clickable: true
        }}
        navigation={true}
        autoplay={{
          delay: 15000,
          disableOnInteraction: false
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="myCarouselSwiper"
      >
        {/* since the api images are in portrait and wont look good, i have included static images above. */}
        {imagesList.map((x, k) => {
          return (
            <SwiperSlide key = {k} >
              <img alt="moviecarousel" src={x} />
            </SwiperSlide>
          );
        })}
        {/* but if you want to check foor api, you can uncomment below */}
        {/* {movies.slice(0, movieDisplayLimit).map((movie, key) => {
          return (
            <SwiperSlide key={key}>
              <img alt="moviecarousel" src={movie.image?.medium} />

            </SwiperSlide>
          );
        })} */}
      </Swiper>
    </>
  );
};
export default Carousel;
