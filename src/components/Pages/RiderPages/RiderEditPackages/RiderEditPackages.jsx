import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { MDBContainer } from "mdbreact";
import "./RiderEditPackages.css";

class RiderEditPackages extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Edit Packages</title>
        </Helmet>
        <MDBContainer>
          <h1>Manage Packages</h1>
        </MDBContainer>
      </div>
    );
  }
}

export default RiderEditPackages;
