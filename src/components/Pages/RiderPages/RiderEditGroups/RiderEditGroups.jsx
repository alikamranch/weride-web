import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { MDBContainer } from "mdbreact";
import "./RiderEditGroups.css";

class RiderEditGroups extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Edit Groups</title>
        </Helmet>
        <MDBContainer>
          <h1>Edit Groups</h1>
        </MDBContainer>
      </div>
    );
  }
}

export default RiderEditGroups;
