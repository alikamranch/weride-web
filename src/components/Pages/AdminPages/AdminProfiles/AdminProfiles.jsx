import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { firestore } from "../../../firebase";
import {
  MDBContainer,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
} from "mdbreact";
import "./AdminProfiles.css";

const AdminProfiles = () => {
  //state start
  //to get drivers from firestore
  const driverArray = [];
  //assign the value of driverArray
  const [drivers, setDrivers] = useState([]);
  //to get riders from firestore
  const riderArray = [];
  //assgin the value of riderArray
  const [riders, setRiders] = useState([]);
  //to refresh
  const [refresh, setRefresh] = useState(false);
  //assigned the reviews in the database and then assigned to state reiews
  const allReviews = [];
  //reviews of the drivers
  const [reviews, setReviews] = useState([]);
  //modal state
  const [modal, setModal] = useState(false);
  //drivers name for reviews modal header
  const [driverName, setDriverName] = useState("");
  //state end

  useEffect(() => {
    //to get individual driver object and then assign its uid to it and then store in  driverArray
    let driver = {};
    firestore
      .collection("weride")
      .doc("user")
      .collection("users")
      .where("type", "==", "driver")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.exists) {
            // console.log(doc.id, " => ", doc.data());
            driver = doc.data();
            driver["uid"] = doc.id;
            driverArray.push(driver);
          }
        });
        if (driverArray.length !== 0) {
          setDrivers(driverArray);
          console.log(driverArray);
        }
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });

    //to get individual rider object and then assign its uid to it and then store in  riderArray
    let rider = {};
    firestore
      .collection("weride")
      .doc("user")
      .collection("users")
      .where("type", "==", "rider")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.exists) {
            // console.log(doc.id, " => ", doc.data());
            rider = doc.data();
            rider["uid"] = doc.id;
            riderArray.push(rider);
          }
        });
        if (riderArray.length !== 0) {
          setRiders(riderArray);
          console.log(riderArray);
        }
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, [refresh]);

  //activate profile
  const activate = (event) => {
    var id = event.target.id;
    var userDocRef = firestore
      .collection("weride")
      .doc("user")
      .collection("users")
      .doc(id);
    return userDocRef
      .update({
        active: true,
      })
      .then(function () {
        setRefresh(!refresh);
        alert("Profile Activated!");
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };

  //deactivate profile
  const deactivate = (event) => {
    var id = event.target.id;
    var result = window.confirm("Deactivate Profile?");
    if (result) {
      var userDocRef = firestore
        .collection("weride")
        .doc("user")
        .collection("users")
        .doc(id);
      return userDocRef
        .update({
          active: false,
        })
        .then(function () {
          setRefresh(!refresh);
          alert("Profile Deactivated!");
        })
        .catch(function (error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    }
  };

  const toggle = (e) => {
    setModal(!modal);
    var id = "";
    var name = "";
    if (e) {
      id = e.target.id;
      name = e.target.name;
    }
    setDriverName(name);
    firestore
      .collection("weride")
      .doc("review")
      .collection("reviews")
      .where("driverId", "==", id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.exists) {
            // console.log(doc.id, " => ", doc.data());

            allReviews.push(doc.data());
          }
        });
        if (allReviews.length !== 0) {
          setReviews(allReviews);
          console.log(allReviews);
        } else {
          setReviews([]);
        }
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Profiles</title>
      </Helmet>

      <MDBContainer>
        <MDBContainer className="mt-5">
          <h1 className="text-left">Driver Profiles</h1>
          <hr></hr>
          <MDBContainer>
            <MDBTable responsive>
              <MDBTableHead color="elegant-color" textWhite>
                <tr>
                  <th>
                    <b>#</b>
                  </th>
                  <th>
                    <b>Name</b>
                  </th>
                  <th>
                    <b>Age</b>
                  </th>
                  <th>
                    <b>Gender</b>
                  </th>
                  <th>
                    <b>Email</b>
                  </th>
                  <th>
                    <b>Number</b>
                  </th>
                  <th>
                    <b>Ratings/Reviews</b>
                  </th>
                  <th>
                    <b>Status</b>
                  </th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {drivers.map((driver, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{driver.name}</td>
                    <td>{driver.age}</td>
                    <td>{driver.gender}</td>
                    <td>{driver.email}</td>
                    <td>{driver.number}</td>
                    <td>
                      <MDBBtn
                        color="primary"
                        size="sm"
                        id={driver.uid}
                        name={driver.name}
                        onClick={toggle}
                      >
                        View
                      </MDBBtn>
                    </td>

                    <td>
                      {driver.active ? (
                        <React.Fragment>
                          <MDBBtn
                            id={driver.uid}
                            name={driver.name}
                            size="sm"
                            color="danger"
                            onClick={(event) => {
                              deactivate(event);
                            }}
                          >
                            Deactivate
                          </MDBBtn>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <MDBBtn
                            id={driver.uid}
                            name={driver.name}
                            size="sm"
                            color="success"
                            onClick={(event) => {
                              activate(event);
                            }}
                          >
                            Activate
                          </MDBBtn>
                        </React.Fragment>
                      )}
                    </td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          </MDBContainer>
        </MDBContainer>

        <MDBContainer className="mt-5">
          <h1 className="text-left">Rider Profiles</h1>
          <hr></hr>
          <MDBContainer>
            <MDBTable responsive>
              <MDBTableHead color="elegant-color" textWhite>
                <tr>
                  <th>
                    <b>#</b>
                  </th>
                  <th>
                    <b>Name</b>
                  </th>
                  <th>
                    <b>Age</b>
                  </th>
                  <th>
                    <b>Gender</b>
                  </th>
                  <th>
                    <b>Email</b>
                  </th>
                  <th>
                    <b>Number</b>
                  </th>
                  <th>
                    <b>Status</b>
                  </th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {riders.map((rider, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{rider.name}</td>
                    <td>{rider.age}</td>
                    <td>{rider.gender}</td>
                    <td>{rider.email}</td>
                    <td>{rider.number}</td>

                    <td>
                      {rider.active ? (
                        <React.Fragment>
                          <MDBBtn
                            id={rider.uid}
                            name={rider.name}
                            size="sm"
                            color="danger"
                            onClick={(event) => {
                              deactivate(event);
                            }}
                          >
                            Deactivate
                          </MDBBtn>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <MDBBtn
                            id={rider.uid}
                            name={rider.name}
                            size="sm"
                            color="success"
                            onClick={(event) => {
                              activate(event);
                            }}
                          >
                            Activate
                          </MDBBtn>
                        </React.Fragment>
                      )}
                    </td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          </MDBContainer>
        </MDBContainer>

        <MDBContainer>
          <MDBModal isOpen={modal} toggle={toggle}>
            <MDBModalHeader toggle={toggle}>{driverName}</MDBModalHeader>
            <MDBModalBody>
              <MDBContainer>
                <MDBTable responsive>
                  <MDBTableHead color="blue" textWhite>
                    <tr>
                      <th>
                        <b>Ratings</b>
                      </th>
                      <th>
                        <b>Reviews</b>
                      </th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {reviews.map((review, index) => (
                      <tr key={index}>
                        <td>{review.rating ? review.rating + "/5" : "N/A"}</td>
                        <td>
                          {review.reviewComments
                            ? review.reviewComments
                            : "N/A"}
                        </td>
                      </tr>
                    ))}
                  </MDBTableBody>
                </MDBTable>
              </MDBContainer>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="danger" onClick={toggle}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </MDBContainer>
    </div>
  );
};

export default AdminProfiles;
