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

export const BASE_URL = `http://brm-tool.ap-south-1.elasticbeanstalk.com/`;
function App() {
  const [showNav, setShowNav] = useState(true);
  useEffect(() => {
    if (userUtil.isLoggedIn) {
      tokenUtil.setAuthToken(userUtil.getToken());
      localStorage.getItem("access_token");
    }
  }, []);

  return (
    <React.Fragment>
      <BrowserRouter>
        <ToastContainer />
        {showNav && <Navbar />}

        <Routes>
          <Route path="/" element={<Login funcNav={setShowNav} />} />
          <Route path="/register" element={<Register funcNav={setShowNav} />} />
          {/* {(AdminRole.role === "ADMIN" || AdminRole.role === "EMPLOYEE") && (
            <Route path="/home" element={<Home funcNav={setShowNav} />} />
          )} */}
          {AdminRole.role === "ADMIN" && (
            <Route path="/poc" element={<POCHome />} />
          )}
          {AdminRole.role === "ADMIN" && (
            <Route path="/pocdetails" element={<PocDetails />} />
          )}
          {AdminRole.role === "ADMIN" && (
            <Route path="/employeefields" element={<EmployeeFields />} />
          )}
          {AdminRole.role === "ADMIN" && (
            <Route path="/singlePocDetails" element={<SinglePocDetails />} />
          )}
          {AdminRole.role === "ADMIN" && (
            <Route path="/worklogs" element={<WorkLogs />} />
          )}
          {AdminRole.role === "ADMIN" && (
            <Route path="/poclist" element={<PocList />} />
          )}
          {AdminRole.role === "ADMIN" && (
            <Route path="/googledocs" element={<GoogleDoc />} />
          )}
          {AdminRole.role === "ADMIN" && (
            <Route path="/exceldocs" element={<ExcelDoc />} />
          )}
          {AdminRole.role === "ADMIN" && (
            <Route path="/benchlist" element={<BenchList />} />
          )}
          {AdminRole.role === "ADMIN" && (
            <Route path="/addpoc" element={<EmployeeFields />} />
          )}
          {AdminRole.role === "ADMIN" && (
            <Route path="/editpoc" element={<EditEmployeeFields />} />
          )}
          {AdminRole.role === "ADMIN" && (
            <Route path="/benchworklogs" element={<BenchWorklogs />} />
          )}
          {/* {AdminRole.role === "EMPLOYEE" && (
            <Route path="/employeeworklogs" element={<EmployeeWorklogs />} />
          )} */}
          {(AdminRole.role === "ADMIN" || AdminRole.role === "EMPLOYEE") && (
            <Route path="/editemployee" element={<EditEmployee />} />
          )}

          {(AdminRole.role === "ADMIN" || AdminRole.role === "EMPLOYEE") && (
            <Route path="/newbenchEmployee" element={<NewBenchEmployee />} />
          )}
          {(AdminRole.role === "ADMIN" || AdminRole.role === "EMPLOYEE") && (
            <Route
              path="/editbenchEmployee/:id"
              element={<NewBenchEmployee />}
            />
          )}
          {(AdminRole.role === "ADMIN" || AdminRole.role === "EMPLOYEE") && (
            <Route path="/empDetails/:id" element={<BenchEmployeeDetail />} />
          )}

          {AdminRole.role === "ADMIN" && (
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
