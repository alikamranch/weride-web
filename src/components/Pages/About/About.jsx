import React from 'react';
import { Helmet } from 'react-helmet';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import logo from '../../../assets/images/WERide Transparent 2.png';

function About() {
    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <MDBContainer>
                <br />
                <br />
                <br />
                <br />
                <br />
                <MDBContainer>

                    <h1 className="text-left">About Us</h1>
                    <hr />

                </MDBContainer>

                <br />
                <br />
                <br />
                <MDBRow className="justify-content-left">
                    <MDBCol lg="5" className="img-fluid">
                        <img src={logo} alt="carpool-concept" width="400" height="400" className="mx-auto img-fluid" />
                        <br />
                        <br />
                        <br />
                    </MDBCol>

                    <MDBCol lg="7">
                        <h5 className="text-left">WEride is an FYP developed by a group of 3 students from the FA16 batch. The reason that an existing business model was selected was to convert it into something different. We wish to make an application that promotes the use of carpool facilities to reduce travel expenses and time. Our idea also helps the drivers to save fuel costs for different trips and time as less cars on the road means less traffic jams. With this project we plan to make commutes easy, cheap and accessible to everyone.</h5>
                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </div>
    );
}

export default About;
