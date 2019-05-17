import axios from 'axios';
export const userCreateApi = async user => {
  const res = await axios.post (`http://localhost:3001/register`, user);
  return res.data;
};
