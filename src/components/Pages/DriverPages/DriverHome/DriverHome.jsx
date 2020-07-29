import React, { Component } from "react";
import { Helmet } from "react-helmet";
import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";
import carousel1 from "../../../../assets/images/carousel/carousel1.png";
import carousel2 from "../../../../assets/images/carousel/carousel2.jpg";
import carousel3 from "../../../../assets/images/carousel/carousel3.jpg";
import carousel4 from "../../../../assets/images/carousel/carousel4.jpg";
import tip1 from "../../../../assets/images/driver tips/1.png";
import tip2 from "../../../../assets/images/driver tips/2.png";
import tip3 from "../../../../assets/images/driver tips/3.png";
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
        {/* Carousel Start */}
        <div className="mt-5">
          <MDBContainer>
            <h1 className="text-left">Welcome</h1>
            <hr />
            <MDBCarousel
              activeItem={1}
              length={4}
              showControls={true}
              showIndicators={true}
              className="z-depth-1"
            >
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={carousel1}
                      alt="First slide"
                    />
                  </MDBView>
                  <MDBCarouselCaption>
                    <h3 className="h3-responsive">
                      <b>With WERide you can travel...</b>
                    </h3>
                    {/* <p>First text</p> */}
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={carousel2}
                      alt="Second slide"
                    />
                    <MDBMask overlay="black-light" />
                  </MDBView>
                  <MDBCarouselCaption>
                    <h3 className="h3-responsive">
                      <b>Smarter...</b>
                    </h3>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={carousel3}
                      alt="Third slide"
                    />
                    <MDBMask overlay="black-slight" />
                  </MDBView>
                  <MDBCarouselCaption>
                    <h3 className="h3-responsive">
                      <b>Faster...</b>
                    </h3>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="4">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={carousel4}
                      alt="Fourth slide"
                    />
                    <MDBMask overlay="black-slight" />
                  </MDBView>
                  <MDBCarouselCaption>
                    <h3 className="h3-responsive">
                      <b>Easier...</b>
                    </h3>
                  </MDBCarouselCaption>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBContainer>
        </div>
        {/* carousel end */}

        {/* Tips start */}
        <div className="mt-5">
          <MDBContainer fluid>
            <MDBContainer>
              <h1 className="text-left">Tips for you</h1>
              <hr />
              <MDBRow>
                <MDBCol md="4" className="mt-5">
                  <MDBCol style={{ maxWidth: "22rem" }}>
                    <MDBCard>
                      <MDBCardImage className="img-fluid" src={tip1} waves />
                      <MDBCardBody>
                        <MDBCardTitle>
                          <b>Work on your own time and ease</b>
                        </MDBCardTitle>

                        <MDBCardText>
                          With WERide you are not entitiles to be driving 24/7.
                          Work in the hours you're comfortable in.
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBCol>

                <MDBCol md="4" className="mt-5">
                  <MDBCol style={{ maxWidth: "22rem" }}>
                    <MDBCard>
                      <MDBCardImage className="img-fluid" src={tip2} waves />
                      <MDBCardBody>
                        <MDBCardTitle>
                          <b>Avoid riders that are far apart</b>
                        </MDBCardTitle>

                        <MDBCardText>
                          Try to ignore riders traveling for the same
                          destination but are very far apart. Picking them up
                          may take alot of time.
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBCol>

                <MDBCol md="4" className="mt-5">
                  <MDBCol style={{ maxWidth: "22rem" }}>
                    <MDBCard>
                      <MDBCardImage className="img-fluid" src={tip3} waves />
                      <MDBCardBody>
                        <MDBCardTitle>
                          <b>Drive safely and with caution</b>
                        </MDBCardTitle>
                        <MDBCardText>
                          Make sure that you drive cautiously and ensure utmost
                          safety measures for both yourself and the rider.
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBContainer>
        </div>
        {/* Tips end */}

        {/* Latest news start */}
        <div className="mt-5">
          <MDBContainer fluid>
            <MDBContainer>
              <h1 className="text-left">Latest News</h1>
              <hr />
            </MDBContainer>

            <MDBRow>
              <MDBCol md="3" className="mt-5">
                <MDBCard
                  className="card-body"
                  style={{ marginTop: "1rem" }}
                  color="secondary-color-dark"
                >
                  <MDBCardTitle className="rider-home-text-color">
                    <b>New fleet coming soon!</b>
                  </MDBCardTitle>
                  <MDBCardText className="rider-home-text-color">
                    We wil be adding more vehicles in our fleet on launch for
                    you to add a variety of vehicles through your account.
                  </MDBCardText>
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" className="mt-5">
                <MDBCard
                  className="card-body"
                  style={{ marginTop: "1rem" }}
                  color="info-color-dark"
                >
                  <MDBCardTitle className="rider-home-text-color">
                    <b>New Packages on their way!</b>
                  </MDBCardTitle>
                  <MDBCardText className="rider-home-text-color">
                    We wil be adding more packages and we will also be adding a
                    feature that will allow you to ride for a custom package.
                  </MDBCardText>
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" className="mt-5">
                <MDBCard
                  className="card-body"
                  style={{ marginTop: "1rem" }}
                  color="success-color-dark"
                >
                  <MDBCardTitle className="rider-home-text-color">
                    <b>Chat feature coming soon!</b>
                  </MDBCardTitle>
                  <MDBCardText className="rider-home-text-color">
                    We wil be adding chat to the App so that you can communicate
                    with the rider before confirming the ride.
                  </MDBCardText>
                </MDBCard>
              </MDBCol>
              <MDBCol md="3" className="mt-5">
                <MDBCard
                  className="card-body"
                  style={{ marginTop: "1rem" }}
                  color="warning-color-dark"
                >
                  <MDBCardTitle className="rider-home-text-color">
                    <b>Cash withdrawal options</b>
                  </MDBCardTitle>
                  <MDBCardText className="rider-home-text-color">
                    We wil be adding cash withdrawal option to banks near you
                    very soon for instant access to your earnings.
                  </MDBCardText>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        {/* Latest news end */}
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default DriverHome;
