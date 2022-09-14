import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
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
  MDBIcon,
} from "mdb-react-ui-kit";
import $ from "jquery";
import { Chart, registerables } from "chart.js";
import { useSelector } from "react-redux";

import "./PocDetails.css";
import AddResource from "../addresource/AddResource";
import { POC_TABLE_HEADERS } from "../../Constants";
import ProjectStatus from "../ProjectStatus/ProjectStatus";
// import PieChart from "../../../util/PieChart";

Chart.register(...registerables);
  const status="Initiated";
const PocDetails = () => {
  const { pocList } = useSelector((store) => {
    return store["poc"];
  });
  const [params] = useSearchParams();
  const pocID = params.getAll("pocID")[0] || null;
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
    <React.Fragment>
      <MDBContainer className="py-1">
        <MDBRow>
          <MDBCol md="12" className="d-flex justify-content-end">
            <Link
              to={`/editpoc?pocID=${pocID}`}
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
                  {POC_TABLE_HEADERS.map((header) => {
                    return (
                      <MDBListGroupItem>
                        <MDBRow>
                          <MDBCol md="3">{header.label}</MDBCol>
                          <MDBCol md="9">{getData(header)}</MDBCol>
                        </MDBRow>
                      </MDBListGroupItem>
                    );
                  })}
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-5 row container">
        {/* className="col-12 col-md-6 col-lg-6" */}
          <MDBCol  className="col-md-12 col-sm-12 col-lg-6 col-12">
            <AddResource members={pocData.members} />
          </MDBCol>
          {/* className="col-12 col-md-6 col4 col-lg-4 " */}
          <MDBCol   className="col-md-12 proStatus col-sm-12 col-lg-6 col-12" >
            <ProjectStatus/>
          </MDBCol>
        </MDBRow>
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

export default PocDetails;
