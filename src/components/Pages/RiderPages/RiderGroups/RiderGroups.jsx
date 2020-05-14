import React, { useState, useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  MDBContainer,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
  MDBAlert,
  MDBCardImage,
  MDBCardBody,
  MDBBtn,
} from "mdbreact";
import "./RiderGroups.css";
import groupsImg from "../../../../assets/images/groups.png";
import { firestore } from "../../../firebase";
import { UserContext } from "../../../../providers/UserProvider";
const RiderGroups = () => {
  const [hasGroup, setHasGroup] = useState(false);
  const groupsArray = [];
  const [groups, setGroups] = useState([]);
  const [newGroup, setNewGroup] = useState({
    admin: {},
    groupMembers: [],
    name: "",
  });
  const user = useContext(UserContext);
  const uid = user.uid;

  useEffect(() => {
    firestore
      .collection("weride")
      .doc("ride_group")
      .collection("groups")
      .where("admin.id", "==", uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.exists) {
            console.log(doc.id, " => ", doc.data());
            groupsArray.push(doc.data());
            console.log(groupsArray);
          }
        });
        if (groupsArray.length != 0) {
          setGroups(groupsArray);
        }
      })
      .then(
        firestore
          .collection("weride")
          .doc("ride_group")
          .collection("groups")
          .where("groupMembers", "array-contains", uid)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              if (doc.exists) {
                console.log(doc.id, " => ", doc.data());
                groupsArray.push(doc.data());
                console.log(groupsArray);
              }
            });
            if (groupsArray.length != 0) {
              setGroups(groupsArray);
              console.log(groups);
            }
          })
      )
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, [uid]);

  return (
    <div>
      <Helmet>
        <title>Groups</title>
      </Helmet>
      <br />
      <MDBContainer>
        <MDBContainer className="text-left">
          <MDBAlert color="warning" dismiss>
            <b>Note</b>
            <br />
            You can only make a group upto a maximum of 3 people. The person who
            creates the group would be the admin and will be able to book rides
            as a group.
          </MDBAlert>
        </MDBContainer>
        <MDBRow>
          {groups.map((group, index) => (
            <MDBCol md="3" className="rider-groups-card" key={index}>
              <MDBCard>
                <MDBCardImage className="img-fluid" src={groupsImg} waves />
                <MDBCardBody>
                  <MDBCardTitle>{group.name}</MDBCardTitle>
                  <MDBCardText>
                    <div>
                      Admin: {group.admin.name} <br />
                      {group.groupMembers[0]}
                      <br />
                      {group.groupMembers[1]}
                    </div>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default RiderGroups;
