import React from "react";
import { useNavigate } from "react-router-dom";
import { MDBBtn,MDBValidation,MDBValidationItem,MDBInput } from "mdb-react-ui-kit";
import "./newbenchEmployee.css";

let NewBenchEmployee = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="container-lg">
        <div className="mt-5 mb-5 text-center">
          <h2>New Bench Employee</h2>
        </div>
        <MDBValidation className="row g-3" novalidate>
           <MDBValidationItem className="col-md-4" feedback='Please Enter your name' invalid>
              <MDBInput id='validationCustom01' required name="name" label="Name"/>
              {/* <div className="vaild-feedback">Looks Good</div> */}
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
           <MDBValidationItem className="col-md-4" feedback='Please Enter your TotalWorkExp' invalid>
              <MDBInput id='validationCustom04' required name="TotalWorkExp" label="TotalWorkExp"/>
           </MDBValidationItem>
           <MDBValidationItem className="col-md-4" feedback='Please Enter your TotalWorkExp' invalid>
              <MDBInput id='validationCustom04' required name="TotalWorkExp" label="TotalWorkExp"/>
           </MDBValidationItem>
           <div className='col-12'>
        <MDBBtn type='submit'>Submit form</MDBBtn>
        <MDBBtn type='reset'>Reset form</MDBBtn>
      </div>
        </MDBValidation>
        <form className="mt-5">
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
            {/* <button type="submit" className="btn btn-primary  mb-4 newBenchEmployeeAddButton">
              Add
            </button> */}
            {/* <button
              onClick={() => navigate("/benchlist")}
              className="btn btn-primary  mb-4 "
            >
              Cancel
            </button> */}
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
export default NewBenchEmployee;