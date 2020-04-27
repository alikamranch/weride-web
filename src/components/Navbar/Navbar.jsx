import React, { Component } from "react";
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
import firebase from "../firebase";
import { withRouter } from "react-router";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      modal: false,
      email: "",
      password: "",
    };
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  updateInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = (e) => {
    e.preventDefault();
    console.log("Submit");
    let email = this.state.email;
    let password = this.state.password;

    //to copy data from firebase and change routes
    const checkCreds = (doc) => {
      var user = doc.data();
      if (email === user.id_1.email && password === user.id_1.password) {
        this.props.riderLoginHandler();
        this.setState({
          modal: !this.state.modal,
        });
        this.props.history.push("/rider-home");
      }

      if (email === user.id_2.email && password === user.id_2.password) {
        this.props.driverLoginHandler();
        this.setState({
          modal: !this.state.modal,
        });
        this.props.history.push("/driver-home");
      }
    };

    //firebase setup
    const db = firebase.firestore();
    var docRef = db.collection("weride").doc("user");

    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          checkCreds(doc);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });

    //change state after login
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
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
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
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
                <MDBBtn color="#06c432" onClick={this.toggle}>
                  Sign In
                </MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                  <MDBModalHeader
                    toggle={this.toggle}
                    className="navbar-modal-header"
                  >
                    Sign In
                  </MDBModalHeader>
                  <MDBModalBody>
                    <MDBRow className="justify-content-center">
                      <MDBCol md="6">
                        <form onSubmit={this.login}>
                          <input
                            type="email"
                            id="defaultFormLoginEmailEx"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            onChange={this.updateInput}
                            value={this.state.email}
                          />
                          <br />
                          <input
                            type="password"
                            id="defaultFormLoginPasswordEx"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            onChange={this.updateInput}
                            value={this.state.password}
                          />
                          <br />
                        </form>
                      </MDBCol>
                    </MDBRow>
                  </MDBModalBody>
                  <MDBModalFooter className="justify-content-center">
                    <MDBBtn
                      href="#"
                      color="#0d5d20"
                      className="button-color"
                      type="submit"
                      onClick={this.login}
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
                </MDBModal>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}

export default withRouter(Navbar);
