// import Axios from "axios";

// export const setAuthToken = (access_token) => {
//     if(access_token){
//         Axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
//     }
    
// };

import Axios from "axios";


export const setAuthToken = (access_token) => {
    localStorage.getItem('access_token')
    if(access_token){
        Axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
    }
    
};