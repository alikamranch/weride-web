import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { firestore } from "../../../firebase";
import { auth } from "../../../firebase";
import { UserContext } from "../../../../providers/UserProvider";
import { useHistory } from "react-router-dom";
import "./DriverEditProfile.css";

const DriverEditProfile = () => {
  //state start
  const user = useContext(UserContext);
  const [personalDetails, setPersonalDetails] = useState({
    name: user.name,
    age: user.age,
    number: user.number,
  });

  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  //state end

  //router history hook
  const history = useHistory();

  //update new input
  const updateInput = (e) => {
    setPersonalDetails({
      ...personalDetails,
      [e.target.name]:
        e.target.type === "number"
          ? parseInt(e.target.value, 10)
          : e.target.value,
    });
  };
  //handle personal details submit
  const handlePersonalDetailsSubmit = (event) => {
    event.preventDefault();
    console.log(personalDetails);
    var userDocRef = firestore
      .collection("weride")
      .doc("user")
      .collection("users")
      .doc(user.uid);
    return userDocRef
      .update({
        name: personalDetails.name,
        age: personalDetails.age,
        number: personalDetails.number,
      })
      .then(function () {
        console.log("Document successfully updated!");
        alert("Personal Details Updated!");
        window.location.reload();
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };

  //update password
  const updateNewPassword = (event) => {
    setNewPassword(event.target.value);
  };
  //update confirm password
  const updateConfirmNewPassword = (event) => {
    setConfirmNewPassword(event.target.value);
  };
  //handle password change submit
  const handleNewPasswordSubmit = (event) => {
    event.preventDefault();
    if (newPassword === confirmNewPassword) {
      console.log(newPassword + "\n" + confirmNewPassword);
      var user = auth.currentUser;
      user
        .updatePassword(newPassword)
        .then(function () {
          auth.signOut().then(() => {
            console.log("User Signed Out.");
            alert("Password Successfully Changed!");
            history.push("/");
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Passwords Don't match!");
    }
  };
  return (
    <div>
      <Helmet>
        <title>Edit Profile</title>
      </Helmet>
      <MDBContainer>
        <MDBContainer className="mt-5">
          <MDBRow>
            <MDBCol md="7">
              <div>
                <h3>Edit Personal Details</h3>
                <hr className="home-hr-style"></hr>
                <form onSubmit={handlePersonalDetailsSubmit}>
                  <div className="grey-text mb-5">
                    <MDBInput
                      label="New name"
                      type="text"
                      name="name"
                      value={personalDetails.name}
                      onChange={(event) => {
                        updateInput(event);
                      }}
                    />
                    <MDBInput
                      label="Type your age"
                      type="number"
                      name="age"
                      value={personalDetails.age}
                      onChange={(event) => {
                        updateInput(event);
                      }}
                    />
                    <MDBInput
                      label="Type your number"
                      type="text"
                      name="number"
                      value={personalDetails.number}
                      onChange={(event) => {
                        updateInput(event);
                      }}
                    />
                  </div>
                  <MDBBtn color="dark-green" type="submit">
                    Save
                  </MDBBtn>
                </form>
                <br></br>
                <br></br>
              </div>
            </MDBCol>

            <MDBCol md="5">
              <h3>Change Password</h3>
              <hr className="home-hr-style"></hr>
              <form onSubmit={handleNewPasswordSubmit}>
                <MDBInput
                  label="New Password"
                  type="password"
                  name="password"
                  value={newPassword}
                  onChange={(event) => {
                    updateNewPassword(event);
                  }}
                />
                <MDBInput
                  label="Confirm Password"
                  type="password"
                  name="cpassword"
                  value={confirmNewPassword}
                  onChange={(event) => {
                    updateConfirmNewPassword(event);
                  }}
                />
                <MDBBtn color="dark-green" type="submit">
                  Change Password
                </MDBBtn>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    </div>
  );
};

export default DriverEditProfile;
