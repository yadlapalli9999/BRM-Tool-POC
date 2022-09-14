import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBCardTitle, MDBCardHeader, MDBValidation, MDBValidationItem,MDBInput,MDBBtn, MDBTextArea, MDBIcon, MDBTable, MDBTableBody, MDBCardFooter} from 'mdb-react-ui-kit';
import $ from "jquery";
import "./EmployeeFields.css";
import AddResource from "../addresource/AddResource";

const EmployeeFields = () => {
  const navigate = useNavigate();

  // const members = [
  //   {
  //     id: 1,
  //     memberName: "Kunal Rokhle",
  //   },
  //   {
  //     id: 2,
  //     memberName: "Alok Kumar",
  //   },
  //   {
  //     id: 3,
  //     memberName: "Sudhanshu Jain",
  //   },
  // ];
  const [members, setMembers] = useState([]);
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState("");
  const [resource, setResource] = useState("");
  const handleResource = (event) => {
    event.preventDefault();
    members.push(resource);
    console.log(resource);
    clearForm();
    setShow(false);
  };
  const clearForm = () => {
    setResource("");
  };
  const handlePocDetailsNameClick = () => {
    navigate("/worklogs");
  };
  const [inputData, setinputData] = useState({
    Name: "",
    PrimarySkills: "",
    TotalWorkExp: "",
    EmpId: "",
    TotalExp: "",
    Notes: "",
    Email: "",
    ReportingManager: "",
    TeamLead: "",
    TotalExpInFission: "",
  });

  const handleChangeInputFields = (e) => {
    const { name, value } = e.target;
    setinputData({
      ...inputData,
      [name]: value.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
  };
  return (
    <React.Fragment>
      <MDBContainer breakpoint="lg">
         <MDBRow>
          <MDBCol md="12">
             <MDBCard className="mt-3 mb-3">
              <MDBCardHeader className="text-center">
                 <MDBCardTitle><h2>Add Poc</h2></MDBCardTitle>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBValidation className="row g-5">
                <MDBValidationItem className="col-md-6" feedback='Please Enter your name' invalid>
              <MDBInput id='validationCustom01' required name="name" label="Name" onChange={handleChangeInputFields}/>
           </MDBValidationItem>
           <MDBValidationItem className="col-md-6" feedback='Please Enter your Duration in Months' invalid>
              <MDBInput id='validationCustom02' required name="name" label="Duration in Months" onChange={handleChangeInputFields}/>
           </MDBValidationItem>
           <MDBValidationItem className="col-md-12" feedback='Please Enter your Description' invalid>
              <MDBTextArea id='validationCustom03'  required name="name" label="Description" onChange={handleChangeInputFields}/>
           </MDBValidationItem>
           <MDBValidationItem className="col-md-6" feedback='Please Enter your Members' invalid>
              <MDBInput id='validationCustom03'  required name="name" label="Members" onChange={handleChangeInputFields}/>
           </MDBValidationItem>
           <MDBValidationItem className="col-md-6" feedback='Please Enter your Documents' invalid>
              <MDBInput id='validationCustom03'  required name="name" label="Documents"onChange={handleChangeInputFields}/>
           </MDBValidationItem>
           <MDBRow className="m-3">
            <MDBCol md="12" className="text-center">
              <MDBBtn className="btn btn-primary m-2" onClick={handleSubmit}>Add</MDBBtn>
              <MDBBtn onClick={() => navigate("/poc")}
                className="btn btn-danger m-2">Cancel</MDBBtn>
            </MDBCol>
           </MDBRow>
                </MDBValidation>
              </MDBCardBody>
             </MDBCard>
          </MDBCol>
         </MDBRow>
         <MDBRow>
          <MDBCol md="6">
          <AddResource/>
          </MDBCol>
          {/* <MDBCol md="6">
            <MDBCard>
              <MDBCardHeader>
                <MDBCardTitle><MDBIcon className="fas fa-tasks"/> Members</MDBCardTitle>
              </MDBCardHeader>
              <MDBCardBody>
                 <MDBTable>
                  <MDBTableBody>
                  {members &&
                      members?.map((name, index) => {
                        return (
                          <tr key={index + 1}>
                            <td>{name}</td>
                          </tr>
                        );
                      })}
                  </MDBTableBody>
                 </MDBTable>
              </MDBCardBody>
              <MDBCardFooter>
                <MDBBtn className="btn  btn-primary"
                    onClick={() => setShow(!show)}>Add Resource</MDBBtn>
              </MDBCardFooter>
            </MDBCard>
          </MDBCol>
         </MDBRow> */}
         </MDBRow>
      </MDBContainer>
      {/* <div className="container-lg ">
        <div className="employeeFieldsTitle mt-5 mb-5">
          <h2> Fields</h2>
        </div>
        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="row mb-2 mt-2">
            <div className="col-4">
              <div className="group">
                <input
                  type="text"
                  id="form3Example1"
                  required
                  onChange={handleChangeInputFields}
                  value={inputData.Name}
                  name="Name"
                />
                <label htmlFor="form3Example1">Name</label>
              </div>
            </div>
            <div className="col-4">
              <div className="group">
                <input
                  type="text"
                  id="form3Example2"
                  onChange={handleChangeInputFields}
                  value={inputData.PrimarySkills}
                  name="PrimarySkills"
                  required
                />
                <label htmlFor="form3Example2">Duration</label>
              </div>
            </div>
          </div>

          <div className="row mb-2 mt-2">
            <div className="col-12">
              <div className="group">
                <input
                  type="text"
                  id="form3Example3"
                  onChange={handleChangeInputFields}
                  value={inputData.TotalWorkExp}
                  name="TotalWorkExp"
                  required
                  className="employeeFieldInput"
                />
                <label htmlFor="form3Example3">Description</label>
              </div>
            </div>
          </div>

          <div className="row mb-2 mt-2">
            <div className="col-4">
              <div className="group">
                <input
                  type="text"
                  id="form3Example4"
                  onChange={handleChangeInputFields}
                  value={inputData.EmpId}
                  name="EmpId"
                  required
                />
                <label htmlFor="form3Example4">Created By</label>
              </div>
            </div>
            
            <div className="col-4">
              <div className="group">
                <input
                  type="text"
                  id="form3Example6"
                  onChange={handleChangeInputFields}
                  value={inputData.Notes}
                  name="Notes"
                  required
                />
                <label htmlFor="form3Example6">Documents</label>
              </div>
            </div>
          </div>
        </form>
        <div className="row d-flex align-items-center h-100 mt-5 w-50">
          <div className="col-md-12 col-xl-10">
            <div className="card">
              <div className="card-header p-3 d-flex justify-content-between align-items-center ">
                <h5 className="mb-0">
                  <i className="fas fa-tasks me-2"></i>Members
                </h5>
                
              </div>

              <div
                className="card-body employeeFieldCard"
                data-mdb-perfect-scrollbar="true"
              >
                <table className="table mb-0  table-hover">
                  <tbody>
                    {members &&
                      members?.map((name, index) => {
                        return (
                          <tr key={index + 1}>
                            <td>{name}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
              <div className="text-end p-3">
                <div className="addButton mr-3">
                  <button
                    type="button"
                    className="btn  btn-primary"
                    onClick={() => setShow(!show)}
                  >
                    Add Resources
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* ADD RESOURCES MODAL */}
      {/* <div
        className={` ${
          show === true ? "pocDetailsModal modal fade" : "modal fade"
        }`}
        id="modalRegisterForm"
        c="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div
          className={` ${
            show === true
              ? " pocDetailsModalDialog modal-dialog"
              : "modal-dialog"
          }`}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">
                Add Resources
              </h4>
              <button
                type="button"
                className="close pocDetailsClose"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setShow(!show)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body mx-3">
              <div className="md-form mb-5">
                <i className="fas fa-user prefix grey-text"></i>
                <input
                  type="text"
                  id="orangeForm-name"
                  className="form-control validate"
                  value={resource}
                  onChange={(e) => {
                    setResource(e.target.value);
                  }}
                />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="orangeForm-name"
                  className="pocDetailsLabel"
                >
                  Search By Name , Email
                </label>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button className="btn btn-deep-orange" onClick={handleResource}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="text-center">
        <button type="submit" className="btn btn-primary  mb-4 employeeFieldsAddButton">
          Add
        </button>
        <button
          onClick={() => navigate("/poc")}
          className="btn btn-primary  mb-4 "
        >
          Cancel
        </button>
      </div> */}
    </React.Fragment>
  );
};

export default EmployeeFields;
