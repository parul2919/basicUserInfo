import React, {Component} from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component{
    render(){
        return(
            <header>
                <div className="navbar-nav-scroll">
                <ul className="navbar-nav bd-navbar-nav flex-row">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/" >Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link ml-4" to="/userForm">userForm</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link ml-4" to="/userList">userList</Link>
                  </li>
                </ul>
              </div>
            </header>
        )
    }
}

export default Header;
        