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

export const authorizationApi = async user => {
  const res = await instance.post(`login`, user, {
    withCredentials: true
  });

  return res.data;
};
export const autenticateApi = async () => {
  const res = await instance.get(`checkuser`, {
    withCredentials: true
  });
  return JSON.parse(res.data);
};

export const logOutApi = async () => {
  try {
    await instance.get(`logout`, {
      withCredentials: true
    });
    return true;
  } catch (err) {
    return false;
  }
};
export const saveChangesApi = async data => {
  const res = await instance.post(`update`, data, {
    withCredentials: true
  });
  return res.data;
};

export const addToCartApi = async (productId, userId) => {
  const res = await instance.post(
    `tocart`,
    { productId, userId },
    {
      withCredentials: true
    }
  );
  return res.data;
};

export const getCartApi = async id => {
  const res = await instance.get(`getcart`, {
    withCredentials: true
  });
  return res;
};
