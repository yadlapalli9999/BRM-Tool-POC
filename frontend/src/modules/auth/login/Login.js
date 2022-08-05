import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AdminRole } from "../../../Roles";

const Login = () => {
  let navigate = useNavigate();
  const handleRedirect = () => {
    if (AdminRole.role === "ADMIN") {
      navigate("/home");
    } else {
      navigate("/bench");
    }
  };
  return (
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex align-items-center justify-content-center h-100">
          <div class="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              class="img-fluid"
              alt="Phoneimage"
            />
          </div>
          <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="form1Example13">
                  Email address
                </label>
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="form1Example23">
                  Password
                </label>
              </div>

              <div class="d-flex justify-content-around align-items-center mb-4">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                    checked
                  />
                  <label class="form-check-label" for="form1Example3">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
                <a href="#!">Forgot password?</a>
              </div>

              <button
                type="submit"
                class="btn btn-primary btn-lg btn-block"
                onClick={handleRedirect}
              >
                Sign in
              </button>

              <div class="divider d-flex align-items-center my-4">
                <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>

              <a
                class="btn btn-primary btn-lg btn-block"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
              >
                <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
              </a>
              <a
                class="btn btn-primary btn-lg btn-block"
                style={{ backgroundColor: "#55acee" }}
                href="#!"
                role="button"
              >
                <i class="fab fa-twitter me-2"></i>Continue with Twitter
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
