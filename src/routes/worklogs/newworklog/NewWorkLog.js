import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {MDBContainer,MDBCard,MDBCardHeader,MDBCardTitle,MDBValidation,MDBValidationItem,MDBInput,MDBBtn,MDBCardBody, MDBTextArea} from 'mdb-react-ui-kit'
// import { min } from "moment";
const NewWorkLog = (props)=>{
    let pocMemmber = ["JMJ", "Frequncy","BRM","KKK"]
    let [query,setQuery] = useState('')

    let navigate = useNavigate()
    let [newWorklog,setNewWorklog] = useState({
       taskDetails:'',
       taskDescription:'',
       duration:'',
       logDate:'',
       pocId:''

    })
    let chnageHandle = (e)=>{
        setQuery(e.target.value)
        const mm =pocMemmber.find(item=>item == e.target.value)
        console.log(mm)
    }
    
    const textArea = document.querySelector("MDBTextArea");
    const textRowCount = textArea ? textArea.value.split("/n").length : 0;
    const rows = textRowCount + 1;
    let minHeight =  10
 minHeight = minHeight? minHeight +10 : minHeight

    
    const handleWorkLogChange = (event) =>{
        setNewWorklog({
            ...newWorklog,
            [event.target.name]:event.target.value
        })
    }
    const handleSubmitWorklog =(event)=>{
        event.preventDefault();
        console.log(newWorklog)
        console.log(newWorklog.taskDescription)
        props.lists.push(newWorklog)
        navigate('/workloglist')
    }
    return(
        <React.Fragment>
          <MDBContainer breakpoint="lg">
        <div className="d-flex flex-column text-center justify-content-center align-items-center vh-100">
          <MDBCard className="col-md-5 mt-5 mb-5">
            <MDBCardHeader>
              <MDBCardTitle className="text-center">
                <h2> New WorkLog</h2>
              </MDBCardTitle>
            </MDBCardHeader>
            <MDBCardBody>
              {/* <pre>{JSON.stringify(newBench)}</pre> */}
              <MDBValidation
                className="row g-5 novalidate"
                noValidate
                onSubmit={handleSubmitWorklog}
              >
                
                <MDBValidationItem
                  className="col-md-12"
                  feedback="Please Enter your Task Details"
                  invalid
                >
                  <MDBInput
                    id="validationCustom02"
                    type="text"
                    required
                    name="taskDetails"
                    value={newWorklog.taskDetails}
                    onChange={handleWorkLogChange}
                    label="TaskDetails"
                  />
                </MDBValidationItem>
                <MDBValidationItem
                  className="col-md-12"
                  feedback="Please Enter your Task Description"
                  invalid
                >
                  <MDBTextArea   
                    style={{ minHeight: "10vh", height: "unset" }}
                    id="validationTextarea"
                    required
                    rows={rows}
                    name="taskDescription"
                    value={newWorklog.taskDescription}
                    onChange={handleWorkLogChange}
                    label="TaskDescription"
                  />
                </MDBValidationItem>
                <MDBValidationItem
                  className="col-md-12"
                  feedback="Please Enter your Duration"
                  invalid
                >
                  <MDBInput
                    id="validationCustom04"
                    type="text"
                    required
                    name="duration"
                    value={newWorklog.duration}
                    onChange={handleWorkLogChange}
                    label="Duration"
                  />
                </MDBValidationItem>
                <MDBValidationItem
                  className="col-md-12"
                  feedback="Please Enter your PocId"
                  invalid
                >
                  <MDBInput
                    id="validationCustom05"
                    type="text"
                    required
                    name="pocId"
                    value={query}
                    onChange={chnageHandle}
                    label="PocId"
                  />
                </MDBValidationItem>
               

                <MDBValidationItem
                  className="col-md-12"
                  feedback="Please Enter your logDate"
                  invalid
                >
                  <MDBInput
                    id="validationCustom13"
                    type="date"
                    required
                    name="logDate"
                    data-date-format="DD MM YYYY"
                    value={newWorklog.logDate}
                    onChange={handleWorkLogChange}
                    label="Log Date"
                  />
                </MDBValidationItem>
                

               
                <div className="col-12 text-center">
                  <MDBBtn className="m-2" type="submit">
                    Add workLog
                  </MDBBtn>
                  <MDBBtn
                    className="m-2 btn btn-danger"
                    type="reset"
                    onClick={() => navigate("/workloglist")}
                  >
                    Cancel
                  </MDBBtn>
                </div>
              </MDBValidation>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBContainer>
        </React.Fragment>
    )
}

export default NewWorkLog;