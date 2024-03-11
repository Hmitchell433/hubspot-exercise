import http from "api/axios";
import { MOVIES_URL } from "constant";
import { TokenType } from "types";

export const getMovies = (token: TokenType, queryParams: string) =>
  http.get(`${MOVIES_URL}?${queryParams}`, {
    cancelToken: token?.token,
  });

export const getFilterValues = () => http.get(`${MOVIES_URL}/filter-values`);
