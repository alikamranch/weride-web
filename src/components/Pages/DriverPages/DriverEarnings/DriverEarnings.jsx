import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { MDBContainer } from "mdbreact";
import "./DriverEarnings.css";

class DriverEarnings extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Earnings</title>
        </Helmet>
        <MDBContainer>
          <h1>Driver Earnings</h1>
        </MDBContainer>
      </div>
    );
  }
}

export default DriverEarnings;
