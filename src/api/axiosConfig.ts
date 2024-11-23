import useAuthorization from "@/hooks/useAuthorization";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(
  function (config) {
    const { isAuthorized, getToken } = useAuthorization();
    if (isAuthorized()) {
      config.headers.Authorization = `Bearer ${getToken()}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
