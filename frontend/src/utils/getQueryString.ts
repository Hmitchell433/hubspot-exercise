import { PER_PAGE } from "constant";
import { QueryArgsType } from "types";

export const getQueryString = ({
  searchFilter,
  genreFilter,
  yearFilter,
  typeFilter,
  currentPage,
}: QueryArgsType) => {
  const queryParams = new URLSearchParams();
  if (searchFilter.length) {
    queryParams.append("search", searchFilter);
  }
  const filteredGenres: string[] = Object.keys(genreFilter).filter(
    (genre: string) => genreFilter[genre]
  );
  if (filteredGenres.length) {
    queryParams.append("genre", JSON.stringify(filteredGenres));
  }
  const filteredYears: string[] = Object.keys(yearFilter).filter(
    (year: string) => yearFilter[year]
  );
  if (filteredYears.length) {
    queryParams.append("year", JSON.stringify(filteredYears));
  }
  if (typeFilter.length) {
    queryParams.append("type", typeFilter);
  }
  queryParams.append("page", (currentPage + 1).toString());
  queryParams.append("per_page", PER_PAGE.toString());
  return queryParams.toString();
};
