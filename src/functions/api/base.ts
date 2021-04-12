import axios from 'axios';
import env from 'react-dotenv';

const baseRequest = axios.create({
    baseURL: env.API_URL,
    headers:{
        "content-type": "application/json",
        "api-key": "dji24jicxijjwrj543fkomfi&&ew50934nfjs42nn?fah:da1@dsajio-djasidj321kleml"
    }
});

export default baseRequest;