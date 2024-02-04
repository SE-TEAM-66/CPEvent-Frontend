import axios from "axios";

export const repository = axios.create({
  baseURL: "http://localhost:4000",
});
