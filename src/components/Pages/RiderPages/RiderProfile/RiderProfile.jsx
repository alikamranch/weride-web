import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { MDBContainer } from "mdbreact";
import "./RiderProfile.css";

export class RiderUser extends Component {
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
          <h1>Rider Profile</h1>
        </MDBContainer>
      </div>
    );
  }
}

export default RiderUser;
