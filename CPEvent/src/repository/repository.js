import axios from "axios";

console.log('API URL:', import.meta.env.VITE_REACT_APP_API_URL);

export const repository = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
  withCredentials: true,
});
