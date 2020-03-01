import React from 'react';
import { Helmet } from 'react-helmet';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import './How.css';
import { Link } from 'react-router-dom';

function How() {
    return (
        <div>
            <div className="how-background img-fluid">
                <Helmet>
                    <title>How it works</title>
                </Helmet>

                {/* carousel image */}
                <MDBContainer fluid>
                    <MDBRow className="text-left">
                        <MDBCol md="7">

                        </MDBCol>
                        <MDBCol md="5">
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <h1 className="how-carousel-heading">Making your daily commutes easier and cheaper.</h1>
                            <Link to="/ride">
                                <MDBBtn color="#06c432"> <b>Ride now</b> </MDBBtn>
                            </Link>

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                {/* carousel image end */}
            </div>

            <br />
            <br />
            <br />
            <br />

            <div>
                {/* featurette after carousel */}
                <MDBContainer>
                    <MDBRow>
                        <MDBCol lg="4">
                            <MDBIcon icon="car" size="4x" className="how-car-icon" />
                            <br />
                            <br />
                            <h5><b>Book a ride that suits you</b></h5>
                            <p className="home-carpool-paragragh">Select from our vehicle options and get a ride in minutes or schedule one for later.</p>
                        </MDBCol>

                        <MDBCol lg="4">
                            <MDBIcon icon="map-marked-alt" size="4x" className="how-map-icon" />
                            <br />
                            <br />
                            <h5><b>Track your ride</b></h5>
                            <p className="home-carpool-paragragh">From the moment your driver is assigned till you get to your destination, track your ride in real time or share your details with your loved ones.</p>
                        </MDBCol>

                        <MDBCol lg="4">
                            <MDBIcon icon="money-bill-alt" size="4x" className="how-pay-icon" />
                            <br />
                            <br />
                            <h5><b>Make a payment</b></h5>
                            <p className="home-carpool-paragragh">You can choose to pay in cash or with the credits from your app wallet. </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                {/* featurette after carousel end */}
            </div>

            <br />
            <br />
            <br />
            <br />

            <div>
                <MDBContainer fluid className="how-container-bg">
                    <br />
                    <br />
                    <h3><b>Follow These Simple Steps </b></h3>
                </MDBContainer>

            </div>
        </div>

    );
}

export default How;
