import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
const Register = (props) => {
  props.funcNav(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: String,
    email: String,
    password: String,
  });

  const handleInput = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };
  const { name, email, password } = user;
  const handleRegisterForm = (event) => {
    event.preventDefault();
    console.log(user);
    navigate("/");
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center vh-100">
          <div className="col">
            <div className="h-100 gradient-form">
              <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-xl-10">
                    <div className="card rounded-3 text-black">
                      <div className="row g-0">
                        <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                          <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                            <h4 className="mb-4">
                              We are more than just a company
                            </h4>
                            <p className="small mb-0">
                              We harness innovation and engineering excellence
                              to create symphony between business processes and
                              underlying technologies.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card-body p-md-5 mx-md-4">
                            <div className="text-center register">
                              <img
                                src="https://uploads-ssl.webflow.com/61ffed246e785f28c1a44633/62026bbe9515a02ec226fcfe_Group%201917%20(1).svg"
                                alt="logo"
                              />
                            </div>

                            <form
                              onSubmit={handleRegisterForm}
                              className="mt-5"
                            >
                              <p>Please Create Your Account</p>

                              <div className="form-outline mb-4">
                                <input
                                  type="text"
                                  id="form2Example11"
                                  className="form-control"
                                  placeholder="Full Name"
                                  value={name}
                                  name="name"
                                  onChange={handleInput}
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form2Example11"
                                >
                                  Name
                                </label>
                              </div>

                              <div className="form-outline mb-4">
                                <input
                                  type="email"
                                  id="form2Example22"
                                  className="form-control"
                                  placeholder="email address"
                                  name="email"
                                  value={email}
                                  onChange={handleInput}
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form2Example22"
                                >
                                  Email
                                </label>
                              </div>

                              <div className="form-outline mb-4">
                                <input
                                  type="password"
                                  id="form2Example33"
                                  className="form-control"
                                  name="password"
                                  value={password}
                                  onChange={handleInput}
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form2Example33"
                                >
                                  Password
                                </label>
                              </div>

                              <div className="text-center pt-1 mb-5 pb-1">
                                <button
                                  className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                  type="submit"
                                >
                                  Sign up
                                </button>
                              </div>

                              <div className="d-flex align-items-center justify-content-center pb-4">
                                <p className="mb-0 me-2">
                                  Already have an account?
                                </p>
                                <Link
                                  to="/"
                                  type="button"
                                  className="btn btn-outline-danger"
                                >
                                  Sign in
                                </Link>
                              </div>
                            </form>
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

export default Register;
