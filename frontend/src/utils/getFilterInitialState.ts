import { FilterType } from "types";

export const getFilterInitialState = (arrayValues: string[]) => {
  const initialStateObj: FilterType = {};
  arrayValues.forEach((value) => {
    initialStateObj[value] = false;
  });
  return initialStateObj;
};
