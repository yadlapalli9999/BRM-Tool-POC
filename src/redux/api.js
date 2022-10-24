import Axios from 'axios';
const BASE_URL = 'http://brm-tool.ap-south-1.elasticbeanstalk.com'
const API = Axios.create({baseURL:BASE_URL});

API.interceptors.request.use((req)=>{
    if(localStorage.getItem("access_token")){
        req.headers.Authorization = `Bearer ${localStorage.getItem("access_token")}`
    }
    return req;
})

export default API