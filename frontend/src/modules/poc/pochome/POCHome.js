import React from "react";
import "./POCHome.css";
import { Link, useNavigate } from "react-router-dom";
import ExcelImg from "../../../assets/excel.png";
import GoogleImg from "../../../assets/google.png";

let POCHome = () => {
  const dummyData = [
    {
      name: "BRM Tool",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dicta?",
      duration: 20,
      createdBy: "Dipesh Ingle",
      documents: [
        "https://docs.google.com/document/d/1n44H2Khq3si4tdyaNQNQT-wVtHiGL2wZ37-mHbJlmk8/edit",
      ],
      members: [
        "62e8ba7c59e2ad549fba94b3",
        "62e15a9cf09d35dcf465f2c1",
        "62e7e0684f2e38bf99f1db88",
      ],
      _id: "62e8c8266415e94f7d503cdd",
      __v: 0,
    },
    {
      name: "CRM Tool",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      duration: 4,
      createdBy: "Dipesh Ingle",
      documents: [
        "https://docs.excel.com/document/d/1n44H2Khq3si4tdyaNQNQT-wVtHiGL2wZ37-mHbJlmk8/edit",
      ],
      members: [
        "62e8ba7c59e2ad549fba94b3",
        "62e15a9cf09d35dcf465f2c1",
        "62e7e0684f2e38bf99f1db88",
      ],
      _id: "62e8c8266415e94f7d503cdd",
      __v: 0,
    },
    {
      name: "GRM Tool",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum architecto eveniet incidunt dolorem magnam rem.",
      duration: 2,
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
      _id: "62e8c8266415e94f7d503cdd",
      __v: 0,
    },
  ];

  let navigate = useNavigate();

  const handleNameClick = () => {
    navigate("/pocdetails");
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="pocTitle mt-5 mb-5">
          <h2>ACTIVE POC</h2>
        </div>
        <div className="all-pochome-buttons mt-5 mb-4">
          <div class="addButton ">
            <button
              onClick={() => navigate("/addpoc")}
              type="button"
              class="btn btn-primary"
              data-mdb-toggle="modal"
              data-mdb-target="#exampleModal"
            >
              Add
            </button>
          </div>
        </div>
        <table className="table align-middle mb-0 bg-white table-hover ">
          <thead className="bg-secondary">
            <tr className="table-headings">
              <th>Name</th>
              <th>Description</th>
              <th>Duration</th>
              <th>CreatedBy</th>
              <th>Members</th>
              <th>Documents</th>
            </tr>
          </thead>
          <tbody>
            {dummyData &&
              dummyData?.map((data) => (
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="name" onClick={handleNameClick}>
                        <p className="fw-bold mb-1">{data?.name}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">{data?.description}</p>
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        data?.duration >= 5
                          ? "badge-danger"
                          : data?.duration >= 3
                          ? "badge-warning"
                          : "badge-success"
                      } rounded-pill d-inline`}
                    >
                      {data?.duration} Month
                    </span>
                  </td>
                  <td>{data?.createdBy}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-link btn-sm btn-rounded"
                    >
                      {data?.members.length}
                    </button>
                  </td>
                  <td>
                    <div className="d-flex align-items-center ">
                      {data?.documents?.map((doc) => (
                        <>
                          {doc.includes("docs.google.com") ? (
                            <a href="https://docs.google.com/spreadsheets/d/1IGanhXOmHlCZbrIyyT0lle4KOoePEZ0wRh2f2OVtwPU/edit#gid=0" target="_blank">
                              <img
                                src={GoogleImg}
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle pocHomeGoogleDocsLogo "
                              />
                            </a>
                          ) : doc.includes("docs.excel.com") ? (
                            <a href="https://docs.google.com/spreadsheets/d/1IGanhXOmHlCZbrIyyT0lle4KOoePEZ0wRh2f2OVtwPU/edit#gid=0" target="_blank">
                              <img
                                src={ExcelImg}
                                alt=""
                                style={{ width: "40px", height: "45px" }}
                                className="rounded-circle pocHomeExcelLogo "
                              />
                            </a>
                          ) : doc.includes("docs.google.com") &&
                            doc.includes("docs.excel.com") ? (
                            <>
                              <a href="https://docs.google.com/spreadsheets/d/1IGanhXOmHlCZbrIyyT0lle4KOoePEZ0wRh2f2OVtwPU/edit#gid=0" target="_blank">
                                <img
                                  src={GoogleImg}
                                  alt=""
                                  style={{ width: "45px", height: "45px" }}
                                  className="rounded-circle pocHomeGoogleDocsLogo "
                                />
                              </a>
                              <a href="https://docs.google.com/spreadsheets/d/1IGanhXOmHlCZbrIyyT0lle4KOoePEZ0wRh2f2OVtwPU/edit#gid=0" target="_blank">
                                <img
                                  src={ExcelImg}
                                  alt=""
                                  style={{ width: "40px", height: "45px" }}
                                  className="rounded-circle pocHomeExcelLogo"
                                />
                              </a>
                            </>
                          ) : (
                            ""
                          )}
                        </>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
export default POCHome;
