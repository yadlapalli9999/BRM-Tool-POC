import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './layout/components/home/Home';
import Navbar from './layout/components/navbar/Navbar';

import NewBenchEmployee from './modules/bench/NewBenchEmployee';
import PopBenchEmpList from './modules/bench/PopUpBenchEmpList';
import POCHome from './modules/poc/POCHome';
import Login from './modules/user/login/Login';
import Register from './modules/user/register/Register';
import WorkLogList from './modules/worklogs/WorkLogList';

function App() {
  return (
    <React.Fragment>
       
       <BrowserRouter>
       <Navbar/>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/poc' element={<POCHome/>}/>
            <Route path='/bench' element={<PopBenchEmpList/>}/>
            <Route path="/newbenchEmployee" element={<NewBenchEmployee/>}/>
            {/* <Route path="/editBenchEmployee/:id" element={<NewBenchEmployee/>}/> */}
            {/* <Route path="/worklog/:id" element={<PopUpWorkLogList/>}/>
            <Route path='/addWorkLog' element={<AddWorkLog/>}/>
            <Route path='/editWorkLog/:empId/:taskId' element={<AddWorkLog/>}/> */}
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>

            <Route path="/workloglist" element={<WorkLogList/>}/>
         </Routes>
       </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
