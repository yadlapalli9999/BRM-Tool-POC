import Axios from "axios";
const BASE_URL = `http://brm-tool.ap-south-1.elasticbeanstalk.com/poc`;
const resourceID = localStorage.getItem('resourceID')
import API from "../../api";
const getAll = ()=>{
    return Axios.get(`${BASE_URL}`)
}
const getSinglePocDetial = (id)=>{
    return Axios.get(`${BASE_URL}/${id}`)
}

const createPoc = (newData)=>{
    return Axios.post(`${BASE_URL}/${resourceID}`,newData)
}

const pocServices = {getAll,getSinglePocDetial,createPoc}

export default pocServices