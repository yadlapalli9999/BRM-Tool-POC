import React, { useState } from "react";

let WorkLogList = () =>{
    let [worklog,setWorklog] = useState({
        taskDetails:'',
        taskDescription:'',
        duration:''
    })

    let UpdateInput =(event) =>{
       setWorklog({
           ...worklog,
           [event.target.name]:event.target.value
       })
    }
    let {taskDescription,taskDetails,duration} = worklog;
    let handleWorkLogSubmit = () =>{

    }
   return(
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Work Logs</h2>
                </div>
            </div>
            <div className="row">
            <div className="col">
                <div
              className="modal fade"
              id="modalContactForm"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered modal-xl"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header text-center">
                    <h4 className="modal-title w-100 font-weight-bold">
                      Add Worklog
                    </h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body was-validated mx-3">
                  <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="taskDetails"
                            name="taskDetails"
                            value={taskDetails}
                            onChange={UpdateInput}
                            className="form-control"
                            placeholder="TaskId"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="taskDescription"
                            name="taskDescription"
                            value={taskDescription}
                            onChange={UpdateInput}
                            className="form-control"
                            placeholder="taskDetails"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                        <input
                            type="text"
                            id="duration"
                            name="duration"
                            value={duration}
                            onChange={UpdateInput}
                            className="form-control"
                            placeholder="duration"
                          />
                        </div>
                      </div>

                      </div>
                    </div>
                    <div class="modal-footer justify-content-center">
                    <button
                      type="button"
                      class="btn btn-primary btn-sm"
                      onClick={handleWorkLogSubmit}
                    >
                      Add WorkLog
                    </button>
                  </div>
                  </div>

                 
                </div>
              </div>
            

            <div class="text-center">
              <a
                href="#"
                class="btn btn-default btn-rounded mb-4"
                data-toggle="modal"
                data-target="#modalContactForm"
              >
                Add WorkLog
              </a>
            </div>
            </div>
                </div>
            </div>
        
    </React.Fragment>
   )
}

export default WorkLogList;