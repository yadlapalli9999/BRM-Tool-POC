
import Axios from "axios";

export const setAuthToken = (access_token) => {
    sessionStorage.getItem('access_token')
    if(access_token){
        Axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    }
};