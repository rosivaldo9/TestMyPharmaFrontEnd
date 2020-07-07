import axios from 'axios';

//url base
const api = axios.create({baseURL: 'http://localhost:5000/sistema' });

export default api;