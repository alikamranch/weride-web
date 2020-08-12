import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { firestore } from "../../../firebase";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import standard from "../../../../assets/images/standard-ride.png";
import rickshaw from "../../../../assets/images/rickshaw-ride.png";
import "./AdminFares.css";

const AdminFares = () => {
  //state start
  //car base fare
  const [carFare, setCarFare] = useState(0);
  //rickshaw base fare
  const [rickshawFare, setRickshawFare] = useState(0);
  //state end

  useEffect(() => {
    firestore
      .collection("weride")
      .doc("base_fare")
      .get()
      .then(function (doc) {
        if (doc.exists) {
          setCarFare(doc.data().car);
          setRickshawFare(doc.data().rickshaw);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []);

  //handler to update car fare
  const updateCarFare = (event) => {
    setCarFare(event.target.value);
  };

  //handler to update rickshaw fare
  const updateRickshawFare = (event) => {
    setRickshawFare(event.target.value);
  };

  //final handler submit
  const updateBaseFares = (event) => {
    event.preventDefault();
    var fareDocRef = firestore.collection("weride").doc("base_fare");
    return fareDocRef
      .update({
        car: carFare,
        rickshaw: rickshawFare,
      })
      .then(function () {
        alert("Base Fares Updated!");
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Fares</title>
      </Helmet>

      <MDBContainer>
        <MDBContainer className="mt-5">
          <h1 className="text-left">Set Base Vehicle Fares</h1>
          <hr></hr>

          <MDBContainer>
            <MDBRow className="justify-content-center">
              <MDBCol md="6">
                <form onSubmit={updateBaseFares}>
                  <div className="grey-text mb-5">
                    <img
                      className="img-fluid how-fleet-car"
                      src={standard}
                      alt=""
                    ></img>
                    <MDBInput
                      label="Car Base Fare"
                      type="number"
                      name="car"
                      value={carFare}
                      onChange={(event) => {
                        updateCarFare(event);
                      }}
                    />
                    <br></br>
                    <img
                      className="img-fluid how-fleet-rickshaw"
                      src={rickshaw}
                      alt=""
                    />
                    <MDBInput
                      label="Rickshaw Base Fare"
                      type="number"
                      name="rickshaw"
                      value={rickshawFare}
                      onChange={(event) => {
                        updateRickshawFare(event);
                      }}
                    />
                    <MDBBtn color="primary" type="submit">
                      Update
                    </MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBContainer>
      </MDBContainer>
    </div>
  );
};

export default AdminFares;
