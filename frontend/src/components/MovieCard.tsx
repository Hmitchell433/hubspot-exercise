import { LazyLoadImage } from "react-lazy-load-image-component";

import { MovieCardProps } from "types";

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="card">
      <LazyLoadImage
        src={movie.poster}
        alt={movie.title}
        effect="blur"
        className="h-[625px]"
      />
      <span className="card-title">
        {movie.title} ({movie.year})
      </span>
      <span className="card-caption">
        Genres: {movie.genre.join(", ")}
      </span>
    </div>
  );
};

export default MovieCard;
