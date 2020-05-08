import React from "react";
import { Helmet } from "react-helmet";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";
import "./How.css";
import { Link } from "react-router-dom";
import stepperPlaceholder from "../../../assets/images/stepper-placeholder.png";
import stepperPlaceholder2 from "../../../assets/images/stepper-placeholder2.png";
import stepperPlaceholder3 from "../../../assets/images/stepper-placeholder3.png";
import stepperPlaceholder4 from "../../../assets/images/stepper-placeholder4.png";
import standard from "../../../assets/images/standard-ride.png";
import rickshaw from "../../../assets/images/rickshaw-ride.png";
import package1 from "../../../assets/images/package1.png";
import package2 from "../../../assets/images/package2.png";
import package3 from "../../../assets/images/package3.png";

class How extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active1: true,
      active2: false,
      active3: false,
      active4: false,
      activeItem: "1",
    };
  }

  toggleClass = (number) => (e) => {
    var stepper1 = document.getElementById("stepper1");
    var stepper2 = document.getElementById("stepper2");
    var stepper3 = document.getElementById("stepper3");
    var stepper4 = document.getElementById("stepper4");

    if (number === 1) {
      const currentState = this.state.active1;
      this.setState({
        active1: !currentState,
        active2: false,
        active3: false,
        active4: false,
      });
      stepper1.style.display = "block";
      stepper2.style.display = "none";
      stepper3.style.display = "none";
      stepper4.style.display = "none";
    } else if (number === 2) {
      const currentState = this.state.active2;
      this.setState({
        active1: false,
        active2: !currentState,
        active3: false,
        active4: false,
      });
      stepper1.style.display = "none";
      stepper2.style.display = "block";
      stepper3.style.display = "none";
      stepper4.style.display = "none";
    } else if (number === 3) {
      const currentState = this.state.active3;
      this.setState({
        active1: false,
        active2: false,
        active3: !currentState,
        active4: false,
      });
      stepper1.style.display = "none";
      stepper2.style.display = "none";
      stepper3.style.display = "block";
      stepper4.style.display = "none";
    } else if (number === 4) {
      const currentState = this.state.active4;
      this.setState({
        active1: false,
        active2: false,
        active3: false,
        active4: !currentState,
      });
      stepper1.style.display = "none";
      stepper2.style.display = "none";
      stepper3.style.display = "none";
      stepper4.style.display = "block";
    }
  };

  toggle = (tab) => (e) => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab,
      });
    }
  };

  render() {
    return (
      <div>
        <div className="how-background img-fluid">
          <Helmet>
            <title>How it works</title>
          </Helmet>

          {/* carousel image */}
          <MDBContainer fluid>
            <MDBRow className="text-left">
              <MDBCol md="7"></MDBCol>
              <MDBCol md="5">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h1 className="how-carousel-heading">
                  Making your daily commutes easier and cheaper.
                </h1>
                <Link to="/ride">
                  <MDBBtn color="#06c432">
                    {" "}
                    <b>Ride now</b>{" "}
                  </MDBBtn>
                </Link>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          {/* carousel image end */}
        </div>

        <br />
        <br />
        <br />
        <br />

        <div>
          {/* featurette after carousel */}
          <MDBContainer>
            <MDBRow>
              <MDBCol lg="4">
                <MDBIcon icon="car" size="4x" className="how-car-icon" />
                <br />
                <br />
                <h5>
                  <b>Book a ride that suits you</b>
                </h5>
                <p className="home-carpool-paragragh">
                  Select from our vehicle options and get a ride in minutes or
                  schedule one for later.
                </p>
              </MDBCol>

              <MDBCol lg="4">
                <MDBIcon
                  icon="map-marked-alt"
                  size="4x"
                  className="how-map-icon"
                />
                <br />
                <br />
                <h5>
                  <b>Track your ride</b>
                </h5>
                <p className="home-carpool-paragragh">
                  From the moment your driver is assigned till you get to your
                  destination, track your ride in real time or share your
                  details with your loved ones.
                </p>
              </MDBCol>

              <MDBCol lg="4">
                <MDBIcon
                  icon="money-bill-alt"
                  size="4x"
                  className="how-pay-icon"
                />
                <br />
                <br />
                <h5>
                  <b>Make a payment</b>
                </h5>
                <p className="home-carpool-paragragh">
                  You can choose to pay in cash or with the credits from your
                  app wallet.{" "}
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          {/* featurette after carousel end */}
        </div>

        <br />
        <br />
        <br />
        <br />
        {/* Stepper start */}
        <div>
          <MDBContainer fluid className="how-container-bg">
            <br />
            <br />
            <h3>
              <b>
                <strong>Follow These Simple Steps </strong>
              </b>
            </h3>
            <br />
            <br />
            <br />
            <MDBRow className="justify-content-center">
              <MDBCol
                lg="3"
                md="5"
                sm="4"
                size="8"
                className="offset-lg-2 offset-sm-0"
              >
                <br />

                <img
                  id="stepper1"
                  className="img-fluid how-stepper-fade fade"
                  src={stepperPlaceholder}
                  alt=""
                />

                <img
                  id="stepper2"
                  className="img-fluid how-stepper-display how-stepper-fade fade"
                  src={stepperPlaceholder2}
                  alt=""
                />

                <img
                  id="stepper3"
                  className="img-fluid how-stepper-display how-stepper-fade fade"
                  src={stepperPlaceholder3}
                  alt=""
                />

                <img
                  id="stepper4"
                  className="img-fluid how-stepper-display how-stepper-fade fade"
                  src={stepperPlaceholder4}
                  alt=""
                />

                <br />
                <br />
              </MDBCol>

              <MDBCol lg="5" md="7" sm="8">
                <div
                  className={
                    "how-step-card " + (this.state.active1 ? "active" : null)
                  }
                  onClick={this.toggleClass(1)}
                >
                  <div className="how-step-counter">
                    <span>1</span>
                  </div>
                  <div className="how-step-body">
                    <h5 className="how-step-title">
                      <b>Set your pickup location</b>
                    </h5>
                    <p className="how-step-description">
                      Search for a location or drop a pin on the map.
                    </p>
                  </div>
                </div>

                <div
                  className={
                    "how-step-card " + (this.state.active2 ? "active" : null)
                  }
                  onClick={this.toggleClass(2)}
                >
                  <div className="how-step-counter">
                    <span>2</span>
                  </div>
                  <div className="how-step-body">
                    <h5 className="how-step-title">
                      <b>Choose your vehicle type</b>
                    </h5>
                    <p className="how-step-description">
                      Choose how you want to get there.
                    </p>
                  </div>
                </div>

                <div
                  className={
                    "how-step-card " + (this.state.active3 ? "active" : null)
                  }
                  onClick={this.toggleClass(3)}
                >
                  <div className="how-step-counter">
                    <span>3</span>
                  </div>
                  <div className="how-step-body">
                    <h5 className="how-step-title">
                      <b>Share your ride with other passengers</b>
                    </h5>
                    <p className="how-step-description">
                      Pool your ride with other people with the same
                      destination.
                    </p>
                  </div>
                </div>

                <div
                  className={
                    "how-step-card " + (this.state.active4 ? "active" : null)
                  }
                  onClick={this.toggleClass(4)}
                >
                  <div className="how-step-counter">
                    <span>4</span>
                  </div>
                  <div className="how-step-body">
                    <h5 className="how-step-title">
                      <b>Pay after the trip is completed.</b>
                    </h5>
                    <p className="how-step-description">
                      Save on the fare and pay for your shared ride either with
                      cash or the app wallet.
                    </p>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
            <br />
            <br />
            <br />
            <br />
          </MDBContainer>
        </div>
        <br />
        <br />
        <br />
        <br />
        {/* Stepper end */}

        {/* Fleet tabs start */}
        <div>
          <MDBContainer fluid>
            <h3>
              <b>
                <strong>Meet Our Fleet </strong>
              </b>
            </h3>
            <MDBContainer>
              <MDBNav className="nav-tabs mt-5 nav-justified">
                <MDBNavItem>
                  <MDBNavLink
                    link
                    to="#"
                    active={this.state.activeItem === "1"}
                    onClick={this.toggle("1")}
                    role="tab"
                  >
                    <img
                      className="img-fluid how-fleet-car"
                      src={standard}
                      alt=""
                    ></img>
                    <br />
                    Standard
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    link
                    to="#"
                    active={this.state.activeItem === "2"}
                    onClick={this.toggle("2")}
                    role="tab"
                  >
                    <img
                      className="img-fluid how-fleet-rickshaw"
                      src={rickshaw}
                      alt=""
                    />
                    <br />
                    Rickshaw
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBTabContent activeItem={this.state.activeItem}>
                <MDBTabPane
                  tabId="1"
                  role="tabpanel"
                  className="how-container-bg"
                >
                  <MDBRow>
                    <MDBCol md="5">
                      <img
                        className="img-fluid mt-5 mb-5"
                        src={standard}
                        alt=""
                      />
                    </MDBCol>
                    <MDBCol md="7" className="text-left">
                      <div className="how-fleet-text-margin">
                        <h3 className="">
                          <b>Standard</b>
                        </h3>
                        <p>
                          Select a standard car with four seats for hassle free
                          commutes to your destination with minimum fares.
                        </p>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBTabPane>
                <MDBTabPane
                  tabId="2"
                  role="tabpanel"
                  className="how-container-bg "
                >
                  <MDBRow>
                    <MDBCol md="5">
                      <img
                        className="img-fluid mt-5 mb-5 how-fleet-rickshaw2"
                        src={rickshaw}
                        alt=""
                      />
                    </MDBCol>
                    <MDBCol md="7" className="text-left">
                      <div className="how-fleet-text-margin">
                        <h3 className="">
                          <b>Rickshaw</b>
                        </h3>
                        <p>
                          Select a rickshaw with four to five seats for hassle
                          free commutes to your destination with even less
                          fares.
                        </p>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBTabPane>
              </MDBTabContent>
            </MDBContainer>
          </MDBContainer>
        </div>
        {/* Fleet tabs end */}

        <br />
        <br />
        <hr className="how-hr-style" />
        <br />
        <br />

        {/* Packages cards start */}
        <div>
          <MDBContainer fluid>
            <h3>
              <b>
                <strong>Our Packages</strong>
              </b>
            </h3>

            <MDBContainer>
              <MDBRow className="mt-5">
                <MDBCol md="4" className="mt-5">
                  <MDBCol style={{ maxWidth: "22rem" }}>
                    <MDBCard>
                      <MDBCardImage
                        className="img-fluid"
                        src={package1}
                        waves
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          <b>Weekly</b>
                        </MDBCardTitle>
                        <MDBCardText>
                          You will be able to book a driver of your choice based
                          on their reviews and rating for a week of shared
                          travel.
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBCol>

                <MDBCol md="4" className="mt-5">
                  <MDBCol style={{ maxWidth: "22rem" }}>
                    <MDBCard>
                      <MDBCardImage
                        className="img-fluid"
                        src={package2}
                        waves
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          <b>Monthly</b>
                        </MDBCardTitle>
                        <MDBCardText>
                          You will be able to book a driver of your choice based
                          on their reviews and rating for a month of shared
                          travel.
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBCol>

                <MDBCol md="4" className="mt-5">
                  <MDBCol style={{ maxWidth: "22rem" }}>
                    <MDBCard>
                      <MDBCardImage
                        className="img-fluid"
                        src={package3}
                        waves
                      />
                      <MDBCardBody>
                        <MDBCardTitle>
                          <b>Quarterly</b>
                        </MDBCardTitle>
                        <MDBCardText>
                          You will be able to book a driver of your choice based
                          on their reviews and rating for 3 months (one quarter)
                          of shared travel.
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBContainer>
          {/* package crousel image */}
          <div className="how-package img-fluid mt-5">
            {/* carousel image */}
            <MDBContainer fluid>
              <MDBRow className="text-left">
                <MDBCol md="7"></MDBCol>
                <MDBCol md="5">
                  <br />
                  <br />
                  <br />
                  <h1 className="how-carousel-heading">
                    Subscribe to a package and save big!
                  </h1>
                  <h1 className="how-carousel-heading">
                    Your daily commutes made easier.
                  </h1>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
            {/* carousel image end */}
          </div>
        </div>
        {/* Packages cards end */}
      </div>
    );
  }
}

export default How;
