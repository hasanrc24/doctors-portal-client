import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../Contexts/AuthContext';
import './Navbar.css';

const Navbar = () => {

    const {loggedInUser, logout} = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item me-5">
          <Link to="/" className="nav-link text-info" aria-current="page">Home</Link>
        </li>
        <li className="nav-item me-5">
          <Link to="/dashboard" className="nav-link text-info">Dashboard</Link>
        </li>
        <li className="nav-item me-5">
          <a className="nav-link text-info" href="#">Dental Services</a>
        </li>
        <li className="nav-item me-5">
          <a className="nav-link text-info" href="#">Reviews</a>
        </li>
        <li className="nav-item me-5">
          <a className="nav-link text-info" href="#">Contact Us</a>
        </li>
        {loggedInUser ? 
        (<>
        <li className="nav-item me-5">
        <a onClick={logout} type="button" className="nav-link text-info">Logout</a>
      </li>
      </>) 
      : 
      (<li className="nav-item me-5">
          <Link to="/login" className="nav-link text-info">Login</Link>
        </li>)}
        
      </ul>
      
    </div>
  </div>
</nav>
    );
};

export default Navbar;