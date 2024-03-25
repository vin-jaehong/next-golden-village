"use client";

// modules
import Movie from "./movie";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import styles from "../styles/movies-swiper.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";

const MoviesSwiper = ({ movies }) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  SwiperCore.use([Navigation, Scrollbar, Autoplay]);

  return (
    <div className={styles.container}>
      <Swiper
        loop={true} // 슬라이드 루프
        spaceBetween={50} // 슬라이스 사이 간격
        slidesPerView={1} // 보여질 슬라이스 수
        speed={1000}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false, // 사용자 상호작용시 슬라이더 일시 정지 비활성
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
        ref={navigationPrevRef}
        src="/images/icon/arrow/right-chevron.png"
      ></img>
      <img
        className={styles.next}
        ref={navigationNextRef}
        src="/images/icon/arrow/right-chevron.png"
      ></img>
    </div>
  );
};

export default MoviesSwiper;
