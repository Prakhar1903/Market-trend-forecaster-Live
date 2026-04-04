import axios from "axios";

const http = axios.create({
  baseURL: "https://market-trend-forecaster-main.onrender.com", // updated to production
});

// Automatically attach token to every request
http.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default http;
