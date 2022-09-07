import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
let Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-primary sticky-top  navbar-expand-sm">
        <div className="container">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item NavbarNavItem">
                <Link to="/dashboard" className="nav-link">
                  <i className="fas fa-home navbari" />
                </Link>
              </li>
              <li className="nav-item NavbarNavItem">
                <Link to="/benchlist" className="nav-link">
                  <i className="fas fa-users navbari" />
                </Link>
              </li>
              <li className="nav-item NavbarNavItem">
                <Link to="/poc" className="nav-link">
                  <i class="fas fa-file navbari" />
                </Link>
              </li>
            
            {/* <ul className="navbar navbar-nav ml-auto"> */}

              </ul>
              <li className="nav-item NavbarLogOut">
                <Link to="/" className="nav-link">
                  <i className="fas fa-sign-out-alt navbari" />
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
