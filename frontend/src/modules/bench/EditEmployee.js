import React, { useState } from "react";
import { Link } from "react-router-dom";
let EditEmployee = () => {
  let [bench, setBench] = useState({
    name: "",
    id: "",
    email: "",
    totalWorkExp: "",
    totalExpinFission: "",
    primarySkills: {
      skillName: "",
      totalExp: "",
    },
    reportingManager: "",
    teamLead: "",
    notes: "",
  });
  let updateInput = (event) => {
    setBench({
      ...bench,
      [event.target.name]: event.target.value,
    });
  };

  let updatePrimarySkills = (event) => {
    setBench({
      ...bench,
      primarySkills: {
        ...primarySkills,
        [event.target.name]: event.target.value,
      },
    });
  };
  let {
    name,
    id,
    email,
    totalExpinFission,
    totalWorkExp,
    teamLead,
    primarySkills,
    reportingManager,
    notes,
  } = bench;
  let handleBenchEmployeeSubmit = (event) => {};
  return (
    <React.Fragment>
      <div className="container">
        <div
          className="row justify-content-center"
          style={{ marginTop: "30px" }}
        >
          <div className="col-md-9">
            <div className="card">
              <div className="card-header text-center">
                <h2>Edit Employee</h2>
              </div>
              <div className="card-body">
                <div className="col-md-12 mb-md-0 mb-5">
                  <form onSubmit={handleBenchEmployeeSubmit}>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={updateInput}
                            className="form-control"
                            placeholder="Name"
                            style={{ height: "50px" }}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="id"
                            name="id"
                            value={id}
                            onChange={updateInput}
                            className="form-control"
                            placeholder="EmpId"
                            style={{ height: "50px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={updateInput}
                            className="form-control"
                            placeholder="Email"
                            style={{ height: "50px" }}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="TotalWorkExp"
                            name="totalWorkExp"
                            value={totalWorkExp}
                            onChange={updateInput}
                            className="form-control"
                            placeholder="TotalWorkExp"
                            style={{ height: "50px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="totalExpinFission"
                            name="totalExpinFission"
                            value={totalExpinFission}
                            onChange={updateInput}
                            className="form-control"
                            placeholder="TotalExpinFission"
                            style={{ height: "50px" }}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="SkillName"
                            name="skillName"
                            value={primarySkills.skillName}
                            onChange={updatePrimarySkills}
                            className="form-control"
                            placeholder="SkillName"
                            style={{ height: "50px" }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="TotalExp"
                            name="totalExp"
                            value={primarySkills.totalExp}
                            onChange={updatePrimarySkills}
                            className="form-control"
                            placeholder="TotalExp"
                            style={{ height: "50px" }}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="ReportingManager"
                            name="reportingManager"
                            value={reportingManager}
                            onChange={updateInput}
                            className="form-control"
                            placeholder="ReportingManager"
                            style={{ height: "50px" }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="teamLead"
                            name="teamLead"
                            value={teamLead}
                            onChange={updateInput}
                            className="form-control"
                            placeholder="teamLead"
                            style={{ height: "50px" }}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="notes"
                            name="notes"
                            value={notes}
                            onChange={updateInput}
                            className="form-control"
                            placeholder="notes"
                            style={{ height: "50px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-center text-md-left">
                      <input
                        className="btn btn-primary "
                        style={{ marginRight: "15px" }}
                        type="submit"
                        value="Save"
                      />
                      <Link className="btn btn-danger " to="/employeeworklogs">
                        Cancel
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditEmployee;
