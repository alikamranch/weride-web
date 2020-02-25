import React from 'react';
import { Helmet } from 'react-helmet';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdbreact';
import './Home.css'
import carpool from '../../../assets/images/car-sharing.png';
import carpool2 from '../../../assets/images/car-sharing 2.png';

function Home() {
    const headingStyle = {
        color: "white",
        fontWeight: "450",
        fontSize: "3.5rem"

    }

    return (
        <div>
            {/* Crousel wallpaper */}
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
            {/* Crousel wallpaper end */}

            {/* Carpool Section */}
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
                        <h2 className="carpool-headings">Economical</h2>
                        <p className="home-carpool-paragragh">With shared rides the fare gets divided among the number of riders.</p>
                    </MDBCol>
                    <br />
                    <br />
                    <MDBCol lg="3">
                        <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder" width="140" height="140"></img>
                        <br />
                        <br />
                        <h2 className="carpool-headings">Less Traffic</h2>
                        <p className="home-carpool-paragragh">With more people carpooling there will be less cars on the road.</p>
                    </MDBCol>
                    <br />
                    <br />
                    <MDBCol lg="3">
                        <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder" width="140" height="140"></img>
                        <br />
                        <br />
                        <h2 className="carpool-headings">Reduced Pollution</h2>
                        <p>Less cars on the road keeps the air clean.</p>
                    </MDBCol>
                    <br />
                    <br />
                    <MDBCol lg="3">
                        <img class="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder" width="140" height="140"></img>
                        <br />
                        <br />
                        <h2 className="carpool-headings">Socialize</h2>
                        <p>Shared trips allow you to interact while your journey.</p>
                    </MDBCol>
                    <br />
                    <br />
                </MDBRow>
            </MDBContainer>
            {/* Carpool Section end */}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* Featurette */}
            <div className="home-featurette-background img-fluid">
            </div>
            <MDBContainer>
                <div className="home-featurette-container-inner text-left">
                    <MDBRow>
                        <MDBCol lg="6">
                            <h1 className="home-featurette-heading">Why ride with us?</h1>
                            <p className="home-featurette-paragragh ">WERide is the first dedicated carpooling service in Pakistan. Our aim is to provide cheap journeys with the utmost security and comfortable experience.</p>
                        </MDBCol>
                        <MDBCol lg="6" className="img-fluid">
                            <img src={carpool} alt="carpool-concept" className="mx-auto home-featurette-carpoolimg img-fluid" />
                        </MDBCol>
                    </MDBRow>
                </div>
            </MDBContainer>
            {/* Featurette end */}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <MDBContainer fluid style={{ padding: "50px" }}>
                <MDBRow>
                    <MDBCol lg="6" className="img-fluid">
                        <img src={carpool2} alt="carpool-concept" width="700" height="700" className="mx-auto img-fluid" />
                    </MDBCol>

                    <MDBCol lg="6" className="text-left">
                        <br />
                        <br />
                        <br />
                        <h1 className="home-featurette-heading">Keep making friends on the go.</h1>
                        <p className="home-featurette-paragragh ">Our main purpose is to bring the Pakistani community together. We encourage interaction during the journey. What's better than paying less and spending some quality time right?</p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>



        </div >

    );

}

export default Home;
