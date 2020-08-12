import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import {
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalFooter,
  MDBModalBody,
  MDBInput,
} from "mdbreact";
import { firestore } from "../../../firebase";
import { UserContext } from "../../../../providers/UserProvider";
import "./RiderHistory.css";

const RiderHistory = () => {
  //state start
  //used to store history from firestore
  const historyArray = [];
  //is assigned the value of historyArray
  const [history, setHistory] = useState([]);
  //to get the user session object
  const user = useContext(UserContext);
  //modal state
  const [modal, setModal] = useState(false);
  //complaint object
  const [complaint, setComplaint] = useState({
    rideId: "",
    riderId: "",
    riderName: "",
    driverId: "",
    driverName: "",
    comments: "",
    type: "",
  });
  //to get the uid of the currently logged in user
  const uid = user.uid;
  // state end

  useEffect(() => {
    let historyObj = {};
    firestore
      .collection("weride")
      .doc("ride")
      .collection("rides")
      .where("riderId", "==", uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.exists) {
            // console.log(doc.id, " => ", doc.data());
            historyObj = doc.data();
            historyObj["uid"] = doc.id;
            historyArray.push(historyObj);
          }
        });
        if (historyArray.length !== 0) {
          setHistory(historyArray);
          console.log(historyArray);
        }
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, []);

  //to toggle modal
  const toggle = (e) => {
    let id = "";
    if (e) {
      id = e.target.id;
    }
    setModal(!modal);
    if (id) {
      var result = history.find((obj) => {
        return obj.uid === id;
      });
      setComplaint({
        ...complaint,
        rideId: id,
        riderId: result.riderId,
        riderName: result.riderName,
        driverId: result.driverId,
        driverName: result.driverName,
      });
    }
  };

  //update complaint type dropdown
  const updateSelect = (e) => {
    setComplaint({ ...complaint, type: e.target.value });
  };

  //update complaint comments
  const updateComments = (e) => {
    setComplaint({ ...complaint, comments: e.target.value });
  };

  //submit complaint
  const complaintSubmit = (e) => {
    var newComplaint = complaint;
    firestore
      .collection("weride")
      .doc("complaint")
      .collection("complaints")
      .add(newComplaint)
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        alert("Complaint Submitted!");
        setModal(!modal);
        setComplaint({
          rideId: "",
          riderId: "",
          riderName: "",
          driverId: "",
          driverName: "",
          comments: "",
          type: "",
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title>Ride History</title>
      </Helmet>
      <MDBContainer fluid>
        <div className="mt-5">
          <MDBTable responsive>
            <MDBTableHead color="success-color" textWhite>
              <tr>
                <th>#</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Distance</th>
                <th>Driver</th>
                <th>Vehicle</th>
                <th>Group</th>
                <th>Sharing</th>
                <th>Date</th>
                <th>Rating</th>
                <th>Fare</th>
                <th>Complaint</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {history.map((object, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{object.origin}</td>
                  <td>{object.destination}</td>
                  <td>{object.distance + " KM"}</td>
                  <td>{object.driverName}</td>
                  <td>{object.vehicleName}</td>
                  <td>{object.group ? object.group : "N/A"}</td>
                  <td>{object.sharing ? "Yes" : "No"}</td>
                  <td>
                    {new Date(
                      object.date.seconds * 1000 +
                        object.date.nanoseconds / 1000000
                    ).toLocaleDateString()}
                  </td>
                  <td>{object.rating}</td>
                  <td>{object.fare + " PKR"}</td>
                  <td>
                    <MDBBtn
                      color="primary"
                      id={object.uid}
                      size="sm"
                      onClick={(event) => {
                        toggle(event);
                      }}
                    >
                      File
                    </MDBBtn>
                  </td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </div>
      </MDBContainer>

      <MDBContainer>
        <MDBModal isOpen={modal} toggle={toggle}>
          <MDBModalHeader toggle={toggle}>Complaint</MDBModalHeader>
          <MDBModalBody>
            <select
              className="browser-default custom-select"
              value={complaint.type}
              onChange={updateSelect}
            >
              <option>Complaint Type</option>
              <option value="Behavioral">Behavioral</option>
              <option value="Harassment">Harassment</option>
              <option value="Vehicle Condition">Vehicle Condition</option>
            </select>

            <MDBInput
              label="Comments"
              type="text"
              name="name"
              value={complaint.comments}
              onChange={(event) => {
                updateComments(event);
              }}
            />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              color="primary"
              onClick={(event) => {
                complaintSubmit(event);
              }}
            >
              Submit
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    </div>
  );
};

export default RiderHistory;
