import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./POCHome.css";
import { Link, useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBSpinner,
  MDBIcon,
} from "mdb-react-ui-kit";
import { getPocList } from "../../../redux/features/poc/poc.feature";
import { POC_TABLE_HEADERS } from "../../Constants";

let POCHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pocList, fetchingPocList } = useSelector((store) => {
    return store["poc"];
  });

  useEffect(() => {
    dispatch(getPocList());
  }, []);

  const handleNameClick = (pocID) => {
    navigate(`/pocdetails?pocID=${pocID}`);
  };

  const getDocIcon = (docLink) => {
    if (docLink.includes("docs.google.com")) {
      return <MDBIcon fas icon="file-upload" className="doc_icon" />;
      // <MDBIcon className=" fas fa-file-import doc_icon" />;
    } else if (docLink.includes("docs.excel.com")) {
      return <MDBIcon className="fas fa-file-excel doc_icon" />;
    }
  };

  const getTableData = (header, data = {}) => {
    const val = header.value;
    switch (val) {
      case "name":
        return (
          <div className="d-flex align-items-center">
            <div className="name" onClick={() => handleNameClick(data._id)}>
              <p className="fw-bold mb-1">{data[val]}</p>
            </div>
          </div>
        );
      case "description":
        return <p className="fw-normal mb-1">{data[val]}</p>;
      case "duration":
        return (
          <span
            className={`badge ${
              data?.duration >= 5
                ? "badge-danger"
                : data?.duration >= 3
                ? "badge-warning"
                : "badge-success"
            } rounded-pill d-inline`}
          >
            {data[val]} {header.metric}
          </span>
        );
      case "members":
        return (
          <button type="button" className="btn btn-link btn-sm btn-rounded">
            {data[val]?.length || 0}
          </button>
        );
      case "documents":
        return (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {(data[val] || []).map((doc, docInd) => (
              <a
                href={doc}
                target="_blank"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {getDocIcon(doc)}
              </a>
            ))}
          </div>
        );
      default:
        return data[val];
    }
  };

  return (
    <MDBContainer className="py-4">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2 className="pocTitle">ACTIVE POC</h2>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="12" className="d-flex justify-content-end">
          <Link
            to="/addpoc"
            className="btn addBtn"
            style={{ backgroundColor: "#333" }}
          >
            Add
          </Link>
        </MDBCol>
      </MDBRow>
      <MDBRow className="mt-4">
        <MDBCol>
          {fetchingPocList ? (
            <div className="text-center">
              <MDBSpinner role="status" color="primary">
                <span className="visually-hidden">Loading...</span>
              </MDBSpinner>
              <div>Fetching POC data...</div>
            </div>
          ) : (
            <MDBTable>
              <MDBTableHead className=" table_content text-white">
                <tr>
                  {POC_TABLE_HEADERS.map((header) => (
                    <th scope="col">{header.label}</th>
                  ))}
                </tr>
              </MDBTableHead>
              <MDBTableBody className="align-items-center">
                {(pocList || []).map((data) => (
                  <tr>
                    {POC_TABLE_HEADERS.map((header) => (
                      <td>{getTableData(header, data)}</td>
                    ))}
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          )}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
export default POCHome;
