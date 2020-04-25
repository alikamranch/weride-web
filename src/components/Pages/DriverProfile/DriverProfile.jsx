import React from "react";
import { Helmet } from "react-helmet";
import { MDBContainer, MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";
import "./DriverProfile.css";

class DriverProfile extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Helmet>
            <title>Your Profile</title>
          </Helmet>
          <MDBContainer>
            <h1>Driver Profile</h1>
            <Link to="/">
              <MDBBtn color="#06c432" onClick={this.props.driverLoginHandler}>
                {" "}
                <b>Logout</b>{" "}
              </MDBBtn>
            </Link>
          </MDBContainer>
        </div>
      </div>
    );
  }
}

export default DriverProfile;
