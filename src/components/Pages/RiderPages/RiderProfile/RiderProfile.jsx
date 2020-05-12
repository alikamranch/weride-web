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
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
} from "mdbreact";
import { UserContext } from "../../../../providers/UserProvider";
import { Link } from "react-router-dom";
import "./RiderProfile.css";
import male from "../../../../assets/images/avatars/male.jpg";
import female from "../../../../assets/images/avatars/female.jpg";
import { firestore } from "../../../firebase";

const RiderUser = () => {
  //Top level state context
  const user = useContext(UserContext);
  //Ref to current user id for adding wallet data
  const uid = user.uid;
  //Toggle state for modal
  const [modal, setModal] = useState(false);
  //checks if user has some wallet value in database
  const [walletExists, setWalletExists] = useState(false);
  //the actual amount of wallet if funds added or if some value already exists
  const [walletAmount, setWalletAmount] = useState(null);
  //unique id for the existing wallet
  const [existingId, setExistingId] = useState("");
  //new value of the added wallet funds
  var newValue = null;

  useEffect(() => {
    firestore
      .collection("weride")
      .doc("ride_wallet")
      .collection("wallets")
      .where("uid", "==", uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          if (doc.exists) {
            setWalletAmount(doc.data().amount);
            setWalletExists(true);
            setExistingId(doc.id);
          } else {
            setWalletAmount(0);
          }
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, [uid]);

  const toggle = () => {
    setModal(!modal);
  };

  const updateWalletValue = (e) => {
    const { value } = e.currentTarget;
    newValue = value;
  };

  //function to add funds in database with callbacks
  const addFunds = () => {
    var currentValue = walletAmount;
    var newWalletValue = Number(currentValue) + Number(newValue);
    setWalletAmount(newWalletValue);
    console.log(newWalletValue);
    if (walletExists) {
      //set a doc
      setWalletDoc(newWalletValue);
    } else {
      //create collection and doc
      createDoc(newWalletValue);
    }
    toggle();
  };

  //set doc function called in add funds
  const setWalletDoc = (newWalletValue) => {
    //set doc
    firestore
      .collection("weride")
      .doc("ride_wallet")
      .collection("wallets")
      .doc(existingId)
      .set(
        {
          amount: newWalletValue,
        },
        { merge: true }
      );
  };

  //create doc function called in cadd funds
  const createDoc = (newWalletValue) => {
    //create collection and doc
    firestore
      .collection("weride")
      .doc("ride_wallet")
      .collection("wallets")
      .add({
        amount: newWalletValue,
        uid: user.uid,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

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
                <br />
                <br />
                <MDBIcon
                  icon="wallet"
                  size="2x"
                  className="rider-profile-icon"
                />{" "}
                {walletAmount ? walletAmount + " PKR" : "0 PKR"}
              </div>
              <MDBBtn
                size="sm"
                className="rider-profile-btn"
                color="#00c853"
                onClick={toggle}
              >
                <MDBIcon icon="credit-card" size="1x" /> Add Funds
              </MDBBtn>
              <br />
              <br />
              <div>
                <strong className="rider-profile-icon">Package: </strong> Weekly
                <br />
                <Link to="rider-packages">
                  <MDBBtn
                    size="sm"
                    className="rider-profile-btn"
                    color="#00c853"
                  >
                    Subscribe to a package
                  </MDBBtn>
                </Link>
              </div>
            </MDBCol>
            <MDBCol md="7" className="text-left">
              <div className="mt-5">
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
          {/* Add funds modal */}
          <MDBContainer>
            <MDBModal isOpen={modal} toggle={toggle}>
              <MDBModalHeader toggle={toggle} className="navbar-modal-header">
                <MDBIcon icon="money-bill-alt" size="2x" /> Add Funds
              </MDBModalHeader>
              <MDBModalBody>
                <MDBRow className="justify-content-center">
                  <MDBCol md="6">
                    <MDBInput
                      label="Amount"
                      type="number"
                      onChange={(event) => updateWalletValue(event)}
                    />
                  </MDBCol>
                </MDBRow>
              </MDBModalBody>
              <MDBModalFooter className="justify-content-center">
                <MDBBtn color="success-color-dark" onClick={addFunds}>
                  Add
                </MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBContainer>
        </MDBContainer>
      </div>
    </div>
  );
};

export default RiderUser;
