import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <>
      <div class="wrapper row2">
        <div id="container" class="clear">
          <section id="fof" class="clear">
            <div class="hgroup">
              <h1>
                <span>
                  <strong>4</strong>
                </span>
                <span>
                  <strong>0</strong>
                </span>
                <span>
                  <strong>4</strong>
                </span>
              </h1>
              <h2>
                Error ! <span>Page Not Found</span>
              </h2>
            </div>
            <p>
              For Some Reason The Page You Requested Could Not Be Found On Our
              Server
            </p>
            <p>
              <Link to="javascript:history.go(-1)">&laquo; Go Back</Link> /{" "}
              <Link to="#">Go Home &raquo;</Link>
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default NotFound;
