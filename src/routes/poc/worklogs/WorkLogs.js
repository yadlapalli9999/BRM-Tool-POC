import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./WorkLogs.css";
import $ from 'jquery'

const WorkLogs = () => {
  const dummyData = [
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
  ];

  // $(document).ready(()=>{
  //   $('.dropdown').dropdown()
  // })

  return (
    <div className="container">
      <div className="workLogsTitle mt-5 mb-5">
        <h2>Work Logs</h2>
      </div>
      <div className="dropdown d-flex justify-content-end mb-4">
        {/* <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          Select Dates
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li>
            <Link className="dropdown-item" to="#">
              Today
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              Current Week
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              Past Week
            </Link>
          </li>
        </ul> */}

<select className="btn btn-primary dropdown-toggle"
          type="button">
         <option>          Select Dates
</option>   
        <option>Today</option>
        <option>Current Week</option>
        <option>Past Week</option>

      </select>
      </div>
      
      <table className="table align-middle  mb-0 bg-white table-hover WorkLogsTable">
        <thead className="bg-secondary ">
          <tr className="table-headings">
            <th>Duration</th>
            <th>ResourceId</th>
            <th>Task Details</th>
            <th>Task Description</th>
            <th>Log Date</th>
            <th>POC Id</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {dummyData &&
            dummyData?.map((data,index) => (
              <tr key={index+1}>
                <td>
                  <div className="d-flex align-items-center">
                    <div>
                      <p className="fw-bold mb-1">{data?.duration}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">{data?.resourceId}</p>
                </td>
                <td>{data?.taskDetails}</td>

                <td>
                  <p className="fw-normal mb-1">{data?.taskDescription}</p>
                </td>

                <td>{data?.logDate}</td>
                <td>{data?.pocId}</td>
                <td>{data?.createdAt}</td>
                <td>{data?.updatedAt}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkLogs;
