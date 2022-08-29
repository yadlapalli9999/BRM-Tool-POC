import Axios from "axios";
const BASE_URL ='https://brm-tool.ap-south-1.elasticbeanstalk.com/';
const login = (email, password) => {
    return Axios
      .post(`${BASE_URL}/resource/login`, {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log(JSON.stringify(response.data))
        }
        return response.data;
      });
  };

  const logout = () => {
    localStorage.removeItem("user");
  };  
  
const authService = {login,logout}
export default authService;