export const metadata = {
  title: "home",
};

// 노마드 코더쪽에서 제공해주는 API Path
const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch(URL);
  const json = await response.json();
  return json;
};

const HomePage = async () => {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
};

export default HomePage;
