import React, { useEffect, useState } from "react";
import {useNavigate,Link, useParams} from 'react-router-dom'

let BenchEmployeeDetail = (props)=>{
    let navigate = useNavigate();
    let params  = useParams();
    const [user,setUser] = useState({})
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
    //const user = {}
    //let [user,setUser] = useState({})
    useEffect(()=>{
      const filterData = data.find((itme)=>itme.id === (params.id))
     console.log(filterData)
     setUser(filterData)
    },[])

    
    return(
        <React.Fragment>
          {/* <pre>{params}</pre> */}
        <div className="container py-5">
        <div className="row">
          <div className="all-pocdetails-buttons ">
            <div className="editButton ">
              <Link to="/newbenchEmployee" className="btn btn-primary">
                Edit
              </Link>
              {/* <button
                type="button"
                className="btn btn-primary"
                data-mdb-toggle="modal"
                data-mdb-target="#exampleModal"
                onClick={() => navigate("/newbenchEmployee")}
              >
                Edit
              </button> */}
            </div>
            <div className="deleteButton ">
              <button
                type="button"
                className="btn btn-danger"
                data-mdb-toggle="modal"
                data-mdb-target="#exampledModal"
              >
                Delete
              </button>
            </div>
          </div>
          <pre>{JSON.stringify(user)}</pre>
          <div className="col-lg-12 ">
            <div className="card ">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Name </p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user.name}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      {user.email}
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Reporting Mangaer</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user.reportingManager}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Team Lead</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user.teamLead}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Members</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      Kunal Rokhle , Alok Kumar , Sudhanshu Jain
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Documents</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">
                      Bay Area, San Francisco, CA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-left py-5">
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => {
              navigate("/benchlist");
            }}
          >
            Back
          </button>
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

export default BenchEmployeeDetail;
