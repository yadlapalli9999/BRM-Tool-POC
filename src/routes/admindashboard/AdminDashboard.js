import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Spinner from "react-bootstrap/Spinner";
// import { Pie } from "react-chartjs-2";

import "./AdminDashboard.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllDashBoardPocs,
  getPocCount,
  getResourceActive,
  getResourceCount,
  getInActiveResources,
} from "../../redux/features/dashboard/dashboard.feature";
import PieChart from "../../util/PieChart";
import { MDBSpinner } from "mdb-react-ui-kit";

const AdminDashboard = (props) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  // PocCount
  const {
    pocCount,
    resourceActive,
    resourceCount,
    dashboardPoc,
    inActiveResources,
    loading,
  } = useSelector((store) => {
    return store["dashboard"];
  });
  ChartJS.register(ArcElement, Tooltip, Legend);
  console.log(inActiveResources);
  useEffect(() => {
    props.funcNav(true);
    dispatch(getPocCount());
    dispatch(getResourceActive());
    dispatch(getResourceCount());
    dispatch(getAllDashBoardPocs());
    dispatch(getInActiveResources());
  }, []);

  const dummyData = [
    {
      name: "Abhishek Dwivedi",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dicta?",
      duration: 20,
      email: "abhishekdivalimeasam12345@gmail.com",
      createdBy: "Dipesh Ingle",
      documents: [
        "https://docs.google.com/document/d/1n44H2Khq3si4tdyaNQNQT-wVtHiGL2wZ37-mHbJlmk8/edit",
      ],
      members: [
        "62e8ba7c59e2ad549fba94b3",
        "62e15a9cf09d35dcf465f2c1",
        "62e7e0684f2e38bf99f1db88",
      ],
      id: "1122112321211",
      __v: 0,
    },
    {
      name: "Ayush Gurjar",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      duration: 4,

      email: "ayush@gmal.com",
      createdBy: "Dipesh Ingle",
      documents: [
        "https://docs.excel.com/document/d/1n44H2Khq3si4tdyaNQNQT-wVtHiGL2wZ37-mHbJlmk8/edit",
      ],
      members: [
        "62e8ba7c59e2ad549fba94b3",
        "62e15a9cf09d35dcf465f2c1",
        "62e7e0684f2e38bf99f1db88",
      ],
      id: "1122112321211",
      __v: 0,
    },
    {
      name: "Surendra Singh Rajput",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum architecto eveniet incidunt dolorem magnam rem.",
      duration: 2,

      email: "surendra@gmail.com",
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
      id: "1122112321211",
      __v: 0,
    },
    {
      name: "Surendra Singh Rajput",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum architecto eveniet incidunt dolorem magnam rem.",
      duration: 2,

      email: "singh@gmail.com",
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
      id: "1122112321211",
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

  return (
    <>
      {loading ? (
        <div className="text-center" style={{ marginTop: "4rem" }}>
          <MDBSpinner role="status" color="primary">
            <span className="visually-hidden">Loading...</span>
          </MDBSpinner>
          <div>Fetching Dashboard data...</div>
        </div>
      ) : (
        <div>
          {show === false && (
            <div className="container p-1 part-2 mt-0 ">
              <div
                className="mt-3"
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <button
                  onClick={() => setShow(true)}
                  className="button-56 allBtn poc-p  p-2 poc allP mt-0"
                >
                  POC
                </button>
                <button className="button-56 allBtn p-2 bench allP  mt-0 ">
                  BENCH
                </button>
              </div>
              <div className="row mt-5">
                {resourceCount.map((data) => {
                  return (
                    <>
                      <div className="col-xl-4 col-sm-6 col-md-4 col-12 mb-4">
                        <div className="card">
                          <div className="card-body card-body-top">
                            <div className="d-flex justify-content-between px-md-1">
                              <div>
                                <h3 className="text-success">
                                  {data.BenchReserved === undefined || null
                                    ? "No Data"
                                    : data.BenchReserved}
                                </h3>
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
                                <h3 className="text-danger">
                                  {data.Bench === undefined || null
                                    ? "No Data"
                                    : data.Bench}
                                </h3>
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
                                <h3 className="text-warning">
                                  {data.FiveMonthsonBench === undefined || null
                                    ? "No Data"
                                    : data.FiveMonthsonBench}
                                </h3>
                                <p className="mb-0">
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
                    </>
                  );
                })}
              </div>

              <div className="row mb-5   ">
                <h4 className="h3-subHead mx-3 mt-2 mb-4">IN ACTIVE </h4>
                <div className="col-xl-4 col-sm-6 col-12 col-md-4 mb-4 responsive activeTable">
                  <table className="table  align-middle mb-0 bg-whit table-striped table-hover overflow-x:auto">
                    <thead className=" adminDashboardTableHead sticky-top">
                      <tr className="table-headings">
                        <th>
                          <span className="thName">Emp ID </span>
                        </th>
                        <th>Name</th>
                      </tr>
                    </thead>
                    <tbody className="tbody">
                      {inActiveResources.InactiveResources ? (
                        inActiveResources.InactiveResources.map((data) => (
                          <tr>
                            <td
                              className="fw-normal mb-1 name"
                              onClick={handleNameClick}
                            >
                              {/* <div className="d-flex "> */}
                              {/* <div className="" > */}
                              {data.emp_id}
                              {/* </div> */}
                              {/* </div> */}
                            </td>
                            {/* <td>
                          <p className="fw-normal mb-1">{data?.name}</p>
                        </td> */}
                            <td>{data.name}</td>
                            {/* <td>POC Name</td> */}
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <h3>No Data!!</h3>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="col-xl-4 col-md-4 col-sm-6 col-12 mb-4">
                  <div className="card personBench">
                    {resourceActive.map((data) => {
                      return (
                        <>
                          <div
                            className="card-body d-flex align-items-center flex-row justify-content-between"
                            style={{ height: 0 }}
                          >
                            <h3 className="mb-0 text-center ">Active</h3>
                            <div className=" text-center px-md-1 ">
                              <div style={{ marginRight: "100px" }}>
                                <h3 className="text-success">
                                  {data.Active === undefined || null
                                    ? "No Data"
                                    : data.Active}
                                </h3>
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
                                <h3 className="text-danger">
                                  {data.Inactive === undefined || null
                                    ? "No Data"
                                    : data.Inactive}
                                </h3>
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
                                <h3 className="text-warning">
                                  {" "}
                                  {data.Project === undefined || null
                                    ? "No Data"
                                    : data.Project}
                                </h3>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
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
              {/* <div
              className="col-12 col-md-12  col-lg-4 col-sm-12 d-block mt-5"
              style={{ height: "300px" }}
            >
             <Pie data={data} options={{ maintainAspectRatio: false }} />
               
              <div className=" piechart">
                <PieChart />
              </div> */}
              {/* </div> */}
            </div>
          )}

          {show === true && (
            <div className="container p-1 part-2 mt-0">
              <div
                className="mt-3"
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  marginTop: "14px",
                }}
              >
                {/* style={{background:'linear-gradient(to right, #3d3335, #db24db)',color:'white'} */}
                <button className="button-56 allBtn  bench allP p-2  mt-0 ">
                  POC
                </button>
                <button
                  className="button-56 allBtn poc-p poc p-2 allP mt-0 "
                  onClick={() => setShow(false)}
                >
                  BENCH
                </button>
              </div>
              <div className="row mt-2 ">
                <>
                  <h4 className="h3-subHead mx-3">ACTIVE</h4>
                  <div className="col-xl-8 col-sm-12 col-12 col-md-4 mb-4 table-responsive activeTable">
                    <table className="table align-middle mb-0 tab bg-white table-hover">
                      <thead className="adminDashboardTableHead sticky-top">
                        <tr className="table-headings ">
                          <th>ID</th>
                          <th>POC Name</th>
                          <th>Duration</th>
                          <th>Created By</th>
                          <th>Members</th>
                        </tr>
                      </thead>
                      {dashboardPoc.length === 0 && (
                        <>
                          <tbody>
                            <tr>
                              <h3>No Data!!</h3>
                            </tr>
                          </tbody>
                        </>
                      )}
                      {dashboardPoc.length > 0 &&
                        dashboardPoc[0].map((data) => {
                          return (
                            <>
                              <tbody className="align-items-center ">
                                <tr>
                                  <td>
                                    <div
                                      className="name"
                                      onClick={handleNameClick}
                                    >
                                      <p className="fw-bold mb-1">
                                        {data._id.slice(-6)}
                                      </p>
                                    </div>
                                  </td>
                                  <td>
                                    <p className="fw-normal mb-1">
                                      {data?.name}
                                    </p>
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
                                      {data?.duration}
                                      {`Months`}
                                    </span>
                                  </td>
                                  <td>
                                    {/* {data?.createdBy} */}
                                    {data.name}
                                  </td>

                                  <td className="">{data?.members.length}</td>
                                </tr>
                              </tbody>
                            </>
                          );
                        })}
                    </table>
                  </div>
                  <div
                    className="col-xl-4 col-md-4 col-sm-12 col-12 mb-4 "
                    style={{ height: "300px" }}
                  >
                    {/* <Pie data={data} options={{ maintainAspectRatio: false }} />
                     */}
                    <PieChart />
                  </div>
                </>
                ;
              </div>
              <div className="row mt-2 mb-3">
                {pocCount.map((data) => {
                  return (
                    <>
                      <div className="col-xl-4 col-md-4 col-sm-6 col-12 mb-1">
                        <div className="card">
                          <div className="card-body card-body-bottom">
                            <div className="d-flex justify-content-between px-md-1">
                              <div>
                                <h3 className="cardsHead">
                                  {data.IntiatedPocs === undefined || null
                                    ? "No Data"
                                    : data.IntiatedPocs}
                                </h3>
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
                                <h3 className="cardsHead">
                                  {data.HoldPocs === undefined || null
                                    ? "No Data"
                                    : data.HoldPocs}
                                </h3>
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
                                <h3 className="cardsHead">
                                  {data.CompletedPocs === undefined || null
                                    ? "No Data"
                                    : data.CompletedPocs}
                                </h3>
                                <p className="mb-0  card-text">Completed</p>
                              </div>
                              <div className="align-self-center">
                                <i className="fas  card-3 fa-chart-pie  fa-3x"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AdminDashboard;
