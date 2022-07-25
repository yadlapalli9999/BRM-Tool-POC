import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './layout/components/home/Home';
import Navbar from './layout/components/navbar/Navbar';
import BenchHome from './modules/bench/BenchHome';
import POCHome from './modules/poc/POCHome';
import Login from './modules/user/login/Login';
import Register from './modules/user/register/Register';

function App() {
  return (
    <React.Fragment>
       
       <BrowserRouter>
       <Navbar/>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/poc' element={<POCHome/>}/>
            <Route path='/bench' element={<BenchHome/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
         </Routes>
       </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
