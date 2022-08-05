import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import { EmployeeList } from "./List";

let NewBenchEmployee = (props) => {
  let params = useParams();
  console.log(params.id)

  useEffect(()=>{
   let itemBench = EmployeeList.filter((item)=>item.empId === params.id)
   console.log(itemBench)
  //  setBench({
  //   name:itemBench[0].name,
  //   empId:itemBench[0].empId,
  //   email:itemBench[0].email,
  //   totalWorkExp:itemBench[0].totalWorkExp,
  //   totalExpinFission:itemBench[0].totalExpFission,
  //   reportingManager:itemBench[0].reportingManager,
  //   teamLead:itemBench[0].teamLead,
  //   notes:itemBench[0].notes
  //  })

  },[])
  let navigate = useNavigate();

  let [bench, setBench] = useState({
    name: "",
    id: "",
    email: "",
    totalWorkExp: "",
    totalExpinFission: "",
    primarySkills: [
      {
        skillName: "",
        totalExp: "",
      },
    ],
    reportingManager: "",
    teamLead: "",
    notes:""
  });

  let updateInput = (event) => {
    setBench({
      ...bench,
      [event.target.name]: event.target.value,
    });
  };
  let updatePrimarySkillInput = (event)=>{
    setBench({
      ...bench,
      primarySkills:{
     ...bench.primarySkills,
     [event.target.name]:event.target.value
      }
    })
  }
  let {
    name,
    id,
    email,
    totalExpinFission,
    totalWorkExp,
    teamLead,
    skillName,
    totalExp,
    reportingManager,
    notes
  } = bench;
  let handleBenchEmployeeSubmit = (event) => {
    event.preventDefault();
    //setBench([props.benchList, bench]);
     Axios.post(`http://localhost:5000/EmployeeList`,bench).then((res)=>{
        setBench(res.data)
        navigate("/bench");
     }).catch((error)=>{
      console.log(error)
     })
    // EmployeeList.push(bench)
    // console.log(bench);
    
  };
  return (
    <React.Fragment>
      <div className="container">
        <pre>{JSON.stringify(bench)}</pre>
        <div
          className="row justify-content-center"
          style={{ marginTop: "30px" }}
        >
          <div className="col-md-9">
            <div className="card">
              <div className="card-header text-center">
                <h2>New Bench Employee</h2>
              </div>
              <div className="card-body">
                <div className="col-md-12 mb-md-0 mb-5">
                  <form onSubmit={handleBenchEmployeeSubmit}>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={updateInput}
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="id"
                            name="id"
                            value={id}
                            onChange={updateInput}
                            className="form-control"
                            placeholder="EmpId"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={updateInput}
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="TotalWorkExp"
                            name="totalWorkExp"
                            value={totalWorkExp}
                            onChange={updateInput}
                            className="form-control"
                            placeholder="TotalWorkExp"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="totalExpinFission"
                            name="totalExpinFission"
                            value={totalExpinFission}
                            onChange={updateInput}
                            className="form-control"
                            placeholder="TotalExpinFission"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="SkillName"
                            name="skillName"
                            value={skillName}
                            onChange={updatePrimarySkillInput}
                            className="form-control"
                            placeholder="SkillName"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="TotalExp"
                            name="totalExp"
                            value={totalExp}
                            onChange={updatePrimarySkillInput}
                            className="form-control"
                            placeholder="TotalExp"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="ReportingManager"
                            name="reportingManager"
                            value={reportingManager}
                            onChange={updateInput}
                            className="form-control"
                            placeholder="ReportingManager"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="teamLead"
                            name="teamLead"
                            value={teamLead}
                            onChange={updateInput}
                            className="form-control"
                            placeholder="teamLead"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="notes"
                            name="notes"
                            value={notes}
                            onChange={updateInput}
                            className="form-control"
                            placeholder="notes"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-center text-md-left">
                    <input
                      className="btn btn-primary"
                      type="submit" value="Add Employee"/>
                  </div>
                  </form>

                 
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default NewBenchEmployee;
