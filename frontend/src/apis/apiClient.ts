import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://your-api-url.com', 
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

export default apiClient;
