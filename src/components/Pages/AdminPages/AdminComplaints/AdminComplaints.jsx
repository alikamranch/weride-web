import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { firestore } from "../../../firebase";
import { MDBContainer, MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";
import "./AdminComplaints.css";

const AdminComplaints = () => {
  //state start

  //to fetch complaints from firestore
  const complaintsArray = [];
  //to assign complaintsArray value
  const [complaints, setComplaints] = useState([]);
  //state end

  useEffect(() => {
    firestore
      .collection("weride")
      .doc("complaint")
      .collection("complaints")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.exists) {
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
  return (
    <div>
      <Helmet>
        <title>Complaints</title>
      </Helmet>

      <MDBContainer>
        <MDBContainer className="mt-5">
          <h1 className="text-left">Complaints from Riders</h1>
          <hr></hr>
          <MDBContainer>
            <MDBTable responsive>
              <MDBTableHead color="elegant-color" textWhite>
                <tr>
                  <th>
                    <b>#</b>
                  </th>
                  <th>
                    <b>From</b>
                  </th>
                  <th>
                    <b>Filed Against</b>
                  </th>
                  <th>
                    <b>Complaint Type</b>
                  </th>
                  <th>
                    <b>Complaint</b>
                  </th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {complaints.map((complaint, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{complaint.riderName}</td>
                    <td>{complaint.driverName}</td>
                    <td>{complaint.type}</td>
                    <td>{complaint.comments}</td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>
          </MDBContainer>
        </MDBContainer>
      </MDBContainer>
    </div>
  );
};

export default AdminComplaints;
