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
import RequireAccess from "./RequireAccess"
import { getBench, getBenchId } from "./redux/features/bench/bench.feature";

export const BASE_URL = `http://brm-tool.ap-south-1.elasticbeanstalk.com/`;
function App() {
  let dispatch = useDispatch();
  // let {benchLists} = useSelector((state)=>{ return state['bench']})
  // console.log(benchLists)
  const [showNav, setShowNav] = useState(true);
  let resourceID = localStorage.getItem('resourceID')
  let {benchListItem} = useSelector(store=>{return store['bench']})
  console.log(benchListItem)
  console.log(resourceID)
  //let dispatch = useDispatch();
  useEffect(() => {
    if (userUtil.isLoggedIn) {
      tokenUtil.setAuthToken(userUtil.getToken());
      localStorage.getItem("access_token");

    }
    dispatch(getBenchId({resourceID}))

    //dispatch(getBench())
  }, [dispatch]);
 
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
        
            <Route path="/poc" element={<RequireAccess><POCHome /></RequireAccess>} />
            <Route path="/pocdetails" element={<RequireAccess><PocDetails /></RequireAccess>} />
            <Route path="/employeefields" element={<RequireAccess><EmployeeFields /></RequireAccess>} />
            <Route path="/singlePocDetails" element={<RequireAccess><SinglePocDetails /></RequireAccess>} />
            <Route path="/worklogs" element={<RequireAccess><WorkLogs /></RequireAccess>} />
            <Route path="/poclist" element={<RequireAccess><PocList /></RequireAccess>} />
            <Route path="/googledocs" element={<RequireAccess><GoogleDoc /></RequireAccess>} />
            <Route path="/exceldocs" element={<RequireAccess><ExcelDoc /></RequireAccess>} />
            <Route path="/benchlist" element={<RequireAccess><BenchList /></RequireAccess>} />
            <Route path="/addpoc" element={<RequireAccess><EmployeeFields /></RequireAccess>} />
            <Route path="/editpoc/:id" element={<RequireAccess><EditEmployeeFields /></RequireAccess>} />
            <Route path="/benchworklogs" element={<RequireAccess><BenchWorklogs /></RequireAccess>} />
            <Route path="/empDetails/:id" element={<RequireAccess><BenchEmployeeDetail/></RequireAccess>} />

           
         
           <Route
              path="/dashboard"
              element={<RequireAccess><AdminDashboard funcNav={setShowNav} /></RequireAccess>}
            />
          {/* {AdminRole.role === "EMPLOYEE" && (
            <Route path="/employeeworklogs" element={<EmployeeWorklogs />} />
          )} */}
        
            <Route path="/editemployee" element={<RequireAccess><EditEmployee /></RequireAccess>} />
            <Route path="/newbenchEmployee" element={<RequireAccess><NewBenchEmployee /></RequireAccess>} />
            <Route
              path="/editbenchEmployee/:id"
              element={<RequireAccess><NewBenchEmployee /></RequireAccess>}
            />
            <Route path="/empDetails/:id" element={<RequireAccess><BenchEmployeeDetail /></RequireAccess>} />
            <Route path="/workloglist/resource/:id/all"  element={<RequireAccess><WorkLogLists funcNav={setShowNav} /></RequireAccess>} />
            <Route path="/newworklog/:id" element={<RequireAccess><NewWorkLog /></RequireAccess>} />
           
        
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
