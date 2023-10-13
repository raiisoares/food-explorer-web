import axios from "axios";

export const api = axios.create({
  baseURL: "http://https://food-explorer-api-hxyl.onrender.com",
  withCredentials: true,
});
