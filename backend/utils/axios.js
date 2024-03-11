const axios = require("axios");
const { parsed: dotenv } = require("dotenv").config();

const instance = axios.create({
  baseURL: dotenv.API_URL,
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
  if (!expectedError) {
    return Promise.reject(error);
  }
});

module.exports = { axios: instance };
