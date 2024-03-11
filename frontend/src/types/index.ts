import { SetStateAction, Dispatch } from "react";

import { CancelTokenSource } from "api/axios";

export type DropdownProps = {
  label: string;
  width: string;
  values: string[];
  filters: FilterType;
  handleFilter: (key: string, value: boolean) => void;
};

export type TokenType = CancelTokenSource | null;

export type EffectType = (
  token: CancelTokenSource | null,
  setToken: React.Dispatch<React.SetStateAction<CancelTokenSource | null>>
) => void;

export type RadioButtonProps = {
  label: string;
};

export type MovieCardProps = {
  movie: Movie;
};

export type ContainerProps = {
  children: React.ReactNode;
};

export type withTryCatchType = {
  tryFunction: () => Promise<any>;
  catchFunction?: (e: any) => void | null | undefined;
  finallyFunction?: () => void | undefined;
};

export type ActionArgsType = {
  onSetup?: () => void;
  onSuccess: (data: any) => void;
  onFailure?: (error: any) => void;
  onCompletion?: () => void;
};

export type QueryArgsType = {
  searchFilter: string;
  genreFilter: FilterType;
  yearFilter: FilterType;
  typeFilter: string;
  currentPage: number;
};

export type MovieContextType = {
  movies: Movie[];
  genreValues: string[];
  yearValues: string[];
  genreFilter: FilterType;
  yearFilter: FilterType;
  typeFilter: string;
  searchFilter: string;
  isLoading: boolean;
  handleClearFilter: () => void;
  setTypeFilter: Dispatch<SetStateAction<string>>;
  setGenreFilter: Dispatch<SetStateAction<FilterType>>;
  setSearchFilter: Dispatch<SetStateAction<string>>;
  setYearFilter: Dispatch<SetStateAction<FilterType>>;
  currentPage: number;
  totalPages: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
};

export type MovieContextProviderProps = {
  children: React.ReactNode;
};

export type Movie = {
  title: string;
  year: string;
  poster: string;
  type: string;
  genre: string[];
};

export type FilterType = {
  [key: string]: boolean;
};

export type PageChangeType = { selected: number };
