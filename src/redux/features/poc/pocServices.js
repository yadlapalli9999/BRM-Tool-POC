import Axios from "axios";
const BASE_URL = `http://brm-tool.ap-south-1.elasticbeanstalk.com/poc`;
const resourceID = localStorage.getItem("resourceID");
import API from "../../api";
const getAll = () => {
  // return Axios.get(`${BASE_URL}`)
  return API.get(`/poc`);
};
const getAllResources = () => {
  // const config = {
  // 	headers: {
  // 		'Authorization': `Bearer ${access_token}`,
  // 	}
  // };
  //console.log(localStorage.getItem('access_token'))
  return API.get(`/resources`);
};
const getSinglePocDetial = (id) => {
  //   return Axios.get(`${BASE_URL}/${id}`);
  return API.get(`/poc/${id}`);
};
const createPoc = (newData) => {
  //   return Axios.post(`${BASE_URL}/${resourceID}`, newData);
  console.log(resourceID);
  return API.post(`/poc/${resourceID}`, newData);
};

const updatePoc = (newData) => {
  const pocID = newData._id;
  console.log(newData);
  const tempObj = {
    name: newData.name,
    members: newData.members,
    status: newData.status,
    // teamLead: [`${newData.teamLead}`],
    description: newData.description,
    documents: [`${newData.documents}`],
    duration: newData.duration,
    // createdBy: newData.createdBy,
  };
  // console.log(pocID);
  return API.put(`/poc/${pocID}`, tempObj);
};

const searchTitle = (query) => {
  //console.log(searchValue)
  return API.post(`/resources/search`, query);
};
const pocServices = {
  getAll,
  getSinglePocDetial,
  createPoc,
  searchTitle,
  getAllResources,
  updatePoc,
};

export default pocServices;
