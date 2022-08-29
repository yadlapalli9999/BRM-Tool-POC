import React from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "../../../components/inputFields/CustomInput";
import "./editbenchEmployee.css";
CustomInput.defaultProps={
  type:"text",
  name:'Email',
  id:'form3Example1'
}
let EditBenchEmployee = () => {
  let navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="container-lg">
        <div className="mt-5 mb-5 text-center">
          <h2>Edit Bench Employee</h2>
        </div>
        <form className="mt-5">
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
           {/* <div className="row">
              <CustomInput/>
           </div> */}
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
                  style={{ width: "100%" }}
                />
                <label htmlFor="form3Example10">Notes</label>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary  mb-4"
              style={{ marginRight: "30px" }}
            >
              Edit
            </button>
            <button
              onClick={() => navigate("/benchlist")}
              className="btn btn-primary  mb-4 "
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
export default EditBenchEmployee;
