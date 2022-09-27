import React, { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardFooter,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { getBenchId } from "../../../redux/features/bench/bench.feature";

let BenchEmployeeDetail = (props) => {
  let navigate = useNavigate();
  let { id } = useParams();
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBenchId({ id }));
  }, []);

  let { benchListItem } = useSelector((store) => {
    return store["bench"];
  });
  // let {data} = benchListItem;
  // let {name,email,reportingManager,teamLead,notes,status} = data;

  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(benchListItem)}</pre> */}
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol md="12" className="d-flex justify-content-center">
            <MDBBtn className="btn btn-warning m-3">Bench Details</MDBBtn>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          {Object.keys(benchListItem).length > 0 ? (
            <MDBCol md="12">
              <MDBCard>
                <MDBCardBody>
                  <MDBListGroup>
                    <MDBListGroupItem>
                      <MDBRow md="12">
                        <MDBCol md="3">Name</MDBCol>
                        <MDBCol md="9">{benchListItem.name}</MDBCol>
                      </MDBRow>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                      <MDBRow md="12">
                        <MDBCol md="3">Email</MDBCol>
                        <MDBCol md="9">{benchListItem.email}</MDBCol>
                      </MDBRow>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                      <MDBRow md="12">
                        <MDBCol md="3">Emp Id</MDBCol>
                        <MDBCol md="9">{benchListItem.emp_id}</MDBCol>
                      </MDBRow>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                      <MDBRow md="12">
                        <MDBCol md="3">Total Work Exp</MDBCol>
                        <MDBCol md="9">{benchListItem.totalWorkExp}</MDBCol>
                      </MDBRow>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                      <MDBRow md="12">
                        <MDBCol md="3">TotalExpinFission</MDBCol>
                        <MDBCol md="9">
                          {benchListItem.totalExpinFission}
                        </MDBCol>
                      </MDBRow>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                      <MDBRow md="12">
                        <MDBCol md="3">Primary SkillName</MDBCol>
                        <MDBCol md="9">{benchListItem?.primarySkills}</MDBCol>
                      </MDBRow>
                    </MDBListGroupItem>
                    {/* <MDBListGroupItem>
                        <MDBRow md="12">
                        <MDBCol md="3">PrimarySkill TotalExp</MDBCol>
                         <MDBCol md="9">{benchListItem.primarySkills[0].totalExp}</MDBCol>
                        </MDBRow>
                        </MDBListGroupItem> */}
                    <MDBListGroupItem>
                      <MDBRow md="12">
                        <MDBCol md="3">ProjectName</MDBCol>
                        <MDBCol md="9">{benchListItem.projectName}</MDBCol>
                      </MDBRow>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                      <MDBRow md="12">
                        <MDBCol md="3">Reporting Manager</MDBCol>
                        <MDBCol md="9">{benchListItem.reportingManager}</MDBCol>
                      </MDBRow>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                      <MDBRow md="12">
                        <MDBCol md="3">Team Lead</MDBCol>
                        <MDBCol md="9">{benchListItem.teamLead}</MDBCol>
                      </MDBRow>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                      <MDBRow md="12">
                        <MDBCol md="3">Notes</MDBCol>
                        <MDBCol md="9">{benchListItem.notes}</MDBCol>
                      </MDBRow>
                    </MDBListGroupItem>
                    <MDBListGroupItem>
                      <MDBRow md="12">
                        <MDBCol md="3">Status</MDBCol>
                        <MDBCol md="9">{benchListItem.status}</MDBCol>
                      </MDBRow>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardBody>
                <MDBCardFooter>
                  <MDBRow>
                    <MDBCol>
                      <MDBBtn
                        className="btn btn-primary"
                        onClick={() => {
                          navigate("/benchlist");
                        }}
                      >
                        Back
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          ) : null}
        </MDBRow>
      </MDBContainer>
      {/* <div className="container py-5">
        <div className="row">
          <div className="all-pocdetails-buttons ">
            <div className="editButton ">
              <Link to="/newbenchEmployee" className="btn btn-primary">
                Edit
              </Link>
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
          <pre>{JSON.stringify(user)}</pre>
          <div className="col-lg-12 ">
            <div className="card ">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Name </p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user.name}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {user.email}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Reporting Mangaer</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user.reportingManager}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Team Lead</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user.teamLead}</p>
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
          <MDBBtn
            className="btn btn-primary"
            onClick={() => {
              navigate("/benchlist");
            }}
          >
            Back
          </MDBBtn>
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
    </React.Fragment>
  );
};

export default BenchEmployeeDetail;
