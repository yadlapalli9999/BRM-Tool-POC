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
import { updateSingleResourceBench } from "../../../../redux/features/bench/bench.feature";

const BenchDeleteConfirmationModal = ({
  benchDeleteModal,
  setBenchDeleteModal,
  setHasReserved,
  singleResource,
}) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    console.log(singleResource);
    const BenchReservedstatus = "Bench";
    const newObject = {
      name: singleResource[0].name,
      totalWorkExp: singleResource[0].totalWorkExp,
      totalExpinFission: singleResource[0].totalExpinFission,
      primarySkills: singleResource[0].primarySkills,
      status: BenchReservedstatus,
      _id: singleResource[0]._id,
    };
    console.log(newObject);
    dispatch(updateSingleResourceBench(newObject));
    setHasReserved(false);
    setBenchDeleteModal(false);
  };
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
              <MDBBtn onClick={deleteHandler}>delete</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};
export default BenchDeleteConfirmationModal;
