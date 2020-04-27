import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { MDBContainer } from "mdbreact";
import "./DriverEditPackages.css";

class DriverEditPackages extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Manage Packages</title>
        </Helmet>
        <MDBContainer>
          <h1>Manage Packages</h1>
        </MDBContainer>
      </div>
    );
  }
}

export default DriverEditPackages;
