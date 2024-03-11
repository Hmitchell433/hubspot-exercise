import axios from "api/axios";
import { MOVIES_URL } from "constant";
import { TokenType } from "types";

export const getMovies = (token: TokenType, queryParams: string) =>
  axios.get(`${MOVIES_URL}?${queryParams}`, {
    cancelToken: token?.token,
  });

export const getFilterValues = () => axios.get(`${MOVIES_URL}/filter-values`);
