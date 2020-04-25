import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { MDBContainer } from "mdbreact";
import "./RiderEditProfile.css";

class RiderEditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Edit Profile</title>
        </Helmet>
        <MDBContainer>
          <h1>Edit Profile</h1>
        </MDBContainer>
      </div>
    );
  }
}

export default RiderEditProfile;
