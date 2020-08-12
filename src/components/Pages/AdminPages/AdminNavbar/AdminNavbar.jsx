import React, { useState, useContext, useEffect } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import { Link, useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { auth } from "../../../firebase";
import { UserContext } from "../../../../providers/UserProvider";
import "./AdminNavbar.css";

const AdminNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useContext(UserContext);

  let history = useHistory();

  useEffect(() => {
    history.push("/admin-profiles");
  }, [history]);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    auth.signOut().then(() => {
      console.log("User Signed Out.");
    });
  };

  return (
    <MDBNavbar color="elegant-color" dark expand="md">
      <MDBNavbarBrand>{user.name}</MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem>
            <NavLink
              to="/admin-profiles"
              exact
              className="nav-link"
              activeClassName="ridernavbar-navlink-style"
            >
              <MDBIcon size="lg" icon="users" /> Profiles
            </NavLink>
          </MDBNavItem>
          <MDBNavItem>
            <NavLink
              to="/admin-fares"
              exact
              className="nav-link"
              activeClassName="ridernavbar-navlink-style"
            >
              <MDBIcon size="lg" icon="money-bill-alt" /> Fares
            </NavLink>
          </MDBNavItem>
          <MDBNavItem>
            <NavLink
              to="/admin-complaints"
              exact
              className="nav-link"
              activeClassName="ridernavbar-navlink-style"
            >
              <MDBIcon size="lg" icon="exclamation-circle" /> Complaints
            </NavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <Link to="/">
              <MDBBtn color="grey" size="sm" onClick={logout}>
                <MDBIcon icon="sign-out-alt" /> <b>Logout</b>
              </MDBBtn>
            </Link>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default AdminNavbar;
