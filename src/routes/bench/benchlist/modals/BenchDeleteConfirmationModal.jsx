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

const BenchDeleteConfirmationModal = ({
  benchDeleteModal,
  setBenchDeleteModal,
  setHasReserved,
}) => {
  return (
    <>
      <MDBModal staticBackdrop tabIndex="-1" show={benchDeleteModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={() => {
                  setBenchDeleteModal(false);
                }}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <p>Are you sure you want to undo this?</p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                color="secondary"
                onClick={() => {
                  setBenchDeleteModal(false);
                }}
              >
                Close
              </MDBBtn>
              <MDBBtn
                onClick={() => {
                  setHasReserved(false);
                  setBenchDeleteModal(false);
                }}
              >
                delete
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};
export default BenchDeleteConfirmationModal;
