import React from "react";
import { Helmet } from "react-helmet";
import { auth, firestore } from "../../firebase";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import "./Ride.css";

class Ride extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        active: true,
        name: "",
        age: null,
        email: "",
        password: "",
        number: "",
        gender: "",
        type: "",
      },
    };
  }

  updateInput = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]:
          e.target.type === "number"
            ? parseInt(e.target.value, 10)
            : e.target.value,
      },
    });
  };

  updateSelect = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        type: e.target.value,
      },
    });
  };

  updateRadiobuttons = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        gender: e.target.value,
      },
    });
  };

  handleUserSubmit = (event) => {
    event.preventDefault();
    const email = this.state.user.email;
    const password = this.state.user.password;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        return firestore
          .collection("weride")
          .doc("user")
          .collection("users")
          .doc(cred.user.uid)
          .set({
            active: this.state.user.active,
            age: this.state.user.age,
            email: email,
            gender: this.state.user.gender,
            name: this.state.user.name,
            number: this.state.user.number,
            type: this.state.user.type,
          });
      })
      .then(() => {
        this.setState({
          user: {
            active: true,
            name: "",
            age: null,
            email: "",
            password: "",
            number: "",
            gender: "",
            type: "",
          },
        });
        console.log("User Created.");
      })
      .catch(function (error) {
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };

  logState = (event) => {
    event.preventDefault();
    console.log(this.state.user);
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
                  <form onSubmit={this.handleUserSubmit}>
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

                      {/* Radio buttons start */}
                      <div className="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id="defaultInline1"
                          name="inlineDefaultRadiosExample"
                          value="male"
                          onChange={this.updateRadiobuttons}
                        />
                        <label
                          className="custom-control-label"
                          for="defaultInline1"
                        >
                          Male
                        </label>
                      </div>

                      <div className="custom-control custom-radio custom-control-inline">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id="defaultInline2"
                          name="inlineDefaultRadiosExample"
                          value="female"
                          onChange={this.updateRadiobuttons}
                        />
                        <label
                          className="custom-control-label"
                          for="defaultInline2"
                        >
                          Female
                        </label>
                      </div>
                      {/* Radio buttons end */}

                      <br />
                      <br />
                      <select
                        className="browser-default custom-select"
                        value={this.state.type}
                        onChange={this.updateSelect}
                      >
                        <option>Account Type</option>
                        <option value="rider">Rider</option>
                        <option value="driver">Driver</option>
                      </select>
                    </div>
                    <div className="text-center">
                      <MDBBtn
                        color="#0d5d20"
                        className="button-color"
                        type="submit"
                      >
                        Sign Up
                      </MDBBtn>
                      {/* <MDBBtn color="#4285f4" className="google-button-color">
                        <MDBIcon fab icon="google" size="lg" /> Sign Up with
                        Google
                      </MDBBtn> */}
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
