import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.2.113:8080', 
});

export default api;
