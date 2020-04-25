import React from "react";
import { Helmet } from "react-helmet";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import "./Ride.css";

class Ride extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: null,
      email: "",
      password: "",
      number: "",
      type: "",
    };
  }

  updateInput = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  updateSelect = (e) => {
    this.setState({
      ...this.state,
      type: e.target.value,
    });
  };

  logState = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Helmet>
          <title>Let's Ride!</title>
        </Helmet>
        <div className="mt-5">
          <MDBContainer>
            <h1 className="text-left">Join now to Ride with us</h1>
            <hr />
            <MDBContainer>
              <MDBRow className="justify-content-center">
                <MDBCol md="6">
                  <form>
                    <div className="grey-text mb-5">
                      <MDBInput
                        label="Type your name"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.updateInput}
                      />
                      <MDBInput
                        label="Type your age"
                        type="number"
                        name="age"
                        value={this.state.age}
                        onChange={this.updateInput}
                      />
                      <MDBInput
                        label="Type your email"
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.updateInput}
                      />
                      <MDBInput
                        label="Type your password"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.updateInput}
                      />
                      <MDBInput
                        label="Type your number"
                        type="text"
                        name="number"
                        value={this.state.number}
                        onChange={this.updateInput}
                      />

                      <select
                        className="browser-default custom-select"
                        value={this.state.type}
                        onChange={this.updateSelect}
                      >
                        <option>Account Type</option>
                        <option value="Rider">Rider</option>
                        <option value="Driver">Driver</option>
                      </select>
                    </div>
                    <div className="text-center">
                      <MDBBtn
                        href="#"
                        color="#0d5d20"
                        className="button-color"
                        onClick={this.logState}
                      >
                        Sign Up
                      </MDBBtn>
                      <MDBBtn
                        href="#"
                        color="#4285f4"
                        className="google-button-color"
                      >
                        <MDBIcon fab icon="google" size="lg" /> Sign Up with
                        Google
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBContainer>
        </div>
      </div>
    );
  }
}

export default Ride;
