import API from "../../api";
const resourceID = localStorage.getItem("resourceID");


const getAll = () => {
    console.log(resourceID)
    return API.get(`/worklog/resource/${resourceID}/all`);
};

const createWorklog = (newData)=>{
    return API.post(`/worklog/${resourceID}`, newData);

}



  const worklogService = {getAll,createWorklog}

  export default worklogService;