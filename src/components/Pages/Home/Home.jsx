import React from 'react';
import { Helmet } from 'react-helmet';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import './Home.css';
import carpool from '../../../assets/images/car-sharing.png';
import carpool2 from '../../../assets/images/car-sharing 2.png';
import carpool3 from '../../../assets/images/car-sharing 3.png';
import driverCarpool from '../../../assets/images/driver-carpool.png';
import driverCarpool2 from '../../../assets/images/driver-carpool 2.png';
import driverCarpool3 from '../../../assets/images/driver-carpool 3.png';
import icon1 from '../../../assets/images/WeRide Icons 01.png';
import icon2 from '../../../assets/images/WeRide Icons 02.png';
import icon3 from '../../../assets/images/WeRide Icons 03.png';
import icon4 from '../../../assets/images/WeRide Icons 04.png';

function Home() {
    const headingStyle = {
        color: "white",
        fontWeight: "450",
        fontSize: "3.5rem"

    };

    return (
        <div>
            {/* Crousel wallpaper */}
            <div className="background img-fluid">
                <Helmet>
                    <title>Home</title>
                </Helmet>


                <MDBContainer fluid>
                    <MDBRow >

                        <MDBCol md="8" className="text-top-spacing">
                            <div>
                                <h1 style={headingStyle}>Travel Smarter. Faster. Easier.</h1>
                            </div>
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
                        <img src={icon1} alt="Economical icon" width="170" height="180"></img>
                        <br />
                        <br />
                        <h2 className="carpool-headings">Economical</h2>
                        <p className="home-carpool-paragragh">With shared rides the fare gets divided among the number of riders.</p>
                    </MDBCol>
                    <br />
                    <br />
                    <MDBCol lg="3">
                        <img src={icon2} alt="Traffic icon" width="185" height="180"></img>
                        <br />
                        <br />
                        <h2 className="carpool-headings">Less Traffic</h2>
                        <p className="home-carpool-paragragh">With more people carpooling there will be less cars on the road.</p>
                    </MDBCol>
                    <br />
                    <br />
                    <MDBCol lg="3">
                        <img src={icon3} alt="Pollution icon" width="170" height="180"></img>
                        <br />
                        <br />
                        <h2 className="carpool-headings">Reduced Pollution</h2>
                        <p>Less cars on the road keeps the air clean.</p>
                    </MDBCol>
                    <br />
                    <br />
                    <MDBCol lg="3">
                        <img src={icon4} alt="Socialize icon" width="178" height="177"></img>
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

            <MDBContainer fluid style={{ padding: "50px" }}>
                <MDBRow>

                    <MDBCol lg="6" className="text-left">
                        <br />
                        <br />
                        <br />
                        <h1 className="home-featurette-heading">Travel on the same route and save both money and time.</h1>
                        <p className="home-featurette-paragragh ">WERide works by connecting the rides of people who have the same destination and route. The fare is divided among the number of riders and you save time by riding together.</p>
                    </MDBCol>

                    <MDBCol lg="6" className="img-fluid">
                        <img src={carpool3} alt="carpool-concept" width="700" height="700" className="mx-auto img-fluid" />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            {/* Featurette end */}



            {/* Driver Featurette */}
            <div>
                <hr className="home-hr-style" />
                <MDBContainer>
                    <br />
                    <br />
                    <br />
                    <h1 className="home-featurette-heading">Why Drive for us?</h1>
                </MDBContainer>

                <MDBContainer fluid style={{ padding: "50px" }}>
                    <MDBRow>

                        <MDBCol lg="6" className="img-fluid">
                            <img src={driverCarpool} alt="carpool-concept" width="500" height="500" className="mx-auto img-fluid" />
                        </MDBCol>

                        <MDBCol lg="6" className="text-left">
                            <br />
                            <br />
                            <br />
                            <h1 className="home-featurette-heading">Financial Stability.</h1>
                            <p className="home-featurette-paragragh ">The rising expense of car booking applications has led to people seeking shared rides. The high demand will result in a steady income.</p>
                        </MDBCol>


                    </MDBRow>
                </MDBContainer>

                <MDBContainer fluid style={{ padding: "50px" }}>
                    <MDBRow>

                        <MDBCol lg="6" className="text-left">
                            <br />
                            <br />
                            <br />
                            <h1 className="home-featurette-heading">Best Customers.</h1>
                            <p className="home-featurette-paragragh ">It is WERide's utmost priority to bring you the best customers for a pleasant and hassle-free trip.</p>
                        </MDBCol>

                        <MDBCol lg="6" className="img-fluid">
                            <img src={driverCarpool2} alt="carpool-concept" width="500" height="500" className="mx-auto img-fluid" />
                        </MDBCol>


                    </MDBRow>
                </MDBContainer>

                <MDBContainer fluid style={{ padding: "50px" }}>
                    <MDBRow>

                        <MDBCol lg="6" className="img-fluid">
                            <img src={driverCarpool3} alt="carpool-concept" width="400" height="400" className="mx-auto img-fluid" />
                        </MDBCol>

                        <MDBCol lg="6" className="text-left">
                            <br />
                            <br />
                            <h1 className="home-featurette-heading">Independance.</h1>
                            <p className="home-featurette-paragragh ">Drivers will have the comfort of working whenever and wherever they want and at a time of their convenience.</p>
                        </MDBCol>


                    </MDBRow>
                </MDBContainer>

            </div>
            {/* Driver Featurette End */}



        </div >

    );

}

export default Home;
