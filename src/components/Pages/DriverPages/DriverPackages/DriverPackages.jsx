import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { MDBContainer } from "mdbreact";
import "./DriverPackages.css";

class DriverPackages extends Component {
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

export default DriverPackages;
