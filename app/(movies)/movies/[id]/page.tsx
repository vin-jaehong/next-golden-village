import MovieVideos from "../../../../components/movie-videos";
import MovieInfo from "../../../../components/movie-info";
import { Suspense } from "react";

// 영화 정보 페이지 컴포넌트
// suspense 를 이용하여 각 컴포넌트 서버 사이드 랜더링 처리
const MovieDetail = ({ params: { id } }: { params: { id: string } }) => {
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
