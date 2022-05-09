/* eslint-disable prefer-arrow-callback */
import axios from "axios";
import { baseUrl } from "../config/index";

const api = process.env.baseUrl;

const axiosClient = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
// eslint-disable-next-line arrow-body-style
axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;
