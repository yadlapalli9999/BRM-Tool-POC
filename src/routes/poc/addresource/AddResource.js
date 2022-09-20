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
  let dispatch = useDispatch();

  const searchResult = (value) => push(value);
  const [isEmpty, setIsEmpty] = useState(true);
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState({
    searchValue: "",
  });

  let allBenchLists = useSelector((store) => {
    return store["poc"];
  });

  let { benchLists } = allBenchLists;
  console.log(benchLists);
  // let { loading, benchLists, errorMessage } = allBenchLists;

  const [resource, setResource] = useState("");

  const handleResource = (event) => {
    event.preventDefault();
    props.members.push(query.searchValue);
    console.log(props.members);
    clearForm();
    setShow(false);
  };
  const clearForm = () => {
    setResource("");
  };
  useEffect(() => {
    // dispatch(getBench());
  }, []);

  let handleSearch = (event) => {
    setQuery({
      ...query,
      searchValue: event.target.value,
    });
    //     const reqName=members.filter((item)=>(item==searchValue));
    // console.log(reqName);
    if (query.searchValue.trim()) {
      setIsEmpty(false);
      dispatch(searchPOC(query));
      // dispatch(getBench());

      members.searchResult(query);

      // props.members.push(query);

      console.log(query);
    } else {
      setIsEmpty(true);
      console.log("search value is not found");
    }
  };

  const nameSelector = (name) => {
    setQuery({ ...query, searchValue: name });
  };
  const navigate = useNavigate();
  const handlePocDetailsNameClick = () => {
    navigate("/worklogs");
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
                  <MDBInput
                    type="text"
                    label="search"
                    value={query.searchValue}
                    // style={{ width: "660px" }}
                    onChange={handleSearch}
                  />
                </MDBCol>
              </MDBRow>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBTable>
                <MDBTableBody>
                  {members &&
                    members
                      // ?.filter((filterMember) =>{
                      //  return  filterMember.name?.toLowerCase()===query.searchValue.toLowerCase()
                      // }
                      // )
                      // ?
                      .map((filterMember, index) => (
                        <tr
                          className="fw-normal memberTableRow"
                          key={index + 1}
                          onClick={handlePocDetailsNameClick}
                        >
                          <td className="align-middle ">
                            <span>{filterMember}</span>
                          </td>
                        </tr>
                      ))}
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
                                onClick={() => {
                                  nameSelector(filterData.name);
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
