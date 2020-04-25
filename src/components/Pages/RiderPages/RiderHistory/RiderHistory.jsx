import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { MDBContainer } from "mdbreact";
import "./RiderHistory.css";

export class RiderHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Ride History</title>
        </Helmet>
        <MDBContainer>
          <h1>Ride History</h1>
        </MDBContainer>
      </div>
    );
  }
}

export default RiderHistory;
