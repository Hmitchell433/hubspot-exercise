import Dropdown from "components/Dropdown";
import RadioButton from "components/RadioButton";
import SearchField from "components/SearchField";
import { useMovieContext } from "context/MovieContext";
import { CLEAR_FILTER_TEXT, TYPE_VALUES } from "constant";

const Filters = () => {
  const {
    handleClearFilter,
    genreValues,
    yearValues,
    genreFilter,
    setGenreFilter,
    yearFilter,
    setYearFilter,
  } = useMovieContext();

  const handleGenreFilter = (key: string, value: boolean) =>
    setGenreFilter((prev) => ({
      ...prev,
      [key]: value,
    }));

  const handleYearFilter = (key: string, value: boolean) =>
    setYearFilter((prev) => ({
      ...prev,
      [key]: value,
    }));

  return (
    <div className="filter-container">
      <div className="filter-dropdown-search-container">
        <div className="filter-dropdown-container">
          <Dropdown
            label="genre"
            filters={genreFilter}
            values={genreValues}
            handleFilter={handleGenreFilter}
            width="w-44"
          />
          <Dropdown
            label="year"
            filters={yearFilter}
            values={yearValues}
            handleFilter={handleYearFilter}
            width="w-28"
          />
        </div>
        <SearchField />
      </div>
      <div className="filter-radio-container">
        <div className="filter-radio">
          {TYPE_VALUES.map((typeValue) => (
            <RadioButton key={typeValue} label={typeValue} />
          ))}
        </div>
        <span className="clear-filter" onClick={handleClearFilter}>
          {CLEAR_FILTER_TEXT}
        </span>
      </div>
    </div>
  );
};

export default Filters;
