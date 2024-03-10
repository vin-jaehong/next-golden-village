import { Metadata } from "next";
import { API_URL } from "../../../(home)/page";

export const metadata: Metadata = {
  title: "movie",
};

const getMovie = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

const getVideos = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
};

const MovieDetail = async ({ params: { id } }: { params: { id: string } }) => {
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  return <h1>{movie.title}</h1>;
};

export default MovieDetail;
