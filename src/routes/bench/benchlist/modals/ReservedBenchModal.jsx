import {
  MDBInput,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  updateSingleResourceBench,
  getBench,
} from "../../../../redux/features/bench/bench.feature";
import "./BenchDeleteConfirmationModal.css";

export default function ReservedBenchModal({
  setShowBenchModal,
  showBenchModal,
  setHasReserved,
  singleResource,
  hasReserved,
}) {
  console.log(singleResource);
  const dispatch = useDispatch();
  const [projectsName, setProjectsName] = useState("");
  const [leadName, setLeadName] = useState("");
  const [managerName, setManagerName] = useState("");
  const saveHandler = () => {
    if (!projectsName || !leadName || !managerName) {
      alert("Fill all the fields");
    } else {
      console.log(singleResource);
      const BenchReservedstatus = "BenchReserved";
      const newObject = {
        name: singleResource[0].name,
        totalWorkExp: singleResource[0].totalWorkExp,
        totalExpinFission: singleResource[0].totalExpinFission,
        primarySkills: singleResource[0].primarySkills,
        status: BenchReservedstatus,
        projectName: projectsName,
        teamLead: leadName,
        reportingManager: managerName,
        _id: singleResource[0]._id,
      };
      console.log(newObject);
      dispatch(updateSingleResourceBench(newObject));
      dispatch(getBench());
      setHasReserved(!hasReserved);
      setShowBenchModal(false);
    }
  };
  useEffect(() => {
    dispatch(getBench());
  }, []);
  return (
    <>
    
      <MDBModal
        staticBackdrop
        tabIndex="-1"
        show={showBenchModal}
        className="modal"
      >
        <MDBModalDialog centered>
          <MDBModalContent style={{ backdrop: "static" }}>
            <MDBModalHeader>
              <MDBModalTitle className="modalHeader">Project Details</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={() => {
                  setShowBenchModal(false);
                }}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <MDBInput
                  label="Project"
                  value={projectsName}
                  id="form1"
                  type="text"
                  onChange={(e) => {
                    setProjectsName(e.target.value);
                  }}
                />
                <MDBInput
                  label="Lead Name"
                  value={leadName}
                  id="form1"
                  type="text"
                  onChange={(e) => {
                    setLeadName(e.target.value);
                  }}
                />
                <MDBInput
                  label="Reporting Manager"
                  value={managerName}
                  id="form1"
                  type="text"
                  onChange={(e) => {
                    setManagerName(e.target.value);
                  }}
                />
              </div>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                color="secondary"
                onClick={() => {
                  setShowBenchModal(false);
                }}
              >
                Close
              </MDBBtn>
              <MDBBtn onClick={saveHandler}>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    
    </>
  );
}
