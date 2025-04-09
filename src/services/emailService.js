import axios from 'axios';

const API_URL = 'http://localhost:5000/api/email/send';

export const sendEmail = async (data) => {
  const response = await axios.post(API_URL, data);
  return response.data;
};
