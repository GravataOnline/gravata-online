import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_GRAVATAS,
});

api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const userToken = "ooooooooi";
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = userToken;
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default api;
