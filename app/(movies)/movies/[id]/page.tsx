const MovieDetail = ({ params: { id } }: { params: { id: string } }) => {
  // props.params.{dynamic route value} test commit
  return <h1>Movie {id}</h1>;
};

export default MovieDetail;
