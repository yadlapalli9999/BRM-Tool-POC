import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardHeader,
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBBtn,
  MDBTextArea,
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBCardFooter,
} from "mdb-react-ui-kit";
import $ from "jquery";
import "./EmployeeFields.css";
import AddResource from "../addresource/AddResource";
import { useDispatch } from "react-redux";
import { CreatePOC } from "../../../redux/features/poc/poc.feature";
import { toast } from "react-toastify";

const EmployeeFields = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const resourceID = localStorage.getItem("resourceID");
  console.log(resourceID);
  const propValue = "AddPocState";
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
  const [membersData, setMembersData] = useState([]);
  // const [resource, setResource] = useState("");
  // const handleResource = (event) => {
  //   event.preventDefault();
  //   members.push(resource);
  //   console.log(resource);
  //   clearForm();
  //   setShow(false);
  // };
  // const clearForm = () => {
  //   setResource("");
  // };

  // useEffects

  useEffect(() => {
    setinputData({ ...inputData, members: membersData });
  }, [membersData]);

  const handlePocDetailsNameClick = () => {
    navigate("/worklogs");
  };
  const [inputData, setinputData] = useState({
    name: "",
    teamLead: "",
    description: "",
    duration: null?.toString() || "",
    status: "",
    documents: [],
    members: [],
  });
  const [statushasError, setStatusHasError] = useState(false);
  const [durationhasError, setDurationHasError] = useState(false);

  const handleChangeInputFields = (e) => {
    const { name, value } = e.target;
    setinputData({
      ...inputData,
      [name]: value,
    });
    if (name === "status") {
      if (!value) {
        setStatusHasError(true);
      } else {
        setStatusHasError(false);
      }
    }
    if (name === "duration") {
      if (!value) {
        setDurationHasError(true);
      } else {
        setDurationHasError(false);
      }
    }

    // if(name==="members"){
    //   setinputData({
    //     ...inputData,
    //     members:
    //   })
    // }
    // if (
    //   inputData.name &&
    //   inputData.teamLead &&
    //   inputData.description &&
    //   inputData.status &&
    //   inputData.duration &&
    //   inputData.members &&
    //   inputData.documents
    // ) {
    //   setDisabledButton(false);
    // }
    console.log(inputData);
  };
  const handleDocuements = (e) => {
    setinputData({
      ...inputData,
      [e.target.name]: [e.target.value],
    });
  };

  // disalbed button

  // const [disabledButton, setDisabledButton] = useState(true);

  const handleSubmit = (e) => {
    console.log(inputData);

    if (
      !inputData.name ||
      !inputData.members ||
      !inputData.status ||
      !inputData.duration ||
      !inputData.documents.length
    ) {
      alert(" Input fields are neccessary");
      if (!inputData.status) setStatusHasError(true);
      if (!inputData.duration) setDurationHasError(true);
    } else {
      e.preventDefault();
      console.log(inputData);
      // setinputData({ ...inputData, members: tempMembersArray });
      dispatch(CreatePOC(inputData));
      toast.success("Creating New POC", { autoClose: 800 });
      setTimeout(() => {
        navigate("/poc");
      }, 2000);
    }
  };
  return (
    <React.Fragment>
      <MDBContainer breakpoint="lg">
        <MDBRow>
          <MDBCol md="12">
            <MDBCard className="mt-3 mb-3">
              <MDBCardHeader className="text-center">
                <MDBCardTitle>
                  <h2>Add Poc</h2>
                </MDBCardTitle>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBValidation className="row g-5">
                  <MDBValidationItem
                    className="col-md-6"
                    feedback="Please Enter your Name"
                    invalid
                  >
                    <MDBInput
                      id="validationCustom01"
                      required
                      name="name"
                      value={inputData.name}
                      onChange={handleChangeInputFields}
                      label="Name"
                    />
                  </MDBValidationItem>
                  <MDBValidationItem
                    className="col-md-6"
                    feedback="Please Enter your Team Lead"
                    invalid
                  >
                    <MDBInput
                      id="validationCustom02"
                      required
                      name="teamLead"
                      value={inputData.teamLead}
                      onChange={handleDocuements}
                      label="Team Lead"
                    />
                  </MDBValidationItem>
                  <MDBValidationItem
                    className="col-md-12"
                    feedback="Please Enter your Description"
                    invalid
                  >
                    <MDBTextArea
                      id="validationCustom03"
                      required
                      name="description"
                      value={inputData.description}
                      onChange={handleChangeInputFields}
                      label="Description"
                    />
                  </MDBValidationItem>
                  {/* <MDBValidationItem className="col-md-6" feedback='Please Enter your CreatedBy' invalid>
              <MDBInput id='validationCustom04'  required name="createdBy" value={inputData.createdBy} onChange={handleChangeInputFields} label="CreatedBy"/>
           </MDBValidationItem> */}
                  <MDBValidationItem
                    className="col-md-6 d-flex justify-content-center "
                    feedback="Please select your Status"
                    invalid
                  >
                    <div
                      className={`${
                        statushasError ? "has-Error" : "selectBox"
                      }`}
                    >
                      <select
                        id="validationCustom06"
                        className="input-boxes"
                        value={inputData.status}
                        onChange={handleChangeInputFields}
                        required
                        name="status"
                      >
                        <option className="initial-input">Select Status</option>
                        <option>idea</option>
                        <option>Active</option>
                        <option>Hold</option>
                        <option>closed</option>
                      </select>
                    </div>
                    {/* <MDBInput
                      id="validationCustom05"
                      required
                      name="status"
                      value={inputData.status}
                      onChange={handleChangeInputFields}
                      label="Status"
                    /> */}
                  </MDBValidationItem>
                  <MDBValidationItem
                    className="col-md-6 d-flex justify-content-center"
                    feedback="Please select your Duration"
                    invalid
                  >
                    {/* <MDBInput
                      id="validationCustom06"
                      required
                      name="duration"
                      value={inputData.duration}
                      onChange={handleChangeInputFields}
                      label="Duration"
                    /> */}
                    <div
                      className={`${
                        durationhasError ? "has-Error" : "selectBox"
                      }`}
                    >
                      <select
                        id="validationCustom06"
                        value={inputData.duration}
                        onChange={handleChangeInputFields}
                        required
                        name="duration"
                        className="input-boxes"
                      >
                        <option className="initial-input">
                          Select Duration
                        </option>
                        <option>30</option>
                        <option>45</option>
                        <option>60</option>
                        <option>120</option>
                        <option>180</option>
                      </select>
                    </div>
                  </MDBValidationItem>
                  <MDBValidationItem
                    className="col-md-6"
                    feedback="Please Enter your Document Link"
                    invalid
                  >
                    <MDBInput
                      id="validationCustom06"
                      required
                      name="documents"
                      value={inputData.documents}
                      onChange={handleDocuements}
                      label="Document Link"
                    />
                  </MDBValidationItem>
                  <MDBRow className="mt-4">
                    <MDBCol md="6">
                      <AddResource
                        members={inputData.members}
                        propValue={propValue}
                        setMembersData={setMembersData}
                        membersData={membersData}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="m-3">
                    <MDBCol md="12" className="text-center">
                      <MDBBtn
                        className="btn btn-primary m-2"
                        // disabled={disabledButton}
                        onClick={handleSubmit}
                      >
                        Add
                      </MDBBtn>
                      <MDBBtn
                        onClick={() => navigate("/poc")}
                        className="btn btn-danger m-2"
                      >
                        Cancel
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBValidation>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow>
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
