import React, { useEffect, useState } from "react";
import $, { data } from "jquery";
import { dummyData } from "./dummyData";
import ReservedBenchModal from "./modals/ReservedBenchModal";
import BenchDeleteConfirmationModal from "./modals/BenchDeleteConfirmationModal";
import {
  MDBBtn,
  MDBInput,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBIcon,
} from "mdb-react-ui-kit";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "./BenchList.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBench,
  getBench,
  searchBench,
  selectExperience,
} from "../../../redux/features/bench/bench.feature";
import BenchServices from "../../../redux/features/bench/benchServices";
import { toast } from "react-toastify";

let BenchList = () => {
  let BASE_URL = `http://brm-tool.ap-south-1.elasticbeanstalk.com/resources`;

  let dispatch = useDispatch();
  const [hasReserved, setHasReserved] = useState(false);
  const [hasDeleted, setHasDeleted] = useState(false);
  const [previousBenchlist, setPreviousBenchlist] = useState([]);

  useEffect(() => {
    dispatch(getBench());
  }, [hasReserved, setHasReserved, hasDeleted]);
  let allBenchLists = useSelector((store) => {
    return store["bench"];
  });

  let { loading, benchLists, errorMessage } = allBenchLists;

  const [staticModal, setStaticModal] = useState(false);
  // const toggleShow = () => setStaticModal(!staticModal);
  let [role, setRole] = useState(true);
  const [query, setQuery] = useState({
    searchValue: "",
  });
  const navigate = useNavigate();
  let handleDelete = (id) => {
    BenchServices.remove(deleteId[0]._id);
    console.log(deleteId[0]._id);
    setStaticModal(!staticModal);
    setHasDeleted(!hasDeleted);
    // BenchServices.remove(id);
    toast.success("Deleted Successfully ", { autoClose: 700 });
    // setInterval(() => {
    //   dispatch(getBench());
    // }, 1000);
  };

  let handleSearch = (event) => {
    setQuery({
      ...query,
      searchValue: event.target.value,
    });
    setPreviousBenchlist(benchLists);
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      // if (event.key === "Enter") {
      dispatch(searchBench(query));
      setQuery({
        ...query,
        searchValue: "",
      });
    } else {
      dispatch(getBench());
    }
  };

  const [showBenchModal, setShowBenchModal] = useState(false);
  const [singleResource, setSingleResource] = useState([]);
  const toggleHandlerOff = (id) => {
    const data = benchLists.filter((item) => item._id === id);
    const prevDataProp = previousBenchlist.filter((item) => item._id === id);
    if (benchLists.length > 0) {
      setSingleResource(data);
    } else {
      setSingleResource(prevDataProp);
    }
    setShowBenchModal(true);
  };
  const [benchDeleteModal, setBenchDeleteModal] = useState(false);
  const toggleHandlerOn = (id) => {
    const data = benchLists.filter((item) => item._id === id);
    const prevDataProp = previousBenchlist.filter((item) => item._id === id);
    if (benchLists.length > 0) {
      setSingleResource(data);
    } else {
      setSingleResource(prevDataProp);
    }
    setBenchDeleteModal(true);
  };
  const [exp, setExp] = useState("1/to/2");
  let handleSelect = (event) => {
    setExp(event.target.value);
    dispatch(selectExperience(event.target.value));
  };
  const [deleteId, setDeleteId] = useState([]);
  const toggleShow = (id) => {
    setStaticModal(!staticModal);
    console.log(id);
    let findObj = benchLists.filter((x) => x._id === id);
    console.log(findObj);
    setDeleteId(findObj);
    //handleDelete(id)
  };

  return (
    <React.Fragment>
      <div className="container">
        {/* <pre>{JSON.stringify(benchLists.data)}</pre> */}
        <div className="row mt-3">
          <div className="col-md-4 mx-4 ">
            <h2 className="a1 mt-4">Bench List</h2>
          </div>
          <div className="col-md-7">
            <div
              className="text-center"
              style={{ marginTop: "30px", float: "right", marginRight: "10px" }}
            >
              {/* <MDBBtn> */}
              <Link
                to="/newbenchEmployee"
                className="btn addBtn text-white"
                style={{ backgroundColor: "#333" }}
              >
                ADD
              </Link>
              {/* </MDBBtn> */}
              {/* <CustomButton/> */}
            </div>
          </div>
        </div>
        <div className="row col-md-12">
          <div className="col-md-3 inp">
            <MDBInput
              type="text"
              label="search"
              value={query.searchValue}
              style={{ width: "660px" }}
              onChange={(e) => {
                handleSearch(e);
              }}
              onKeyPress={(e) => {
                enterHandler(e);
              }}
            />
          </div>
          <div className="col-md-6 ">
            <select
              className="select selectBtn mx-5"
              value={exp}
              data-mdb-filter="true"
              onChange={handleSelect}
            >
              <option className=" ">Select Year</option>
              <option value="1/to/2">1-2</option>
              <option value="2/to/3">2-3</option>
              <option value="3/to/4">3-4</option>
              <option value="4/to/5">4-5</option>
              <option value="5/to/6">5-6</option>
              <option value="6/to/7">6-7</option>
              <option value="7/to/8">7-8</option>
              <option value="8/to/9">8-9</option>
              <option value="9/to/10">9-10</option>
              <option value="10/to/11">10-11</option>
            </select>
            {/* <div class="dropdown d-flex justify-content-end mb-4">
              <select
                class="btn btn-rounded  btn-secondary dropdown-toggle"
                type="button"
                style={{ fontSize: "1rem" }}
              >
                <option>Select Year</option>
                <option>1-2</option>
                <option>2-3</option>
                <option>3-4</option>
                <option>4-5</option>
                <option>5-6</option>
                <option>6-7</option>
                <option>7-8</option>
                <option>8-9</option>
                <option>9-10</option>
                <option>10-11</option>
                <option>11-12</option>
              </select>
            </div> */}
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            {benchLists ? (
              <div className=" container table-responsive">
                <MDBTable>
                  <MDBTableHead className="table_content text-white">
                    <tr>
                      <th scope="col">EmpId</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">TotalWorkExp</th>
                      <th scope="col">Skills</th>
                      <th scope="col">Worklogs</th>
                      <th scope="col">Reserved Bench</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </MDBTableHead>

                  <MDBTableBody>
                    {
                      // benchLists&& benchLists?.filter((filterData) =>filterData?.name.toLowerCase().includes(query))?.map((filterData) => (

                      // benchLists && benchLists?.filter((filterData) =>filterData?.name.toLowerCase().includes(searchValue))?.map((filterData) => (
                      benchLists.length > 0 ? (
                        benchLists?.map((filterData) => (
                          <tr key={filterData._id}>
                            <td>
                              {/* <Link to={`/worklog/${item.id}`}>{item.id}</Link> */}
                              <Link to={`/empDetails/${filterData._id}`}>
                                {filterData.emp_id}
                              </Link>
                            </td>
                            <td>{filterData?.name}</td>
                            <td>{filterData.email}</td>
                            <td>{filterData.totalWorkExp}</td>
                            <td>
                              {filterData.primarySkills
                                ? filterData.primarySkills
                                : "NULL"}
                            </td>
                            <td>
                              <a
                                href={`http://docs.google.com/spreadsheets/d/${filterData.spreadsheetId}`}
                                target="_blank"
                              >
                                <MDBIcon
                                  fas
                                  icon="list-alt"
                                  className="worklog_icon"
                                />
                              </a>
                            </td>
                            <td>
                              {filterData.status === "BenchReserved" ? (
                                <MDBIcon
                                  fas
                                  icon="toggle-on"
                                  className="toggle-on"
                                  onClick={() => {
                                    toggleHandlerOn(filterData._id);
                                  }}
                                />
                              ) : (
                                <MDBIcon
                                  fas
                                  icon="toggle-off"
                                  className="toggle-off"
                                  onClick={() => {
                                    toggleHandlerOff(filterData._id);
                                  }}
                                />
                              )}
                            </td>
                            {/* <td>
          <Link to="/editbenchEmployee">
            <i
              className="fas fa-edit text-primary"
            />
             <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label> *
          </Link>
        </td> */}
                            <td>
                              <Link to={`/editbenchEmployee/${filterData._id}`}>
                                <i className="fas fa-edit text-primary benchListEditi" />
                              </Link>
                              &nbsp;&nbsp;
                              <i
                                data-target="#exampleModal"
                                // onClick={() => handleDelete(filterData._id)}
                                onClick={() => toggleShow(filterData._id)}
                                className="fa fa-trash text-danger benchListdeletei"
                              />
                            </td>
                          </tr>
                        ))
                      ) : previousBenchlist.length > 0 ? (
                        previousBenchlist?.map((filterData) => (
                          <tr key={filterData._id}>
                            <td>
                              {/* <Link to={`/worklog/${item.id}`}>{item.id}</Link> */}
                              <Link to={`/empDetails/${filterData._id}`}>
                                {filterData.emp_id}
                              </Link>
                            </td>
                            <td>{filterData?.name}</td>
                            <td>{filterData.email}</td>
                            <td>{filterData.totalWorkExp}</td>
                            <td>
                              {filterData.primarySkills
                                ? filterData.primarySkills
                                : "NULL"}
                            </td>
                            {/* <td>{item}</td> */}
                            <td>
                              <a
                                href="https://docs.google.com/spreadsheets/d/1IGanhXOmHlCZbrIyyT0lle4KOoePEZ0wRh2f2OVtwPU/edit#gid=0"
                                target="_blank"
                              >
                                {/* <img
                src={"../../excel.png"}
                alt=""
                style={{ width: "40px", height: "40px" }}
                className="rounded-circle pocHomeExcelLogo "
              /> */}
                                <MDBIcon
                                  fas
                                  icon="list-alt"
                                  className="worklog_icon"
                                />
                              </a>
                            </td>
                            <td>
                              {filterData.status === "BenchReserved" ? (
                                <MDBIcon
                                  fas
                                  icon="toggle-on"
                                  className="toggle-on"
                                  onClick={() => {
                                    toggleHandlerOn(filterData._id);
                                  }}
                                />
                              ) : (
                                <MDBIcon
                                  fas
                                  icon="toggle-off"
                                  className="toggle-off"
                                  onClick={() => {
                                    toggleHandlerOff(filterData._id);
                                  }}
                                />
                              )}
                            </td>
                            {/* <td>
          <Link to="/editbenchEmployee">
            <i
              className="fas fa-edit text-primary"
            />
             <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label> *
          </Link>
        </td> */}
                            <td>
                              <Link to={`/editbenchEmployee/${filterData._id}`}>
                                <i className="fas fa-edit text-primary benchListEditi" />
                              </Link>
                              &nbsp;&nbsp;
                              <i
                                data-target="#exampleModal"
                                onClick={() => handleDelete(filterData._id)}
                                className="fa fa-trash text-danger benchListdeletei"
                              />
                            </td>
                          </tr>
                        ))
                      ) : (
                        <></>
                      )
                    }
                  </MDBTableBody>
                </MDBTable>
              </div>
            ) : (
              <h1>NO Data</h1>
            )}

            {/* <table
              id="dtBasicExample"
              className="table table-striped table-sm cell-border"
              cellSpacing="0"
              width="100%"
              style={{
                fontSize: "1rem",
                lineHeight: "2.2rem",
                textAlign: "center",
              }}
            >
              <thead>
                <tr>
                  <th className="th-sm">EmpId</th>
                  <th className="th-sm">Name</th>
                  <th className="th-sm">Email</th>
                  <th className="th-sm">TotalWorkExp</th>
                  <th className="th-sm">Chat</th>
                  {/* <th className="th-sm">Skills</th> }
                  <th className="th-sm">Worklogs</th>
                  <th className="th-sm">Reseverd Bench</th>
                  <th className="th-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                      data
                        ?.filter((filterData) =>
                          filterData?.name.toLowerCase().includes(query)
                        )
                        ?.map((filterData) => (
                      <tr key={filterData.id}>
                        <td>
                          {/* <Link to={`/worklog/${item.id}`}>{item.id}</Link> }
                          <Link to={`/empDetails/${filterData.id}`}>{filterData.id}</Link>
                        </td>
                        <td>{filterData?.name}</td>
                        <td>{filterData.email}</td>
                        <td>{filterData.totalWorkExp}</td>
                        <td>
                        <a href="https://mail.google.com/chat/u/1/#chat/dm/8_H9X4AAAAE" target="_blank">
                              <img
                                src={"../../chat.png"}
                                alt=""
                                style={{ maxWidth:'100%'}}
                                className="rounded-circle pocHomeExcelLogo "
                              />
                        </a>
                        </td>
                        {/* <td>{item}</td> }
                        <td><a href="https://docs.google.com/spreadsheets/d/1IGanhXOmHlCZbrIyyT0lle4KOoePEZ0wRh2f2OVtwPU/edit#gid=0" target="_blank">
                              <img
                                src={"../../excel.png"}
                                alt=""
                                style={{ width: "40px", height: "40px" }}
                                className="rounded-circle pocHomeExcelLogo "
                              />
                            </a></td>
                        <td>
                        <div class="form-check form-switch" >
                          <input class="form-check-input" value={role} onChange={()=>handleInputChange(filterData.id)} type="checkbox"  id="flexSwitchCheck" />
                        </div>
                          </td>
                        {/* <td>
                          <Link to="/editbenchEmployee">
                            <i
                              className="fas fa-edit text-primary"
                            />
                             <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                          </Link>
                        </td> }
                        <td>
                          <Link to="/editbenchEmployee">
                            <i className="fas fa-edit text-primary benchListEditi" />
                          </Link>
                          &nbsp;&nbsp;
                          <i
                            data-mdb-toggle="modal"
                            data-mdb-target="#exampledModal"
                            className="fa fa-trash text-danger benchListdeletei"
                          />
                        </td>
                      </tr>
                    )
                  )}
              </tbody>
            </table> */}
          </div>
        </div>
      </div>
      {/* ReservedBenchModal */}
      {showBenchModal && (
        <ReservedBenchModal
          setShowBenchModal={setShowBenchModal}
          showBenchModal={showBenchModal}
          setHasReserved={setHasReserved}
          hasReserved={hasReserved}
          singleResource={singleResource}
        />
      )}
      {/* deleteReservedMOdal */}
      {benchDeleteModal && (
        <BenchDeleteConfirmationModal
          benchDeleteModal={benchDeleteModal}
          setBenchDeleteModal={setBenchDeleteModal}
          setHasReserved={setHasReserved}
          hasReserved={hasReserved}
          singleResource={singleResource}
        />
      )}
      {/* DELETE MODAL */}
      <MDBModal
        id="exampleModal"
        staticBackdrop
        tabIndex="-1"
        show={staticModal}
        setShow={setStaticModal}
      >
        <MDBModalDialog className="justify-content-center">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Delete Confirmation Modal</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              Are You sure to delete {deleteId[0]?.name}
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn onClick={toggleShow}>Close</MDBBtn>
              <MDBBtn color="danger" onClick={handleDelete}>
                Yes
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
      {/* <div
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
      </div> */}
    </React.Fragment>
  );
};

export default BenchList;
