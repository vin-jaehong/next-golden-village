import MovieVideos from "../../../../components/movie-videos";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import { Suspense } from "react";

interface IParams {
  params: {
    id: string;
  };
}

export const generateMetadata = async ({ params: { id } }: IParams) => {
  const movie = await getMovie(id);

  return {
    title: movie.title,
  };
};

const MovieDetail = ({ params: { id } }: IParams) => {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading videos info</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
};

export default MovieDetail;
