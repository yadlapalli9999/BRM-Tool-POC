import React from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import { Link } from "react-router-dom";
import "./navbar.css";
import { toast, ToastContainer } from "react-toastify";

let Navbar = () => {
  tippy("#home", {
    content: "HOME",
    placement: "bottom",
    arrow: "narrow",
    animation: "rubberBand",
    theme: "material",
    interactive: true,
  });
  tippy("#bench", {
    content: "BENCH",
    placement: "bottom",
    arrow: "narrow",

    animation: "rubberBand",
    theme: "material",
    interactive: true,
  });
  tippy("#poc", {
    content: "POC",
    placement: "bottom",
    arrow: "narrow",

    animation: "rubberBand",
    theme: "material",
    interactive: true,
  });
  tippy("#logOut", {
    content: "LOG OUT",
    placement: "bottom",
    arrow: "narrow",

    animation: "rubberBand",
    theme: "material",
    interactive: true,
  });
  const logOutHandler = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("resourceID");
    toast.success("Account Logged Out", { autoClose: 1500 });
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-primary sticky-top  navbar-expand-sm">
        <div className="container">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-1 ">
              <li className="nav-item icon NavbarNavItem">
                <Link to="/dashboard" className="nav-link">
                  <i id="home" className="fas fa-home " />
                </Link>
              </li>

              <li className="nav-item icon NavbarNavItem">
                <Link to="/benchlist" className="nav-link">
                  <i id="bench" className="fas fa-users " />
                </Link>
              </li>
              <li className="nav-item icon NavbarNavItem">
                <Link to="/poc" className="nav-link">
                  <i id="poc" class="fas fa-file " />
                </Link>
              </li>

              {/* <ul className="navbar navbar-nav ml-auto"> */}
            </ul>

            <li className="nav-item icon NavbarLogOut">
              <Link to="/" className="nav-link">
                <i
                  id="logOut"
                  className="fas fa-sign-out-alt "
                  onClick={logOutHandler}
                />
              </Link>
            </li>

            {/* </ul> */}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
