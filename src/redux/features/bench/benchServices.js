import Axios from "axios";
import API from "../../api";
const BASE_URL = `http://brm-tool.ap-south-1.elasticbeanstalk.com/resources`;
const access_token = localStorage.getItem("access_token");
const getAll = () => {
  // const config = {
  // 	headers: {
  // 		'Authorization': `Bearer ${access_token}`,
  // 	}
  // };
  //console.log(localStorage.getItem('access_token'))
  return API.get(`/resources`);
};

const get = (id) => {
  return API.get(`/resources/${id}`);
};

const create = (newData) => {
  return API.post(`/resources`, newData);
};

const update = (newData) => {
  const id = newData._id;

  //  id = data.data._id;
  //console.log(id)
  return API.put(`/resources/${id}`, newData);
};

const remove = (id) => {
  return API.delete(`/resources/${id}`);
};

const searchTitle = (query) => {
  //console.log(searchValue)
  return API.post(`/resources/search`, query);
};
const updateSingleResource = (newData) => {
  const id = newData._id;
  console.log(id);
  return API.put(`/resources/${id}`, newData);
};

const selectedExperience = (exp) => {
  return API.get(`/resources/exp/${exp}`);
};

const BenchServices = {
  getAll,
  get,
  create,
  update,
  remove,
  searchTitle,
  updateSingleResource,
  selectedExperience,
};
export default BenchServices;
