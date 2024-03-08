const Fuse = require("fuse.js");

const { DEFAULT_TYPE_FILTER, DEFAULT_SEARCH_KEY } = require("../constants");

const applySearchFilter = (arrayValues, searchValue) => {
  if (searchValue?.length) {
    const fuse = new Fuse(arrayValues, { keys: [DEFAULT_SEARCH_KEY], includeScore: true });
    const searchResult = fuse.search(searchValue);
    return searchResult.map(({ item }) => item);
  }
  return arrayValues;
};

const applyGenreFilter = (arrayValues, genre) => {
  if (genre?.length) {
    genre = JSON.parse(genre);
    arrayValues = arrayValues.filter((arrayValue) =>
      genre.some((filteredGenre) => arrayValue.genre.includes(filteredGenre))
    );
  }
  return arrayValues;
};

const applyYearFilter = (arrayValues, year) => {
  if (year?.length) {
    year = JSON.parse(year);
    arrayValues = arrayValues.filter((arrayValue) =>
      year.includes(arrayValue.year)
    );
  }
  return arrayValues;
};

const applyTypeFilter = (arrayValues, type) => {
  if (type?.length && type !== DEFAULT_TYPE_FILTER) {
    arrayValues = arrayValues.filter((arrayValue) => arrayValue.type === type);
  }
  return arrayValues;
};

const applyFilters = (arrayValues, { search, genre, year, type }) => {
  arrayValues = applyGenreFilter(arrayValues, genre);
  arrayValues = applyYearFilter(arrayValues, year);
  arrayValues = applyTypeFilter(arrayValues, type);
  arrayValues = applySearchFilter(arrayValues, search);
  return arrayValues;
};

module.exports = { applyFilters };
