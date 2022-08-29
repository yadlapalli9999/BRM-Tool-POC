import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./layout/components/home/Home";
import Navbar from "./components/navbar/Navbar";
import EmployeeFields from "./routes/poc/employeefields/EmployeeFields";
import PocDetails from "./routes/poc/pocdertails/PocDetails";
import POCHome from "./routes/poc/pochome/POCHome";
import PocList from "./routes/poc/poclist/PocList";
import WorkLogs from "./routes/poc/worklogs/WorkLogs";
import GoogleDoc from "./routes/poc/googledoc/GoogleDoc";
import ExcelDoc from "./routes/poc/exceldoc/ExcelDoc";
import Login from "./routes/auth/login/Login";
import { AdminRole } from "./Roles";
import Register from "./routes/auth/register/Register";
import NotFound from "./layout/components/notfound/NotFound";
import BenchList from "./routes/bench/benchlist/BenchList";
import BenchWorklogs from "./routes/bench/benchworklogs/BenchWorklogs";
import EditEmployeeFields from "./routes/poc/editemployeefields/EditEmployeeFIelds";
import EmployeeWorklogs from "./modules/EmployeeWorklogs";
import EditEmployee from "./routes/bench/EditEmployee";

import NewBenchEmployee from "./routes/bench/benchnewemployee/NewBenchEmployee";

import AdminDashboard from "./routes/admindashboard/AdminDashboard";
import BenchEmployeeDetail from "./routes/bench/benchemployeeDetails/BenchEmployeeDetail";
import EditBenchEmployee from "./routes/bench/editBenchEmployee/EditBenchEmployee";

export const  BASE_URL = `http://brm-tool.ap-south-1.elasticbeanstalk.com/`;
function App() {
  const [showNav, setShowNav] = useState(true);

  return (
    <React.Fragment>
      <BrowserRouter>
        {showNav && <Navbar />}

        <Routes>
          <Route path="/" element={<Login funcNav={setShowNav} />} />
          <Route path="/register" element={<Register funcNav={setShowNav} />} />
          {(AdminRole.role === "ADMIN" || AdminRole.role === "EMPLOYEE") && (
            <Route path="/home" element={<Home funcNav={setShowNav} />} />
          )}
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
          {AdminRole.role === "EMPLOYEE" && (
            <Route path="/employeeworklogs" element={<EmployeeWorklogs />} />
          )}
          {(AdminRole.role === "ADMIN" || AdminRole.role === "EMPLOYEE") && (
            <Route path="/editemployee" element={<EditEmployee />} />
          )}

          {(AdminRole.role === "ADMIN" || AdminRole.role === "EMPLOYEE") && (
            <Route path="/newbenchEmployee" element={<NewBenchEmployee />} />
          )}
          {(AdminRole.role === "ADMIN" || AdminRole.role === "EMPLOYEE") && (
            <Route path="/editbenchEmployee" element={<EditBenchEmployee/>} />
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
