import React, { useContext, useState, useEffect } from "react";
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
import { firestore } from "../../../firebase";
import "./DriverProfile.css";

const DriverProfile = () => {
  //used to store packages array from firestore
  const packagesArray = [];
  //package count to display
  const [packageCount, setPackageCount] = useState(0);
  //to get earnings from firestore
  const earningsArray = [];
  //to set total earnings value
  const [totalEarned, setTotalEarned] = useState(0);
  //Top level state context
  const user = useContext(UserContext);
  //to get the uid of the currently logged in user
  const uid = user.uid;

  useEffect(() => {
    //to get how many packages are there
    let pkg = {};
    firestore
      .collection("weride")
      .doc("package")
      .collection("packages")
      .where("driverId", "==", user.uid)
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.exists) {
            packagesArray.push(pkg);
          }
        });
        if (packagesArray.length !== 0) {
          setPackageCount(packagesArray.length);
        }
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });

    //get earnings
    let sum = 0;
    firestore
      .collection("weride")
      .doc("driver_earning")
      .collection("driver_earnings")
      .where("driverId", "==", uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.exists) {
            // console.log(doc.id, " => ", doc.data());
            earningsArray.push(doc.data());
            sum = sum + doc.data().earned;
          }
        });
        setTotalEarned(sum);
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, [user.uid]);

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
                {totalEarned} PKR
              </div>
              <Link to="/driver-earnings">
                <MDBBtn size="sm" className="rider-profile-btn" color="#00c853">
                  View Earnings
                </MDBBtn>
              </Link>

              <br />
              <br />
              <div>
                <strong className="rider-profile-icon">
                  Active Packages:{" "}
                </strong>{" "}
                {packageCount === 0 ? "None" : packageCount}
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
