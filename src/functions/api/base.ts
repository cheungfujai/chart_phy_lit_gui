import axios from 'axios';
import env from 'react-dotenv';

const baseRequest = axios.create({
    baseURL: "http://127.0.0.1:5000/api", //env.template.API_URL,
    headers:{
        'Content-Type': 'application/json',
        //"api-key":env.API_KEY
    }
});

export default baseRequest;