import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./AdminDashboard.css";

const AdminDashboard = (props) => {
  const [show, setShow] = useState(true);

  ChartJS.register(ArcElement, Tooltip, Legend);

  const dummyData = [
    {
      name: "Abhishek Dwivedi",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dicta?",
      duration: 20,
      createdBy: "Dipesh Ingle",
      documents: [
        "https://docs.google.com/document/d/1n44H2Khq3si4tdyaNQNQT-wVtHiGL2wZ37-mHbJlmk8/edit",
      ],
      members: [
        "62e8ba7c59e2ad549fba94b3",
        "62e15a9cf09d35dcf465f2c1",
        "62e7e0684f2e38bf99f1db88",
      ],
      _id: "1122112321211",
      __v: 0,
    },
    {
      name: "Ayush Gurjar",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      duration: 4,
      createdBy: "Dipesh Ingle",
      documents: [
        "https://docs.excel.com/document/d/1n44H2Khq3si4tdyaNQNQT-wVtHiGL2wZ37-mHbJlmk8/edit",
      ],
      members: [
        "62e8ba7c59e2ad549fba94b3",
        "62e15a9cf09d35dcf465f2c1",
        "62e7e0684f2e38bf99f1db88",
      ],
      _id: "1122112321211",
      __v: 0,
    },
    {
      name: "Surendra Singh Rajput",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum architecto eveniet incidunt dolorem magnam rem.",
      duration: 2,
      createdBy: "Dipesh Ingle",
      documents: [
        "https://docs.google.com/document/d/1n44H2Khq3si4tdyaNQNQT-wVtHiGL2wZ37-mHbJlmk8/edit",
        "https://docs.excel.com/document/d/1n44H2Khq3si4tdyaNQNQT-wVtHiGL2wZ37-mHbJlmk8/edit",
      ],
      members: [
        "62e8ba7c59e2ad549fba94b3",
        "62e15a9cf09d35dcf465f2c1",
        "62e7e0684f2e38bf99f1db88",
      ],
      _id: "1122112321211",
      __v: 0,
    },
    {
      name: "Surendra Singh Rajput",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum architecto eveniet incidunt dolorem magnam rem.",
      duration: 2,
      createdBy: "Dipesh Ingle",
      documents: [
        "https://docs.google.com/document/d/1n44H2Khq3si4tdyaNQNQT-wVtHiGL2wZ37-mHbJlmk8/edit",
        "https://docs.excel.com/document/d/1n44H2Khq3si4tdyaNQNQT-wVtHiGL2wZ37-mHbJlmk8/edit",
      ],
      members: [
        "62e8ba7c59e2ad549fba94b3",
        "62e15a9cf09d35dcf465f2c1",
        "62e7e0684f2e38bf99f1db88",
      ],
      _id: "1122112321211",
      __v: 0,
    },
  ];

  let navigate = useNavigate();

  const handleNameClick = () => {
    navigate("/pocdetails");
  };
  const data = {
    labels: [
      "Active",
      "Completed",
      "Inactive",
      "Initiated",
      //   "Purple",
      //   "Orange",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [50, 15, 25, 10],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          //   "rgba(153, 102, 255, 0.2)",
          //   "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          //   "rgba(153, 102, 255, 1)",
          //   "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  props.funcNav(true);
  return (
    <>
      {show === false && (
        <div className="container p-1 part-2 mt-0">
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <button
              onClick={() => setShow(true)}
              className="button-56 pt-1 mt-0  headings_blocks "
            >
              <h1 className="bench ">POC</h1>
            </button>
            <button className="button-56 poc-p pt-1 mt-0  headings_blocks">
              <h1 className="poc">BENCH</h1>
            </button>
          </div>
          <div className="row mt-5">
            <div className="col-xl-4 col-sm-6 col-md-4 col-12 mb-4">
              <div className="card">
                <div className="card-body card-body-top">
                  <div className="d-flex justify-content-between px-md-1">
                    <div>
                      <h3 className="text-success">40</h3>
                      <p className="mb-0">Bench Reserved</p>
                    </div>
                    <div className="align-self-center">
                      <i className="far fa-user text-success fa-3x"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-4 col-sm-6 col-12 mb-4">
              <div className="card">
                <div className="card-body card-body-top">
                  <div className="d-flex justify-content-between px-md-1">
                    <div>
                      <h3 className="text-danger">10</h3>
                      <p className="mb-0">Bench</p>
                    </div>
                    <div className="align-self-center">
                      <i className="fas fa-rocket text-danger fa-3x"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6 col-12 col-md-4 mb-4">
              <div className="card">
                <div className="card-body card-body-top">
                  <div className="d-flex justify-content-between px-md-1">
                    <div>
                      <h3 className="text-warning">20</h3>
                      <p className="mb-0">
                        {" "}
                        Person on bench more than 5 months
                      </p>
                    </div>
                    <div className="align-self-center">
                      <i className="fas fa-chart-pie text-warning fa-3x"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-1">
            <h3 className="h3-subHead mx-3">Leave</h3>
            <div className="col-xl-4 col-sm-6 col-12 col-md-4 mb-4 table-responsive">
              <table className="table align-middle mb-0 bg-white table-striped table-hover  ">
                <thead className=" adminDashboardTableHead ">
                  <tr className="table-headings">
                    <th>
                      <span className="thName">Name</span>
                    </th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody className="tbody">
                  {dummyData &&
                    dummyData?.map((data) => (
                      <tr>
                        <td>
                          <div className="d-flex ">
                            <div className="name" onClick={handleNameClick}>
                              <p className="fw-normal mb-1">{data?.name}</p>{" "}
                            </div>
                          </div>
                        </td>
                        {/* <td>
                          <p className="fw-normal mb-1">{data?.name}</p>
                        </td> */}
                        <td>
                          <span
                            className={`badge ${
                              data?.duration >= 5
                                ? "badge-danger"
                                : data?.duration >= 3
                                ? "badge-warning"
                                : "badge-success"
                            } rounded-pill d-inline`}
                          >
                            16-aug-2022
                          </span>
                        </td>
                        {/* <td>POC Name</td> */}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <div className="col-xl-4 col-md-4 col-sm-6 col-12 mb-4">
              <div className="card personBench">
                <div
                  className="card-body d-flex align-items-center flex-row justify-content-between"
                  style={{ height: 0 }}
                >
                  <h3 className="mb-0 text-center ">Active</h3>
                  <div className=" text-center px-md-1 ">
                    <div style={{ marginRight: "100px" }}>
                      <h1 className="text-success">0</h1>
                    </div>
                  </div>
                </div>
                <div
                  className="card-body d-flex align-items-center flex-row justify-content-between"
                  style={{ height: 0 }}
                >
                  <h3 className="mb-0 text-center">Inactive</h3>
                  <div className=" text-center px-md-1 ">
                    <div style={{ marginRight: "100px" }}>
                      <h1 className="text-danger">0</h1>
                    </div>
                  </div>
                </div>
                <div
                  className="card-body d-flex align-items-center flex-row justify-content-between "
                  style={{ height: 0 }}
                >
                  <h3 className="mb-0 text-center">Project</h3>
                  <div className=" text-center px-md-1 ">
                    <div style={{ marginRight: "100px" }}>
                      <h1 className="text-warning">0</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-4 col-ms-6 col-12 mb-4">
              <div className="card">
                <div className="card-header adminDashboardTableHead text-white">
                  <h6 className="mb-0 text-center">Missed Worklogs</h6>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item">
                      Ramarao <span class="badge bg-danger ms-2">8</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {show === true && (
        <div className="container p-1 part-2 mt-0">
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              marginTop: "14px",
            }}
          >
            {/* style={{background:'linear-gradient(to right, #3d3335, #db24db)',color:'white'} */}
            <button className="button-56 poc-p  mt-0 pt-2 headings_blocks">
              <h1 className="poc ">POC</h1>
            </button>
            <button
              className="button-56  mt-0 pt-2 headings_blocks"
              onClick={() => setShow(false)}
            >
              <h1 className="bench">BENCH</h1>
            </button>
          </div>
          <div className="row mt-5">
            <h3 className="h3-subHead">Active</h3>
            <div className="col-xl-8 col-sm-6 col-12 col-md-4 mb-4 table-responsive ">
              <table className="table align-middle mb-0 bg-white table-hover ">
                <thead className="adminDashboardTableHead">
                  <tr className="table-headings">
                    <th>Serial No</th>
                    <th>POC Name</th>
                    <th>Duration</th>
                    <th>Created By</th>
                    <th>Members</th>
                  </tr>
                </thead>
                <tbody className="align-items-center">
                  {dummyData &&
                    dummyData?.map((data) => (
                      <tr>
                        <td>
                          <div className="name" onClick={handleNameClick}>
                            <p className="fw-bold mb-1">{data?._id}</p>
                          </div>
                        </td>
                        <td>
                          <p className="fw-normal mb-1">POC Name</p>
                        </td>

                        <td>
                          <span
                            className={`badge ${
                              data?.duration >= 5
                                ? "badge-danger"
                                : data?.duration >= 3
                                ? "badge-warning"
                                : "badge-success"
                            } rounded-pill`}
                          >
                            1 Month
                          </span>
                        </td>
<<<<<<< HEAD
                     
             
=======
                        <td>Team Lead</td>

                        <td className="">{data?.members.length}</td>
>>>>>>> updated-dashboard
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div
              className="col-xl-4 col-md-4 col-sm-6 col-12 mb-4"
              style={{ height: "300px" }}
            >
              <Pie data={data} options={{ maintainAspectRatio: false }} />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-xl-4 col-md-4 col-sm-6 col-12 mb-1">
              <div className="card">
                <div className="card-body card-body-bottom">
                  <div className="d-flex justify-content-between px-md-1">
                    <div>
                      <h3 className="cardsHead">3</h3>
                      <p className="mb-0 card-text">Initiated</p>
                    </div>
                    <div className="align-self-center">
                      <i className="fas card-1 fa-rocket  fa-3x"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6 col-md-4 col-12 mb-1">
              <div className="card">
                <div className="card-body card-body-bottom">
                  <div className="d-flex justify-content-between px-md-1">
                    <div>
                      <h3 className="cardsHead">4</h3>
                      <p className="mb-0  card-text">Hold</p>
                    </div>
                    <div className="align-self-center">
                      <i className="far  fa-user card-2  fa-3x"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6 col-12 col-md-4 mb-1">
              <div className="card">
                <div className="card-body card-body-bottom">
                  <div className="d-flex justify-content-between px-md-1">
                    <div>
                      <h3 className="cardsHead">5</h3>
                      <p className="mb-0  card-text">Completed</p>
                    </div>
                    <div className="align-self-center">
                      <i className="fas  card-3 fa-chart-pie  fa-3x"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminDashboard;
