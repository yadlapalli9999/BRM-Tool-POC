import React from "react";
import {Link, Outlet} from 'react-router-dom';
let Navbar = () =>{
    return(
        <React.Fragment>
             <nav className="navbar navbar-dark bg-secondary navbar-expand-sm">
                <div className="container">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item" style={{paddingRight:'6rem'}}>
                            <Link to="/" className="nav-link">
                            <i className="fas fa-home" style={{fontColor:'white',fontSize:'28px'}}/>
                            </Link>
                        </li>
                        <li className="nav-item" style={{paddingRight:'6rem'}}>
                            <Link to="/" className="nav-link">
                            <i className="fas fa-users" style={{fontColor:'white',fontSize:'28px'}}/>
                            </Link>
                        </li>
                        <li className="nav-item" style={{paddingRight:'6rem'}}>
                            <Link to="/" className="nav-link">
                            <i className="fas fa-id-card" style={{fontColor:'white',fontSize:'28px'}}/>
                            </Link>
                        </li>
                        
                    </ul>
                    <ul className="navbar navbar-nav ml-auto">
                    <li className="nav-item" style={{paddingRight:'6rem'}}>
                            <Link to="/" className="nav-link">
                            <i className="fas fa-sign-out-alt" style={{fontColor:'white',fontSize:'28px'}}/>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </React.Fragment>
    )
}

export default Navbar;