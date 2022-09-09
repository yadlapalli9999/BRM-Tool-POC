import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../redux/features/auth/auth.feature";
import { AdminRole } from "../../../Roles";
import "./Login.css";
import google from "../../../util/Img/Google.svg" ;
import { MDBInput } from "mdb-react-ui-kit";

const Login = (props) => {
  props.funcNav(false);

  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const updateInput = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  const dispatch = useDispatch();
  const { email, password } = user;
  const handleLoginForm = (event) => {
    event.preventDefault();
    // if (email && password) {
    //   console.log(user);
    //   navigate("/home");
    // }
    if (email && password) {
      dispatch(loginUser(user));
      if (AdminRole.role === "ADMIN") {
        navigate("/dashboard");
      } else if (AdminRole.role === "EMPLOYEE") {
        navigate("/employeeworklogs");
      }
    }
  };

  return (
    <React.Fragment>
      <div className="container-fluid pt-3 pb-5 ">
        <div className="row d-flex justify-content-center align-items-center vh-100">
          <div className="col">
            <div className="h-100 gradient-form">
              <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-xl-10 component">
                    <div className="card  rounded-3 text-black">
                      <div className="row g-0">
                        <div className="col-lg-6">
                          <div className="card-body p-md-5 mx-md-4">
                            <div className="text-center">
                              <img
                                src="https://uploads-ssl.webflow.com/61ffed246e785f28c1a44633/62026bbe9515a02ec226fcfe_Group%201917%20(1).svg"
                                alt="logo"
                                className="logoImg"
                              />
                            </div>

                            <form onSubmit={handleLoginForm} className="mt-5">
                              <p className="lead head-2 text-center">Please login to your account</p>
                              {/* <div className="form-outline mb-4">
                                <input
                                  type="email"
                                  name="email"
                                  value={email}
                                  onChange={updateInput}
                                  id="form2Example11"
                                  className="form-control input"
                                  placeholder="Phone number or email address"
                                />
                                <label
                                  className="form-label label"
                                  htmlFor="form2Example11"
                                >
                                  Username
                                </label>
                              </div> */}

                              {/* <Form.Floating className="mb-3">
                                <Form.Control
                                  id="floatingInputCustom"
                                  type="email"
                                  name="email"
                                  placeholder="name@example.com"
                                  value={email}
                                  onChange={updateInput}
                                />
                                <label htmlFor="floatingInputCustom">
                                  Email address
                                </label>
                              </Form.Floating> */}
                              <div className="col-md-12 mt-4 mb-4 d-flex">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-1 mx-3 h-1 mt-3 svgIcon">
  <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
</svg>

                                <MDBInput
                                className="w-100"
                                  type="email"
                                  label="UserName"
                                  name="email"
                                  style={{ marginBottom: "10px" }}
                                  value={email}
                                  onChange={updateInput}
                                  // className="w-75"
                                />
                              </div>

                              {/* <div className="form-outline mb-4">
                                <input
                                  type="password"
                                  id="form2Example22"
                                  className="form-control"
                                  name="password"
                                  value={password}
                                  onChange={updateInput}
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form2Example22"
                                >
                                  Password
                                </label>
                              </div> */}
                              <div className="col-md-12 mt-3 d-flex">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-1 mx-3 h-1 mt-3 svgIcon">
  <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
</svg>

                                <MDBInput
                                  type="password"
                                  label="password"
                                  name="password"
                                  style={{ marginBottom: "10px" }}
                                  value={password}
                                  onChange={updateInput}
                                />
                              </div>

                              <div className="text-center mt-2 mb-3 p-1">
                                <button
                                  className="btn btn-dark siBtn btn-block fa-lg w-50 mt-4"
                                  type="submit"
                                >
                                  Sign In
                                </button>
                                {/* <hr>Or</hr> */}
                                <div class="separator mt-3">
  <div class="line"></div>
  <p className="lead fw-bolder text-dark mt-1">Or</p>
  <div class="line"></div>
</div>
                                <button
                                  className="btn  gBtn btn-white btn-block text-dark mt-2"
                                  type="submit"
                                >< img src={google} alt = "Logo of Google for Button " className="google m-2"/>
                                  Sign In With Google
                                </button>

                                {/* <a className="text-muted" href="#!">
                                  Forgot password?
                                </a> */}
                              </div>

                              {/* <div className="d-flex align-items-center justify-content-center pb-4"> */}
                                {/* <p className="mb-0 me-2">
                                  Don't have an account?
                                </p>
                                <Link
                                  to="/register"
                                  type="button"
                                  className="btn btn-outline-danger"
                                >
                                  Create new
                                </Link> */}
                              {/* </div> */}
                            </form>
                          </div>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center signIn">
                          <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                            <h6 className="mb-4 display-6 fw-bolder  signIn-1">
                              We are More than Just A Company
                            </h6>
                            <h6 className="small mb-0 fs-5 lh-base fw-bolder text-dark">
                              We harness innovation and engineering excellence
                              to create symphony between business processes and
                              underlying technologies.
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
