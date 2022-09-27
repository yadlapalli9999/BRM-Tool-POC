import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardTitle,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBListGroup,
  MDBListGroupItem,
  MDBSpinner,
} from "mdb-react-ui-kit";
import $ from "jquery";
import { Chart, registerables } from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import "./PocDetails.css";
import AddResource from "../addresource/AddResource";
import { POC_TABLE_HEADERS } from "../../Constants";
import ProjectStatus from "../ProjectStatus/ProjectStatus";
// import PieChart from "../../../util/PieChart";
import { getSinglePoc } from "../../../redux/features/poc/poc.feature";

Chart.register(...registerables);
const status = "Initiated";
const PocDetails = () => {
  const location = useLocation();

  ///props state for Project Status component
  const [edited, setEdited] = useState(false);

  const [loader, setLoader] = useState(true);
  // let { id } = useParams();
  let dispatch = useDispatch();
  const { pocList, singlePoc } = useSelector((store) => {
    return store["poc"];
  });

  //useEffects

  useEffect(() => {
    dispatch(getSinglePoc(location.state.pocId));
  }, [singlePoc.status]);

  useEffect(() => {
    dispatch(getSinglePoc(location.state.pocId));
    console.log("dispatched from parent component", singlePoc);
  }, [edited]);

  setTimeout(() => {
    setLoader(false);
  }, 800);
  const closeHandler = () => {
    setLoader(true);
    navigate("/poc");
  };
  // const id = useParams();
  // console.log(id);
  // const pocID = params.getAll("pocID")[0] || null;
  const [pocData, setPocData] = useState({});
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handlePocDetailsNameClick = () => {
    navigate("/worklogs");
  };

  const getDocIcon = (docLink) => {
    if (docLink.includes("docs.google.com")) {
      return <MDBIcon className=" fas fa-file-import" />;
    } else if (docLink.includes("docs.excel.com")) {
      return <MDBIcon className="fas fa-file-excel" />;
    }
  };

  const getData = (header) => {
    const val = header.value;
    switch (val) {
      case "duration":
        return `${pocData[val]} ${header.metric}`;
      case "members":
        return (pocData[val] || []).length;
      case "documents":
        return (
          <div className="d-flex align-items-center ">
            {(pocData[val] || []).map((doc, docInd) => (
              <a href={doc} target="_blank" style={{ marginLeft: "1rem" }}>
                {getDocIcon(doc)}
              </a>
            ))}
          </div>
        );
      default:
        return pocData[val];
    }
  };
  return (
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
                <MDBBtn className="btn btn-danger m-2" onClick={closeHandler}>
                  Back
                </MDBBtn>
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
                            {singlePoc.name === null ? "null" : singlePoc.name}
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
                            days
                          </MDBCol>
                        </MDBRow>
                      </MDBListGroupItem>
                      <MDBListGroupItem>
                        <MDBRow>
                          <MDBCol md="3">CreatedBy</MDBCol>
                          <MDBCol md="9">
                            {!singlePoc.createdBy
                              ? "None"
                              : singlePoc.createdBy.name}
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
                            {singlePoc.members.length > 0
                              ? singlePoc.members.map(
                                  (item) => item.name + ",  "
                                )
                              : "None"}
                          </MDBCol>
                        </MDBRow>
                      </MDBListGroupItem>
                      <MDBListGroupItem>
                        <MDBRow>
                          <MDBCol md="3">Documents</MDBCol>
                          <MDBCol md="9">
                            {singlePoc.documents.length > 0
                              ? singlePoc.documents
                              : "Null"}
                          </MDBCol>
                        </MDBRow>
                      </MDBListGroupItem>
                    </MDBListGroup>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            <MDBCol className="col-md-12 proStatus col-sm-12 col-lg-6 col-12 mt-5">
              <ProjectStatus
                status={singlePoc.status}
                singlePoc={singlePoc}
                setEdited={setEdited}
                edited={edited}
              />
            </MDBCol>
          </MDBContainer>
        </React.Fragment>
      )}
    </>
  );
};

export default PocDetails;
