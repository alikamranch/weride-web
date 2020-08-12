import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTooltip,
  MDBBtn,
  MDBIcon,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBModalFooter,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBAlert,
} from "mdbreact";
import { firestore } from "../../../firebase";
import { UserContext } from "../../../../providers/UserProvider";
import packageNotActive from "../../../../assets/images/package-not-active.png";
import weekly from "../../../../assets/images/package1.png";
import monthly from "../../../../assets/images/package2.png";
import quarterly from "../../../../assets/images/package3.png";
import "./RiderPackages.css";

const RiderPackages = () => {
  //state
  //modal1 state
  const [modal, setModal] = useState(false);
  //modal2 state
  const [modal2, setModal2] = useState(false);
  //checks whether current user has active package
  const [hasPackage, setHasPackage] = useState(false);
  //used to store packages array from firestore
  const packagesArray = [];
  //is assigned the value of packagesArray
  const [packages, setPackages] = useState([]);
  //for making a new package
  const [newPackage, setNewPackage] = useState({
    active: false,
    createdDate: new Date(),
    driverId: "",
    driverName: "",
    endDate: new Date(),
    packageType: "",
    riderId: "",
    riderName: "",
  });
  //new package id to pass to useEffect
  const [packageId, setNewPackageId] = useState("");
  //assigned the drives in the database and then assigned to state drivers
  const allDrivers = [];
  //is assigned the value of allDrivers
  const [drivers, setDrivers] = useState([]);
  //drivers name for reviews modal header
  const [driverName, setDriverName] = useState("");
  //assigned the reviews in the database and then assigned to state reiews
  const allReviews = [];
  //reviews of the drivers
  const [reviews, setReviews] = useState([]);
  //to get the user session object
  const user = useContext(UserContext);
  //package type state
  const [packageType, setPackageType] = useState("");
  //state end

  useEffect(() => {
    //get all drivers
    if (packages.length === 0) {
      //to get individual driver object and then assign its uid to it and then store in allDrivers array
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
              allDrivers.push(driver);
            }
          });
          if (allDrivers.length !== 0) {
            setDrivers(allDrivers);
            console.log(allDrivers);
          }
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        });
    }

    //Get all the packages of the rider
    firestore
      .collection("weride")
      .doc("package")
      .collection("packages")
      .where("riderId", "==", user.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.exists) {
            // console.log(doc.id, " => ", doc.data());
            packagesArray.push(doc.data());
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
  }, [packageId]);

  //modal toggle
  const toggle = () => {
    setModal(!modal);
  };

  //modal2 toggle
  const toggle2 = (e) => {
    setModal2(!modal2);
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

  //function for driver select button
  const updatePackage = (event) => {
    if (packageType === "") {
      alert("Please Select a package and start date first!");
      setModal(!modal);
    } else {
      let id = event.target.id;
      let name = event.target.name;

      if (newPackage.driverId) {
        alert("You can subscribe a package to only one driver.");
      } else {
        event.target.classList.remove("btn-amber");
        event.target.classList.add("btn-success");
        event.target.innerHTML = "Selected";
        setNewPackage({ ...newPackage, driverId: id, driverName: name });
      }
    }
  };

  //to set package name in dropdown
  const packageNameHandler = (event) => {
    var type = event.target.innerHTML;
    setPackageType(type);
    setNewPackage({ ...newPackage, packageType: type });
    document.getElementById("startDate").value = null;
    document.getElementById("endDate").innerHTML = "";
  };

  //to view start and end dates
  const adjustDateHandler = (event) => {
    if (packageType === "") {
      alert("Please Select a package First!");
      setModal(!modal);
    } else {
      var start = new Date(event.target.value);
      var end = new Date();
      if (packageType === "Weekly (7 Days)") {
        end.setDate(start.getDate() + 7);
      }
      if (packageType === "Monthly (30 Days)") {
        end.setDate(start.getDate() + 30);
      }
      if (packageType === "Quarterly (90 Days)") {
        end.setDate(start.getDate() + 90);
      }
      var endElement = document.getElementById("endDate");
      endElement.innerHTML = end;
      setNewPackage({ ...newPackage, createdDate: start, endDate: end });
      console.log(newPackage);
    }
  };
  //to set the rider/subscriber of the package
  const setSubscriber = () => {
    setNewPackage({ ...newPackage, riderId: user.uid, riderName: user.name });
  };

  //function to handle new package submit
  const handleNewPackageSubmit = (event) => {
    event.preventDefault();
    const newlyCreatedPackage = newPackage;
    firestore
      .collection("weride")
      .doc("package")
      .collection("packages")
      .add(newlyCreatedPackage)
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        alert("Package Subscription Request Sent.");
        toggle();
        setNewPackage({
          active: false,
          createdDate: new Date(),
          driverId: "",
          driverName: "",
          endDate: new Date(),
          packageType: "",
          riderId: "",
          riderName: "",
        });
        setNewPackageId(docRef.id);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Packages</title>
      </Helmet>
      <br></br>
      <MDBContainer className="mt-5">
        <MDBContainer className="text-left">
          <MDBAlert color="warning" dismiss>
            <b>Note</b>
            <br />
            After you request a subscription it will be grayed out till the
            driver accepts your request, if the request disappears then the
            driver has rejected.
          </MDBAlert>
        </MDBContainer>

        <MDBRow>
          {hasPackage ? (
            packages.map((pkg, index) => (
              <MDBCol md="3" className="rider-groups-card" key={index}>
                <MDBCard>
                  <MDBCardImage
                    className="img-fluid"
                    src={
                      !pkg.active
                        ? packageNotActive
                        : pkg.packageType === "Weekly (7 Days)"
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
                        <b>{pkg.active ? "Active" : "Activation Pending"}</b>
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
            ))
          ) : (
            <h3>No active packages yet</h3>
          )}
          <MDBCol md="3">
            <MDBTooltip placement="bottom">
              <MDBBtn
                color="blue"
                className="rider-groups-btn-padding"
                onClick={toggle}
              >
                <MDBIcon
                  icon="plus-circle"
                  size="8x"
                  className="rider-groups-icon"
                />
              </MDBBtn>
              <div>Subscribe to a Package</div>
            </MDBTooltip>
          </MDBCol>
        </MDBRow>
        {/* Add new group modal */}
        <MDBContainer>
          <MDBModal
            isOpen={modal}
            toggle={toggle}
            fullHeight
            size="lg"
            position="right"
          >
            <form onSubmit={handleNewPackageSubmit}>
              <MDBModalHeader toggle={toggle} className="rider-groups-modal">
                <MDBIcon icon="calendar-alt" size="2x" /> New Package
              </MDBModalHeader>
              <MDBModalBody>
                <MDBRow className="justify-content-center">
                  <MDBCol size="12">
                    <MDBTooltip domElement tag="span" placement="right">
                      <span>
                        Subscriber:{" "}
                        <b className="rider-groups-nameColor">{user.name}</b>
                      </span>
                      <span>You can't avail package rides in groups.</span>
                    </MDBTooltip>
                    <MDBDropdown>
                      <MDBDropdownToggle caret color="dark-green">
                        {packageType ? packageType : "Select a Package"}
                      </MDBDropdownToggle>
                      <MDBDropdownMenu basic>
                        <MDBDropdownItem
                          active={packageType === "Weekly (7 Days)"}
                          onClick={(event) => {
                            packageNameHandler(event);
                          }}
                        >
                          Weekly (7 Days)
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          active={packageType === "Monthly (30 Days)"}
                          onClick={(event) => {
                            packageNameHandler(event);
                          }}
                        >
                          Monthly (30 Days)
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          active={packageType === "Quarterly (90 Days)"}
                          onClick={(event) => {
                            packageNameHandler(event);
                          }}
                        >
                          Quarterly (90 Days)
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                    <br />
                    Start from:
                    <br />
                    <br />
                    <input
                      type="date"
                      id="startDate"
                      onChange={(event) => {
                        adjustDateHandler(event);
                      }}
                    />
                    <br />
                    <br />
                    Expires on:
                    <strong>
                      <p id="endDate"></p>
                    </strong>
                    <br />
                    Select a driver:
                    <br />
                    <br />
                    <MDBContainer>
                      <MDBTable responsive>
                        <MDBTableHead color="blue" textWhite>
                          <tr>
                            <th>
                              <b>Name</b>
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
                            {/* <th>
                              <b>Rating</b>
                            </th>
                            <th>
                              <b>Review</b>
                            </th> */}
                            <th>
                              <b>Ratings/Reviews</b>
                            </th>
                            <th>
                              <b>Select</b>
                            </th>
                          </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                          {drivers.map((driver, index) => (
                            <tr key={index}>
                              <td>{driver.name}</td>
                              <td>{driver.gender}</td>
                              <td>{driver.email}</td>
                              <td>{driver.number}</td>
                              <td>
                                <MDBBtn
                                  color="primary"
                                  size="sm"
                                  id={driver.uid}
                                  name={driver.name}
                                  onClick={toggle2}
                                >
                                  View
                                </MDBBtn>
                              </td>
                              {/* <td>
                                <ul>
                                  {reviews.map((review) => (
                                    <React.Fragment>
                                      {review.driverId === driver.uid ? (
                                        <React.Fragment>
                                          <li>{review.rating + "/5"} </li>
                                        </React.Fragment>
                                      ) : null}
                                    </React.Fragment>
                                  ))}
                                </ul>
                              </td>
                              <td>
                                <ul>
                                  {reviews.map((review) => (
                                    <React.Fragment>
                                      {review.driverId === driver.uid ? (
                                        <React.Fragment>
                                          <li>{review.reviewComments}</li>
                                        </React.Fragment>
                                      ) : null}
                                    </React.Fragment>
                                  ))}
                                </ul>
                              </td> */}
                              <td>
                                <MDBBtn
                                  id={driver.uid}
                                  name={driver.name}
                                  size="sm"
                                  color="amber"
                                  onClick={updatePackage}
                                >
                                  Select
                                </MDBBtn>
                              </td>
                            </tr>
                          ))}
                        </MDBTableBody>
                      </MDBTable>
                    </MDBContainer>
                  </MDBCol>
                </MDBRow>
              </MDBModalBody>
              <MDBModalFooter className="justify-content-center">
                <MDBBtn
                  outline
                  color="dark-green"
                  type="submit"
                  onClick={setSubscriber}
                >
                  Request Subscription
                </MDBBtn>
              </MDBModalFooter>
            </form>
          </MDBModal>
          <br />
          <br />
        </MDBContainer>
        {/* modal end */}
        {/* modal 2 start */}
        <MDBContainer>
          <MDBModal isOpen={modal2} toggle={toggle2}>
            <MDBModalHeader toggle={toggle2}>{driverName}</MDBModalHeader>
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
              <MDBBtn color="danger" onClick={toggle2}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
        {/* modal 2 end */}
      </MDBContainer>
    </div>
  );
};

export default RiderPackages;
