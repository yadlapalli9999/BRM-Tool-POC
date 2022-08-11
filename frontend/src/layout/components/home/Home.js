import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

let Home = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col text-center justify-content-center">
            {/* <div className="title"><span>FISSION</span> <img src="https://media-exp1.licdn.com/dms/image/C510BAQGVLtvcCuufxw/company-logo_200_200/0/1552398466563?e=2147483647&v=beta&t=xxejYS6WDd_NvZfZke-FfieMLXkfFeoIOAp_fiZQ2iU"/> <span>LABS</span></div> */}
            <img
              style={{ width: "80%", height: "100%" }}
              src="https://uploads-ssl.webflow.com/61ffed246e785f28c1a44633/62026bbe9515a02ec226fcfe_Group%201917%20%281%29.svg"
              alt="fissionlogo"
            />
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-6"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <div className="row justify-content-center">
              <Link to="/poc" className="col-md-6 poc">
                <h2 className="d-flex flex-column justify-content-center align-item-center text-center h-100 text-white">
                  POC
                </h2>
              </Link>
              <Link to="/benchlist" className="col-md-6 bench">
                <h2 className="d-flex flex-column justify-content-center align-item-center text-center h-100 text-white">
                  Bench
                </h2>
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <img
              style={{ width: "100%", height: "80%" }}
              src="https://www.zimyo.work/img/svg/LeftImage.svg"
              alt="zimyo"
            />
            <h2 style={{ textAlign: "center" }}>
              Monitor health of your bench
            </h2>
            <p style={{ textAlign: "center" }}>
              control and analyze your resource in the easiest way
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
