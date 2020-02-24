import React from 'react';
import { Helmet } from 'react-helmet';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import './Home.css'

function Home() {
    const headingStyle = {
        color: "white",
        fontWeight: "450",
        fontSize: "3.5rem"

    }

    return (
        <div>
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
                                    <MDBBtn href="#" color="#4285f4" className="google-button-color"><MDBIcon fab icon="google" size="lg" /> Sign Up with Google</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>

                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>

            <MDBContainer>
                <MDBRow className="justify-content-center top"><h1 className="font-style">Why Carpool?</h1></MDBRow>
                <br />
                <br />
                <br />
                <MDBRow className="justify-content-center">
                    <MDBCol lg="3">
                        <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder" width="140" height="140"></img>
                        <br />
                        <br />
                        <h2 className="carpool-headings">Heading 1</h2>
                        <p>Sample paragragh</p>
                    </MDBCol>
                    <br />
                    <br />
                    <MDBCol lg="3">
                        <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder" width="140" height="140"></img>
                        <br />
                        <br />
                        <h2 className="carpool-headings">Heading 2</h2>
                        <p>Sample paragragh</p>
                    </MDBCol>
                    <br />
                    <br />
                    <MDBCol lg="3">
                        <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder" width="140" height="140"></img>
                        <br />
                        <br />
                        <h2 className="carpool-headings">Heading 3</h2>
                        <p>Sample paragragh</p>
                    </MDBCol>
                    <br />
                    <br />
                    <MDBCol lg="3">
                        <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder" width="140" height="140"></img>
                        <br />
                        <br />
                        <h2 className="carpool-headings">Heading 4</h2>
                        <p>Sample paragragh</p>
                    </MDBCol>
                    <br />
                    <br />
                </MDBRow>
            </MDBContainer>
        </div>

    );

}

export default Home;
