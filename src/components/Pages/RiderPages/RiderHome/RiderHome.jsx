import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { MDBContainer } from "mdbreact";
import "./RiderHome.css";

export default class RiderHome extends Component {
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
          <h1>Rider Home</h1>
        </MDBContainer>
      </div>
    );
  }
}
