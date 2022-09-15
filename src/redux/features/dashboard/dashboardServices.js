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
const dashboardServices = {
  pocCount,
  resourceActive,
  resourceCount,
  allDashBoardPocs,
};
export default dashboardServices;
