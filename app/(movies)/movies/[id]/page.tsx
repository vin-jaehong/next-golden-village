const MovieDetail = ({ params: { id } }: { params: { id: string } }) => {
  // props.params.{dynamic route value} 테스트
  return <h1>Movie {id}</h1>;
};

export default MovieDetail;
