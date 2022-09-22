import "../ProjectStatus/ProjectStatus.css";
import React, { useState, useEffect } from "react";

function ProjectStatus() {
  // Way-1
  // const [status, setStatus] = useState(0);

  // const handleClick = () => {
  //   const newStatus = (status + 1) % STATUS_STATES.length;
  //   setStatus(newStatus);
  // };
  // way-2

  // const STATUS_STATES = ["Pending","Initiated", "Hold", "Completed"];
  // const STATUS_COLORS = ["black", "orange", "red", "green"];

  // const Update = ({ color, onClick }) => (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     fill="none"
  //     viewBox="0 0 24 24"
  //     stroke-width="1.5"
  //     stroke="currentColor"
  //     onClick={onClick}
  //     style={{ borderRadius: 5, height: 33, width: 50, stroke: color }}
  //     className="status"
  //   >
  //     <path
  //       stroke-linecap="round"
  //       stroke-linejoin="round"
  //       d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
  //     />
  //   </svg>
  // );

  //   const text = STATUS_STATES[status];

  const [isActive, setIsActive] = useState(false);
  const [isOne, setIsOne] = useState(false);

  const [isTwo, setIsTwo] = useState(false);

  const startedHandleClick = () => {
    //  toggle
    setIsActive(true);
    setIsOne(false);
    setIsTwo(false);
  };
  const holdHandleClick = () => {
    //  toggle
    setIsActive(false);
    setIsOne(true);
    setIsTwo(false);
  };
  const completedHandleClick = () => {
    //  toggle
    setIsActive(false);
    setIsOne(false);
    setIsTwo(true);
  };

  return (
    
      <div className="card projectStatus w-100">
        <div className="card-header d-flex justify-content-center ">
          
          Project Status <span className="mx-5">: </span> 
          <h6 className=" color bg-white mx-2 ">
            {!isActive && !isOne && !isTwo ? "Pending" : ""}
            {isActive ? "Initiated" : ""} {isOne ? "Hold" : ""}
            {isTwo ? "Completed" : ""}
          </h6>
    
        </div>
        <div className="card-body d-flex justify-content-around">
          <button
            style={{
              display: isActive ? "none" : "initial",
            }}
            onClick={startedHandleClick}
            className="btn control initiated"
          >
            INITIATED
          </button>
          <button
            style={{
              display: isOne ? "none" : "initial",
            }}
            onClick={holdHandleClick}
            className="btn control hold"
          >
            HOLD
          </button>
          <button
            style={{
              display: isTwo ? "none" : "initial",
            }}
            onClick={completedHandleClick}
            className="btn control completed"
          >
            COMPLETED
          </button>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
    
  );
}

export default ProjectStatus;
