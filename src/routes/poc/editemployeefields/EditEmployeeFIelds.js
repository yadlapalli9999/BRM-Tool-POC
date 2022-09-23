import React, { useState, useEffect } from "react";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardTitle,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBTable,
  MDBTableBody,
  MDBCardBody,
  MDBValidation,
  MDBValidationItem,
  MDBTextArea,
  MDBSpinner,
} from "mdb-react-ui-kit";
import "./EditEmployeeFields.css";
import { useDispatch, useSelector } from "react-redux";
import AddResource from "../addresource/AddResource";
import {
  getSinglePoc,
  updateSinglePoc,
} from "../../../redux/features/poc/poc.feature";
import pocServices from "../../../redux/features/poc/pocServices";
import { toast } from "react-toastify";
import { validateURL } from "../../Constants";

const EditEmployeeFields = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  let { id } = useParams();
  const [loader, setLoader] = useState(false);
  const [inputData, setinputData] = useState({
    name: "",
    teamLead: [],
    description: "",
    duration: 0,
    status: "",
    documents: [],
    members: [],
  });

  const propValue = "editState";
  // console.log(inputData);
  const singlePocData = ({ id }) => {
    pocServices.getSinglePocDetial(id).then((res) => {
      console.log(res.data.data);
      setinputData({ ...res.data.data });
    });
  };
  useEffect(() => {
    if (id) singlePocData({ id });
  }, [id]);
  // console.log(inputData);
  // setTimeout(() => {
  //   setinputData({
  //     ...inputData,
  //     name: singlePoc.name,
  //     teamLead: singlePoc.teamLead,
  //     description: singlePoc.description,
  //     duration: singlePoc.duration,
  //     status: singlePoc.status,
  //     documents: singlePoc.documents,
  //     members: singlePoc.members,
  //   });
  //   setLoader(false);
  // }, 1000);
  // useEffect(() => {
  //   dispatch(getSinglePoc(location.state.pocId));
  // }, []);
  // const { singlePoc } = useSelector((store) => {
  //   return store["poc"];
  // });
  // console.log(singlePoc);
  // const [params] = useSearchParams();
  // const pocID = params.getAll("pocID")[0] || null;
  // const [pocData, setPocData] = useState({});
  const navigate = useNavigate();
  const members = [
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
  ];
  const [edited, setEdited] = useState(false);
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState("");
  const handlePocDetailsNameClick = () => {
    navigate("/worklogs");
  };

  // useEffect(() => {
  //   const data = (pocList || []).find((poc) => poc._id === pocID) || {};
  //   setPocData({ ...data });
  // }, [pocID]);

  useEffect(() => {
    const [link] = inputData.documents;
    const validateURL = (link) => {
      const regex = new RegExp(
        "^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$"
      );
      const v = regex.test(link);
      console.log(v);
      setIsVAlidURL(regex.test(link));
    };
    validateURL(link);
  }, [inputData.documents]);

  const handleChangeInputFields = (e) => {
    const { name, value } = e.target;
    setEdited(true);
    setinputData({
      ...inputData,
      [name]: value,
    });
    if (name === "documents") {
      setinputData({
        ...inputData,
        documents: [value],
      });
    }
  };
  const [isValidURL, setIsVAlidURL] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !inputData.name ||
      !inputData.duration ||
      !inputData.teamLead ||
      !inputData.status ||
      !inputData.description ||
      !inputData.documents
    ) {
      alert("please fill form");
    } else if (isValidURL === false) {
      console.log(isValidURL);
      alert("Invalid Document Link");
    } else if (!edited) {
      alert("NO changes Made ");
    } else {
      console.log(setEdited);
      console.log("success");
      dispatch(updateSinglePoc(inputData));
      toast.success("Updated Successfully", { autoClose: 1100 });
      navigate("/poc");
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
          <MDBContainer breakpoint="lg">
            <MDBRow>
              <MDBCol md="12">
                <MDBCard className="mt-3 mb-3">
                  <MDBCardHeader className="text-center">
                    <MDBCardTitle>
                      <h2>Edit Poc</h2>
                    </MDBCardTitle>
                  </MDBCardHeader>
                  <MDBCardBody>
                    <MDBValidation className="row g-5" noValidate>
                      <MDBValidationItem
                        className="col-md-6"
                        feedback="Please Enter POC name"
                        invalid
                      >
                        <MDBInput
                          id="validationCustom01"
                          required
                          placeholder="Enter POC name"
                          name="name"
                          label="Name"
                          value={inputData.name}
                          onChange={handleChangeInputFields}
                        />
                      </MDBValidationItem>
                      <MDBValidationItem
                        className="col-md-6"
                        feedback="teamLead"
                        invalid
                      >
                        <MDBInput
                          id="validationCustom03"
                          required
                          name="teamLead"
                          label="teamLead"
                          value={inputData.teamLead}
                          onChange={handleChangeInputFields}
                        />
                      </MDBValidationItem>

                      <MDBValidationItem
                        className="col-md-12"
                        feedback="Description"
                        invalid
                      >
                        <MDBTextArea
                          id="validationCustom03"
                          required
                          name="description"
                          label="Description"
                          value={inputData.description}
                          onChange={handleChangeInputFields}
                        />
                      </MDBValidationItem>
                      <MDBValidationItem
                        className="col-md-6"
                        feedback="Members"
                        invalid
                      >
                        <MDBInput
                          id="validationCustom03"
                          required
                          name="members"
                          label="Members"
                          value={
                            inputData.members.length > 0
                              ? inputData.members.map((item) => item.name)
                              : "none"
                          }
                          // onChange={handleChangeInputFields}
                        />
                      </MDBValidationItem>
                      <MDBValidationItem
                        className="col-md-6"
                        feedback="Documents"
                        invalid
                      >
                        <MDBInput
                          id="validationCustom03"
                          required
                          name="documents"
                          label="Documents"
                          value={inputData.documents}
                          onChange={handleChangeInputFields}
                        />
                      </MDBValidationItem>
                      <MDBValidationItem className="col-md-6 d-flex flex-column justify-content-center">
                        <span>Status</span>
                        <div className="selectBox">
                          <select
                            id="validationCustom06"
                            className="input-boxes"
                            value={inputData.status}
                            onChange={handleChangeInputFields}
                            required
                            name="status"
                          >
                            <option>idea</option>
                            <option>Active</option>
                            <option>Hold</option>
                            <option>closed</option>
                          </select>
                        </div>
                      </MDBValidationItem>
                      <MDBValidationItem className="col-md-6 d-flex flex-column justify-content-center">
                        <span>Duration</span>
                        <div className="selectBox">
                          <select
                            id="validationCustom06"
                            className="input-boxes"
                            value={inputData.duration}
                            onChange={handleChangeInputFields}
                            required
                            name="duration"
                          >
                            <option>30</option>
                            <option>45</option>
                            <option>60</option>
                            <option>120</option>
                            <option>180</option>
                          </select>
                        </div>
                      </MDBValidationItem>
                      <MDBRow>
                        <MDBCol md="6">
                          <AddResource
                            members={inputData.members}
                            propValue={propValue}
                            edited={edited}
                            setEdited={setEdited}
                          />
                        </MDBCol>
                      </MDBRow>
                      <MDBRow className="m-3">
                        <MDBCol md="12" className="text-center">
                          <MDBBtn
                            className="btn btn-primary m-2"
                            onClick={handleSubmit}
                          >
                            Edit
                          </MDBBtn>
                          <MDBBtn
                            onClick={() => {
                              navigate("/poc");
                              setinputData({});
                            }}
                            className="btn btn-danger m-2"
                          >
                            Cancel
                          </MDBBtn>
                        </MDBCol>
                      </MDBRow>
                    </MDBValidation>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
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
                    Add Resources
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
                  <div className="md-form mb-5">
                    <i className="fas fa-user prefix grey-text"></i>
                    <input
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
                    </label>
                  </div>
                </div>
                <div className="modal-footer d-flex justify-content-center">
                  <button className="btn btn-deep-orange">Add</button>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </>
  );
};

export default EditEmployeeFields;
