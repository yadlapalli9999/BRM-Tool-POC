import Axios from "axios";
import API from "../../api";

const pocCount = () => {
  return API.get(`/dashboard/poc/count`);
};

const resourceActive = () => {
  return API.get(`/dashboard/resource/active`);
};
const resourceCount = () => {
  return API.get(`/dashboard/resource/count`);
};
const allDashBoardPocs = () => {
  return API.get(`/poc`);
};

const inActiveResources = () => {
  return API.get(`/dashboard/resource/inactive`);
};
// const pieChartData = () => {
//   return API.get(`/dashboard/poc/count`);
// };

const dashboardServices = {
  pocCount,
  resourceActive,
  resourceCount,
  allDashBoardPocs,
  inActiveResources,

};
export default dashboardServices;
