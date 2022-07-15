import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cards-notes.herokuapp.com'
});
export default api;
