import React from "react";
import "./PocList.css";

const PocList = () => {
  return (
    <div className="container">
      <div className="workLogsTitle mt-5 mb-5">
        <h2>POC List</h2>
      </div>
      <table className="table align-middle mb-0 bg-white table-hover PocListTable">
        <thead className="bg-secondary">
          <tr className="table-headings">
            <th>Task Description</th>
            <th>Duration</th>
            <th>Log Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <div className="ms-3">
                  <p className="fw-bold mb-1">1</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">New Task 1</p>
            </td>
            <td>6</td>
          </tr>

          <tr>
            <td>
              <div className="d-flex align-items-center">
                <div className="ms-3">
                  <p className="fw-bold mb-1">2</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">New Task 2</p>
            </td>
            <td>9</td>
          </tr>

          <tr>
            <td>
              <div className="d-flex align-items-center">
                <div className="ms-3">
                  <p className="fw-bold mb-1">3</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">New Task 3</p>
            </td>
            <td>16</td>
          </tr>

          <tr>
            <td>
              <div className="d-flex align-items-center">
                <div className="ms-3">
                  <p className="fw-bold mb-1">4</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">New Task 4</p>
            </td>
            <td>3.7</td>
          </tr>

          <tr>
            <td>
              <div className="d-flex align-items-center">
                <div className="ms-3">
                  <p className="fw-bold mb-1">5</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">New Task 5</p>
            </td>
            <td>16</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PocList;
