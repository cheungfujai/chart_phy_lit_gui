import axios from 'axios';
import env from 'react-dotenv';


const baseRequest = axios.create({
    baseURL:env.API_URL,
    headers:{
        'Content-Type': 'application/json',
        "api-key":env.API_KEY
    }
});
export default baseRequest;