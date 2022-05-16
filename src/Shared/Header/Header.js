import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
 

  return (
    <header className="container">
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark shadow-lg">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand d-flex text-warning">
            <img className="logo ms-md-5" src="https://i.ibb.co/x8vK8qQ/Cartoon-yellow-book-illustration-premium-vector-PNG-removebg-preview.png" alt="" />
            <h4 className="ms-3 my-auto">BOOK HOUSE</h4>
          </Link>
          <form className="d-md-flex">
            <button
              className="navbar-toggler icon-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="nav nav-pills my-1" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <Link to="/home" className="nav-link nav-bar">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link nav-bar">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/items" className="nav-link nav-bar">
                    Items
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link nav-bar">
                    Contact
                  </Link>
                </li>
              </ul>

              <form className="d-md-flex">
               
                 (
                  <div className="d-flex me-1">
                    <Link
                      to="/myOrders"
                      className="nav-link nav-bar rounded-3 "
                    >
                      My Orders
                    </Link>
                    <Link
                      to="/manageOrders"
                      className="nav-link nav-bar rounded-3 "
                    >
                      Manage Orders
                    </Link>
                    <Link
                      to="/addItem"
                      className="nav-link nav-bar rounded-3 me-2"
                    >
                      Add Items
                    </Link>
                    <Link
                      to="/blog"
                      className="nav-link nav-bar rounded-3 "
                    >
                     Blog
                    </Link>
                    <h2 className="text-warning fs-5 pe-4 fw-bold text-decoration-none text-warning my-auto">
                     
                    </h2>
                    <button
                      type="button"
                      className="btn btn-outline-warning fw-bold"
                    
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link to="/login">
                    <button
                      type="button"
                      className="btn btn-outline-warning fw-bold"
                    >
                      Login
                    </button>
                  </Link>
                
              </form>
            </div>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
