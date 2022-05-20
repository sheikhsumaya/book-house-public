import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

// import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <header className="container">
     
      <Navbar
        className="nav-bar fixed-top mb-2"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/home" className=" text-warning me-2">
            <img
              className="logo d-inline"
              src="https://i.ibb.co/x8vK8qQ/Cartoon-yellow-book-illustration-premium-vector-PNG-removebg-preview.png"
              alt=""
            />
            Book House
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex justify-content-between w-100">
              <div className="nav-position">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/items">
                All Items
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              {user && (
                <>
                  <Nav.Link as={Link} to="/addservice">
                    Add
                  </Nav.Link>
                  <Nav.Link as={Link} to="/manageservice">
                    Manage
                  </Nav.Link>
                </>
              )}
              </div>

              <div className="">
              {user ? (
                <Nav.Link className="me-0" onClick={handleSignOut}>
                  Sign Out
                </Nav.Link>
              ) : (
                <Nav.Link className="me-auto" as={Link} to="/login">
                  Sign In
                </Nav.Link>
              )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
