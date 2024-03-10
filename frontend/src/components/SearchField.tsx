import { Search } from "lucide-react";

import { useMovieContext } from "context/MovieContext";

const SearchField = () => {
  const { searchFilter, setSearchFilter } = useMovieContext();
  return (
    <div>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <input
          type="text"
          id="search"
          className="search-field"
          value={searchFilter}
          onChange={({ target: { value } }) => setSearchFilter(value)}
        />
        <button
          type="button"
          className="search-icon"
        >
          <Search className="text-filter-gray" size={20} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export default SearchField;
