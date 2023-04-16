import env from "./env";
import axios from "axios";

const instance = axios.create({
  baseURL: env.API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    console.log("lel, config");
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete instance.defaults.headers.common.Authorization;
    }
    return config;
  },

  (error) => Promise.reject(error)
);

export default instance;
