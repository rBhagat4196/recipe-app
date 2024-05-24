import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:5000/api', for local hos
  // for deployment
  baseURL : 'https://recipe-app-1-f5lh.onrender.com/api/'   
});

export default api;
