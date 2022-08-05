import React, { useEffect, useState } from "react";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';
import Axios from "axios";
import './bench.css';
import {Link} from 'react-router-dom';

let BenchEmployeeList = () =>{
    let [benchList,setBenchList] = useState([])

    useEffect(()=>{
        fetchData()
     },[])

     let fetchData = ()=>{
        Axios.get('http://localhost:5000/EmployeeList').then((response)=>{
            $(document).ready(function () {
                $('#dtBasicExample').DataTable();
                $('.dataTables_length').addClass('bs-select');
              });
            setBenchList(response.data)
        }).catch((error)=>{
         console.log(error)
        })
     }
    // let [benchList,setBenchList] = useState([{
    //     "empId":"FL1305",
    //     "name":"Ramarao",
    //     "email":"rama.yadlapalli@fissionlabs.com",
    //     "totalWorkExp":4,
    //     "totalExpinFission":1,
    //     "primarySkills":[
    //         {
    //             "skillName": "NodeJs",
    //             "totalExp": 3
    //         }
    //     ],
    //     "reportingManager": "shwetha",
    //     "teamLead": "adil"
    // }]);
    // useEffect(()=>{
       
    //       setBenchList(benchList)
    // },[benchList])

    let handleDelete =(id)=>{
        Axios.delete(`http://localhost:5000/EmployeeList/${id}`).then((res)=>{
            console.log(res)
            fetchData()

        }).catch((error)=>{
            console.log(error)
        })
      //setBenchList(benchList.filter((item)=> item.empId !== empId))
    }
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 style={{marginTop:'30px'}}>Bench List</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                    

                        <Link to={`/newbenchEmployee`} className="btn btn-secondary btn-sm">Add Bench User</Link>
                        {/* <main>
                            <Outlet/>
                        </main> */}
                    </div>
                </div>
                <div className="row" style={{marginTop:'30px'}}>
                 <div className="col">
                 <table id="dtBasicExample" className="table table-striped table-sm cell-border" cellSpacing="0" width="100%">
  <thead>
    <tr>
      <th className="th-sm">EmpId

      </th>
      <th className="th-sm">Name

      </th>
      <th className="th-sm">Email

      </th>
      <th className="th-sm">TotalWorkExp

      </th>
      <th className="th-sm">TotalExpFission 

      </th>
      <th className="th-sm">PrimarySkills

      </th>
      <th className="th-sm">ReportingManager</th>
      <th className="th-sm">TeamLead</th>
      <th className="th-sm">Actions</th>
    </tr>
  </thead>
 <tbody>
    {
        benchList.length>0 && benchList.map((item)=>{
            return <tr key={item.id} >
                <td><Link to={`/worklog/${item.id}`}>{item.id}</Link></td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.totalWorkExp}</td>
                <td>{item.totalExpFission}</td>
                <td>{item.primarySkills[0].skillName}</td>
                <td>{item.reportingManager}</td>
                <td>{item.teamLead}</td>
                <td>
                <Link to={`/editBenchEmployee/${item.id}`}><i className="fas fa-edit"/></Link> &nbsp;&nbsp;
                <i className="fa fa-trash" onClick={()=>{handleDelete(item.id)}}/>
                </td>
            </tr>
        })
    }
 </tbody>
  
</table>
                 </div>
               </div>
            </div>
        </React.Fragment>
    )
}

export default BenchEmployeeList;