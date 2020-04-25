import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { MDBContainer } from "mdbreact";
import "./RiderPackages.css";

class RiderPackages extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Packages</title>
        </Helmet>
        <MDBContainer>
          <h1>Packages</h1>
        </MDBContainer>
      </div>
    );
  }
}

export default RiderPackages;
