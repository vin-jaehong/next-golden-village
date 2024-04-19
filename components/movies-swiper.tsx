"use client";

import Movie from "./movie";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import styles from "../styles/movies-swiper.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";

// movie swiper component
const MoviesSwiper = ({ movies }) => {
  const swiperRef = useRef(null);

  // ** custom navigation button 이 먹히지 않아 trigger 메소드로 작업
  const swiperSlidePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };
  const swiperSlideNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  // Swiper 에서 해당 플러그인을 사용 지정
  SwiperCore.use([Navigation, Scrollbar, Autoplay]);

  return (
    <div className={styles.container}>
      <Swiper
        ref={swiperRef}
        className={styles.swiper}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        speed={1000}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Movie
              key={movie.id}
              id={movie.id}
              poster_path={movie.poster_path}
              title={movie.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <img
        className={styles.prev}
        onClick={swiperSlidePrev}
        src="/images/icon/arrow/left-circle.png"
      />
      <img
        className={styles.next}
        onClick={swiperSlideNext}
        src="/images/icon/arrow/left-circle.png"
      />
    </div>
  );
};

export default MoviesSwiper;
