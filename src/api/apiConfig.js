import axios from "axios";
import { getCookies } from "./cookie";

export const serverURL = process.env.REACT_APP_SERVER;
export const instanceAxios = axios.create({
  baseURL: serverURL,
});

instanceAxios.interceptors.request.use((config) => {
  if (config === undefined) return;
  config.headers["Authorization"] = getCookies("authorization");
  return config;
});
