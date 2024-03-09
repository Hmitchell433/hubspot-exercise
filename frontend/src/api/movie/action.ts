import { ActionArgsType, TokenType } from "types";
import { getMovies, getFilterValues } from "api/movie/endpoint";
import { withTryCatch } from "utils/withTryCatch";

export const getMoviesAction = (
  token: TokenType,
  queryParams = "",
  { onSetup, onSuccess, onFailure, onCompletion }: ActionArgsType
) => {
  withTryCatch({
    tryFunction: async () => {
      onSetup?.();
      const response = await getMovies(token, queryParams);
      if (response) onSuccess(response.data);
    },
    catchFunction: (e) => onFailure?.(e),
    finallyFunction: () => onCompletion?.(),
  });
};

export const getFilterValuesAction = ({
  onSetup,
  onSuccess,
  onFailure,
  onCompletion,
}: ActionArgsType) => {
  withTryCatch({
    tryFunction: async () => {
      onSetup?.();
      const { data } = await getFilterValues();
      onSuccess(data);
    },
    catchFunction: (e) => onFailure?.(e),
    finallyFunction: () => onCompletion?.(),
  });
};
