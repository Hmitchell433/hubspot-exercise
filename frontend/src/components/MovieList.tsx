import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import Loader from "components/Loader";
import { useMovieContext } from "context/MovieContext";

const MovieList = () => {
  const { movies, isLoading } = useMovieContext();

  if (isLoading) return <Loader />;

  return (
    <div className="movie-list">
      {isLoading && <Loader />}
      {movies.length > 0 ? (
        <div className="movie-card">
          {movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
      ) : (
        <div>No Movies Exist</div>
      )}
      <Pagination />
    </div>
  );
};

export default MovieList;
