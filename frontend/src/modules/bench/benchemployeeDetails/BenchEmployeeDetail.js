import React from "react";
import { useNavigate, Link } from "react-router-dom";

let BenchEmployeeDetail = (props) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="container py-5">
        <div className="row">
          <div className="all-pocdetails-buttons ">
            <div className="editButton ">
              <Link to="/newbenchEmployee" className="btn btn-primary">
                Edit
              </Link>
              {/* <button
                type="button"
                className="btn btn-primary"
                data-mdb-toggle="modal"
                data-mdb-target="#exampleModal"
                onClick={() => navigate("/newbenchEmployee")}
              >
                Edit
              </button> */}
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
        <div className="text-left py-5">
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => {
              navigate("/benchlist");
            }}
          >
            Back
          </button>
        </div>
      </div>
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
    </React.Fragment>
  );
};

export default BenchEmployeeDetail;
