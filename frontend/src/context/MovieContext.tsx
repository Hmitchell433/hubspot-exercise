import { createContext, useState, useContext, useEffect } from "react";

import useCancelToken from "hooks/useCancelToken";
import {
  MovieContextProviderProps,
  MovieContextType,
  Movie,
  FilterType,
} from "types";
import { getMoviesAction, getFilterValuesAction } from "api/movie/action";
import { MOVIE_CONTEXT_ERROR, TYPE_VALUES } from "constant";
import { getFilterInitialState } from "utils/getFilterInitialState";
import { getQueryString } from "utils/getQueryString";
import { resetFilterState } from "utils/resetFilterState";

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieContextProvider = ({
  children,
}: MovieContextProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [genreValues, setGenreValues] = useState<Array<string>>([]);
  const [yearValues, setYearValues] = useState<Array<string>>([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const [genreFilter, setGenreFilter] = useState<FilterType>({});
  const [yearFilter, setYearFilter] = useState<FilterType>({});
  const [typeFilter, setTypeFilter] = useState<string>(TYPE_VALUES[0]);
  const [searchFilter, setSearchFilter] = useState<string>("");

  useEffect(() => {
    getFilterValuesAction({
      onSuccess: (data) => {
        setGenreValues(data.genres);
        setGenreFilter(getFilterInitialState(data.genres));
        setYearValues(data.years);
        setYearFilter(getFilterInitialState(data.years));
      },
    });
  }, []);

  useCancelToken(
    (token, setToken) => {
      getMoviesAction(
        token,
        getQueryString({
          searchFilter,
          genreFilter,
          yearFilter,
          typeFilter,
          currentPage,
        }),
        {
          onSuccess: (data) => {
            setToken(null);
            setMovies(data.movies);
            setTotalPages(data.totalPages);
          },
          onCompletion: () => setIsLoading(false),
        }
      );
    },
    [searchFilter, genreFilter, yearFilter, typeFilter, currentPage]
  );

  useEffect(
    () => setCurrentPage(0),
    [searchFilter, genreFilter, yearFilter, typeFilter]
  );

  const handleClearFilter = () => {
    setGenreFilter(resetFilterState);
    setYearFilter(resetFilterState);
    setTypeFilter(TYPE_VALUES[0]);
    setSearchFilter("");
    setCurrentPage(0);
  };

  const value = {
    movies,
    genreValues,
    yearValues,
    genreFilter,
    setGenreFilter,
    yearFilter,
    setYearFilter,
    typeFilter,
    setTypeFilter,
    searchFilter,
    setSearchFilter,
    handleClearFilter,
    currentPage,
    setCurrentPage,
    totalPages,
    isLoading,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error(MOVIE_CONTEXT_ERROR);
  }
  return context;
};

export default MovieContextProvider;
