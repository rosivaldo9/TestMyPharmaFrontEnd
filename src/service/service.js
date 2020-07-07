import axios from 'axios';

//url base
const api = axios.create({baseURL: process.env.REACT_APP_API_URL });

export default api;