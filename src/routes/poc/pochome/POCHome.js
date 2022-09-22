import React, { useEffect } from "react";
import "./POCHome.css";
import { Link, useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { getAllPoc } from "../../../redux/features/poc/poc.feature";
import { POC_TABLE_HEADERS } from "../../Constants";

let POCHome = () => {
  let dispatch = useDispatch();
  let { pocList, loading } = useSelector((store) => {
    return store["poc"];
  });
  useEffect(() => {
    dispatch(getAllPoc());
  }, []);

  const navigate = useNavigate();
  const { fetchingPocList } = useSelector((store) => {
    return store["poc"];
  });

  // useEffect(() => {
  //   dispatch(getPocList());
  // }, []);

  const handleNameClick = (pocID) => {
    navigate(`/pocdetails`, { state: { pocId: pocID } });
  };
  // const editPocHandler = (pocID) => {
  //   navigate(`/editpoc`, { state: { pocId: pocID } });
  // };

  const getDocIcon = (docLink) => {
    if (docLink.includes("docs.google.com")) {
      return <MDBIcon fas icon="file-upload doc_icon" />;
    } else if (docLink.includes("docs.excel.com")) {
      return <MDBIcon className="fas fa-file-excel doc_icon" />;
    } else {
      return <MDBIcon fas icon="exclamation-circle doc_icon" />;
    }
  };

  const getTableData = (header, item, index) => {
    const val = header.value;
    switch (val) {
      case "serialNumber":
        return (
          <div className="d-flex align-items-center justify-content-center">
            {index + 1}
          </div>
        );
      case "name":
        return (
          <div className="d-flex align-items-center justify-content-center">
            <div className="name" onClick={() => handleNameClick(item._id)}>
              {/* <Link to={(`/pocdetails`, { state: { pocId: item._id } })}> */}
              <p className="fw-bold mb-1">{item.name}</p>
              {/* </Link> */}
            </div>
          </div>
        );
      case "status":
        //  <p className="fw-normal mb-1">{item.status}</p>;
        return (
          <span
            className={`badge ${
              item.status == "closed"
                ? "badge-danger"
                : item.status == "Hold"
                ? "badge-warning"
                : item.status == "Active"
                ? "badge-success"
                : "badge-info"
            }
            } rounded-pill d-inline`}
          >
            {item.status}
          </span>
        );

      case "duration":
        return (
          <span
            className={`badge ${
              item.duration == 180
                ? "badge-danger"
                : item.duration >= 120
                ? "badge-warning"
                : item.duration >= 60
                ? "badge-info"
                : item.duration >= 45
                ? "badge-secondary"
                : "badge-success"
            } rounded-pill d-inline`}
          >
            {item.duration}
            {header.metric}
          </span>
        );
      case "createdBy":
        return (
          <div className="d-flex justify-content-center align-items-center">
            {item.createdBy === null || undefined
              ? "No Data"
              : item.createdBy.name}
          </div>
        );
      case "members":
        return (
          <button type="button" className="btn btn-link btn-sm btn-rounded">
            <h5>{item.members.length ? item.members.length : 0}</h5>
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
            {item.documents.map((doc) => (
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
      case "actions":
        return (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to={`/editpoc/${item._id}`}>
              <i
                className="fas fa-edit text-primary editIcon"
                // onClick={() => {
                //   editPocHandler(item._id);
                // }}
              />
            </Link>
          </div>
        );
      default:
        return item;
    }
  };

  return (
    <MDBContainer className="py-4">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          {/* <h2 className="pocTitle">POC</h2> */}
          <button className="pocTitle">POC</button>
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
          {loading ? (
            <div className="text-center">
              <MDBSpinner role="status" color="primary">
                <span className="visually-hidden">Loading...</span>
              </MDBSpinner>
              <div>Fetching POC data...</div>
            </div>
          ) : (
            <MDBTable>
              {/* <pre>{JSON.stringify(pocList)}</pre> */}
              <MDBTableHead className=" table_content text-white">
                <tr>
                  {POC_TABLE_HEADERS.map((header) => (
                    <th scope="col">{header.label}</th>
                  ))}
                </tr>
              </MDBTableHead>
              <MDBTableBody className="align-items-center">
                {/* {pocList.map((item) => (
                  <>
                    <p>{item.name}</p>
                    <p>{item.documents}</p>
                  </>
                ))} */}

                {pocList.length > 0 &&
                  pocList.map((item, index) => (
                    <tr>
                      {POC_TABLE_HEADERS.map((header) => (
                        <td>{getTableData(header, item, index)}</td>
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
