import axios from 'axios';

const baseRequest = axios.create({
    baseURL: "http://localhost:5000/api"
  });


export default baseRequest;