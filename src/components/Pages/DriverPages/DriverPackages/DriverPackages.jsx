import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdbreact";
import { firestore } from "../../../firebase";
import { UserContext } from "../../../../providers/UserProvider";
import packageNotActive from "../../../../assets/images/package-not-active.png";
import weekly from "../../../../assets/images/package1.png";
import monthly from "../../../../assets/images/package2.png";
import quarterly from "../../../../assets/images/package3.png";
import "./DriverPackages.css";

const DriverPackages = () => {
  //state start
  //checks whether current user has active package
  const [hasPackage, setHasPackage] = useState(false);
  //used to store packages array from firestore
  const packagesArray = [];
  //is assigned the value of packagesArray
  const [packages, setPackages] = useState([]);
  //to refresh state
  const [refresh, setRefresh] = useState(true);
  //to get the user session object
  const user = useContext(UserContext);
  //state end

  useEffect(() => {
    //Get all the packages with driver's id
    let pkg = {};
    firestore
      .collection("weride")
      .doc("package")
      .collection("packages")
      .where("driverId", "==", user.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.exists) {
            // console.log(doc.id, " => ", doc.data());
            pkg = doc.data();
            pkg["uid"] = doc.id;
            packagesArray.push(pkg);
          }
        });
        if (packagesArray.length !== 0) {
          setHasPackage(true);
          setPackages(packagesArray);
          console.log(packagesArray);
        }
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    //return cleanup
    return () => {
      setPackages([]);
    };
  }, [refresh]);

  const acceptPackage = (event) => {
    const packageId = event.target.id;
    var packageDocRef = firestore
      .collection("weride")
      .doc("package")
      .collection("packages")
      .doc(packageId);
    return packageDocRef
      .update({
        active: true,
      })
      .then(function () {
        setRefresh(!refresh);
        console.log("Document successfully updated!");
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };

  const rejectPackage = (event) => {
    var id = event.target.id;
    firestore
      .collection("weride")
      .doc("package")
      .collection("packages")
      .doc(id)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
        setRefresh(!refresh);
        alert("Request Rejected!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Packages</title>
      </Helmet>
      <MDBContainer className="mt-5">
        <MDBContainer>
          <h1 className="text-left">Package Requests</h1>
          <hr></hr>
          <MDBRow>
            {hasPackage ? (
              packages.map((pkg, index) => {
                if (pkg.active === false) {
                  return (
                    <MDBCol md="3" className="rider-groups-card" key={index}>
                      <MDBCard>
                        <MDBCardImage
                          className="img-fluid"
                          src={packageNotActive}
                          waves
                        />
                        <MDBCardBody>
                          <MDBCardTitle>{pkg.packageType}</MDBCardTitle>
                          <MDBCardText>
                            <div>
                              Status:{" "}
                              <b>
                                {pkg.active ? "Active" : "Activation Pending"}
                              </b>
                              <br />
                              Subscriber: <b>{pkg.riderName}</b>
                              <br />
                              Driver: <b>{pkg.driverName}</b>
                              <br />
                              Start Date (m/d/y):{" "}
                              <b>
                                {new Date(
                                  pkg.createdDate.seconds * 1000 +
                                    pkg.createdDate.nanoseconds / 1000000
                                ).toLocaleDateString()}
                              </b>
                              <br />
                              End Date (m/d/y):{" "}
                              <b>
                                {new Date(
                                  pkg.endDate.seconds * 1000 +
                                    pkg.endDate.nanoseconds / 1000000
                                ).toLocaleDateString()}
                              </b>
                            </div>
                          </MDBCardText>
                          <MDBBtn
                            color="success"
                            size="sm"
                            id={pkg.uid}
                            onClick={(event) => {
                              acceptPackage(event);
                            }}
                          >
                            Accept
                          </MDBBtn>
                          <MDBBtn
                            color="danger"
                            size="sm"
                            id={pkg.uid}
                            onClick={(event) => {
                              rejectPackage(event);
                            }}
                          >
                            Reject
                          </MDBBtn>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  );
                } else {
                  return null;
                }
              })
            ) : (
              <h3>No recent package requests</h3>
            )}
          </MDBRow>
        </MDBContainer>

        <MDBContainer className="mt-5">
          <h1 className="text-left">Active Packages</h1>
          <hr></hr>
          <MDBRow>
            {hasPackage ? (
              packages.map((pkg, index) => {
                if (pkg.active === true) {
                  return (
                    <MDBCol md="3" className="rider-groups-card" key={index}>
                      <MDBCard>
                        <MDBCardImage
                          className="img-fluid"
                          src={
                            pkg.packageType === "Weekly (7 Days)"
                              ? weekly
                              : pkg.packageType === "Monthly (30 Days)"
                              ? monthly
                              : pkg.packageType === "Quarterly (90 Days)"
                              ? quarterly
                              : null
                          }
                          waves
                        />
                        <MDBCardBody>
                          <MDBCardTitle>{pkg.packageType}</MDBCardTitle>
                          <MDBCardText>
                            <div>
                              Status:{" "}
                              <b>
                                {pkg.active ? "Active" : "Activation Pending"}
                              </b>
                              <br />
                              Subscriber: <b>{pkg.riderName}</b>
                              <br />
                              Driver: <b>{pkg.driverName}</b>
                              <br />
                              Start Date (m/d/y):{" "}
                              <b>
                                {new Date(
                                  pkg.createdDate.seconds * 1000 +
                                    pkg.createdDate.nanoseconds / 1000000
                                ).toLocaleDateString()}
                              </b>
                              <br />
                              End Date (m/d/y):{" "}
                              <b>
                                {new Date(
                                  pkg.endDate.seconds * 1000 +
                                    pkg.endDate.nanoseconds / 1000000
                                ).toLocaleDateString()}
                              </b>
                            </div>
                          </MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  );
                } else {
                  return null;
                }
              })
            ) : (
              <h3>No active packages yet</h3>
            )}
          </MDBRow>
        </MDBContainer>
      </MDBContainer>
    </div>
  );
};

export default DriverPackages;
