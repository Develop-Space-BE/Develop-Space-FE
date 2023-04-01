import axios from "axios";

export const serverURL = process.env.REACT_APP_SERVER;
export const instanceAxios = axios.create({
  baseURL: serverURL,
  headers: { "Access-Control-Allow-Origin": "*" },
});

instanceAxios.interceptors.request.use((config) => {
  if (config === undefined) return;
  return config;
});
