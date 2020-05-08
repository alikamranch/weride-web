import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBCol,
  MDBRow,
  MDBIcon,
} from "mdbreact";
import "./Navbar.css";
import logo from "../../assets/images/WERide Transparent.png";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleCollapse = () => {
    const currentState = isOpen;
    setIsOpen(!currentState);
  };

  const toggle = () => {
    const currentState = modal;
    setModal(!currentState);
  };

  const updateInput = (e) => {
    const { name, value } = e.currentTarget;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        toggle();
        setEmail("");
        setPassword("");
        console.log("User Signed In.");
      })
      .catch(function (error) {
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <MDBNavbar color="#fafafa grey lighten-5" light expand="md">
      <MDBNavbarBrand>
        <img
          src={logo}
          width="210"
          height="70"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </MDBNavbarBrand>
      <MDBContainer>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <NavLink
                to="/"
                exact
                className="nav-link"
                activeClassName="navbar-navlink-style"
              >
                Home
              </NavLink>
            </MDBNavItem>
            <MDBNavItem>
              <NavLink
                to="/about"
                exact
                className="nav-link"
                activeClassName="navbar-navlink-style"
              >
                About
              </NavLink>
            </MDBNavItem>
            <MDBNavItem>
              <NavLink
                to="/how"
                exact
                className="nav-link"
                activeClassName="navbar-navlink-style"
              >
                How it works
              </NavLink>
            </MDBNavItem>
            <MDBNavItem>
              <NavLink
                to="/ride"
                exact
                className="nav-link"
                activeClassName="navbar-navlink-style"
              >
                Let's Ride!
              </NavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBBtn color="#06c432" onClick={toggle}>
                Sign In
              </MDBBtn>
              <MDBModal isOpen={modal} toggle={toggle}>
                <MDBModalHeader toggle={toggle} className="navbar-modal-header">
                  Sign In
                </MDBModalHeader>
                <MDBModalBody>
                  <MDBRow className="justify-content-center">
                    <form onSubmit={login}>
                      <MDBRow className="justify-content-center">
                        <MDBCol md="6">
                          <input
                            type="email"
                            id="defaultFormLoginEmailEx"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            onChange={(event) => updateInput(event)}
                            value={email}
                          />
                          <br />
                          <input
                            type="password"
                            id="defaultFormLoginPasswordEx"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            onChange={(event) => updateInput(event)}
                            value={password}
                          />
                          <br />
                        </MDBCol>
                      </MDBRow>
                      <MDBModalFooter className="justify-content-center">
                        <MDBBtn
                          color="#0d5d20"
                          className="button-color"
                          type="submit"
                        >
                          Sign In
                        </MDBBtn>
                        <MDBBtn
                          href="#"
                          color="#4285f4"
                          className="google-button-color"
                        >
                          <MDBIcon fab icon="google" size="lg" /> Sign In with
                          Google
                        </MDBBtn>
                      </MDBModalFooter>
                    </form>
                  </MDBRow>
                </MDBModalBody>
              </MDBModal>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar;
