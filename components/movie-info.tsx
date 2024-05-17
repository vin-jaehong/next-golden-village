import { API_URL } from "../constants";
import styles from "../styles/movie-info.module.css";

/**
 * request movie information method
 * @param id
 * @returns
 */
export const getMovie = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

// movie information component
const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovie(id);

  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(2)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
};

export default MovieInfo;
