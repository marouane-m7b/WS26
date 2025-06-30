import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
});

axiosClient.interceptors.request.use((config) => {
  const ud = JSON.parse(localStorage.getItem("ud"));
  if (ud && ud._token) {
    config.headers.Authorization = `Bearer ${ud._token}`;
  }
  return config;
});
