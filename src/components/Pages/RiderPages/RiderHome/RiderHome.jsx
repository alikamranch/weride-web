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
  MDBBtn,
} from "mdbreact";
import "./RiderHome.css";

import carousel1 from "../../../../assets/images/carousel/carousel1.png";
import carousel2 from "../../../../assets/images/carousel/carousel2.jpg";
import carousel3 from "../../../../assets/images/carousel/carousel3.jpg";
import carousel4 from "../../../../assets/images/carousel/carousel4.jpg";
import ten from "../../../../assets/images/Discounts/10.png";
import fifteen from "../../../../assets/images/Discounts/15.png";
import twenty from "../../../../assets/images/Discounts/20.png";

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

        {/* Promos start */}
        <div className="mt-5">
          <MDBContainer fluid>
            <MDBContainer>
              <h1 className="text-left">Promos</h1>
              <hr />
              <MDBRow>
                <MDBCol md="4" className="mt-5">
                  <MDBCol style={{ maxWidth: "22rem" }}>
                    <MDBCard>
                      <MDBCardImage className="img-fluid" src={ten} waves />
                      <MDBCardBody>
                        <MDBCardTitle>
                          <b>Get 10% off!</b>
                        </MDBCardTitle>
                        <MDBCardText>
                          Get 10% off on your next ride.
                        </MDBCardText>
                        <MDBBtn href="#" color="orange">
                          Apply
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBCol>

                <MDBCol md="4" className="mt-5">
                  <MDBCol style={{ maxWidth: "22rem" }}>
                    <MDBCard>
                      <MDBCardImage className="img-fluid" src={fifteen} waves />
                      <MDBCardBody>
                        <MDBCardTitle>
                          <b>Get 20% off!</b>
                        </MDBCardTitle>
                        <MDBCardText>Get 20% off your next ride.</MDBCardText>
                        <MDBBtn href="#" color="orange">
                          Apply
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBCol>

                <MDBCol md="4" className="mt-5">
                  <MDBCol style={{ maxWidth: "22rem" }}>
                    <MDBCard>
                      <MDBCardImage className="img-fluid" src={twenty} waves />
                      <MDBCardBody>
                        <MDBCardTitle>
                          <b>Get 30% off!</b>
                        </MDBCardTitle>
                        <MDBCardText>Get 30% off your next ride.</MDBCardText>
                        <MDBBtn href="#" color="orange">
                          Apply
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBContainer>
        </div>
        {/* Promos end */}

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
                    you to enjoy your daily commutes.
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
                    feature that will allow you to make your custom package.
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
                    with your driver before confirming your ride.
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
                    <b>Debit/Credit Card payment</b>
                  </MDBCardTitle>
                  <MDBCardText className="rider-home-text-color">
                    We wil be adding card payment method option so that you dont
                    always have to pay with cash after your ride ends.
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
