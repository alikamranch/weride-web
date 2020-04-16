import React from 'react';
import { Helmet } from 'react-helmet';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';
import './Ride.css';

function Ride() {
    return (
        <div>
            <Helmet>
                <title>Let's Ride!</title>
            </Helmet>
            <div className="mt-5">
                <MDBContainer>
                    <h1 className="text-left">Join now to Ride with us</h1>
                    <hr />
                    <MDBContainer>
                        <MDBRow className="justify-content-center">
                            <MDBCol md="6">
                                <form>
                                    <div className="grey-text mb-5">
                                        <MDBInput label="Type your email" type="email" validate error="wrong"
                                            success="right" />
                                        <MDBInput label="Type your password" group type="password" validate />
                                        <MDBInput label="Type your number" group type="text" validate />
                                        <select className="browser-default custom-select">
                                            <option>Account Type</option>
                                            <option value="1">Rider</option>
                                            <option value="2">Driver</option>
                                        </select>
                                    </div>
                                    <div className="text-center">
                                        <MDBBtn href="#" color="#0d5d20" className="button-color">Sign Up</MDBBtn>
                                        <MDBBtn href="#" color="#4285f4" className="google-button-color"><MDBIcon fab icon="google" size="lg" /> Sign Up with Google</MDBBtn>
                                    </div>
                                </form>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBContainer>
            </div>
        </div>
    );
}

export default Ride;
