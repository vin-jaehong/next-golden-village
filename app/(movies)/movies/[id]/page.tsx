import { Metadata } from "next";
import { API_URL } from "../../../(home)/page";

export const metadata: Metadata = {
  title: "movie",
};

// 영화 정보 api request method
const getMovie = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

// 영화 예고편 api request method
const getVideos = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
};

// 영화 정보 페이지 컴포넌트
const MovieDetail = async ({ params: { id } }: { params: { id: string } }) => {
  // parallel request (병렬 요청)으로 병렬로 fetch 처리
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  return <h1>{movie.title}</h1>;
};

export default MovieDetail;
