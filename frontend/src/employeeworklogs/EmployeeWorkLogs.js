import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./BenchWorklogs.css";
let EmployeeWorkLogs = () => {
  let [workLogList, setWorkLogList] = useState([
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
  let [worklog, setWorklog] = useState({
    taskDetails: "",
    taskDescription: "",
    duration: "",
    logDate: "",
  });

  let UpdateInput = (event) => {
    setWorklog({
      ...worklog,
      [event.target.name]: event.target.value,
    });
  };
  let { taskDescription, taskDetails, duration, logDate } = worklog;
  let handleWorkLogSubmit = () => {};

  let deleteTask = (id) => {};

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 workLogsTitle mt-5 mb-3 text-center"
            style={{ display: "inline-block", width: "50%" }}
          >
            <h2>Work Logs</h2>
          </div>
          <div
            className="col-md-6 workLogsTitle mt-5 mb-3"
            style={{ display: "inline-block", width: "50%", float: "right" }}
          >
            <div class="dropdown">
              <Link
                className="dropdown-toggle align-items-center hidden-arrow"
                to="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
                style={{ display: "inline-block", float: "right" }}
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="50"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />{" "}
                &nbsp; &nbsp; Ramarao
              </Link>
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
                  <div className="modal-body  mx-3">
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
                            style={{ height: "100px" }}
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

            <div className="row">
              <div class="text-left col-md-6">
                <Link
                  to="#"
                  className="btn btn-secondary btn-rounded mb-4"
                  data-toggle="modal"
                  data-target="#modalContactForm"
                >
                  Add WorkLog
                </Link>
              </div>
              <div className="col-md-6">
                <button
                  className=" btn btn-secondary btn-rounded"
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
              <th>Actions</th>
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
                  <td>
                    <a
                      href="#"
                      class="btn btn-primary btn-rounded mb-4"
                      data-toggle="modal"
                      data-target="#modalContactForm"
                    >
                      <i className="fa fa-edit" />{" "}
                    </a>{" "}
                    &nbsp;&nbsp;&nbsp;
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-mdb-toggle="modal"
                      data-mdb-target="#exampledModal"
                      onClick={() => {
                        deleteTask(data.id);
                      }}
                    >
                      {" "}
                      <i className="fa fa-trash" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div
          className="modal fade"
          id="exampledModal"
          tabIndex="-1"
          aria-labelledby="exampledModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampledModalLabel">
                  Delete
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">Are You Sure You Want To Delete?</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-mdb-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EmployeeWorkLogs;
