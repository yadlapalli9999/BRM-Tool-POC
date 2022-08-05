import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./layout/components/home/Home";
import Navbar from "./layout/components/navbar/Navbar";
import BenchHome from "./modules/bench/BenchHome";
import EmployeeFields from "./modules/poc/employeefields/EmployeeFields";
import PocDetails from "./modules/poc/pocdertails/PocDetails";
import POCHome from "./modules/poc/pochome/POCHome";
import PocList from "./modules/poc/poclist/PocList";
import WorkLogs from "./modules/poc/worklogs/WorkLogs";
import GoogleDoc from "./modules/poc/googledoc/GoogleDoc";
import ExcelDoc from "./modules/poc/exceldoc/ExcelDoc";
import Login from "./modules/auth/login/Login";
import { AdminRole } from "./Roles";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          {AdminRole.role === "ADMIN" && (
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
          {AdminRole.role === "EMPLOYEE" && (
            <Route path="/bench" element={<BenchHome />} />
          )}
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
