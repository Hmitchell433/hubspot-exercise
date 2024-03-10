import { useMovieContext } from "context/MovieContext";
import { RadioButtonProps } from "types";

const RadioButton = ({ label }: RadioButtonProps) => {
  const { typeFilter, setTypeFilter } = useMovieContext();

  return (
    <div className="radio-container">
      <input
        id="movie-type"
        type="radio"
        value={label}
        name="movie-type"
        checked={typeFilter === label}
        onChange={({ target: { value } }) => setTypeFilter(value)}
        className="radio-btn"
      />
      <label htmlFor="movie-type" className="radio-label">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
