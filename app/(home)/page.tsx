export const metadata = {
  title: "home",
};

// 노마드 코더쪽에서 제공해주는 api path
const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

// api request function
const getMovies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await fetch(URL);
  // response 받은 데이터의 json 데이터를 호출하려면 다시 await 을 사용해야함.
  const json = await response.json();
  return json;
};

// 컴포넌트를 async 함수로 만들고, API 요청을 할 경우 서버사이드에서 요청이 이루어짐.
const HomePage = async () => {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
};

export default HomePage;
