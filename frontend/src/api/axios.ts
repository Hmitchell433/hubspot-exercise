import axios, { CancelTokenSource } from "axios";

import { toast } from "components/Toast";
import { ERROR_TEXT } from "constant";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError && !axios.isCancel(error)) {
    toast.error(ERROR_TEXT);
    return Promise.reject(error);
  }
});

export const CancelToken = axios.CancelToken;

export type { CancelTokenSource };

export default instance;
