import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MDBBtn,MDBValidation,MDBValidationItem,MDBInput,MDBTextArea,MDBCard,MDBCardHeader,MDBCardBody,MDBCardTitle, MDBRow, MDBCol, MDBContainer, MDBFooter, MDBCardFooter } from "mdb-react-ui-kit";
import "./newbenchEmployee.css";

let NewBenchEmployee = () => {
  const navigate = useNavigate();
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
           
           <MDBValidation className="row g-5 novalidate" noValidate>
           <MDBValidationItem className="col-md-4" feedback='Please Enter your name' invalid>
              <MDBInput id='validationCustom01' required name="name" label="Name"/>
           </MDBValidationItem>
           <MDBValidationItem className="col-md-4" feedback='Please Enter your EmpId' invalid>
              <MDBInput id='validationCustom02' required name="empId" label="EmpId"/>
           </MDBValidationItem>
           <MDBValidationItem className="col-md-4" feedback='Please Enter your Email' invalid>
              <MDBInput id='validationCustom03' required name="email" label="Email"/>
           </MDBValidationItem>
           <MDBValidationItem className="col-md-4" feedback='Please Enter your TotalWorkExp' invalid>
              <MDBInput id='validationCustom04' required name="TotalWorkExp" label="TotalWorkExp"/>
           </MDBValidationItem>
           <MDBValidationItem className="col-md-4" feedback='Please Enter your TotalExpFission' invalid>
              <MDBInput id='validationCustom05' required name="TotalExpFission" label="TotalExpFission"/>
           </MDBValidationItem>
           <MDBValidationItem className="col-md-4" feedback='Please Enter your PrimarySkill' invalid>
              <MDBInput id='validationCustom06' required name="PrimarySkill" label="PrimarySkill"/>
           </MDBValidationItem>
           <MDBValidationItem className="col-md-4" feedback='Please Enter your TotalExp' invalid>
              <MDBInput id='validationCustom07' required name="TotalExp" label="TotalExp"/>
           </MDBValidationItem>
           <MDBValidationItem className="col-md-4" feedback='Please Enter your Reporting Manager' invalid>
              <MDBInput id='validationCustom08' required name="Reporting Manager" label="Reporting Manager"/>
           </MDBValidationItem>
           <MDBValidationItem className="col-md-4" feedback='Please Enter your Team Lead' invalid>
              <MDBInput id='validationCustom09' required name="Team Lead" label="TeamLead"/>
           </MDBValidationItem>
           <MDBValidationItem className="col-md-12" feedback='Please Enter your Team Lead' invalid>
              <MDBTextArea id='validationTextarea' required name="Team Lead" label="TeamLead"/>
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
