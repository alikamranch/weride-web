import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { MDBContainer } from "mdbreact";
import "./RiderGroups.css";

class RiderGroups extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Groups</title>
        </Helmet>
        <MDBContainer>
          <h1>Groups</h1>
        </MDBContainer>
      </div>
    );
  }
}

export default RiderGroups;
