import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MDBBtn,MDBValidation,MDBValidationItem,MDBInput,MDBTextArea,MDBCard,MDBCardHeader,MDBCardBody,MDBCardTitle, MDBRow, MDBCol, MDBContainer, MDBFooter, MDBCardFooter } from "mdb-react-ui-kit";
import "./newbenchEmployee.css";
import { useDispatch } from "react-redux";
import { createBench } from "../../../redux/features/bench/bench.feature";

let NewBenchEmployee = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let [newBench,setNewBench] = useState({
    name:'',
    email:'',
    emp_id:'',
    password:'',
    totalWorkExp:Number,
    totalExpinFission:Number,
    primarySkills:[{
      skillName:'',
      totalExp:Number
    }],
    reportingManager:'',
    projectName:'',
    teamLead:'',
    status:'',
    notes:''
  })

  let handleUpdateInput = (event) =>{
      setNewBench({
        ...newBench,
        [event.target.name]:event.target.value
      })
  }

  let handleUpdatePrimarySkillsInput = (event)=>{
    setNewBench({
      ...newBench,
      primarySkills:[
        {
        ...primarySkills[0],
        [event.target.name] :event.target.value
      }]
    })
  }

  let {name,email,emp_id,password,totalWorkExp,totalExpinFission,primarySkills,reportingManager,teamLead,status,notes,projectName} = newBench;
  let handleSubmitForm =(event)=>{
    event.preventDefault();
    console.log(newBench)
    dispatch(createBench(newBench))
    navigate('/benchlist');
  }
  return (
    <React.Fragment>
      {/* <div className="container-lg"> */}
        <MDBContainer breakpoint="lg">

        <div className="d-flex flex-column text-center justify-content-center align-items-center vh-100"> 
        <MDBCard className="mt-5 mb-5">
           <MDBCardHeader>
             <MDBCardTitle className="text-center"><h2>New Bench Employee</h2></MDBCardTitle>
           </MDBCardHeader>
           <MDBCardBody>
           {/* <pre>{JSON.stringify(newBench)}</pre> */}
           <MDBValidation className="row g-5 novalidate" noValidate onSubmit={handleSubmitForm}>
           <MDBValidationItem className="col-md-4" feedback='Please Enter your name' invalid>
              <MDBInput id='validationCustom01' type="text" name="name" value={name} onChange={handleUpdateInput} required label="Name"/>
           </MDBValidationItem>
           <MDBValidationItem className="col-md-4" feedback='Please Enter your EmpId' invalid>
              <MDBInput id='validationCustom02' type="text" required name="emp_id" value={emp_id} onChange={handleUpdateInput} label="EmpId"/>
           </MDBValidationItem>
           <MDBValidationItem className="col-md-4" feedback='Please Enter your Email' invalid>
              <MDBInput id='validationCustom03' type="email" required name="email" value={email} onChange={handleUpdateInput} label="Email"/>
           </MDBValidationItem>
           <MDBValidationItem className="col-md-4" feedback='Please Enter your Email' invalid>
              <MDBInput id='validationCustom04' type="password" required name="password" value={password} onChange={handleUpdateInput} label="Password"/>
           </MDBValidationItem>
           <MDBValidationItem className="col-md-4" feedback='Please Enter your TotalWorkExp' invalid>
              <MDBInput id='validationCustom05' type="number" required name="totalWorkExp" value={totalWorkExp} onChange={handleUpdateInput} label="TotalWorkExp"/>
           </MDBValidationItem>
           <MDBValidationItem className="col-md-4" feedback='Please Enter your TotalExpFission' invalid>
              <MDBInput id='validationCustom06' type="number" required name="totalExpinFission" value={totalExpinFission} onChange={handleUpdateInput} label="TotalExpFission"/>
           </MDBValidationItem>
           <MDBValidationItem className="col-md-4" feedback='Please Enter your PrimarySkill' invalid>
              <MDBInput id='validationCustom07' type="text" required name="skillName" value={primarySkills.skillName} onChange={handleUpdatePrimarySkillsInput} label="skillName"/>
           </MDBValidationItem>
           <MDBValidationItem className="col-md-4" feedback='Please Enter your TotalExp' invalid>
              <MDBInput id='validationCustom08' type="number" required name="totalExp" value={primarySkills.totalExp} onChange={handleUpdatePrimarySkillsInput} label="TotalExp"/>
           </MDBValidationItem>

           <MDBValidationItem className="col-md-4" feedback='Please Enter your Reporting Manager' invalid>
              <MDBInput id='validationCustom09' type="text" required name="reportingManager" value={reportingManager} onChange={handleUpdateInput} label="Reporting Manager"/>
           </MDBValidationItem>
           <MDBValidationItem className="col-md-4" feedback='Please Enter your Team Lead' invalid>
              <MDBInput id='validationCustom10'  type="text" required name="teamLead" value={teamLead} onChange={handleUpdateInput} label="TeamLead"/>
           </MDBValidationItem>
           <MDBValidationItem className="col-md-4" feedback='Please Enter your Status' invalid>
              <MDBInput id='validationCustom11' type="text" required name="projectName" value={projectName} onChange={handleUpdateInput} label="projectName"/>
           </MDBValidationItem>
           <MDBValidationItem className="col-md-4" feedback='Please Enter your Status' invalid>
              <MDBInput id='validationCustom12' type="text" required name="status" value={status} onChange={handleUpdateInput} label="Status"/>
           </MDBValidationItem>
           <MDBValidationItem className="col-md-13" feedback='Please Enter your notes' invalid>
              <MDBTextArea id='validationTextarea' required name="notes" value={notes} onChange={handleUpdateInput} label="Notes"/>
           </MDBValidationItem>
           <div className='col-12 text-center'>
        <MDBBtn className="m-2" type='submit'>Add</MDBBtn>
        <MDBBtn className="m-2 btn btn-danger" type='reset' onClick={() => navigate("/benchlist")}>Cancel</MDBBtn>
      </div>
        </MDBValidation> 
           </MDBCardBody> 
        </MDBCard>
        </div>
        </MDBContainer>
        {/* <form className="mt-5">
          <div className="row mb-2 mt-2">
            <div className="col-4">
              <div className="group">
                <input type="text" id="form3Example1" required name="Name" />
                <label htmlFor="form3Example1">Name</label>
              </div>
            </div>
            <div className="col-4">
              <div className="group">
                <input
                  type="text"
                  id="form3Example2"
                  name="PrimarySkills"
                  required
                />
                <label htmlFor="form3Example2">Empp Id</label>
              </div>
            </div>
            <div className="col-4">
              <div className="group">
                <input
                  type="text"
                  id="form3Example3"
                  name="PrimarySkills"
                  required
                />
                <label htmlFor="form3Example3">Email</label>
              </div>
            </div>
          </div>

          <div className="row mb-2 mt-2">
            <div className="col-4">
              <div className="group">
                <input
                  type="text"
                  id="form3Example4"
                  name="TotalWorkExp"
                  required
                />
                <label htmlFor="form3Example4">TotalWorkExp</label>
              </div>
            </div>
            <div className="col-4">
              <div className="group">
                <input
                  type="text"
                  id="form3Example5"
                  name="TotalExpinFission"
                  required
                />
                <label htmlFor="form3Example5">TotalExpinFission</label>
              </div>
            </div>
            <div className="col-4">
              <div className="group">
                <input
                  type="text"
                  id="form3Example6"
                  name="SkillName"
                  required
                />
                <label htmlFor="form3Example6">SkillName</label>
              </div>
            </div>
          </div>

          <div className="row mb-2 mt-2">
            <div className="col-4">
              <div className="group">
                <input
                  type="text"
                  id="form3Example7"
                  name="totalExp"
                  required
                />
                <label htmlFor="form3Example7">TotalExp</label>
              </div>
            </div>
            <div className="col-4">
              <div className="group">
                <input
                  type="text"
                  id="form3Example8"
                  name="ReportingManager"
                  required
                />
                <label htmlFor="form3Example8">ReportingManager</label>
              </div>
            </div>
            <div className="col-4">
              <div className="group">
                <input
                  type="text"
                  id="form3Example9"
                  name="teamLead"
                  required
                />
                <label htmlFor="form3Example9">TeamLead</label>
              </div>
            </div>
          </div>
          <div className="row mb-2 mt-2">
            <div className="col-12">
              <div className="group">
                <input
                  type="text"
                  id="form3Example10"
                  name="notes"
                  required
                  className="w-100"
                />
                <label htmlFor="form3Example10">Notes</label>
              </div>
            </div>
          </div>
          <div className="text-center">
            <MDBBtn className="m-2">Add</MDBBtn>
            <MDBBtn className="btn btn-danger m-2" onClick={() => navigate("/benchlist")}>Cancel</MDBBtn>
            <button type="submit" className="btn btn-primary  mb-4 newBenchEmployeeAddButton">
              Add
            </button>
            <button
              onClick={() => navigate("/benchlist")}
              className="btn btn-primary  mb-4 "
            >
              Cancel
            </button>
          </div>
        </form> */}
      {/* </div> */}
    </React.Fragment>
  );
};
export default NewBenchEmployee;
