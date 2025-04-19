import axios from "axios";

const URL = import.meta.env.VITE_API_URL;

const API = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((config) => {
  const language = localStorage.getItem("language") || "ru";
  config.headers["Accept-Language"] = language;
  return config;
});

export default API;
