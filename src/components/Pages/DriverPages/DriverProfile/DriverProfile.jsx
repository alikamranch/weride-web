import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBTable,
  MDBTableBody,
  MDBBtn,
} from "mdbreact";
import { UserContext } from "../../../../providers/UserProvider";
import { Link } from "react-router-dom";
import male from "../../../../assets/images/avatars/male.jpg";
import female from "../../../../assets/images/avatars/female.jpg";
import "./DriverProfile.css";

const DriverProfile = () => {
  //Top level state context
  const user = useContext(UserContext);

  return (
    <div>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="mt-5">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="5">
              <img
                src={user.gender === "male" ? male : female}
                alt="Avatar"
                className="rider-profile-avatar img-fluid"
              />
            </MDBCol>

            <MDBCol md="7" className="text-left">
              <br />

              <h1>
                <b>{user.name}</b>
              </h1>
              <h4>{user.email}</h4>
            </MDBCol>
          </MDBRow>
          <hr />
          <MDBRow>
            <MDBCol md="5">
              <div>
                <MDBIcon
                  icon="hand-holding-usd"
                  size="2x"
                  className="rider-profile-icon"
                />{" "}
                0 PKR
              </div>
              <Link to="/driver-earnings">
                <MDBBtn size="sm" className="rider-profile-btn" color="#00c853">
                  View Earnings
                </MDBBtn>
              </Link>

              <br />
              <br />
              <div>
                <strong className="rider-profile-icon">Package: </strong> None
                <br />
                <Link to="driver-packages">
                  <MDBBtn
                    size="sm"
                    className="rider-profile-btn"
                    color="#00c853"
                  >
                    View Packages
                  </MDBBtn>
                </Link>
              </div>
            </MDBCol>
            <MDBCol md="7" className="text-left">
              <div>
                <MDBTable borderless responsive>
                  <MDBTableBody>
                    <tr>
                      <td>
                        <b>Profile Active: </b>
                      </td>
                      <td>{user.active ? "Yes" : "No"}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Age:</b>
                      </td>
                      <td>{user.age}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Email Address:</b>
                      </td>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Gender:</b>
                      </td>
                      <td>{user.gender === "male" ? "Male" : "Female"}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Name:</b>
                      </td>
                      <td>{user.name}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Number:</b>
                      </td>
                      <td>{user.number}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Account Type:</b>
                      </td>
                      <td>{user.type === "rider" ? "Rider" : "Driver"}</td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
};

export default DriverProfile;
