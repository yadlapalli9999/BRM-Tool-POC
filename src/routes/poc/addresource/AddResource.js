import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { searchPOC, getBench } from "../../../redux/features/poc/poc.feature";
import { useDispatch, useSelector } from "react-redux";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBIcon,
  MDBCardSubTitle,
  MDBInput,
  MDBTable,
  MDBTableBody,
  MDBFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import { queryByRole } from "@testing-library/dom";

let AddResource = (props) => {
  const { members } = props;
  const propValue = props.propValue;

  let dispatch = useDispatch();

  const searchResult = (value) => push(value);
  const [isEmpty, setIsEmpty] = useState(true);
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState({
    searchValue: "",
    searchId: "",
  });

  let allBenchLists = useSelector((store) => {
    return store["poc"];
  });

  let { benchLists } = allBenchLists;
  // let { loading, benchLists, errorMessage } = allBenchLists;

  const handleResource = (event) => {
    if (query.searchValue) {
      if (members.length > 0) {
        console.log(query.searchId);
        let duplicate = members.filter((item) => {
          console.log(item._id, item.searchId, query.searchId.trim());
          if (item._id) {
            if (item._id === query.searchId.trim()) {
              return item;
            }
          } else if (item.searchId) {
            if (item.searchId === query.searchId.trim()) {
              return item;
            }
          }
        });
        console.log(duplicate);
        if (propValue === "editState") {
          if (duplicate.length > 0) {
            alert("Member Already exists!");
          } else {
            if (query.searchValue) {
              event.preventDefault();
              props.members.push(query);
              console.log(props.members);
              if (propValue === "editState") {
                props.setEdited(true);
              }
              clearForm();
              setShow(false);
            }
          }
        } else if (propValue === "AddPocState") {
          if (duplicate.length > 0) {
            alert("Member Already Added");
          } else {
            if (query.searchValue) {
              event.preventDefault();
              props.members.push(query);
              console.log(props.members);
              if (propValue === "editState") {
                props.setEdited(true);
              }
              clearForm();
              setShow(false);
            }
          }
        }
        duplicate = [];
      } else {
        if (query.searchValue) {
          event.preventDefault();
          props.members.push(query);
          console.log(props.members);
          if (propValue === "editState") {
            props.setEdited(true);
          }
          clearForm();
          setShow(false);
        }
      }
    }
  };
  const clearForm = () => {
    setQuery({
      searchValue: "",
    });
  };
  useEffect(() => {
    // if (query.searchValue.trim()) setIsEmpty(false);
    if (query.searchValue.trim() == "") setIsEmpty(true);
  }, [query.searchValue]);

  let handleSearch = (event) => {
    setQuery({
      ...query,
      searchValue: event.target.value,
    });
    //     const reqName=members.filter((item)=>(item==searchValue));
    // console.log(reqName);
    if (query.searchValue) {
      setIsEmpty(false);
      dispatch(searchPOC({ searchValue: query.searchValue }));
      // setQuery({ searchValue: "" });
      // dispatch(getBench());
      // members.push(query);

      // members.searchResult(query);

      // props.members.push(query);

      console.log(query);
    } else {
      setIsEmpty(true);
      console.log("search value is not found");
    }
  };

  const nameSelector = (obj) => {
    setQuery({ ...query, searchValue: obj });
  };
  const navigate = useNavigate();
  const handlePocDetailsNameClick = () => {
    navigate("/worklogs");
  };

  const addPocResourceHandller = (obj) => {
    setQuery(obj);
    setIsEmpty(true);
  };
  return (
    <React.Fragment>
      {/* <MDBContainer> */}
      <MDBRow>
        <MDBCol md="12">
          <MDBCard>
            <MDBCardHeader>
              <MDBRow>
                <MDBCol md="6">
                  <MDBCardTitle>
                    <MDBIcon className="fas fa-tasks" /> Members
                  </MDBCardTitle>
                </MDBCol>
                <MDBCol md="6">
                  {/* <MDBInput
                    type="text"
                    label="search"
                    value={query.searchValue}
                    // style={{ width: "660px" }}
                    onChange={handleSearch}
                  /> */}
                </MDBCol>
              </MDBRow>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBTable>
                <MDBTableBody>
                  {members &&
                    members.map((filterMember, index) => (
                      <tr className="fw-normal memberTableRow " key={index + 1}>
                        <td className="align-middle ">
                          <span>
                            {propValue === "AddPocState"
                              ? filterMember.searchValue
                              : filterMember.name}
                            {propValue === "editState"
                              ? filterMember.searchValue
                              : filterMember.name}
                          </span>
                        </td>
                      </tr>
                    ))}
                  {members.length === 0 && (
                    <tr className="fw-normal memberTableRow ">
                      <td className="align-middle ">
                        <span style={{ color: "red" }}>
                          Members Not Added Yet
                        </span>
                      </td>
                    </tr>
                  )}
                </MDBTableBody>
              </MDBTable>
            </MDBCardBody>
            <MDBFooter>
              <MDBBtn
                className="btn btn-primary mb-4 m-4 float-end"
                onClick={() => setShow(!show)}
              >
                Add Resource
              </MDBBtn>
            </MDBFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      {/* </MDBContainer> */}
      {/* ADD RESOURCES MODAL */}
      <div
        className={` ${
          show === true ? "pocDetailsModal modal fade" : "modal fade"
        }`}
        id="modalRegisterForm"
        c="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div
          className={` ${
            show === true
              ? " pocDetailsModalDialog modal-dialog"
              : "modal-dialog"
          }`}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">
                <MDBIcon className="fas fa-user" /> Add Resources
              </h4>
              <button
                type="button"
                className="close pocDetailsClose"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setShow(!show)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body mx-3">
              <div className="md-form mb-3">
                {/* <i className="fas fa-user prefix grey-text"></i> */}
                <MDBInput
                  value={query.searchValue}
                  onChange={handleSearch}
                  label="Search By Name , Email"
                />
                <MDBTable>
                  <MDBTableBody>
                    {!isEmpty && (
                      <>
                        {benchLists &&
                          benchLists.map((filterData) => (
                            <tr key={filterData._id}>
                              <td
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  const tempOBj = {
                                    searchId: filterData._id,
                                    searchValue: filterData.name,
                                  };
                                  if (propValue === "AddPocState") {
                                    addPocResourceHandller(tempOBj);
                                  } else if (propValue === "editState") {
                                    addPocResourceHandller(tempOBj);
                                  }
                                }}
                              >
                                {filterData.name}
                              </td>
                            </tr>
                          ))}
                      </>
                    )}
                  </MDBTableBody>
                </MDBTable>
                {/* <input
                  type="text"
                  id="orangeForm-name"
                  className="form-control validate"
                />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="orangeForm-name"
                  className="pocDetailsLabel"
                >
                  Search By Name , Email
                </label> */}
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <MDBBtn className="btn btn-primary" onClick={handleResource}>
                Add
              </MDBBtn>
              {/* <button className="btn btn-deep-orange">Add</button> */}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

AddResource.defaultProps = {
  members: [
    {
      id: 1,
      memberName: "Kunal Rokhle",
    },
    {
      id: 2,
      memberName: "Alok Kumar",
    },
    {
      id: 3,
      memberName: "Sudhanshu Jain",
    },
  ],
};

export default AddResource;
