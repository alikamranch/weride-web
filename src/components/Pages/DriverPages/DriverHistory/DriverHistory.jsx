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
import "./DriverHistory.css";

const DriverHistory = () => {
  //state start
  //used to store history from firestore
  const historyArray = [];
  //is assigned the value of historyArray
  const [history, setHistory] = useState([]);
  //used to store complaints from firestore
  const complaintsArray = [];
  //is assigned the value of complaintsArray
  const [complaints, setComplaints] = useState([]);
  //complaint object
  const [complaintModal, setComplaintModal] = useState({});
  //to get the user session object
  const user = useContext(UserContext);
  //modal state
  const [modal, setModal] = useState(false);
  //to get the uid of the currently logged in user
  const uid = user.uid;
  // state end

  useEffect(() => {
    //get history
    let historyObj = {};
    firestore
      .collection("weride")
      .doc("ride")
      .collection("rides")
      .where("driverId", "==", uid)
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

    //get complaints
    firestore
      .collection("weride")
      .doc("complaint")
      .collection("complaints")
      .where("driverId", "==", uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.exists) {
            // console.log(doc.id, " => ", doc.data());
            complaintsArray.push(doc.data());
          }
        });
        if (complaintsArray.length !== 0) {
          setComplaints(complaintsArray);
          console.log(complaintsArray);
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
      var result = complaints.find((obj) => {
        return obj.rideId === id;
      });
      setComplaintModal(result);
    }
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
                <th>Date</th>
                <th>Rating</th>
                <th>Review</th>
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
                  <td>
                    {new Date(
                      object.date.seconds * 1000 +
                        object.date.nanoseconds / 1000000
                    ).toLocaleDateString()}
                  </td>
                  <td>{object.rating}</td>
                  <td>{object.review}</td>
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
                      View
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
            <h4>
              <b>Complaint Type:</b>
            </h4>{" "}
            {complaintModal ? complaintModal.type : "N/A"}
            <br></br>
            <br></br>
            <h4>
              <b>Complaint by:</b>
            </h4>{" "}
            {complaintModal ? complaintModal.riderName : "N/A"}
            <br></br>
            <br></br>
            <h4>
              <b>Complaint:</b>
            </h4>{" "}
            {complaintModal ? complaintModal.comments : "N/A"}
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="primary" onClick={toggle}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    </div>
  );
};

export default DriverHistory;
