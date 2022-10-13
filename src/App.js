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
import { getBench } from "./redux/features/bench/bench.feature";

export const BASE_URL = `http://brm-tool.ap-south-1.elasticbeanstalk.com/`;
function App() {
  let dispatch = useDispatch();
  // let {benchLists} = useSelector((state)=>{ return state['bench']})
  // console.log(benchLists)
  const [showNav, setShowNav] = useState(true);
  let resourceID = localStorage.getItem('resourceID')
  console.log(resourceID)
  let role = localStorage.getItem('role');

  useEffect(() => {
    if (userUtil.isLoggedIn) {
      tokenUtil.setAuthToken(userUtil.getToken());
      localStorage.getItem("access_token");

    }
    //dispatch(getBench())
  }, []);
  
  
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
            <Route path="/poc" element={<POCHome />} />
          )}
          {role === "admin" && (
            <Route path="/pocdetails" element={<PocDetails />} />
          )}
          {role === "admin" && (
            <Route path="/employeefields" element={<EmployeeFields />} />
          )}
          {role === "admin" && (
            <Route path="/singlePocDetails" element={<SinglePocDetails />} />
          )}
          {role === "admin" && (
            <Route path="/worklogs" element={<WorkLogs />} />
          )}
          {role === "admin" && (
            <Route path="/poclist" element={<PocList />} />
          )}
          {role === "admin" && (
            <Route path="/googledocs" element={<GoogleDoc />} />
          )}
          {role === "admin" && (
            <Route path="/exceldocs" element={<ExcelDoc />} />
          )}
          {role === "admin" && (
            <Route path="/benchlist" element={<BenchList />} />
          )}
          {role === "admin" && (
            <Route path="/addpoc" element={<EmployeeFields />} />
          )}
          {role === "admin" && (
            <Route path="/editpoc/:id" element={<EditEmployeeFields />} />
          )}
          {role === "admin" && (
            <Route path="/benchworklogs" element={<BenchWorklogs />} />
          )}
          {/* {AdminRole.role === "EMPLOYEE" && (
            <Route path="/employeeworklogs" element={<EmployeeWorklogs />} />
          )} */}
          {(role === "admin" || role === "EMPLOYEE") && (
            <Route path="/editemployee" element={<EditEmployee />} />
          )}

          {(role === "admin" ||role === "EMPLOYEE") && (
            <Route path="/newbenchEmployee" element={<NewBenchEmployee />} />
          )}
          {(role === "admin" || role === "EMPLOYEE") && (
            <Route
              path="/editbenchEmployee/:id"
              element={<NewBenchEmployee />}
            />
          )}
          
          {(role === "admin" || role === "EMPLOYEE") && (
            <Route path="/empDetails/:id" element={<BenchEmployeeDetail />} />
          )}
          {(role==="admin") && (
            <Route path="/workloglist" element={<WorkLogLists />} />
          )}

          {(role === "resource") && (
            <Route path="/workloglist" element={<WorkLogLists />} />
          )}

          {(role === "admin" || role === "resource") && (
            <Route path="/newworklog" element={<NewWorkLog />} />
          )}

          {role === "admin" && (
            <Route
              path="/dashboard"
              element={<AdminDashboard funcNav={setShowNav} />}
            />
          )}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
