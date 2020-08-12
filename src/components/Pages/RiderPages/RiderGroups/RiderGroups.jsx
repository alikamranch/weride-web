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
  MDBIcon,
  MDBBtn,
  MDBTooltip,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdbreact";
import "./RiderGroups.css";
import groupsImg from "../../../../assets/images/groups.png";
import { firestore } from "../../../firebase";
import { UserContext } from "../../../../providers/UserProvider";
const RiderGroups = () => {
  //renders component again when new group is created
  const [newGroupId, setNewGroupId] = useState("");
  //checks whether current user has a group or not
  const [hasGroup, setHasGroup] = useState(false);
  //used to store groups from firestore
  const groupsArray = [];
  //is assigned the value of groupsArray
  const [groups, setGroups] = useState([]);
  //for making a new group
  const [newGroup, setNewGroup] = useState({
    admin: {
      id: "",
      name: "",
    },
    groupMembers: [],
    memberNames: [],
    name: "",
  });
  //modal state
  const [modal, setModal] = useState(false);

  //assigned the riders in the database and then assigned to state riders
  const allRiders = [];
  //is assigned the value of allRiders
  const [riders, setRiders] = useState([]);
  //to get the user session object
  const user = useContext(UserContext);
  //to get the uid of the currently logged in user
  const uid = user.uid;

  //Getting already created groups on mounting of component
  useEffect(() => {
    //Get all riders
    if (groups.length === 0) {
      //to get individual rider object and then assign its uid to it and then store in allRiders array
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
              if (doc.id !== uid) {
                allRiders.push(rider);
              }
            }
          });
          if (allRiders.length !== 0) {
            setRiders(allRiders);
            console.log(allRiders);
          }
        })
        .catch(function (error) {
          console.log("Error getting documents: ", error);
        });
    }

    //Get all the groups of the admins
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
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });

    //get all the groups of the members
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
        if (groupsArray.length !== 0) {
          setHasGroup(true);
          setGroups(groupsArray);
        }
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, [newGroupId]);

  //modal toggle
  const toggle = () => {
    setModal(!modal);
  };

  //function to set group admin by the context user
  const setGroupAdmin = () => {
    setNewGroup({
      ...newGroup,
      admin: {
        id: user.uid,
        name: user.name,
      },
    });
  };

  //function to update group name
  const updateGroupName = (e) => {
    setNewGroup({ ...newGroup, name: e.target.value });
  };

  //function to update group members
  const updateMembers = (e) => {
    let members = [...newGroup.groupMembers];
    let names = [...newGroup.memberNames];
    if (members.length === 2 && names.length === 2) {
      alert("There can only be 3 memebers in the group. (Including Admin)");
    } else {
      e.target.classList.remove("btn-amber");
      e.target.classList.add("btn-success");
      e.target.innerHTML = "Added";
      members.push(e.target.id);
      names.push(e.target.name);
      setNewGroup({ ...newGroup, groupMembers: members, memberNames: names });
    }
  };

  //function to handle new group creation
  const handleNewGroupSubmit = (event) => {
    event.preventDefault();
    const newlyCreatedGroup = newGroup;
    firestore
      .collection("weride")
      .doc("ride_group")
      .collection("groups")
      .add(newlyCreatedGroup)
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        alert("Group Created!");
        toggle();
        setNewGroup({
          admin: {
            id: "",
            name: "",
          },
          groupMembers: [],
          memberNames: [],
          name: "",
        });
        setNewGroupId(docRef.id);
      });
  };

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
          {hasGroup ? (
            groups.map((group, index) => (
              <MDBCol md="3" className="rider-groups-card" key={index}>
                <MDBCard>
                  <MDBCardImage className="img-fluid" src={groupsImg} waves />
                  <MDBCardBody>
                    <MDBCardTitle>{group.name}</MDBCardTitle>
                    <MDBCardText>
                      <div>
                        Admin: {group.admin.name} <br />
                        {group.memberNames[0]}
                        <br />
                        {group.memberNames[1]}
                      </div>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))
          ) : (
            <h3>No groups created yet</h3>
          )}

          <MDBCol md="3" className="rider-group-card">
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
              <div>Create New Group</div>
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
            <form onSubmit={handleNewGroupSubmit}>
              <MDBModalHeader toggle={toggle} className="rider-groups-modal">
                <MDBIcon icon="users" size="2x" /> New Group
              </MDBModalHeader>
              <MDBModalBody>
                <MDBRow className="justify-content-center">
                  <MDBCol size="12">
                    <MDBTooltip domElement tag="span" placement="right">
                      <span>
                        Admin:{" "}
                        <b className="rider-groups-nameColor">{user.name}</b>
                      </span>
                      <span>
                        The user who will create the group, would be the admin
                      </span>
                    </MDBTooltip>
                    <MDBInput
                      label="Group Name"
                      type="text"
                      name="name"
                      value={newGroup.name}
                      onChange={(event) => {
                        updateGroupName(event);
                      }}
                    />
                    <br />
                    Select Members:
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
                            <th>
                              <b>Select</b>
                            </th>
                          </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                          {riders.map((rider, index) => (
                            <tr key={index}>
                              <td>{rider.name}</td>
                              <td>{rider.gender}</td>
                              <td>{rider.email}</td>
                              <td>{rider.number}</td>
                              <td>
                                <MDBBtn
                                  id={rider.uid}
                                  name={rider.name}
                                  size="sm"
                                  color="amber"
                                  onClick={updateMembers}
                                >
                                  Add
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
                  color="primary"
                  onClick={setGroupAdmin}
                  type="submit"
                >
                  Create
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

export default RiderGroups;
