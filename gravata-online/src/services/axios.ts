import axios, { AxiosRequestConfig } from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(context?: any) {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_GRAVATAS,
  });

  const { "gravata-token": token } = parseCookies(context);

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      console.log("config", config);
      if (!config.headers) {
        config.headers = {};
      }
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error: any) => {
      return Promise.reject(error);
    }
  );
  return api;
}
