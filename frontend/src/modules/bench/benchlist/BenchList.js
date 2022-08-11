import React, { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import Axios from "axios";
//import "./BenchList.css";
import { Link, useNavigate } from "react-router-dom";

let BenchList = () => {
  const data = [
    {
      id: "FL1303",
      name: "Abhishek Rane",
      email: "Abhishek.rane@fissionlabs.com",
      totalWorkExp: 4,
      totalExpFission: 1,
      primarySkills: {
        skillName: "nodejs",
        totalExp: 1,
      },
      reportingManager: "Shwetha Rajpurohit",
      teamLead: "Adil",
    },
    {
      id: "FL1304",
      name: "Abhishek Rane",
      email: "Abhishek.rane@fissionlabs.com",
      totalWorkExp: 4,
      totalExpFission: 1,
      primarySkills: {
        skillName: "nodejs",
        totalExp: 1,
      },
      reportingManager: "Shwetha Rajpurohit",
      teamLead: "Adil",
    },
    {
      id: "FL1305",
      name: "Abhishek Rane",
      email: "Abhishek.rane@fissionlabs.com",
      teamLead: "Adil",
      primarySkills: {
        skillName: "nodejs",
        totalExp: 1,
      },
      reportingManager: "Shwetha Rajpurohit",
      totalWorkExp: 4,
      totalExpinFission: "9",
      totalExp: 1,
      notes: "Hello",
    },
    {
      id: "FL1306",
      name: "Abhishek Rane",
      email: "Abhishek.rane@fissionlabs.com",
      totalWorkExp: 4,
      totalExpFission: 1,
      primarySkills: {
        skillName: "nodejs",
        totalExp: 1,
      },
      reportingManager: "Shwetha Rajpurohit",
      teamLead: "Adil",
    },
    {
      id: "FL1307",
      name: "Abhishek Rane",
      email: "Abhishek.rane@fissionlabs.com",
      teamLead: "Adil",
      skillName: "nodejs",
      reportingManager: "Shwetha Rajpurohit",
      totalWorkExp: 4,
      totalExpinFission: "3",
      totalExp: 1,
    },
    {
      id: "FL1308",
      name: "Abhishek Rane",
      email: "Abhishek.rane@fissionlabs.com",
      totalWorkExp: 4,
      totalExpFission: 1,
      primarySkills: {
        skillName: "nodejs",
        totalExp: 1,
      },
      reportingManager: "Shwetha Rajpurohit",
      teamLead: "Adil",
    },
    {
      id: "FL1309",
      name: "Abhishek Rane",
      email: "Abhishek.rane@fissionlabs.com",
      totalWorkExp: 4,
      totalExpFission: 1,
      primarySkills: {
        skillName: "nodejs",
        totalExp: 1,
      },
      reportingManager: "Shwetha Rajpurohit",
      teamLead: "Adil",
    },
  ];

  let [benchList, setBenchList] = useState([]);
  let [isEdit, setIsEdit] = useState(false);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // let fetchData = () => {
  //   Axios.get("http://localhost:5000/EmployeeList")
  //     .then((response) => {
  //       $(document).ready(function () {
  //         $("#dtBasicExample").DataTable();
  //         $(".dataTables_length").addClass("bs-select");
  //       });
  //       setBenchList(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // let handleDelete = (id) => {
  //   Axios.delete(`http://localhost:5000/EmployeeList/${id}`)
  //     .then((res) => {
  //       console.log(res);
  //       fetchData();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  let navigate = useNavigate();

  let [bench, setBench] = useState({
    name: "",
    id: "",
    email: "",
    totalWorkExp: "",
    totalExpinFission: "",
    primarySkills: {
      skillName: "",
      totalExp: "",
    },
    reportingManager: "",
    teamLead: "",
    notes: "",
  });
  // let [primarySkills, setPrimarySkills] = useState({
  //   skillName:'',
  //   totalExp:''
  // })

  let updateInput = (event) => {
    setBench({
      ...bench,
      [event.target.name]: event.target.value,
    });
  };
  // let updateInputPrimary = (event) =>{
  //   setPrimarySkills({
  //     ...primarySkills,
  //     [event.target.name]:event.target.value
  //   })
  // }
  // let updatePrimarySkillInput = (event) => {
  //   setBench({
  //     primarySkills: {
  //       ...primarySkills,
  //       [event.target.name]: event.target.value,
  //     },
  //   });
  // };
  let updatePrimarySkills = (event) => {
    setBench({
      ...bench,
      primarySkills: {
        ...primarySkills,
        [event.target.name]: event.target.value,
      },
    });
  };
  let {
    name,
    id,
    email,
    totalExpinFission,
    totalWorkExp,
    teamLead,
    primarySkills,
    reportingManager,
    notes,
  } = bench;
  // let handleBenchEmployeeSubmit = (event) => {
  //   event.preventDefault();
  //   if (
  //     !name &&
  //     !id &&
  //     !email &&
  //     !totalWorkExp &&
  //     !totalExpinFission &&
  //     !teamLead &&
  //     !notes &&
  //     !primarySkills.skillName &&
  //     !primarySkills.totalExp &&
  //     !reportingManager
  //   ) {
  //     alert("please fill the fileds");
  //   } else {
  //     if (!isEdit) {
  //       Axios.post(`http://localhost:5000/EmployeeList/`, bench)
  //         .then((res) => {
  //           setBench(res.data);
  //           console.log(res.data);
  //           fetchData();
  //           clearForm();
  //           $(".fade").css("display", "none");

  //           navigate("/bench");
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //         });
  //     } else {
  //       Axios.put(`http://localhost:5000/EmployeeList/${bench.id}`, bench)
  //         .then((res) => {
  //           console.log(res.data);
  //           setBench(res.data);
  //           fetchData();
  //           clearForm();
  //           $(".fade").css("display", "none");
  //           navigate("/bench");
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     }
  //   }
  // };

  let handleUpdateBechEmployee = (item) => {
    setIsEdit(true);
    console.log(item);
    Axios.get(`http://localhost:5000/EmployeeList/${item.id}`)
      .then((res) => {
        setBench({
          id: item.id,
          name: item.name,
          email: item.email,
          teamLead: item.teamLead,
          reportingManager: item.reportingManager,
          notes: item.notes,
          totalWorkExp: item.totalWorkExp,
          totalExpinFission: item.totalExpinFission,
          primarySkills: {
            skillName: item.primarySkills.skillName,
            totalExp: item.primarySkills.totalExp,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let clearForm = () => {
    setBench({
      id: "",
      name: "",
      email: "",
      primarySkills: { skillName: "", totalExp: "" },
      teamLead: "",
      reportingManager: "",
      totalExpinFission: "",
      totalWorkExp: "",
      notes: "",
    });
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 style={{ marginTop: "30px" }}>Bench List</h2>
          </div>
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
                      New Bench Employee
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
                  <div className="modal-body  mx-3">
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={updateInput}
                            className="form-control is-valid"
                            placeholder="Name"
                            required
                            style={{ border: "2px solid lightgrey" }}
                          />
                          <div className="invalid-feedback">
                            Please enter Name
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="id"
                            name="id"
                            value={id}
                            onChange={updateInput}
                            className="form-control is-valid"
                            placeholder="EmpId"
                            required
                            style={{ border: "2px solid lightgrey" }}
                          />
                          <div className="invalid-feedback">
                            Please enter EmpId
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={updateInput}
                            className="form-control is-valid"
                            placeholder="Email"
                            required
                            style={{ border: "2px solid lightgrey" }}
                          />
                          <div className="invalid-feedback">
                            Please enter Email
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="TotalWorkExp"
                            name="totalWorkExp"
                            value={totalWorkExp}
                            onChange={updateInput}
                            className="form-control is-valid"
                            placeholder="TotalWorkExp"
                            required
                            style={{ border: "2px solid lightgrey" }}
                          />
                          <div className="invalid-feedback">
                            Please enter Total Work Experience
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="totalExpinFission"
                            name="totalExpinFission"
                            value={totalExpinFission}
                            onChange={updateInput}
                            className="form-control is-valid"
                            placeholder="TotalExpinFission"
                            required
                            style={{ border: "2px solid lightgrey" }}
                          />
                          <div className="invalid-feedback">
                            Please enter Total Experience Fission
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="SkillName"
                            name="skillName"
                            value={primarySkills.skillName}
                            onChange={updatePrimarySkills}
                            className="form-control is-valid"
                            placeholder="SkillName"
                            required
                            style={{ border: "2px solid lightgrey" }}
                          />
                          <div className="invalid-feedback">
                            Please enter Primary skill Name
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="TotalExp"
                            name="totalExp"
                            value={primarySkills.totalExp}
                            onChange={updatePrimarySkills}
                            className="form-control is-valid"
                            placeholder="TotalExp"
                            required
                            style={{ border: "2px solid lightgrey" }}
                          />
                          <div className="invalid-feedback">
                            Please enter Primary Skills Total Expiernce
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="ReportingManager"
                            name="reportingManager"
                            value={reportingManager}
                            onChange={updateInput}
                            className="form-control is-valid"
                            placeholder="ReportingManager"
                            required
                            style={{ border: "2px solid lightgrey" }}
                          />
                          <div className="invalid-feedback">
                            Please enter Reporting Manager
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="teamLead"
                            name="teamLead"
                            value={teamLead}
                            onChange={updateInput}
                            className="form-control is-valid"
                            placeholder="teamLead"
                            required
                            style={{ border: "2px solid lightgrey" }}
                          />
                          <div className="invalid-feedback">
                            Please enter Team Lead
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="notes"
                            name="notes"
                            value={notes}
                            onChange={updateInput}
                            className="form-control is-valid"
                            placeholder="notes"
                            required
                            style={{ border: "2px solid lightgrey" }}
                          />
                          <div className="invalid-feedback">
                            Please enter Notes
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="modal-footer justify-content-center">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      // onClick={handleBenchEmployeeSubmit}
                    >
                      Add Bench Employee
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="text-center"
              style={{ marginTop: "30px", marginLeft: "450px" }}
            >
              <a
                href="#"
                className="btn btn-default btn-rounded mb-4"
                data-toggle="modal"
                data-target="#modalContactForm"
              >
                New Bench Employee
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <input
              type="search"
              name=""
              id=""
              style={{ width: "660px" }}
              placeholder="Search..."
            />
          </div>
          <div className="col-md-6">
            <button
              className=" btn btn-secondary btn-rounded"
              style={{ float: "right" }}
            >
              <select
                className="bg-secondary text-white"
                style={{ border: "0px" }}
              >
                <option>Current Year</option>
                <option>Last Year</option>
                <option>Current Year</option>
                <option>Last Year</option>
              </select>
            </button>
          </div>
        </div>
        <div className="row" style={{ marginTop: "30px" }}>
          <div className="col">
            <table
              id="dtBasicExample"
              className="table table-striped table-sm cell-border"
              cellSpacing="0"
              width="100%"
            >
              <thead>
                <tr>
                  <th className="th-sm">EmpId</th>
                  <th className="th-sm">Name</th>
                  <th className="th-sm">Email</th>
                  <th className="th-sm">TotalWorkExp</th>
                  <th className="th-sm">TotalExpFission</th>
                  {/* <th className="th-sm">Skills</th> */}
                  <th className="th-sm">ReportingManager</th>
                  <th className="th-sm">TeamLead</th>
                  <th className="th-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 &&
                  data.map((item) => {
                    // console.log(JSON.parse(item.primarySkills.map((skillName,totalExp)=>{ return {skillName:a.skillName}})))
                    return (
                      <tr key={item.id}>
                        <td>
                          {/* <Link to={`/worklog/${item.id}`}>{item.id}</Link> */}
                          <Link to={`/benchworklogs`}>{item.id}</Link>
                        </td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.totalWorkExp}</td>
                        <td>{item.totalExpinFission}</td>
                        {/* <td>{item}</td> */}
                        <td>{item.reportingManager}</td>
                        <td>{item.teamLead}</td>
                        <td>
                          <div
                            data-toggle="modal"
                            data-target="#modalContactForm"
                          >
                            <i
                              className="fas fa-edit"
                              onClick={() => handleUpdateBechEmployee(item)}
                            />
                          </div>
                          &nbsp;&nbsp;
                          <i
                            className="fa fa-trash"
                            onClick={() => {
                              // handleDelete(item.id);
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BenchList;
