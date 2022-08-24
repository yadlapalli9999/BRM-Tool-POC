import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import $ from "jquery";
import { Chart, registerables } from "chart.js";
import "./PocDetails.css";

Chart.register(...registerables);

const PocDetails = () => {
  const members = [
    {
      id: 1,
      memberName: "Kunal Rokhle",
    },
    {
      id: 2,
      memberName: "Alok Kumar",
    },
    {
      id: 3,
      memberName: "Sudhanshu Jain",
    },
  ];
  $(document).ready(function () {
    var ctx = $("#pieChart");
    var myLineChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Kunal Rokhle", "Alok Kumar", "Sudhanshu Jain"],
        datasets: [
          {
            data: [20, 40, 25],
            backgroundColor: [
              "rgba(255, 0, 0, 0.5)",
              "rgba(100, 255, 0, 0.5)",
              "rgba(200, 50, 255, 0.5)",
              "rgba(0, 100, 255, 0.5)",
            ],
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "empData",
        },
      },
    });
  });
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handlePocDetailsNameClick = () => {
    navigate("/worklogs");
  };

  return (
    <section>
      <div className="container py-5">
        <div className="row">
          <div className="all-pocdetails-buttons ">
            <div className="editButton ">
              <button
                type="button"
                className="btn btn-primary"
                data-mdb-toggle="modal"
                data-mdb-target="#exampleModal"
                onClick={() => navigate("/editpoc")}
              >
                Edit
              </button>
            </div>
            <div className="deleteButton ">
              <button
                type="button"
                className="btn btn-danger"
                data-mdb-toggle="modal"
                data-mdb-target="#exampledModal"
              >
                Delete
              </button>
            </div>
          </div>
          <div className="col-lg-12 ">
            <div className="card ">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0"> Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">Abhishek Dwivedi</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Description</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cupiditate voluptatem porro optio tempore voluptate modi
                      non molestias officia dolor aliquid.
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Duration</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">20 Months</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">CreatedBy</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0"> Dipesh Ingle</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Members</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      Kunal Rokhle , Alok Kumar , Sudhanshu Jain
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Documents</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      Bay Area, San Francisco, CA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center h-100 mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header p-3 d-flex justify-content-between align-items-center ">
                <h5 className="mb-0">
                  <i className="fas fa-tasks me-2"></i>Members
                </h5>
                <input
                  type="text"
                  placeholder="Search Member..."
                  className="search"
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>

              <div
                className="card-body memberCard"
                data-mdb-perfect-scrollbar="true"

              >
                <table className="table mb-0  table-hover">
                  <tbody>
                    {members &&
                      members
                        ?.filter((filterMember) =>
                          filterMember?.memberName.toLowerCase().includes(query)
                        )
                        ?.map((filterMember) => (
                          <tr
                            className="fw-normal memberTableRow"
                            key={filterMember?.id}
                            onClick={handlePocDetailsNameClick}
                          >
                            <td className="align-middle ">
                              <span>{filterMember?.memberName}</span>
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </div>
              <div className="text-end p-3">
                <div className="addButton mr-3">
                  <button
                    type="button"
                    className="btn  btn-primary"
                    onClick={() => setShow(!show)}
                  >
                    Add Resources
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- pie chart --> */}
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <canvas id="pieChart" width="200" height="200"></canvas>
          </div>
        </div>
      </div>

      {/* ADD RESOURCES MODAL */}
      <div
        className={` ${
          show === true ? "pocDetailsModal modal fade" : "modal fade"
        }`}
        id="modalRegisterForm"
        c="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div
          className={` ${
            show === true
              ? " pocDetailsModalDialog modal-dialog"
              : "modal-dialog"
          }`}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">
                Add Resources
              </h4>
              <button
                type="button"
                className="close pocDetailsClose"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setShow(!show)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body mx-3">
              <div className="md-form mb-5">
                <i className="fas fa-user prefix grey-text"></i>
                <input
                  type="text"
                  id="orangeForm-name"
                  className="form-control validate"
                />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="orangeForm-name"
                  className="pocDetailsLabel"
                >
                  Search By Name , Email
                </label>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button className="btn btn-deep-orange">Add</button>
            </div>
          </div>
        </div>
      </div>

      {/* EDIT MODAL */}
      {/* <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit POC
              </h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="mt-5">
                <div className="row mb-2 mt-2">
                  <div className="col-12">
                    <div className="group">
                      <input
                        className="pocHomeInput"
                        type="text"
                        id="form3Example1"
                        required
                        name="Name"
                      />
                      <label htmlFor="form3Example1">Name</label>
                    </div>
                  </div>
                </div>

                <div className="row mb-2 mt-2">
                  <div className="col-12">
                    <div className="group">
                      <input
                        className="pocHomeInput"
                        type="text"
                        id="form3Example2"
                        required
                        name="Description"
                      />
                      <label htmlFor="form3Example2">Description</label>
                    </div>
                  </div>
                </div>

                <div className="row mb-2 mt-2">
                  <div className="col-12">
                    <div className="group">
                      <input
                        className="pocHomeInput"
                        type="text"
                        id="form3Example1"
                        required
                        name="Name"
                      />
                      <label htmlFor="form3Example1">Duration</label>
                    </div>
                  </div>
                </div>

                <div className="row mb-2 mt-2">
                  <div className="col-12">
                    <div className="group">
                      <input
                        className="pocHomeInput"
                        type="text"
                        id="form3Example1"
                        required
                        name="Name"
                      />
                      <label htmlFor="form3Example1">Created By</label>
                    </div>
                  </div>
                </div>

                <div className="row mb-2 mt-2">
                  <div className="col-12">
                    <div className="group">
                      <input
                        className="pocHomeInput"
                        type="text"
                        id="form3Example10"
                        required
                        name="TotalExpInFission"
                      />
                      <label htmlFor="form3Example10">Members</label>
                    </div>
                  </div>
                </div>

                <div className="row mb-2 mt-2">
                  <div className="col-12">
                    <div className="group">
                      <input
                        className="pocHomeInput"
                        type="file"
                        id="form3Example10"
                        required
                        name="TotalExpInFission"
                      />
                      <label htmlFor="form3Example10"></label>
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
          </div>
        </div>
      </div> */}

      {/* DELETE MODAL */}
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
    </section>
  );
};

export default PocDetails;
