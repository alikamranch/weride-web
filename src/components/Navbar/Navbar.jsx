import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBContainer, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBCol, MDBRow, MDBIcon
} from "mdbreact";
import './Navbar.css';
import logo from "../../assets/images/WERide Transparent.png";
import { NavLink } from 'react-router-dom';


class Navbar extends Component {
    state = {
        isOpen: false,
        modal: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
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
                                <NavLink to="/" exact className="nav-link" activeClassName="navbar-navlink-style">Home</NavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <NavLink to="/about" exact className="nav-link" activeClassName="navbar-navlink-style">About</NavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <NavLink to="/how" exact className="nav-link" activeClassName="navbar-navlink-style">How it works</NavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <NavLink to="/ride" exact className="nav-link" activeClassName="navbar-navlink-style">Let's Ride!</NavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBBtn color="#06c432" onClick={this.toggle}>Sign In</MDBBtn>
                                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                                    <MDBModalHeader toggle={this.toggle} className="navbar-modal-header">Sign In</MDBModalHeader>
                                    <MDBModalBody>
                                        <MDBRow className="justify-content-center">
                                            <MDBCol md="6">
                                                <form>
                                                    <input type="email" id="defaultFormLoginEmailEx" className="form-control" placeholder="Email" />
                                                    <br />
                                                    <input type="password" id="defaultFormLoginPasswordEx" className="form-control" placeholder="Password" />
                                                    <br />
                                                </form>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBModalBody>
                                    <MDBModalFooter className="justify-content-center">
                                        <MDBBtn href="#" color="#0d5d20" className="button-color">Sign In</MDBBtn>
                                        <MDBBtn href="#" color="#4285f4" className="google-button-color"><MDBIcon fab icon="google" size="lg" /> Sign In with Google</MDBBtn>
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

export default Navbar;