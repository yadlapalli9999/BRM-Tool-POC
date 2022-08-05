import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PocDetails.css";

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
              <button type="button" className="btn btn-primary">
                Edit
              </button>
            </div>
            <div className="deleteButton ">
              <button type="button" className="btn btn-danger ">
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
        <div
          className="row d-flex align-items-center h-100 mt-5"
          style={{ width: "50%" }}
        >
          <div className="col-md-12 col-xl-10">
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
                className="card-body"
                data-mdb-perfect-scrollbar="true"
                style={{ position: "relative", height: "200px" }}
              >
                <table className="table mb-0">
                  <tbody>
                    {members &&
                      members
                        ?.filter((filterMember) =>
                          filterMember?.memberName.toLowerCase().includes(query)
                        )
                        ?.map((filterMember) => (
                          <tr
                            className="fw-normal"
                            key={filterMember?.id}
                            style={{ cursor: "pointer" }}
                            onClick={handlePocDetailsNameClick}
                          >
                            <td className="align-middle">
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
        </div>
      </div>
      <div
        className={` ${
          show === true ? "pocDetailsModal modal fade" : "modal fade"
        }`}
        id="modalRegisterForm"
        tabIndex="-1"
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
                  Your name
                </label>
              </div>
              <div className="md-form mb-5">
                <i className="fas fa-envelope prefix grey-text"></i>
                <input
                  type="email"
                  id="orangeForm-email"
                  className="form-control validate"
                />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="orangeForm-email"
                  className="pocDetailsLabel"
                >
                  Your email
                </label>
              </div>

              <div className="md-form mb-4">
                <i className="fas fa-lock prefix grey-text"></i>
                <input
                  type="password"
                  id="orangeForm-pass"
                  className="form-control validate"
                />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="orangeForm-pass"
                  className="pocDetailsLabel"
                >
                  Your password
                </label>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button className="btn btn-deep-orange">Add</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PocDetails;
