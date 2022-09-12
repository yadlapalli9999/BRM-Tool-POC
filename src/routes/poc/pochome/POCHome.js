import React, { useEffect } from "react";
import "./POCHome.css";
import { Link, useNavigate } from "react-router-dom";
import {MDBContainer,MDBRow,MDBCol,MDBTable,MDBTableHead,MDBTableBody, MDBBtn, MDBIcon,MDBSpinner} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from "react-redux";
import { getAllPoc } from "../../../redux/features/poc/poc.feature";
//import ExcelImg from "../../../assets/excel.png";
//import GoogleImg from "../../../assets/google.png";
import { POC_TABLE_HEADERS } from "../../Constants";


let POCHome = () => {
  let dispatch = useDispatch();
  let {pocList,loading} = useSelector((store)=>{return store['poc']})
  console.log(pocList)
  useEffect(()=>{
    dispatch(getAllPoc())
  },[])
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

  const navigate = useNavigate();
  // const { fetchingPocList } = useSelector((store) => {
  //   return store["poc"];
  // });

  // useEffect(() => {
  //   dispatch(getPocList());
  // }, []);

  const handleNameClick = (pocID) => {
    navigate(`/pocdetails?pocID=${pocID}`);
  };

  // const handleNameClick = () => {
  //   navigate("/pocdetails");
  // };

  return (
    <MDBContainer className='py-4'>
      <MDBRow>
        <MDBCol md='12' className='text-center pocTitle'>
          <h2>ACTIVE POC</h2>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md='12' className='d-flex justify-content-end'>
          <Link to='/addpoc' className='btn addBtn'>
            Add
          </Link>
        </MDBCol>
      </MDBRow>
      <MDBRow className='mt-4'>
        <MDBCol>
          {loading ? (
            <div className='text-center'>
              <MDBSpinner role='status' color='primary'>
                <span className='visually-hidden'>Loading...</span>
              </MDBSpinner>
              <div>Fetching POC data...</div>
            </div>
          ) : (
            <MDBTable>
              
              <MDBTableHead className='table_content text-white'>
                <tr>
                  {POC_TABLE_HEADERS.map((header) => (
                    <th scope='col'>{header.label}</th>
                  ))}
                </tr>
              </MDBTableHead>
              {pocList.length >0 ?
              <MDBTableBody className="align-item-center">
              {pocList &&
              pocList?.map((data) => (
                <tr>
                  <td>
                    <div className="align-items-center">
                      <div className="name" onClick={()=>navigate(`/pocdetails/${data._id}`)}>
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
                  <td>{data?.createdBy?.name}</td>
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
                              {/* <img
                                src={"../../google.png"}
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle pocHomeGoogleDocsLogo "
                              /> */}
                              <MDBIcon className=" fas fa-file-import" />
                            </a>
                          ) : doc.includes("docs.excel.com") ? (
                            <a href="https://docs.google.com/spreadsheets/d/1IGanhXOmHlCZbrIyyT0lle4KOoePEZ0wRh2f2OVtwPU/edit#gid=0" target="_blank">
                              {/* <img
                                src={"../../excel.png"}
                                alt=""
                                style={{ width: "40px", height: "45px" }}
                                className="rounded-circle pocHomeExcelLogo "
                              /> */}
                              <MDBIcon className="fas fa-file-excel"/>
                            </a>
                          ) : doc.includes("docs.google.com") &&
                            doc.includes("docs.excel.com") ? (
                            <>
                              <a href="https://docs.google.com/spreadsheets/d/1IGanhXOmHlCZbrIyyT0lle4KOoePEZ0wRh2f2OVtwPU/edit#gid=0" target="_blank">
                                {/* <img
                                  src={"../../google.png"}
                                  alt=""
                                  style={{ width: "45px", height: "45px" }}
                                  className="rounded-circle pocHomeGoogleDocsLogo "
                                /> */}
                                <MDBIcon className="fas fa-file-import" />

                              </a>
                              <a  href="https://docs.google.com/spreadsheets/d/1IGanhXOmHlCZbrIyyT0lle4KOoePEZ0wRh2f2OVtwPU/edit#gid=0" target="_blank">
                                {/* <img
                                  src={"../../excel.png"}
                                  alt=""
                                  style={{ width: "40px", height: "45px" }}
                                  className="rounded-circle pocHomeExcelLogo"
                                /> */}
                                <MDBIcon className="fas fa-file-excel" style={{marginLeft:'10px'}}/>
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
              </MDBTableBody>:null}
            </MDBTable>
          )}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
export default POCHome;
