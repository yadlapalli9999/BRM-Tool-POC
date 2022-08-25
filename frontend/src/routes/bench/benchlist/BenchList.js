import React, { useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import Axios from "axios";
import "./BenchList.css";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../../components/button/CustomButton";
import CustomTable from "../../../components/table/CustomTable";
//import ExcelImg from "../../../../excel.png";
// import Chat from "../../../../../../assets/chat.png";

let BenchList = () => {
  let [role,setRole] = useState(true);
  const [query, setQuery] = useState("");

  //  let updateRole = (event) =>{
  //     setRole(!role)
  //     //{role == true ? alert('falied'):alert("success")}
  //     {role == true ? alert('falied'):navigate(`/empDetails/${id}`)}

  //  }

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
      name: "Abhishek",
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
      name: "Ganesh",
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
  CustomTable.defaultProps={
    className:'table'
  }

  const [benchList, setBenchList] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

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
  const navigate = useNavigate();

  const [bench, setBench] = useState({
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

  const updateInput = (event) => {
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
  const updatePrimarySkills = (event) => {
    setBench({
      ...bench,
      primarySkills: {
        ...primarySkills,
        [event.target.name]: event.target.value,
      },
    });
  };
  const {
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
  // const handleBenchEmployeeSubmit = (event) => {
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

  const handleUpdateBechEmployee = (item) => {
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
  const clearForm = () => {
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
  const handleInputChange = (item) => {
    if (role === false) {
      localStorage.setItem("role", true);
      navigate(`/empDetails/${item.id}`);
      setRole(!role);
    } else if (localStorage.getItem("role") === true) {
      alert("failed");
    }
  };
  const [dataInfo, setDataInfo] = useState([]);
  console.log(dataInfo);
  
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 style={{ marginTop: "30px" }}>Bench List</h2>
          </div>
          <div className="col-md-6">
            

            <div
              className="text-center"
              style={{ marginTop: "30px",float:'right',marginRight:'10px'}}
            >
              <Link
                to="/newbenchEmployee"
                className="btn btn-secondary btn-rounded mb-4"
              >
                ADD
              </Link>
              <CustomButton/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <input
              type="text"
              
              style={{ width: "660px" }}
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <div class="dropdown d-flex justify-content-end mb-4">
              <select
                class="btn btn-rounded  btn-secondary dropdown-toggle"
                type="button"
                style={{ fontSize: "1rem" }}
              >
                <option>Select Year</option>
                <option>1-2</option>
                <option>2-3</option>
                <option>3-4</option>
                <option>4-5</option>
                <option>5-6</option>
                <option>6-7</option>
                <option>7-8</option>
                <option>8-9</option>
                <option>9-10</option>
                <option>10-11</option>
                <option>11-12</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <CustomTable />
            <table
              id="dtBasicExample"
              className="table table-striped table-sm cell-border"
              cellSpacing="0"
              width="100%"
              style={{
                fontSize: "1rem",
                lineHeight: "2.2rem",
                textAlign: "center",
              }}
            >
              <thead>
                <tr>
                  <th className="th-sm">EmpId</th>
                  <th className="th-sm">Name</th>
                  <th className="th-sm">Email</th>
                  <th className="th-sm">TotalWorkExp</th>
                  <th className="th-sm">Chat</th>
                  {/* <th className="th-sm">Skills</th> */}
                  <th className="th-sm">Worklogs</th>
                  <th className="th-sm">Reseverd Bench</th>
                  <th className="th-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                      data
                        ?.filter((filterData) =>
                          filterData?.name.toLowerCase().includes(query)
                        )
                        ?.map((filterData) => (
                      <tr key={filterData.id}>
                        <td>
                          {/* <Link to={`/worklog/${item.id}`}>{item.id}</Link> */}
                          <Link to={`/empDetails/${filterData.id}`}>{filterData.id}</Link>
                        </td>
                        <td>{filterData?.name}</td>
                        <td>{filterData.email}</td>
                        <td>{filterData.totalWorkExp}</td>
                        <td>
                        <a href="https://mail.google.com/chat/u/1/#chat/dm/8_H9X4AAAAE" target="_blank">
                              <img
                                src={"../../chat.png"}
                                alt=""
                                style={{ maxWidth:'100%'}}
                                className="rounded-circle pocHomeExcelLogo "
                              />
                        </a>
                        </td>
                        {/* <td>{item}</td> */}
                        <td><a href="https://docs.google.com/spreadsheets/d/1IGanhXOmHlCZbrIyyT0lle4KOoePEZ0wRh2f2OVtwPU/edit#gid=0" target="_blank">
                              <img
                                src={"../../excel.png"}
                                alt=""
                                style={{ width: "40px", height: "40px" }}
                                className="rounded-circle pocHomeExcelLogo "
                              />
                            </a></td>
                        <td>
                        <div class="form-check form-switch" >
                          <input class="form-check-input" value={role} onChange={()=>handleInputChange(filterData.id)} type="checkbox"  id="flexSwitchCheck" />
                        </div>
                          </td>
                        {/* <td>
                          <Link to="/editbenchEmployee">
                            <i
                              className="fas fa-edit text-primary"
                            />
                             <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label> *
                          </Link>
                        </td> */}
                        <td>
                          <Link to="/editbenchEmployee">
                            <i className="fas fa-edit text-primary benchListEditi" />
                          </Link>
                          &nbsp;&nbsp;
                          <i
                            data-mdb-toggle="modal"
                            data-mdb-target="#exampledModal"
                            className="fa fa-trash text-danger benchListdeletei"
                          />
                        </td>
                      </tr>
                    )
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* DELETE MODAL */}
      <div
        className="modal fade"
        id="exampledModal"
        tabIndex="-1"
        aria-labelledby="exampledModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampledModalLabel">
                Delete
              </h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Are You Sure You Want To Delete?</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-mdb-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
CustomButton.defaultProps = {
  startIcon: null,
  title: "Add23",
  className:"btn btn-secondary",
  handleButtonClick: () => {},
  sx: {
    textTransform: "capitalize",
    width: "100%",
    padding: "1vw",
    borderRadius: "0.625vw",
    backgroundColor: "#189EBA",
    fontWeight: 600,
    fontSize: "1vw",
  },
  additionalSx: {},
  disabled: false,
};

export default BenchList;
