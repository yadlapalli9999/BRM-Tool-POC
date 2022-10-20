import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import moment from "moment";
import { getAllWorklogList } from "../../../redux/features/worklogs/worklog.feature";
import { WORKLOG_TABLE_HEADERS } from "./worklogconstant";
import './workloglist.css'

const WorkLogLists = () => {
   let dispatch = useDispatch();
   let resourceID = sessionStorage.getItem('resourceID')
   let {worklogList} = useSelector((state)=>{ return state['worklogs']})
   console.log(worklogList)
  useEffect(()=>{
    dispatch(getAllWorklogList())
  },[])
  const lists = [
    {
      "id": "1",
      "taskDetails": 'redux task',
      "taskDescription": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      "duration": "30",
      "logDate": "2022/10/15",
      "pocId": "POC1233"
    },
    {
      "id": "2",
      "taskDetails": 'java task',
      "taskDescription": 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      "duration": "45",
      "logDate": "2022/10/15",
      "pocId": "POC1239"
    }
  ]
  const role = sessionStorage.getItem('role')
  const getTableData = (header, item, index) => {
    const val = header.value;
    switch (val) {
      case "serialNumber":
        return (
          <div className="d-flex align-items-center justify-content-center">
            {index + 1}
          </div>
        );

      case "taskDetails":
        //  <p className="fw-normal mb-1">{item.status}</p>;
        return (
          <span
            className="taskDetails"
          >
            {item.taskDetails}
          </span>
        );

      case "taskDescription":
        //  <p className="fw-normal mb-1">{item.status}</p>;
        return (
          <span
            className="taskDescription"
          >
            {item.taskDescription}
          </span>
        );


      case "duration":
        return (
          <span
            className={`badge ${item.duration == 180
                ? "badge-danger"
                : item.duration >= 120
                  ? "badge-warning"
                  : item.duration >= 60
                    ? "badge-info"
                    : item.duration >= 45
                      ? "badge-secondary"
                      : "badge-success"
              } rounded-pill d-inline`}
          >
            {item.duration}
            {header.metric}
          </span>
        );
      case "logDate":
        return (
          <div className="d-flex justify-content-center align-items-center">
            {moment(item.logDate).format(
                      "YYYY-MM-DD"
                    )}
          </div>
        );
      case "pocId":
        return (
          <div className="d-flex justify-content-center align-items-center">
            {item.pocId}
          </div>
        );
      default:
        return item;
    }
  };
  return (
    <React.Fragment>
      <MDBContainer className="py-4">
        <MDBRow style={{ marginBottom: "20px" }}>
          <MDBCol md="12" className="text-center">
            {/* <h2 className="pocTitle">POC</h2> */}
            <button className="worklogTitle">WorkLog List</button>
          </MDBCol>
        </MDBRow>
        <MDBRow >
          <MDBCol >
            <select className="btn addBtn dropdown-toggle"
              type="button">
              <option>Select Dates</option>
              <option>Present Week</option>
              <option>Last Week</option>
              <option>Present Month</option>
              <option>Last Month</option>
            </select>
          </MDBCol>
          { role === "resource" &&
            <MDBCol >
              <Link
                to={`/worklog/${resourceID}`}
                className="btn addBtn"
                style={{ backgroundColor: "#333", float: "right" }}
              >
                Add
              </Link>
          </MDBCol>
          }
        </MDBRow>
        <MDBRow className="py-4">
          <MDBTable bordered>
            {/* <pre>{JSON.stringify(pocList)}</pre> */}
            <MDBTableHead className=" table_content text-white">
              <tr>
                {WORKLOG_TABLE_HEADERS.map((header) => (
                  <th scope="col">{header.label}</th>
                ))}
              </tr>
            </MDBTableHead>
            {
              worklogList.length > 0 ? (
                <MDBTableBody>
                  {worklogList.length > 0 &&
                    worklogList.map((item, index) => (
                      <tr>
                        {WORKLOG_TABLE_HEADERS.map((header) => (
                          <td>{getTableData(header, item, index)}</td>
                        ))}
                      </tr>
                    ))}
                </MDBTableBody>

              ) : null
            }
          </MDBTable>
        </MDBRow>
      </MDBContainer>
    </React.Fragment>
  )
}

export default WorkLogLists;