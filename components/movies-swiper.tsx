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
  // TODO 배포 환경에서 작동이 안되는데 체크 필요
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  SwiperCore.use([Navigation, Scrollbar, Autoplay]);

  return (
    <div className={styles.container}>
      <Swiper
        className={styles.swiper}
        loop={true} // 슬라이드 루프
        spaceBetween={0} // 슬라이스 사이 간격
        slidesPerView={1} // 보여질 슬라이스 수
        speed={1000}
        navigation={{
          prevEl: navigationPrevRef.current!,
          nextEl: navigationNextRef.current!,
        }}
        onInit={(swiper) => {
          swiper.params.navigation["prevEl"] = navigationPrevRef.current;
          swiper.params.navigation["nextEl"] = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
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
