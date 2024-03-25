import styles from "../../styles/home.module.scss";
import { API_URL } from "../../constants";
import MoviesSwiper from "../../components/movies-swiper";

const getMovies = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
};

const HomePage = async () => {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      <MoviesSwiper movies={movies} />
    </div>
  );
};

export default HomePage;
