import "../ProjectStatus/ProjectStatus.css";
import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { updatePocStatus } from "../../../redux/features/poc/poc.feature";

function ProjectStatus(props) {
  // utils
  const dispatch = useDispatch();

  // {Modal states}

  const [centredModal, setCentredModal] = useState(false);
  const toggleShow = () => setCentredModal(!centredModal);
  const [clickedStatus, setClickedStatus] = useState("");

  // props states
  const [status, setStatus] = useState(props.status);
  const [data, setData] = useState(props.singlePoc);
  console.log("data updated", data);
  //{ProjectStatus states}
  const [active, setActive] = useState(false);
  const [hold, setHold] = useState(false);
  const [closed, setClosed] = useState(false);
  const [idea, setIdea] = useState(false);

  // useEffects
  useEffect(() => {
    // console.log(data);
    initiators();
  }, [active, hold, idea, closed, status]);

  useEffect(() => {
    console.log("dispatch ing dat for update", data);
    dispatch(updatePocStatus(data));
  }, [data]);

  const initiators = () => {
    if (status === "Active") {
      setActive(true);
    } else if (status === "Hold") {
      setHold(true);
    } else if (status === "closed") {
      setClosed(true);
    } else if (status === "idea") {
      setIdea(true);
    }
  };

  const activeHandler = () => {
    setStatus("Active");
    setData({ ...data, status: "Active" });
    setHold(false);
    setClosed(false);
    setIdea(false);
    setTimeout(() => {
      setCentredModal(false);
      props.setEdited(!props.edited);
    }, 100);
  };

  const holdHandler = () => {
    setStatus("Hold");
    setData({ ...data, status: "Hold" });
    setActive(false);
    setClosed(false);
    setIdea(false);
    setTimeout(() => {
      setCentredModal(false);
      props.setEdited(!props.edited);
    }, 100);
  };
  const closedHandler = () => {
    setStatus("closed");
    setData({ ...data, status: "closed" });
    setHold(false);
    setActive(false);
    setIdea(false);
    setTimeout(() => {
      setCentredModal(false);
      props.setEdited(!props.edited);
    }, 100);
  };
  const ideaHandler = () => {
    setStatus("idea");
    setData({ ...data, status: "idea" });
    setHold(false);
    setClosed(false);
    setActive(false);
    setTimeout(() => {
      setCentredModal(false);
      props.setEdited(!props.edited);
    }, 100);
  };
  const confirmationHandler = () => {
    if (clickedStatus === "Active") {
      activeHandler();
    } else if (clickedStatus === "closed") {
      closedHandler();
    } else if (clickedStatus === "idea") {
      ideaHandler();
    } else if (clickedStatus === "Hold") {
      holdHandler();
    }
  };

  return (
    <>
      <div class="card projectStatus w-100">
        <div class="card-header d-flex justify-content-center ">
          Project Status <span className="mx-5">: </span>
          <h6 className=" color bg-white mx-2 ">{status}</h6>
        </div>
        <div class="card-body d-flex justify-content-around">
          {!active && (
            <button
              type="button"
              class="btn btn-success"
              onClick={() => {
                setClickedStatus("Active");
                setCentredModal(true);
              }}
            >
              Active
            </button>
          )}
          {!hold && (
            <button
              type="button"
              class="btn btn-warning"
              onClick={() => {
                setClickedStatus("Hold");
                setCentredModal(true);
              }}
            >
              Hold
            </button>
          )}
          {!closed && (
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => {
                setClickedStatus("closed");
                setCentredModal(true);
              }}
            >
              Closed
            </button>
          )}
          {!idea && (
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => {
                setClickedStatus("idea");
                setCentredModal(true);
              }}
            >
              Idea
            </button>
          )}
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
      {/* modal */}
      <>
        <MDBModal
          tabIndex="-1"
          show={centredModal}
          setShow={setCentredModal}
          staticBackdrop
        >
          <MDBModalDialog centered>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Status Update Confirmation</MDBModalTitle>
                <MDBBtn
                  className="btn-close"
                  color="none"
                  onClick={toggleShow}
                ></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <p>
                  Are You sure to change status from{" "}
                  <strong
                    style={{
                      color: `${
                        active
                          ? "green"
                          : hold
                          ? "#a0a007"
                          : closed
                          ? "red"
                          : "blue"
                      }`,
                      fontSize: "20px",
                    }}
                  >
                    {status}
                  </strong>{" "}
                  to{" "}
                  <strong
                    style={{
                      color: `${
                        clickedStatus === "Active"
                          ? "green"
                          : clickedStatus === "Hold"
                          ? "#a0a007"
                          : clickedStatus === "closed"
                          ? "red"
                          : "blue"
                      }`,
                      fontSize: "20px",
                    }}
                  >
                    {clickedStatus}
                  </strong>
                </p>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="primary" onClick={toggleShow}>
                  Go Back
                </MDBBtn>
                <MDBBtn
                  color="danger"
                  onClick={() => {
                    confirmationHandler();
                  }}
                >
                  Update
                </MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>
    </>
  );
}

export default ProjectStatus;
