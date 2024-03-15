import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-video.module.css";

// 영화 예고편 api request method
const getVideos = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
};

// 영화 예고편 목록 컴포넌트
const MovieVideos = async ({ id }: { id: string }) => {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        ></iframe>
      ))}
    </div>
  );
};

export default MovieVideos;
