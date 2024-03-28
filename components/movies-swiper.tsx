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
  // TODO 문제 해결 필요 (swiper 초기화 되는 타이밍에 버튼이 다 랜더링이 되지 않았는지, null 이 사용됨.)
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  SwiperCore.use([Navigation, Scrollbar, Autoplay]);

  return (
    <div className={styles.container}>
      <Swiper
        className={styles.swiper}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        speed={1000}
        navigation={{
          prevEl: navigationPrevRef.current!,
          nextEl: navigationNextRef.current!,
        }}
        onInit={(swiper) => {
          console.log(navigationNextRef.current);
          console.log(navigationPrevRef.current);
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
        src="/images/icon/arrow/left-circle.png"
      />
      <img
        className={styles.next}
        ref={navigationNextRef}
        src="/images/icon/arrow/left-circle.png"
      />
    </div>
  );
};

export default MoviesSwiper;
