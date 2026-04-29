import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "/api",
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers["bypass-tunnel-reminder"] = "true"; // required to bypass the localtunnel reminder page
  return config;
});