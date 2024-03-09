import { CancelTokenSource } from "api/http";

export type ContainerProps = {
  children: React.ReactNode;
};

export type Movie = {
  title: string;
  year: string;
  poster: string;
  type: string;
  genre: string[];
};

export type TokenType = CancelTokenSource | null;

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

export type FilterType = {
  [key: string]: boolean;
};

export type QueryArgsType = {
  searchFilter: string;
  genreFilter: FilterType;
  yearFilter: FilterType;
  typeFilter: string;
  currentPage: number;
};
