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

export default function ReservedBenchModal({
  setShowBenchModal,
  showBenchModal,
  setHasReserved,
}) {
  return (
    <>
      <MDBModal staticBackdrop tabIndex="-1" show={showBenchModal}>
        <MDBModalDialog centered>
          <MDBModalContent style={{ backdrop: "static" }}>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
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
                  gap: "10px",
                }}
              >
                <MDBInput label="Example label" id="form1" type="text" />
                <MDBInput label="Example label" id="form1" type="text" />
                <MDBInput label="Example label" id="form1" type="text" />
                <MDBInput label="Example label" id="form1" type="text" />
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
              <MDBBtn
                onClick={() => {
                  setHasReserved(true);
                  setShowBenchModal(false);
                }}
              >
                Save changes
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
