import React, { useState } from "react";
import "./EmployeeFields.css";

const EmployeeFields = () => {
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
        <h2>Employee Fields</h2>
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
              <label htmlFor="form3Example2">Primary Skills</label>
            </div>
          </div>
          <div className="col-4">
            <div className="group">
              <input
                type="number"
                id="form3Example3"
                onChange={handleChangeInputFields}
                value={inputData.TotalWorkExp}
                name="TotalWorkExp"
                required
              />
              <label htmlFor="form3Example3">Total Work Exp</label>
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
              <label htmlFor="form3Example4">Emp Id</label>
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
              <label htmlFor="form3Example5">Total Exp</label>
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
              <label htmlFor="form3Example6">Notes</label>
            </div>
          </div>
        </div>

        <div className="row mb-2 mt-2">
          <div className="col-4">
            <div className="group">
              <input
                type="email"
                id="form3Example7"
                onChange={handleChangeInputFields}
                value={inputData.Email}
                name="Email"
                required
              />
              <label htmlFor="form3Example7">Email</label>
            </div>
          </div>
          <div className="col-4">
            <div className="group">
              <input
                type="text"
                id="form3Example8"
                onChange={handleChangeInputFields}
                value={inputData.ReportingManager}
                name="ReportingManager"
                required
              />
              <label htmlFor="form3Example8">Reporting Manager</label>
            </div>
          </div>
          <div className="col-4">
            <div className="group">
              <input
                type="text"
                id="form3Example9"
                onChange={handleChangeInputFields}
                value={inputData.TeamLead}
                name="TeamLead"
                required
              />
              <label htmlFor="form3Example9">Team Lead</label>
            </div>
          </div>
        </div>

        <div className="row mb-2 mt-2">
          <div className="col-4">
            <div className="group">
              <input
                type="number"
                id="form3Example10"
                required
                onChange={handleChangeInputFields}
                value={inputData.TotalExpInFission}
                name="TotalExpInFission"
              />
              <label htmlFor="form3Example10">Total Exp in Fission</label>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary  mb-4">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmployeeFields;
