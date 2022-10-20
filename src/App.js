import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Home from "./layout/components/home/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar/Navbar";
import EmployeeFields from "./routes/poc/employeefields/EmployeeFields";
import PocDetails from "./routes/poc/pocdertails/PocDetails";
import POCHome from "./routes/poc/pochome/POCHome";
import PocList from "./routes/poc/poclist/PocList";
import WorkLogs from "./routes/poc/worklogs/WorkLogs";
// import GoogleDoc from "./routes/poc/googledoc/GoogleDoc";
import GoogleDoc from "./routes/poc/worklogs/WorkLogs";
import ExcelDoc from "./routes/poc/exceldoc/ExcelDoc";
import Login from "./routes/auth/login/Login";
import { AdminRole } from "./Roles";
import Register from "./routes/auth/register/Register";
import NotFound from "./components/notfound/NotFound";
import BenchList from "./routes/bench/benchlist/BenchList";
import BenchWorklogs from "./routes/bench/benchworklogs/BenchWorklogs";
import EditEmployeeFields from "./routes/poc/editemployeefields/EditEmployeeFIelds";
// import EmployeeWorklogs from "./modules/EmployeeWorklogs";
import EditEmployee from "./routes/bench/EditEmployee";
import NewBenchEmployee from "./routes/bench/benchnewemployee/NewBenchEmployee";
import AdminDashboard from "./routes/admindashboard/AdminDashboard";
import BenchEmployeeDetail from "./routes/bench/benchemployeeDetails/BenchEmployeeDetail";
import EditBenchEmployee from "./routes/bench/editBenchEmployee/EditBenchEmployee";
import * as userUtil from "./util/userUtil";
import * as tokenUtil from "./util/tokenUtil";
import SinglePocDetails from "./routes/poc/SinglePocDetails/SinglePocDetails";
import WorkLogLists from "./routes/worklogs/workloglists/WorkLogLists";
import NewWorkLog from "./routes/worklogs/newworklog/NewWorkLog";
import { useDispatch, useSelector } from "react-redux";
import { getBench, getBenchId } from "./redux/features/bench/bench.feature";

export const BASE_URL = `http://brm-tool.ap-south-1.elasticbeanstalk.com/`;
function App() {
  let dispatch = useDispatch();
  // let {benchLists} = useSelector((state)=>{ return state['bench']})
  // console.log(benchLists)
  const [showNav, setShowNav] = useState(true);
  let resourceID = sessionStorage.getItem('resourceID')
  let {benchListItem} = useSelector(store=>{return store['bench']})
  console.log(benchListItem)
  console.log(resourceID)
  //let dispatch = useDispatch();
  useEffect(() => {
    if (userUtil.isLoggedIn) {
      tokenUtil.setAuthToken(userUtil.getToken());
      sessionStorage.getItem("access_token");

    }
    dispatch(getBenchId({resourceID}))

    //dispatch(getBench())
  }, [dispatch]);
  let role = useSelector((state) => state.auth.role);
  return (
    <React.Fragment>
      <BrowserRouter>
        <ToastContainer />
        {showNav && <Navbar />}

        <Routes>
          <Route path="/" element={<Login funcNav={setShowNav} />} />
          <Route path="/register" element={<Register funcNav={setShowNav} />} />
          {/* {(AdminRole.role === "admin" || AdminRole.role === "EMPLOYEE") && (
            <Route path="/home" element={<Home funcNav={setShowNav} />} />
          )} */}
        
          {role === "admin" && (
            <>
            <Route path="/poc" element={<POCHome />} />
            <Route path="/pocdetails" element={<PocDetails />} />
            <Route path="/employeefields" element={<EmployeeFields />} />
            <Route path="/singlePocDetails" element={<SinglePocDetails />} />
            <Route path="/worklog/resource/:id/all" element={<WorkLogLists />} />
            <Route path="/poclist" element={<PocList />} />
            <Route path="/googledocs" element={<GoogleDoc />} />
            <Route path="/exceldocs" element={<ExcelDoc />} />
            <Route path="/benchlist" element={<BenchList />} />
            <Route path="/addpoc" element={<EmployeeFields />} />
            <Route path="/editpoc/:id" element={<EditEmployeeFields />} />
            <Route path="/benchworklogs" element={<BenchWorklogs />} />
            <Route
              path="/dashboard"
              element={<AdminDashboard funcNav={setShowNav} />}
            />
            </>
          )}
          {/* {AdminRole.role === "EMPLOYEE" && (
            <Route path="/employeeworklogs" element={<EmployeeWorklogs />} />
          )} */}
          {(role === "admin" || role === "EMPLOYEE") && (
            <>
            <Route path="/editemployee" element={<EditEmployee />} />
            <Route path="/newbenchEmployee" element={<NewBenchEmployee />} />
            <Route
              path="/editbenchEmployee/:id"
              element={<NewBenchEmployee />}
            />
             <Route path="/empDetails/:id" element={<BenchEmployeeDetail />} />
            </>
          )}
          { (role === "admin" || role === "resource") && (
            <>
            <Route path="/worklog/resource/:id/all" element={<WorkLogLists />} />
            <Route path="/worklog/:id" element={<NewWorkLog />} />
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
