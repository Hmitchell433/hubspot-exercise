import { FilterType } from "types";

export const resetFilterState = (oldState: FilterType) => {
  const newState: FilterType = {};
  Object.keys(oldState).forEach((key) => {
    newState[key] = false;
  });
  return newState;
};
