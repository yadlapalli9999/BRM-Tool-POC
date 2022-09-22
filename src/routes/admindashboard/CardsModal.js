// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect } from "react";

import "./AdminDashboard.css";
import { useSelector, useDispatch } from "react-redux";

import {
  getIdeaPoc,
  getHoldPoc,
  getClosedPoc,
} from "../../redux/features/dashboard/dashboard.feature";

export default function CardsModal(props) {
  const dispatch = useDispatch();
  const {
    ideaPoc,
    holdPoc,
    closedPoc,
    benchPoc,
  } = useSelector((store) => {
    return store["dashboard"];
  });
  // const { activePoc, loading } = activePocData;

  useEffect(() => {
    dispatch(getIdeaPoc());
    dispatch(getHoldPoc());
    dispatch(getClosedPoc());
 
  }, []);

  return (
    // <div className="modal">
    <Modal
      {...props}
      className="cardModal "
      animation={true}
      size="lg"
      scrollable={true}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="">
          {props.cardStatus === "Idea" && ideaPoc ? (
            <p className="h3-subHead  text-center ModaHeadTitle mt-1 ">IDEA</p>
          ) : null}
          {props.cardStatus === "Hold" && holdPoc ? (
            <p className="h3-subHead  text-center ModaHeadTitle  mt-1">HOLD</p>
          ) : null}
          {props.cardStatus === "Closed" && closedPoc ? (
            <p className="h3-subHead  text-center ModaHeadTitle  mt-1">CLOSED</p>
          ) : null}

        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <table className="table table-fixed bg-white caption-top table-hover">
        <thead className="adminDashboardTableHead sticky-top">
              <tr className="table-headings ">
                <th>Sl.No </th>
                <th>Name</th>
                <th>Description</th>
                <th>Duration</th>
              </tr>
              </thead>
              
          {props.cardStatus === "Idea" && ideaPoc.length === 0 &&  (
            <>
              <tbody>
                <tr>
                  <p className="text-center display-6"> No Data </p>
                </tr>
              </tbody>
            </>
          )}

          {
          props.cardStatus === "Idea" &&
            ideaPoc?.map((user, index) => {
 
              return (
                <tbody className="align-items-center ">
                  <tr>
                    <td>
                      <div>
                        <p className="fw-bold mb-1">{index + 1 || null}</p>
                      </div>
                    </td>

                    <td>
                      <p className="fw-normal mb-1">{user?.name || null}</p>
                    </td>

                    <td>
                      <p className="fw-normal mb-1">
                        {user?.description || null}
                      </p>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">{user?.duration || null}</p>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          {/* hold */}
          {props.cardStatus === "Hold" && holdPoc.length === 0 &&  (
            <>
              <tbody>
                <tr>
                <p className="text-center display-6"> No Data </p>

                </tr>
              </tbody>
            </>
          ) }

          {props.cardStatus === "Hold" &&
            holdPoc?.map((user, index) => {
              
              return (
                 

                <tbody className="align-items-center ">
                  <tr>
                    <td>
                      <div>
                        <p className="fw-bold mb-1">{index + 1 || null}</p>
                      </div>
                    </td>


                    <td>
                      <p className="fw-normal mb-1">{user?.name || null}</p>
                    </td>

                    <td>
                      <p className="fw-normal mb-1">
                        {user?.description || null}
                      </p>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">{user?.duration || null}</p>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          {/* closed Poc  */}
          {props.cardStatus === "Closed" && closedPoc.length === 0 &&  (
            <>
              <tbody>
                <tr>
                <p className="text-center display-6"> No Data </p>
                </tr>
              </tbody>
            </>
          )}
          {props.cardStatus === "Closed" &&
            closedPoc?.map((user, index) => {
              return (
                <tbody className="align-items-center ">
                  <tr>
                    <td>
                      <div>
                        <p className="fw-bold mb-1">{index + 1 || null}</p>
                      </div>
                    </td>

                    <td>
                      <p className="fw-normal mb-1">{user?.name || null}</p>
                    </td>

                    <td>
                      <p className="fw-normal mb-1">
                        {user?.description || null}
                      </p>
                    </td>
                    <td>
                      <p className="fw-normal mb-1">{user?.duration || null}</p>
                    </td>
                  </tr>
                </tbody>
              );
            })}

        </table>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
    // </div>
  );
}
