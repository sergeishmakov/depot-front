import axios from 'axios';
export const userCreateApi = async user => {
  const res = await axios.post (`http://localhost:3001/register`, user);
  return res.data;
};
export const autenticateApi = async user => {
  const res = await axios.post (`http://localhost:3000/login`, user);
  return res.data;
};
