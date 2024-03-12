import { API_URL } from "../app/(home)/page";

// 영화 예고편 api request method
const getVideos = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  throw new Error("something broke...");
  // const response = await fetch(`${API_URL}/${id}/videos`);
  // return response.json();
};

const MovieVideos = async ({ id }: { id: string }) => {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
};

export default MovieVideos;
