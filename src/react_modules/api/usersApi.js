import axios from 'axios';
export const userCreateApi = async user => {
  const res = await axios.post (`http://localhost:3001/register`, user);
  return res.data;
};
export const authorizationApi = async user => {
  const res = await axios.post (`http://localhost:3001/login`, user, {
    withCredentials: true,
  });
  return res.data;
};
export const autenticateApi = async () => {
  const res = await axios.get (`http://localhost:3001/checkuser`, {
    withCredentials: true,
  });
  return JSON.parse (res.data);
};

export const logOutApi = async () => {
  try {
    await axios.get (`http://localhost:3001/logout`, {
      withCredentials: true,
    });
    return true;
  } catch (err) {
    return false;
  }
};
