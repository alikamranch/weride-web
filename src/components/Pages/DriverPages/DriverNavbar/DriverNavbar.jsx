import React, { useState, useContext, useEffect } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import { Link, useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { auth } from "../../../firebase";
import { UserContext } from "../../../../providers/UserProvider";
import "./DriverNavbar.css";

const DriverNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useContext(UserContext);

  let history = useHistory();

  useEffect(() => {
    history.push("/driver-home");
  }, [history]);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    auth.signOut().then(() => {
      console.log("User Signed Out");
    });
  };

  return (
    <MDBNavbar color="green" dark expand="md">
      <MDBNavbarBrand>{user.name}</MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem>
            <NavLink
              to="/driver-home"
              exact
              className="nav-link"
              activeClassName="drivernavbar-navlink-style"
            >
              <MDBIcon size="lg" icon="home" /> Home
            </NavLink>
          </MDBNavItem>
          <MDBNavItem>
            <NavLink
              to="/driver-profile"
              exact
              className="nav-link"
              activeClassName="drivernavbar-navlink-style"
            >
              <MDBIcon size="lg" icon="user" /> Profile
            </NavLink>
          </MDBNavItem>
          <MDBNavItem>
            <NavLink
              to="/driver-vehicles"
              exact
              className="nav-link"
              activeClassName="drivernavbar-navlink-style"
            >
              <MDBIcon size="lg" icon="taxi" /> Vehicles
            </NavLink>
          </MDBNavItem>
          <MDBNavItem>
            <NavLink
              to="/driver-history"
              exact
              className="nav-link"
              activeClassName="drivernavbar-navlink-style"
            >
              <MDBIcon size="lg" icon="car-alt" /> Ride History
            </NavLink>
          </MDBNavItem>
          <MDBNavItem>
            <NavLink
              to="/driver-earnings"
              exact
              className="nav-link"
              activeClassName="drivernavbar-navlink-style"
            >
              <MDBIcon size="lg" icon="hand-holding-usd" /> Earnings
            </NavLink>
          </MDBNavItem>
          <MDBNavItem>
            <NavLink
              to="/driver-packages"
              exact
              className="nav-link"
              activeClassName="drivernavbar-navlink-style"
            >
              <MDBIcon size="lg" icon="calendar-alt" /> Packages
            </NavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <MDBIcon size="lg" icon="cog" />{" "}
                <span className="mr-2">Settings</span>
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <Link to="/driver-edit-profile">
                  <MDBDropdownItem>Edit Profile</MDBDropdownItem>
                </Link>

                <Link to="/driver-edit-packages">
                  <MDBDropdownItem>Manage Packages</MDBDropdownItem>
                </Link>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right>
          <MDBNavItem>
            <Link to="/">
              <MDBBtn color="#06c432" size="sm" onClick={logout}>
                <MDBIcon icon="sign-out-alt" /> <b>Logout</b>
              </MDBBtn>
            </Link>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default DriverNavbar;
