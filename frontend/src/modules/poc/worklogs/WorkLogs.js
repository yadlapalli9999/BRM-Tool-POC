import React from "react";
import "./WorkLogs.css";

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
  return (
    <div class="container">
      <div className="workLogsTitle mt-5 mb-5">
        <h2>Work Logs</h2>
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
            dummyData?.map((data) => (
              <tr>
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
