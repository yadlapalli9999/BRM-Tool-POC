// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
//
// import { useState } from "react";
import { useEffect } from "react";

import "./AdminDashboard.css";
import { useSelector, useDispatch } from "react-redux";

import {
  getBenchPoc,
  getBenchReservedPoc,
  getBenchFiveMonthsPoc,
} from "../../redux/features/dashboard/dashboard.feature";

export default function BenchModal(props) {
  const dispatch = useDispatch();
  const { benchPoc, benchReservedPoc, benchFiveMonthsPoc } = useSelector(
    (store) => {
      return store["dashboard"];
    }
  );
  // const { activePoc, loading } = activePocData;

  useEffect(() => {
    dispatch(getBenchPoc());
    dispatch(getBenchReservedPoc());
    dispatch(getBenchFiveMonthsPoc());
  }, []);
  console.log("Bench  Poc data from Card", benchReservedPoc);
  // console.log("Bench Reserved Poc data from Card", benchReservedPoc);
  // console.log("active Poc data from store", closedPoc);


console.log({test: props.benchCardStatus})

  return (
    // <div className="modal">
    <Modal
      {...props}
      className="cardModal mt-0"
      animation={true}
      size="lg"
      scrollable={true}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="">
          {props.benchCardStatus === "Bench" && benchPoc ? (
            <p className="h3-subHead  text-center ModaHeadTitle  mt-1">BENCH</p>
          ) : null}
          {props.benchCardStatus === "BenchReserved" && benchReservedPoc ? (
            <p className="h3-subHead  text-center ModaHeadTitle  mt-1">
              BENCH RESERVED
            </p>
          ) : null}
          {props.benchCardStatus === "BenchFiveMonths" && benchFiveMonthsPoc ? (
            <p className="h3-subHead  text-center ModaHeadTitle  mt-1">
              {" "}
              PERSON ON BENCH FOR 5 MONTHS{" "}
            </p>
          ) : null}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* Bench , Bench Reserved , Bench 5months */}

        <table className="table table-fixed bg-white caption-top table-hover">
          <thead className="adminDashboardTableHead sticky-top">
            <tr className="table-headings ">
              <th>Sl.No </th>
              <th>Emp_Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody className="align-items-center ">

            {props.benchCardStatus === "Bench" && !benchPoc.length && (
              <>
                
                  <tr>
                    <p className="text-center display-6"> No Data </p>
                  </tr>

              </>
            ) }
            {props.benchCardStatus === "Bench" &&
              benchPoc?.map((user, index) => {
                return (
                  <tr key={user.id}>
                    <td>
                      <div>
                        <p className="fw-bold mb-1">{index + 1}</p>
                      </div>
                    </td>

                    <td className=" Emp_id">
                      <p className="fw-normal mb-1">{user?.emp_id}</p>
                    </td>

                    <td>
                      <p className="fw-normal mb-1">
                        {user?.name || "No Name Found"}
                      </p>
                    </td>

                    <td>
                      <p className="fw-normal mb-1">
                        {user?.email || "No Email Found"}
                      </p>
                    </td>
                  </tr>
                );
              })}

            {props.benchCardStatus === "BenchReserved" &&
              benchReservedPoc.length === 0 && (
                <>
                  
                    <tr>
                      <p className="text-center display-6"> No Data </p>
                    </tr>
            
                </>
              )}
            {props.benchCardStatus === "BenchReserved" &&
              benchReservedPoc?.map((user, index) => {
                return (
                  
                    <tr key={user.id}>
                      <td>
                   
                          <p className="fw-bold mb-1">{index + 1 }</p>
                 
                      </td>

                      <td>
                        <p className="fw-normal mb-1">{user._id }</p>
                      </td>

                      <td>
                        <p className="fw-normal mb-1">
                          {user.name || "Name is Not Available"}
                        </p>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">
                          {user.email || "Email is Not Available"}
                        </p>
                      </td>
                    </tr>
                  
                );
              })}

            {props.benchCardStatus === "BenchFiveMonths" &&
              benchFiveMonthsPoc.length === 0 && (
                <>
                  <tbody>
                    <tr>
                      <p className="text-center display-6"> No Data </p>
                    </tr>
                  </tbody>
                </>
              )}
            {props.benchCardStatus === "BenchFiveMonths" &&
              benchFiveMonthsPoc?.map((user, index) => {
                return (
                  
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
                        <p className="fw-normal mb-1">
                          {user?.duration || null}
                        </p>
                      </td>
                    </tr>
                  
                );
              })}
          </tbody>
        </table>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
    // </div>
  );
}
