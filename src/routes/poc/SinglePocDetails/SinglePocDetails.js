import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePoc } from "../../../redux/features/poc/poc.feature";

const SinglePocDetails = () => {
  const [loader, setLoader] = useState(true);
  let { id } = useParams();
  let dispatch = useDispatch();
  dispatch(getSinglePoc(id));
  const { pocList, singlePoc } = useSelector((store) => {
    return store["poc"];
  });
  setTimeout(() => {
    setLoader(false);
  }, 4000);
  return (
    <>
      <>
        {loader ? (
          <div className="text-center">
            <MDBSpinner role="status" color="primary">
              <span className="visually-hidden">Loading...</span>
            </MDBSpinner>
            <div>Fetching POC data...</div>
          </div>
        ) : (
          <React.Fragment>
            <MDBContainer className="py-1">
              <MDBRow>
                <MDBCol md="12" className="d-flex justify-content-end">
                  <Link
                    to={`/editpoc?id=${id}`}
                    className="btn btn-primary m-2"
                  >
                    Edit
                  </Link>
                  <MDBBtn className="btn btn-danger m-2">Cancel</MDBBtn>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mt-3">
                <MDBCol md="12">
                  <MDBCard>
                    <MDBCardBody>
                      <MDBListGroup>
                        <MDBListGroupItem>
                          <MDBRow>
                            <MDBCol md="3">Name</MDBCol>
                            <MDBCol md="9">
                              {singlePoc.name === null
                                ? "null"
                                : singlePoc.name}
                            </MDBCol>
                          </MDBRow>
                        </MDBListGroupItem>
                        <MDBListGroupItem>
                          <MDBRow>
                            <MDBCol md="3">Description</MDBCol>
                            <MDBCol md="9">
                              {singlePoc.description === null || undefined
                                ? "null"
                                : singlePoc.description}
                            </MDBCol>
                          </MDBRow>
                        </MDBListGroupItem>
                        <MDBListGroupItem>
                          <MDBRow>
                            <MDBCol md="3">Duration</MDBCol>
                            <MDBCol md="9">
                              {singlePoc.duration === null || undefined
                                ? "null"
                                : singlePoc.duration}
                            </MDBCol>
                          </MDBRow>
                        </MDBListGroupItem>
                        <MDBListGroupItem>
                          <MDBRow>
                            <MDBCol md="3">CreatedBy</MDBCol>
                            <MDBCol md="9">
                              {singlePoc.createdBy === undefined
                                ? "null"
                                : singlePoc.createdBy}
                            </MDBCol>
                          </MDBRow>
                        </MDBListGroupItem>
                        <MDBListGroupItem>
                          <MDBRow>
                            <MDBCol md="3">Team Lead</MDBCol>
                            <MDBCol md="9">
                              {" "}
                              {singlePoc.teamLead === null || undefined
                                ? "null"
                                : singlePoc.teamLead[0]}
                            </MDBCol>
                          </MDBRow>
                        </MDBListGroupItem>
                        <MDBListGroupItem>
                          <MDBRow>
                            <MDBCol md="3">Status</MDBCol>
                            <MDBCol md="9">
                              {" "}
                              {singlePoc.status === null || undefined
                                ? "null"
                                : singlePoc.status}
                            </MDBCol>
                          </MDBRow>
                        </MDBListGroupItem>
                        <MDBListGroupItem>
                          <MDBRow>
                            <MDBCol md="3">Members</MDBCol>
                            <MDBCol md="9">
                              Kunal Rokhle , Alok Kumar , Sudhanshu Jain
                            </MDBCol>
                          </MDBRow>
                        </MDBListGroupItem>
                        <MDBListGroupItem>
                          <MDBRow>
                            <MDBCol md="3">Documents</MDBCol>
                            <MDBCol md="9">Bay Area, San Francisco, CA</MDBCol>
                          </MDBRow>
                        </MDBListGroupItem>
                      </MDBListGroup>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
              {/* <MDBRow className="mt-5">
          <MDBCol md="6">
            <AddResource members={pocData?.members} />
          </MDBCol>
          <MDBCol md="4" className="justify-content-end">
            <canvas id="pieChart" width="200" height="200"></canvas>
            <AddResource />
          </MDBCol>
          <MDBCol md="2" className="justify-content-end">
            <div className"card projectStatus">
              <div className"card-header text-center">
                Project Status : {status}
              </div>
              <div className"card-body d-flex ">
                <button className="btn btn-warning"> STARTED</button>
                <button className="btn btn-secondary">HOLD</button>
                <button className="btn btn-success">COMPLETED</button>
              </div>
              <div className"card-footer text-muted">2 days ago</div>
            </div>
          </MDBCol>
         
        </MDBRow> */}
            </MDBContainer>
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
                  <div className="modal-body">
                    Are You Sure You Want To Delete?
                  </div>
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
        )}
      </>
    </>
  );
};

export default SinglePocDetails;
