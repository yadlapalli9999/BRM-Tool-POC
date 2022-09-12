import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardTitle,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBTable,
  MDBTableBody,
  MDBCardBody,
  MDBValidation,
  MDBValidationItem,
  MDBTextArea,
} from "mdb-react-ui-kit";
import "./EditEmployeeFields.css";
import { useSelector } from "react-redux";
import AddResource from "../addresource/AddResource";

const EditEmployeeFields = (props) => {
  const { pocList } = useSelector((store) => {
    return store["poc"];
  });
  const [params] = useSearchParams();
  const pocID = params.getAll("pocID")[0] || null;
  const [pocData, setPocData] = useState({});
  const navigate = useNavigate();
  const members = [
    {
      id: 1,
      memberName: "Kunal Rokhle",
    },
    {
      id: 2,
      memberName: "Alok Kumar",
    },
    {
      id: 3,
      memberName: "Sudhanshu Jain",
    },
  ];
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState("");
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

  useEffect(() => {
    const data = (pocList || []).find((poc) => poc._id === pocID) || {};
    setPocData({ ...data });
  }, [pocID]);

  const handleChangeInputFields = (e) => {
    const { name, value } = e.target;
    setinputData({
      ...inputData,
      [name]: value,
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
                <MDBCardTitle>
                  <h2>Edit Poc</h2>
                </MDBCardTitle>
              </MDBCardHeader>
              <MDBCardBody>
                <MDBValidation className="row g-5">
                  <MDBValidationItem
                    className="col-md-6"
                    feedback="Please Enter POC name"
                    invalid
                  >
                    <MDBInput
                      id="validationCustom01"
                      required
                      name="name"
                      label="Name"
                      value={pocData.name}
                    />
                  </MDBValidationItem>
                  <MDBValidationItem
                    className="col-md-6"
                    feedback="Please enter duration in Months"
                    invalid
                  >
                    <MDBInput
                      id="validationCustom02"
                      required
                      name="duration"
                      label="Duration in Months"
                      value={pocData.duration}
                    />
                  </MDBValidationItem>
                  <MDBValidationItem
                    className="col-md-12"
                    feedback="Description"
                    invalid
                  >
                    <MDBTextArea
                      id="validationCustom03"
                      required
                      name="description"
                      label="Description"
                      value={pocData.description}
                    />
                  </MDBValidationItem>
                  <MDBValidationItem
                    className="col-md-6"
                    feedback="Members"
                    invalid
                  >
                    <MDBInput
                      id="validationCustom03"
                      required
                      name="members"
                      label="Members"
                      value={pocData.members?.length || 0}
                    />
                  </MDBValidationItem>
                  <MDBValidationItem
                    className="col-md-6"
                    feedback="Documents"
                    invalid
                  >
                    <MDBInput
                      id="validationCustom03"
                      required
                      name="documents"
                      label="Documents"
                      value={pocData.documents?.length || 0}
                    />
                  </MDBValidationItem>
                  <MDBRow className="m-3">
                    <MDBCol md="12" className="text-center">
                      <MDBBtn className="btn btn-primary m-2">Edit</MDBBtn>
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
          <MDBCol md="6">
            <AddResource />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      {/* ADD RESOURCES MODAL */}
      <div
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
              <button className="btn btn-deep-orange">Add</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditEmployeeFields;
