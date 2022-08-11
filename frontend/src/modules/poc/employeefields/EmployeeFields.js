import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EmployeeFields.css";

const EmployeeFields = () => {
  let navigate = useNavigate();
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
                style={{ width: "100%" }}
              />
              <label htmlFor="form3Example3">Description</label>
            </div>
          </div>
        </div>

        <div className="row mb-2 mt-2">
          <div className="col-4">
            <div className="group">
              <input
                type="number"
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
                type="number"
                id="form3Example5"
                onChange={handleChangeInputFields}
                value={inputData.TotalExp}
                name="TotalExp"
                required
              />
              <label htmlFor="form3Example5">Members</label>
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

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary  mb-4"
            style={{ marginRight: "30px" }}
          >
            Add
          </button>
          <button
            onClick={() => navigate("/poc")}
            className="btn btn-primary  mb-4 "
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeFields;
