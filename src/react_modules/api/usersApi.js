import axios from "axios";
import { API_BASE_URL } from "../config";

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 1000
});

export const userCreateApi = async user => {
  const res = await instance.post("register", user);
  return res.data;
};
