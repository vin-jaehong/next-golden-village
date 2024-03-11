import { API_URL } from "../app/(home)/page";

// 영화 정보 api request method
const getMovie = async (id: string) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
};

export default MovieInfo;
