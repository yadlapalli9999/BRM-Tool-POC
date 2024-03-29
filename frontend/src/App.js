import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./layout/components/home/Home";
import Navbar from "./layout/components/navbar/Navbar";
import EmployeeFields from "./modules/poc/employeefields/EmployeeFields";
import PocDetails from "./modules/poc/pocdertails/PocDetails";
import POCHome from "./modules/poc/pochome/POCHome";
import PocList from "./modules/poc/poclist/PocList";
import WorkLogs from "./modules/poc/worklogs/WorkLogs";
import GoogleDoc from "./modules/poc/googledoc/GoogleDoc";
import ExcelDoc from "./modules/poc/exceldoc/ExcelDoc";
import Login from "./modules/auth/login/Login";
import { AdminRole } from "./Roles";
import Register from "./modules/auth/register/Register";
import NotFound from "./layout/components/notfound/NotFound";
import BenchList from "./modules/bench/benchlist/BenchList";
import BenchWorklogs from "./modules/bench/benchworklogs/BenchWorklogs";
import EditEmployeeFields from "./modules/poc/editemployeefields/EditEmployeeFIelds";
import EmployeeWorklogs from "./modules/EmployeeWorklogs";
import EditEmployee from "./modules/bench/EditEmployee";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {(AdminRole.role === "ADMIN" || AdminRole.role === "EMPLOYEE") && (
            <Route path="/home" element={<Home />} />
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

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
