import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBIcon,
  MDBCardSubTitle,
  MDBInput,
  MDBTable,
  MDBTableBody,
  MDBFooter,
  MDBBtn,
} from "mdb-react-ui-kit";

let AddResource = (props) => {
  const { members } = props;
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState("");
  const [resource, setResource] = useState({
    memberName: "",
  });
  const handleResource = (event) => {
    event.preventDefault();
    members.push(resource);
    console.log(members);
    clearForm();
    setShow(false);
  };
  const clearForm = () => {
    setResource({
      memberName: "",
    });
  };
  const navigate = useNavigate();
  const handlePocDetailsNameClick = () => {
    navigate("/worklogs");
  };
  return (
    <React.Fragment>
      {/* <MDBContainer> */}
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <MDBCardHeader>
              <MDBRow>
                <MDBCol md="6">
                  <MDBCardTitle>
                    <MDBIcon className="fas fa-tasks" /> Members
                  </MDBCardTitle>
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput
                    type="text"
                    label="search"
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </MDBCol>
              </MDBRow>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBTable>
                <MDBTableBody>
                  {members &&
                    members
                      ?.filter((filterMember) =>
                        filterMember?.memberName.toLowerCase().includes(query)
                      )
                      ?.map((filterMember, index) => (
                        <tr
                          className="fw-normal memberTableRow"
                          key={index + 1}
                          onClick={handlePocDetailsNameClick}
                        >
                          <td className="align-middle ">
                            <span>{filterMember?.memberName}</span>
                          </td>
                        </tr>
                      ))}
                </MDBTableBody>
              </MDBTable>
            </MDBCardBody>
            <MDBFooter>
              <MDBBtn
                className="btn btn-primary mb-4 m-4 float-end"
                onClick={() => setShow(!show)}
              >
                Add Resource
              </MDBBtn>
            </MDBFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      {/* </MDBContainer> */}
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
                <MDBIcon className="fas fa-user" /> Add Resources
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
              <div className="md-form mb-3">
                {/* <i className="fas fa-user prefix grey-text"></i> */}
                <MDBInput
                  value={resource.memberName}
                  onChange={(e) => {
                    setResource({
                      ...resource,
                      memberName: e.target.value,
                    });
                  }}
                  label="Search By Name , Email"
                />
                {/* <input
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
                </label> */}
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <MDBBtn className="btn btn-primary" onClick={handleResource}>
                Add
              </MDBBtn>
              {/* <button className="btn btn-deep-orange">Add</button> */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

AddResource.defaultProps = {
  members: [
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
  ],
};

export default AddResource;
