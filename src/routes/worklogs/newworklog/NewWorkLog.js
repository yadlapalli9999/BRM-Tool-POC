import React, { useEffect, useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';

import {MDBContainer,MDBCard,MDBCardHeader,MDBCardTitle,MDBValidation,MDBValidationItem,MDBInput,MDBBtn,MDBCardBody, MDBTextArea} from 'mdb-react-ui-kit'
import { useDispatch, useSelector } from "react-redux";
import { createNewWorklog } from "../../../redux/features/worklogs/worklog.feature";
import { getAllPoc,mainSearchPOC } from "../../../redux/features/poc/poc.feature";
// import { min } from "moment";
const NewWorkLog = (props)=>{
  let {pocList} = useSelector((state)=>{return state['poc']})
  console.log(pocList)


    let navigate = useNavigate();
    let dispatch = useDispatch();
    let [newWorklog,setNewWorklog] = useState({
       taskDetails:'',
       taskDescription:'',
       duration:null?.toString() || "",
       logDate:'',
       pocId:''
    })
   // let [pocId,setPocId] = useState('')
    let resourceID = sessionStorage.getItem('resourceID')
    useEffect(()=>{
      dispatch(getAllPoc())
    },[])
    //const searchInput = useRef();

    let options = pocList.map(item =>(
      {value:`${item._id}`,label:`${item.name}`})
    )
    console.log(options)
    
    const handleChange = (e) => {
      //searchInput.current.querySelector("input").value = "";
      //console.log(JSON.stringify(e.target.value));
      console.log(e.value)
      newWorklog.pocId = e.target
      setNewWorklog({
        ...newWorklog,
        // pocId:e.target,
        pocId:e.value
      })
    };

  
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
      //  let newData = {newWorklog,pocId }
        console.log(newWorklog)
        // console.log(pocId.value);
       dispatch(createNewWorklog(newWorklog))
      navigate(`/worklog/resource/${resourceID}/all`)
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
                  <Select
                  value={newWorklog.pocId.label}
       onChange={handleChange}
       options={options}
       isSearchable="true"
     />
                  {/* <MDBInput
                    id="validationCustom05"
                    type="text"
                    required
                    name="pocId"
                    value={newWorklog.pocId}
                    onChange={handleWorkLogChange}
                    label="PocId"
                  /> */}
                  
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
                    onClick={() => navigate(`/worklog/resource/${resourceID}/all`)}
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