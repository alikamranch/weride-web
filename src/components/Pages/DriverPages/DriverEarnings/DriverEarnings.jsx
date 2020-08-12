import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";
import {
  MDBContainer,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBAlert,
} from "mdbreact";
import { firestore } from "../../../firebase";
import { UserContext } from "../../../../providers/UserProvider";
import "./DriverEarnings.css";

const DriverEarnings = () => {
  //state start
  //used to store history from firestore
  const historyArray = [];
  //is assigned the value of historyArray
  const [history, setHistory] = useState([]);
  //to get earnings from firestore
  const earningsArray = [];
  //to assign the value of earningsArray
  const [earnings, setEarnings] = useState([]);
  //to set total earnings value
  const [totalEarned, setTotalEarned] = useState(0);
  //to get the user session object
  const user = useContext(UserContext);
  //to get the uid of the currently logged in user
  const uid = user.uid;
  //state end

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
        if (earningsArray.length !== 0) {
          setEarnings(earningsArray);
          console.log(earningsArray);
        }
        setTotalEarned(sum);
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Earnings</title>
      </Helmet>

      <br></br>
      <MDBContainer className="text-left">
        <MDBAlert color="warning" dismiss>
          <b>Note</b>
          <br />
          20% cut of all fare kept by WERide according to policy.
        </MDBAlert>
      </MDBContainer>

      <MDBContainer className="text-left">
        <h3>Total</h3>
        <h1>
          <b>{totalEarned} PKR</b>
        </h1>
        <hr></hr>
      </MDBContainer>
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
                <th>Earned</th>
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
                    {earnings.map((amount) => (
                      <React.Fragment>
                        {object.uid === amount.rideId ? (
                          <React.Fragment>
                            {amount.earned + " PKR"}
                          </React.Fragment>
                        ) : null}
                      </React.Fragment>
                    ))}
                  </td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </div>
      </MDBContainer>
    </div>
  );
};

export default DriverEarnings;
