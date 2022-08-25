import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./BenchWorklogs.css";
const BenchWorklogs = () => {
  const [workLogList, setWorkLogList] = useState([
    {
      duration: 8,
      resourceId: "62e8ba7c59e2ad549fba94b3",
      taskDetails: "BRM POC",
      taskDescription: "Working on Role based Login Functionality",
      logDate: "2022-08-02T02:33:00.853Z",
      pocId: "62e7546972ca86ab81c29fce",
      _id: "62e8bc40227e9276704c3c0f",
      createdAt: "2022-08-02T05:55:12.077Z",
      updatedAt: "2022-08-02T05:55:12.077Z",
      __v: 0,
    },
    {
      duration: 8,
      resourceId: "62e8ba7c59e2ad549fba94b3",
      taskDetails: "BRM POC",
      taskDescription: "Working on Role based Login Functionality",
      logDate: "2022-08-02T02:33:00.853Z",
      pocId: "62e7546972ca86ab81c29fce",
      _id: "62e8bc40227e9276704c3c0f",
      createdAt: "2022-08-02T05:55:12.077Z",
      updatedAt: "2022-08-02T05:55:12.077Z",
      __v: 0,
    },
  ]);
  const [worklog, setWorklog] = useState({
    taskDetails: "",
    taskDescription: "",
    duration: "",
    logDate: "",
  });

  const UpdateInput = (event) => {
    setWorklog({
      ...worklog,
      [event.target.name]: event.target.value,
    });
  };
  const { taskDescription, taskDetails, duration, logDate } = worklog;
  const handleWorkLogSubmit = () => {};

  const deleteTask = (id) => {};

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-6 workLogsTitle mt-5 mb-3 text-center w-50 d.inline-block">
            <h2 className="text-center benchWorkLogsTitle">Work Logs</h2>
          </div>
          <div className="col-md-6 workLogsTitle mt-5 mb-3  d.inline-block w-50 .float-right ">
            <div class="dropdown">
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <Link className="dropdown-item" to="/editemployee">
                    Edit Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div
              className="modal fade"
              id="modalContactForm"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered modal-xl"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header text-center">
                    <h4 className="modal-title w-100 font-weight-bold">
                      Add Worklog
                    </h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body was-validated mx-3">
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="taskDetails"
                            name="taskDetails"
                            value={taskDetails}
                            onChange={UpdateInput}
                            className="form-control"
                            placeholder="taskDetails"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="taskDescription"
                            name="taskDescription"
                            value={taskDescription}
                            onChange={UpdateInput}
                            className="form-control"
                            placeholder="taskDescription"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="duration"
                            name="duration"
                            value={duration}
                            onChange={UpdateInput}
                            className="form-control"
                            placeholder="duration"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="date"
                            id="logdate"
                            name="logDate"
                            value={logDate}
                            onChange={UpdateInput}
                            className="form-control"
                            placeholder="logdate"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer justify-content-center">
                    <button
                      type="button"
                      class="btn btn-secondary btn-sm"
                      onClick={handleWorkLogSubmit}
                    >
                      Add WorkLog
                    </button>
                    <Link className="btn btn-danger btn-sm" to="/workloglist">
                      Cancel
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-end mb-3">
              <div className="col-md-6">
                <button
                  className=" btn btn-secondary btn-rounded "
                  style={{ float: "right" }}
                >
                  <select
                    className="bg-secondary text-white"
                    style={{ border: "0px" }}
                  >
                    <option>Current Week</option>
                    <option>Last Week</option>
                    <option>Current Month</option>
                    <option>Last Month</option>
                  </select>
                </button>
              </div>
            </div>
          </div>
        </div>

        <table className="table align-middle mb-0 bg-white table-hover">
          <thead className="bg-secondary">
            <tr className="table-headings">
              <th>Task Id</th>
              <th>Task Details</th>
              <th>Task Decritption</th>
              <th>Duration</th>
              <th>Log Date</th>
            </tr>
          </thead>
          <tbody>
            {workLogList.map((data, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="ms-3">
                        <p className="fw-bold mb-1">Task {index + 1}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">{data.taskDetails}</p>
                  </td>

                  <td>
                    <p className="fw-normal mb-1">{data.taskDescription}</p>
                  </td>
                  <td>{data.duration}</td>
                  <td>{data.logDate}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default BenchWorklogs;
