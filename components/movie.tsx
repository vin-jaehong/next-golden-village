"use client";

import Link from "next/link";
import styles from "../styles/movie.module.scss";
import { useRouter } from "next/navigation";

interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}

// movie information component
const Movie = ({ title, id, poster_path }: IMovieProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };

  return (
    <Link prefetch href={`/movies/${id}`}>
      <img
        className={styles.img}
        src={poster_path}
        alt={title}
        onClick={onClick}
      />
    </Link>
  );
};

export default Movie;
