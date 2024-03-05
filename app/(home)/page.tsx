export const metadata = {
  title: "home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  return json;
};

const HomePage = async () => {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
};

export default HomePage;
