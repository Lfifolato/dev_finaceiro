import axios from 'axios';

const api = axios.create({
  //DEV
  //baseURL: 'http://127.0.0.1:3333',

  //PROD
  baseURL: 'https://devfinaceiro.herokuapp.com',
});

export default api;
