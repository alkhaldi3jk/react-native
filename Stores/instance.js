import axios from "axios";

export const baseURL = "http://192.168.8.114:8004";

export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});


