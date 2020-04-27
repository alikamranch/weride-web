import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { MDBContainer } from "mdbreact";
import "./DriverProfile.css";

class DriverProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Profile</title>
        </Helmet>
        <MDBContainer>
          <h1>Profile</h1>
        </MDBContainer>
      </div>
    );
  }
}

export default DriverProfile;
