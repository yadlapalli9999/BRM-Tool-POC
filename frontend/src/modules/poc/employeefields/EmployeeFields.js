import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import "./EmployeeFields.css";

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
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
  };
  return (
    <React.Fragment>
      <div className="container-lg ">
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
            {/* <div className="col-4">
            <div className="group">
              <input
                type="number"
                id="form3Example5"
                onChange={handleChangeInputFields}
                value={inputData.TotalExp}
                name="TotalExp"
                required
              />
              <label htmlFor="form3Example5">Members</label>
            </div>
          </div> */}
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
                {/* <input
                  type="text"
                  placeholder="Search Member..."
                  className="search"
                  onChange={(e) => setQuery(e.target.value)}
                /> */}
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
      </div>
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
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-primary  mb-4 employeeFieldsAddButton">
          Add
        </button>
        <button
          onClick={() => navigate("/poc")}
          className="btn btn-primary  mb-4 "
        >
          Cancel
        </button>
      </div>
    </React.Fragment>
  );
};

export default EmployeeFields;
