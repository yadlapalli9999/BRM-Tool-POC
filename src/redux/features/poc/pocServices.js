import Axios from "axios";
const BASE_URL = `http://brm-tool.ap-south-1.elasticbeanstalk.com/poc`;
const getAll = ()=>{
    return Axios.get(`${BASE_URL}`)
}
const getSinglePocDetial = (id)=>{
    return Axios.get(`${BASE_URL}/${id}`)
}

const pocServices = {getAll,getSinglePocDetial}

export default pocServices