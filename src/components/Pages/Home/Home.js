import React from 'react';
import './Home.css'
import { Helmet } from 'react-helmet';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer, MDBRow, MDBCol } from 'mdbreact';

function Home() {
    const headingStyle = {
        color: "white",
        fontWeight: "450",
        fontSize: "3.5rem"

    }

    return (
        <div className="background img-fluid">
            <Helmet>
                <title>Home</title>
            </Helmet>

            <MDBContainer fluid>
                <MDBRow >

                    <MDBCol md="7" className="text-top-spacing">
                        <div>
                            <h1 style={headingStyle}>Travel Smarter. Faster. Easier.</h1>
                        </div>
                    </MDBCol>

                    <MDBCol md="4">
                        <MDBCard className="card-top-spacing">
                            <MDBCardBody>
                                <MDBCardTitle>Join Now</MDBCardTitle>
                                <br />
                                <MDBCardText>
                                    <MDBRow className="justify-content-center">
                                        <MDBCol md="6">
                                            <form>
                                                <input type="email" id="defaultFormLoginEmailEx" className="form-control" placeholder="Email" />
                                                <br />
                                                <input type="password" id="defaultFormLoginPasswordEx" className="form-control" placeholder="Password" />
                                                <br />
                                                <input type="text" id="defaultFormNumberEx" className="form-control" placeholder="Number" />
                                                <br />
                                                <select className="browser-default custom-select">
                                                    <option>Account Type</option>
                                                    <option value="1">Rider</option>
                                                    <option value="2">Driver</option>
                                                </select>
                                            </form>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardText>
                                <br />
                                <MDBBtn href="#" color="#0d5d20" className="button-color">Sign Up</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );

}

export default Home;
