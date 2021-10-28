import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Refresh</a>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/sidebar" activeClassName="btn btn-primary">Sidebar</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/dashboard" activeClassName="btn btn-primary">Dashboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/projects" activeClassName="btn btn-primary">My Projects</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/topics" activeClassName="btn btn-primary">My Topics</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about" activeClassName="btn btn-primary">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/content" activeStyle={{ color: "red" }}>Contact Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/register" activeClassName="btn btn-primary">Register</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login" activeClassName="btn btn-primary">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/logout" onClick={()=>localStorage.clear()} activeClassName="btn btn-primary">Logout</NavLink>
                    </li>
                  
                   
                </ul>
               
              
  </div>
</nav>
    );
}
