import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { MDBContainer } from "mdbreact";
import "./DriverHome.css";

class DriverHome extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <MDBContainer>
          <h1>Driver Home</h1>
        </MDBContainer>
      </div>
    );
  }
}

export default DriverHome;