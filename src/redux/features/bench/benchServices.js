import Axios from 'axios';
import API from '../../api';
const BASE_URL = `http://brm-tool.ap-south-1.elasticbeanstalk.com/resources`;

const getAll = () => {
    return Axios.get(`${BASE_URL}`);
};

const get = id =>{
    return Axios.get(`${BASE_URL}/${id}`)
}

const create = (newData)=>{
    
    return Axios.post(`${BASE_URL}`,newData)
}

const update = (newData)=>{
    const id = newData._id

    //  id = data.data._id;
    //console.log(id)
    return Axios.patch(`${BASE_URL}/${id}`,newData)
}

const remove = (id) =>{
    return Axios.delete(`${BASE_URL}/${id}`)
}

const searchTitle = (query) =>{
    //console.log(searchValue)
    return Axios.post(`${BASE_URL}/search`,query);
}




const BenchServices = {getAll,get,create,update,remove,searchTitle};
export default BenchServices;