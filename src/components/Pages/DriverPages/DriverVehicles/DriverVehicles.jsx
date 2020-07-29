import React, { useState, useEffect, useContext } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBTooltip,
  MDBBtn,
  MDBIcon,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBInput,
  MDBModalFooter,
} from "mdbreact";
import { firestore } from "../../../firebase";
import { Helmet } from "react-helmet";
import car from "../../../../assets/images/vehicles/car.png";
import rickshaw from "../../../../assets/images/vehicles/rickshaw.png";
import { UserContext } from "../../../../providers/UserProvider";
import "./DriverVehicles.css";

const DriverVehicles = () => {
  //to check if there are already vehicles registered
  const [hasVehicle, setHasVehicle] = useState(false);
  //to check the active state of the vehicle
  const [activeState, setActiveState] = useState(true);
  //to assign it to vehicles later
  const vehiclesArray = [];
  //to be assigned the value of vehiclesArray
  const [vehicles, setVehicles] = useState([]);
  //to save the details of new vehicle
  const [newVehicle, setNewVehicle] = useState({
    active: true,
    color: "",
    name: "",
    registeredTo: "",
    registrationCity: "",
    registrationNo: "",
    seats: null,
    type: "",
  });
  //to re render useEffect when new Vehicle added
  const [newVehicleId, setNewVehicleId] = useState("");
  //toggle state for adding new vehicle modal
  const [modal, setModal] = useState(false);
  //user context
  const user = useContext(UserContext);
  //to assign docid temporarily to set vehicle state
  let docId = "";

  //useEffect
  useEffect(() => {
    let vehicle = {};
    firestore
      .collection("weride")
      .doc("vehicle")
      .collection("vehicles")
      .where("registeredTo", "==", user.uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.exists) {
            console.log(doc.id, " => ", doc.data());
            vehicle = doc.data();
            vehicle["docid"] = doc.id;
            vehiclesArray.push(vehicle);
            console.log(vehiclesArray);
          }
        });
        if (vehiclesArray.length !== 0) {
          setHasVehicle(true);
          setVehicles(vehiclesArray);
        }
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, [activeState, newVehicleId]);

  //sets active status of the vehicle
  const setActiveStatus = (event, status) => {
    docId = event.target.id;

    console.log(docId);
    let activeStatus = status;
    console.log(activeStatus);

    var vehicleRef = firestore
      .collection("weride")
      .doc("vehicle")
      .collection("vehicles")
      .doc(docId);

    return vehicleRef
      .update({
        active: !activeStatus,
      })
      .then(function () {
        setActiveState(!activeState);
        console.log("Document successfully updated!");
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };

  //modal toggle
  const toggle = () => {
    setModal(!modal);
  };
  //set owner id
  const setVehicleOwner = () => {
    setNewVehicle({ ...newVehicle, registeredTo: user.uid });
  };
  //set vehicle name
  const setVehicleName = (event) => {
    setNewVehicle({ ...newVehicle, name: event.target.value });
  };
  //set vehicle city
  const setVehicleCity = (event) => {
    setNewVehicle({ ...newVehicle, registrationCity: event.target.value });
  };
  //vehicle registration number
  const setVehicleNumber = (event) => {
    setNewVehicle({ ...newVehicle, registrationNo: event.target.value });
  };
  //set vehicle seats
  const setVehicleSeats = (event) => {
    setNewVehicle({ ...newVehicle, seats: parseInt(event.target.value, 10) });
  };
  //set vehicle type
  const setVehicleType = (event) => {
    setNewVehicle({ ...newVehicle, type: event.target.value });
  };
  //set vehicle color
  const setVehicleColor = (event) => {
    setNewVehicle({ ...newVehicle, color: event.target.value });
  };
  //add new vehilce in vehicles document
  const handleNewVehicleSubmit = (event) => {
    event.preventDefault();
    const newlyCreatedVehicle = newVehicle;
    firestore
      .collection("weride")
      .doc("vehicle")
      .collection("vehicles")
      .add(newlyCreatedVehicle)
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        alert("Vehicle Added");
        toggle();
        setNewVehicle({
          active: true,
          color: "",
          name: "",
          registeredTo: "",
          registrationCity: "",
          registrationNo: "",
          seats: null,
          type: "",
        });
        setNewVehicleId(docRef.id);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Vehicles</title>
      </Helmet>
      <MDBContainer className="mt-5">
        <MDBRow>
          {hasVehicle ? (
            vehicles.map((vehicle, index) => (
              <MDBCol md="3" className="rider-groups-card" key={index}>
                <MDBCard>
                  <MDBCardImage
                    className="img-fluid"
                    src={vehicle.type === "Car" ? car : rickshaw}
                    waves
                  />
                  <MDBCardBody>
                    <MDBCardTitle>{vehicle.name}</MDBCardTitle>
                    <MDBCardText>
                      <div>
                        <b>Registration City: </b>
                        {vehicle.registrationCity}
                        <br />
                        <b>Registration No. : </b>
                        {vehicle.registrationNo}
                        <br />
                        <MDBTooltip domElement tag="span" placement="right">
                          <span>
                            <b>Seats: </b>
                            {vehicle.seats}
                          </span>
                          <span>Excluding Driver's seat</span>
                        </MDBTooltip>
                        <br />
                        <b>Color: </b>
                        {vehicle.color}
                        <br />
                        <b>Type: </b>
                        {vehicle.type}
                      </div>
                    </MDBCardText>
                    <hr />
                    <div className="custom-control custom-switch">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id={vehicle.docid}
                        checked={vehicle.active}
                        onChange={(event) => {
                          setActiveStatus(event, vehicle.active);
                        }}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor={vehicle.docid}
                      >
                        Active
                      </label>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))
          ) : (
            <h3>No Vehicles added yet</h3>
          )}

          <MDBCol md="3" className="rider-group-card">
            <MDBTooltip placement="bottom">
              <MDBBtn
                color="blue"
                className="driver-vehicles-btn-padding"
                onClick={toggle}
              >
                <MDBIcon icon="plus" size="5x" className="rider-groups-icon" />{" "}
                <MDBIcon icon="taxi" size="5x" className="rider-groups-icon" />
              </MDBBtn>
              <div>Add Vehicles</div>
            </MDBTooltip>
          </MDBCol>
        </MDBRow>

        {/* Add new vehicle modal */}
        <MDBContainer>
          <MDBModal
            isOpen={modal}
            toggle={toggle}
            fullHeight
            size="lg"
            position="right"
          >
            <form onSubmit={handleNewVehicleSubmit}>
              <MDBModalHeader toggle={toggle} className="rider-groups-modal">
                <MDBIcon icon="taxi" size="2x" /> New Vehicle
              </MDBModalHeader>
              <MDBModalBody>
                <MDBRow className="justify-content-center">
                  <MDBCol md="7">
                    <MDBTooltip domElement tag="span" placement="right">
                      <span>
                        Registered To:{" "}
                        <b className="rider-groups-nameColor">{user.name}</b>
                      </span>
                      <span>
                        Your vehicle can only be either a car or a rickshaw.
                      </span>
                    </MDBTooltip>
                    <MDBInput
                      label="Vehicle Name"
                      type="text"
                      name="name"
                      value={newVehicle.name}
                      onChange={(event) => {
                        setVehicleName(event);
                      }}
                    />
                    <MDBInput
                      label="Registration City"
                      type="text"
                      name="registrationCity"
                      value={newVehicle.registrationCity}
                      onChange={(event) => {
                        setVehicleCity(event);
                      }}
                    />
                    <MDBInput
                      label="Registration Number"
                      type="text"
                      name="registrationNo"
                      value={newVehicle.registrationNo}
                      onChange={(event) => {
                        setVehicleNumber(event);
                      }}
                    />
                    <MDBInput
                      label="Seats"
                      type="number"
                      name="seats"
                      value={newVehicle.seats}
                      onChange={(event) => {
                        setVehicleSeats(event);
                      }}
                    />
                    <MDBInput
                      label="Color"
                      type="text"
                      name="color"
                      value={newVehicle.color}
                      onChange={(event) => {
                        setVehicleColor(event);
                      }}
                    />
                    <select
                      className="browser-default custom-select"
                      value={newVehicle.type}
                      onChange={(event) => {
                        setVehicleType(event);
                      }}
                    >
                      <option>Vehicle Type</option>
                      <option value="Car">Car</option>
                      <option value="Rickshaw">Rickshaw</option>
                    </select>
                    <br />
                  </MDBCol>
                </MDBRow>
              </MDBModalBody>
              <MDBModalFooter className="justify-content-center">
                <MDBBtn
                  outline
                  color="primary"
                  onClick={setVehicleOwner}
                  type="submit"
                >
                  Add
                </MDBBtn>
              </MDBModalFooter>
            </form>
          </MDBModal>
          <br />
          <br />
        </MDBContainer>
        {/* modal end */}
      </MDBContainer>
    </div>
  );
};

export default DriverVehicles;
