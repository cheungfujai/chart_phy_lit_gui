import axios from 'axios';
import env from 'react-dotenv';

const baseRequest = axios.create({
    //baseURL: "https://chartphylit-api.herokuapp.com/api", //env.template.API_URL, // production
    baseURL: "http://127.0.0.1:5000/api", //env.template.API_URL, // dev
    headers:{
        "content-type": "application/json",
        "api-key": "dji24jicxijjwrj543fkomfi&&ew50934nfjs42nn?fah:da1@dsajio-djasidj321kleml"
    }
});

export default baseRequest;