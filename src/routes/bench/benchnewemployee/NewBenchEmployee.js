import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  MDBBtn,
  MDBValidation,
  MDBValidationItem,
  MDBInput,
  MDBTextArea,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBCardFooter,
} from "mdb-react-ui-kit";
import "./newbenchEmployee.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createBench,
  getBenchId,
  updateBench,
} from "../../../redux/features/bench/bench.feature";
import BenchServices from "../../../redux/features/bench/benchServices";
import Axios from "axios";
import { toast } from "react-toastify";
let NewBenchEmployee = () => {
  let BASE_URL = `http://brm-tool.ap-south-1.elasticbeanstalk.com/resources`;
  let { id } = useParams();
  // console.log(id)
  let { benchListItem } = useSelector((store) => {
    return store["bench"];
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let [newBench, setNewBench] = useState({
    // id:null,
    name: "",
    email: "",
    emp_id: "",
    password: "",
    totalWorkExp: "",
    totalExpinFission: null ? totalExpinFission.toString() : "",
    primarySkills: [],
    reportingManager: "",
    projectName: "",
    teamLead: "",
    status: "",
    notes: "",
  });

  let handleUpdateInput = (event) => {
    // console.log(event.target)
    //  console.log(newBench)
    //  console.log({[event.target.name]:event.target.value})
    //  newBench[event.target.name]=event.target.value

    setNewBench({
      ...newBench,
      [event.target.name]: event.target.value,
      // newBench[event.target.name]=event.target.value
    });
  };

  let handleUpdatePrimarySkillsInput = (event) => {
    setNewBench({
      ...newBench,
      primarySkills: [event.target.value],
    });
  };
  const getBenchIdItem = ({ id }) => {
    BenchServices.get(id).then((res) => {
      // console.log(res.data)
      setNewBench({ ...res.data.data });
      // if(res.data.data.primarySkills){
      // setNewBench({...res.data.data,primarySkills:{...res.data.data.primarySkills[0]}})
      // }
    });
  };

  //let {name,email,emp_id,password,totalWorkExp,totalExpinFission,primarySkills,reportingManager,teamLead,status,notes,projectName} = newBench;
  useEffect(() => {
    if (id) {
      //dispatch(getBenchId({id}))
      getBenchIdItem({ id });
      //console.log(benchListItem.data)
      // if( benchListItem && benchListItem.primarySkills){
      //    setNewBench({...benchListItem,primarySkills:{...benchListItem.primarySkills[0]}})
      //  }
    }
  }, [id]);

  let handleSubmitForm = (event) => {
    event.preventDefault();
    if (
      !newBench.name ||
      !newBench.email ||
      !newBench.emp_id ||
      !newBench.status ||
      !newBench.projectName
    ) {
      alert("please fill form");
    } else {
      if (!id) {
        // console.log(newBench);
        dispatch(createBench(newBench));
        toast.success("created successfully");
        navigate("/benchlist");
      } else {
        //console.log(newBench)
        console.log(newBench);
        //newBench= {...newBench,primarySkills:[{...newBench.primarySkills}]}
        dispatch(updateBench(newBench));
        toast.success("updated successfully");
        navigate("/benchlist");
        //console.log( dispatch(updateBench(newBench)))
        //   Axios.patch(`${BASE_URL}/${id}`,newBench).then((res)=>{
        //     console.log(res)
        //      console.log(res)
        //  }).catch((error)=>{
        //     console.error(error)
        //   })

        //dispatch(updateBench({_id:newBench._id,newBench:newBench}))

        //navigate('/benchlist')
      }
    }
  };
  return (
    <React.Fragment>
      {/* <div className="container-lg"> */}
      <MDBContainer breakpoint="lg">
        <div className="d-flex flex-column text-center justify-content-center align-items-center vh-100">
          <MDBCard className="mt-5 mb-5">
            <MDBCardHeader>
              <MDBCardTitle className="text-center">
                <h2>{id ? "Update" : "New"} Bench Employee</h2>
              </MDBCardTitle>
            </MDBCardHeader>
            <MDBCardBody>
              {/* <pre>{JSON.stringify(newBench)}</pre> */}
              <MDBValidation
                className="row g-5 novalidate"
                noValidate
                onSubmit={handleSubmitForm}
              >
                <MDBValidationItem
                  className="col-md-4"
                  feedback="Please Enter your name"
                >
                  <MDBInput
                    id="validationCustom01"
                    type="text"
                    name="name"
                    value={newBench.name}
                    onChange={handleUpdateInput}
                    required
                    label="Name"
                  />
                </MDBValidationItem>
                <MDBValidationItem
                  className="col-md-4"
                  feedback="Please Enter your EmpId"
                  invalid
                >
                  <MDBInput
                    id="validationCustom02"
                    type="text"
                    required
                    name="emp_id"
                    value={newBench.emp_id}
                    onChange={handleUpdateInput}
                    label="EmpId"
                  />
                </MDBValidationItem>
                <MDBValidationItem
                  className="col-md-4"
                  feedback="Please Enter your Email"
                  invalid
                >
                  <MDBInput
                    id="validationCustom03"
                    type="email"
                    required
                    name="email"
                    value={newBench.email}
                    onChange={handleUpdateInput}
                    label="Email"
                  />
                </MDBValidationItem>
                <MDBValidationItem
                  className="col-md-4"
                  feedback="Please Enter your Email"
                  invalid
                >
                  <MDBInput
                    id="validationCustom04"
                    type="password"
                    required
                    name="password"
                    value={newBench.password}
                    onChange={handleUpdateInput}
                    label="Password"
                  />
                </MDBValidationItem>
                <MDBValidationItem
                  className="col-md-4"
                  feedback="Please Enter your TotalWorkExp"
                  invalid
                >
                  <MDBInput
                    id="validationCustom05"
                    type="number"
                    required
                    name="totalWorkExp"
                    value={newBench.totalWorkExp}
                    onChange={handleUpdateInput}
                    label="TotalWorkExp"
                  />
                </MDBValidationItem>
                <MDBValidationItem
                  className="col-md-4"
                  feedback="Please Enter your TotalExpFission"
                  invalid
                >
                  <MDBInput
                    id="validationCustom06"
                    type="number"
                    required
                    name="totalExpinFission"
                    value={newBench.totalExpinFission}
                    onChange={handleUpdateInput}
                    label="TotalExpFission"
                  />
                </MDBValidationItem>
                <MDBValidationItem
                  className="col-md-4"
                  feedback="Please Enter your PrimarySkill"
                  invalid
                >
                  <MDBInput
                    id="validationCustom07"
                    type="text"
                    required
                    name="primarySkills"
                    value={newBench.primarySkills}
                    onChange={handleUpdatePrimarySkillsInput}
                    label="skillName"
                  />
                </MDBValidationItem>
                {/* <MDBValidationItem className="col-md-4" feedback='Please Enter your TotalExp' invalid>
              <MDBInput id='validationCustom08' type="number" required name="totalExp" value={newBench.primarySkills.totalExp} onChange={handleUpdatePrimarySkillsInput} label="TotalExp"/>
           </MDBValidationItem> */}

                <MDBValidationItem
                  className="col-md-4"
                  feedback="Please Enter your Reporting Manager"
                  invalid
                >
                  <MDBInput
                    id="validationCustom09"
                    type="text"
                    required
                    name="reportingManager"
                    value={newBench.reportingManager}
                    onChange={handleUpdateInput}
                    label="Reporting Manager"
                  />
                </MDBValidationItem>
                <MDBValidationItem
                  className="col-md-4"
                  feedback="Please Enter your Team Lead"
                  invalid
                >
                  <MDBInput
                    id="validationCustom10"
                    type="text"
                    required
                    name="teamLead"
                    value={newBench.teamLead}
                    onChange={handleUpdateInput}
                    label="TeamLead"
                  />
                </MDBValidationItem>
                <MDBValidationItem
                  className="col-md-4"
                  feedback="Please Enter your Status"
                  invalid
                >
                  <MDBInput
                    id="validationCustom11"
                    type="text"
                    required
                    name="projectName"
                    value={newBench.projectName}
                    onChange={handleUpdateInput}
                    label="projectName"
                  />
                </MDBValidationItem>
                <MDBValidationItem
                  className="col-md-4"
                  feedback="Please Enter your Status"
                  invalid
                >
                  <MDBInput
                    id="validationCustom12"
                    type="text"
                    required
                    name="status"
                    value={newBench.status}
                    onChange={handleUpdateInput}
                    label="Status(Bench,BenchReserved,InProject)"
                  />
                </MDBValidationItem>
                <MDBValidationItem
                  className="col-md-13"
                  feedback="Please Enter your notes"
                  invalid
                >
                  <MDBTextArea
                    id="validationTextarea"
                    required
                    name="notes"
                    value={newBench.notes}
                    onChange={handleUpdateInput}
                    label="Notes"
                  />
                </MDBValidationItem>
                <div className="col-12 text-center">
                  <MDBBtn className="m-2" type="submit">
                    {id ? "Update" : "Add"}
                  </MDBBtn>
                  <MDBBtn
                    className="m-2 btn btn-danger"
                    type="reset"
                    onClick={() => navigate("/benchlist")}
                  >
                    Cancel
                  </MDBBtn>
                </div>
              </MDBValidation>
            </MDBCardBody>
          </MDBCard>
        </div>
      </MDBContainer>
      {/* <form className="mt-5">
          <div className="row mb-2 mt-2">
            <div className="col-4">
              <div className="group">
                <input type="text" id="form3Example1" required name="Name" />
                <label htmlFor="form3Example1">Name</label>
              </div>
            </div>
            <div className="col-4">
              <div className="group">
                <input
                  type="text"
                  id="form3Example2"
                  name="PrimarySkills"
                  required
                />
                <label htmlFor="form3Example2">Empp Id</label>
              </div>
            </div>
            <div className="col-4">
              <div className="group">
                <input
                  type="text"
                  id="form3Example3"
                  name="PrimarySkills"
                  required
                />
                <label htmlFor="form3Example3">Email</label>
              </div>
            </div>
          </div>

          <div className="row mb-2 mt-2">
            <div className="col-4">
              <div className="group">
                <input
                  type="text"
                  id="form3Example4"
                  name="TotalWorkExp"
                  required
                />
                <label htmlFor="form3Example4">TotalWorkExp</label>
              </div>
            </div>
            <div className="col-4">
              <div className="group">
                <input
                  type="text"
                  id="form3Example5"
                  name="TotalExpinFission"
                  required
                />
                <label htmlFor="form3Example5">TotalExpinFission</label>
              </div>
            </div>
            <div className="col-4">
              <div className="group">
                <input
                  type="text"
                  id="form3Example6"
                  name="SkillName"
                  required
                />
                <label htmlFor="form3Example6">SkillName</label>
              </div>
            </div>
          </div>

          <div className="row mb-2 mt-2">
            <div className="col-4">
              <div className="group">
                <input
                  type="text"
                  id="form3Example7"
                  name="totalExp"
                  required
                />
                <label htmlFor="form3Example7">TotalExp</label>
              </div>
            </div>
            <div className="col-4">
              <div className="group">
                <input
                  type="text"
                  id="form3Example8"
                  name="ReportingManager"
                  required
                />
                <label htmlFor="form3Example8">ReportingManager</label>
              </div>
            </div>
            <div className="col-4">
              <div className="group">
                <input
                  type="text"
                  id="form3Example9"
                  name="teamLead"
                  required
                />
                <label htmlFor="form3Example9">TeamLead</label>
              </div>
            </div>
          </div>
          <div className="row mb-2 mt-2">
            <div className="col-12">
              <div className="group">
                <input
                  type="text"
                  id="form3Example10"
                  name="notes"
                  required
                  className="w-100"
                />
                <label htmlFor="form3Example10">Notes</label>
              </div>
            </div>
          </div>
          <div className="text-center">
            <MDBBtn className="m-2">Add</MDBBtn>
            <MDBBtn className="btn btn-danger m-2" onClick={() => navigate("/benchlist")}>Cancel</MDBBtn>
            <button type="submit" className="btn btn-primary  mb-4 newBenchEmployeeAddButton">
              Add
            </button>
            <button
              onClick={() => navigate("/benchlist")}
              className="btn btn-primary  mb-4 "
            >
              Cancel
            </button>
          </div>
        </form> */}
      {/* </div> */}
    </React.Fragment>
  );
};
export default NewBenchEmployee;
