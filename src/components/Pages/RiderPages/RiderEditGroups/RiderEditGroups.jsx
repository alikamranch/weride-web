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
  MDBIcon,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
} from "mdbreact";
import groupsImg from "../../../../assets/images/groups.png";
import { firestore } from "../../../firebase";
import { UserContext } from "../../../../providers/UserProvider";
import "./RiderEditGroups.css";

const RiderEditGroups = () => {
  //modal state
  const [modal, setModal] = useState(false);
  //checks whether current user has a group or not
  const [hasGroup, setHasGroup] = useState(false);
  //used to store groups from firestore
  const groupsArray = [];
  //is assigned the value of groupsArray
  const [groups, setGroups] = useState([]);
  //to get the user session object
  const user = useContext(UserContext);
  //to display clicked edit group in modal
  const [modalGroup, setModalGroup] = useState({});
  const [refresh, setRefresh] = useState(0);
  //to get the uid of the currently logged in user
  const uid = user.uid;

  useEffect(() => {
    //Get all the groups of the admins
    let group = {};
    firestore
      .collection("weride")
      .doc("ride_group")
      .collection("groups")
      .where("admin.id", "==", uid)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.exists) {
            group = doc.data();
            group["groupId"] = doc.id;
            // console.log(doc.id, " => ", doc.data());
            groupsArray.push(group);
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
  }, [refresh]);

  //modal toggle
  const toggle = (e) => {
    let id = "";
    if (e) {
      id = e.target.id;
    }
    setModal(!modal);
    if (id) {
      var result = groups.find((obj) => {
        return obj.groupId === id;
      });
      setModalGroup(result);
    }
  };
  //removing members from specific group
  const removeMembers = (e) => {
    let ids = modalGroup.groupMembers;
    let names = modalGroup.memberNames;

    let removeId = e.target.getAttribute("memberid");
    let removeName = e.target.getAttribute("name");

    const indexOfId = ids.indexOf(removeId);
    ids.splice(indexOfId, 1);
    const indexOfName = names.indexOf(removeName);
    names.splice(indexOfName, 1);

    setModalGroup({ ...modalGroup, groupMembers: ids, memberNames: names });
  };
  //change group name
  const changeGroupName = (e) => {
    setModalGroup({ ...modalGroup, name: e.target.value });
  };

  //handle final edit to group
  const handleEditGroup = (event) => {
    var id = event.target.id;
    let updatedGroup = {
      admin: modalGroup.admin,
      groupMembers: modalGroup.groupMembers,
      memberNames: modalGroup.memberNames,
      name: modalGroup.name,
    };

    firestore
      .collection("weride")
      .doc("ride_group")
      .collection("groups")
      .doc(id)
      .set(updatedGroup)
      .then(function () {
        console.log("Document updated!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });

    setRefresh(refresh + 1);
    alert("Group Updated");
    setModal(!modal);
  };
  //delete complete group
  const deleteGroup = (event) => {
    var id = event.target.id;
    firestore
      .collection("weride")
      .doc("ride_group")
      .collection("groups")
      .doc(id)
      .delete()
      .then(function () {
        console.log("Document successfully deleted!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });

    setRefresh(refresh + 1);
    alert("Group Deleted!");
    setModal(!modal);
  };

  return (
    <div>
      <Helmet>
        <title>Edit Groups</title>
      </Helmet>
      <br />
      <MDBContainer>
        <MDBRow>
          {hasGroup ? (
            groups.map((group, index) => (
              <MDBCol md="4" className="rider-groups-card" key={index}>
                <MDBCard>
                  <MDBCardImage className="img-fluid" src={groupsImg} waves />
                  <MDBCardBody>
                    <MDBCardTitle>
                      {group.name}{" "}
                      <MDBIcon
                        icon="edit"
                        className="rider-edit-groups-icon"
                        onClick={(event) => {
                          toggle(event);
                        }}
                        id={group.groupId}
                      />
                    </MDBCardTitle>

                    <MDBCardText>
                      <div>
                        Admin: {group.admin.name}
                        <br />
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
            <h3>Only Group Admins can Edit Groups.</h3>
          )}

          <MDBContainer>
            <MDBModal
              isOpen={modal}
              toggle={toggle}
              fullHeight
              position="right"
            >
              <MDBModalHeader toggle={toggle} className="rider-groups-modal">
                <MDBIcon far icon="edit" size="2x" /> Edit Group
              </MDBModalHeader>
              <MDBModalBody>
                <MDBInput
                  label="Group Name"
                  type="text"
                  name="name"
                  value={modalGroup.name}
                  onChange={(event) => {
                    changeGroupName(event);
                  }}
                />
                <h5>Members</h5>
                <hr />
                <div>
                  <MDBRow>
                    <MDBCol>
                      <p>
                        {modalGroup.memberNames
                          ? modalGroup.memberNames[0]
                          : ""}
                      </p>
                      <p>
                        {modalGroup.memberNames
                          ? modalGroup.memberNames[1]
                          : ""}{" "}
                      </p>
                    </MDBCol>
                    <MDBCol>
                      <div>
                        {!modalGroup.groupMembers ? null : modalGroup
                            .groupMembers[0] ? (
                          <p>
                            <MDBIcon
                              memberid={
                                modalGroup.groupMembers
                                  ? modalGroup.groupMembers[0]
                                  : ""
                              }
                              name={
                                modalGroup.memberNames
                                  ? modalGroup.memberNames[0]
                                  : ""
                              }
                              icon="times"
                              className="rider-edit-groups-remove"
                              onClick={(event) => {
                                removeMembers(event);
                              }}
                            />
                          </p>
                        ) : null}

                        {!modalGroup.groupMembers ? null : modalGroup
                            .groupMembers[1] ? (
                          <p>
                            <MDBIcon
                              memberid={
                                modalGroup.groupMembers
                                  ? modalGroup.groupMembers[1]
                                  : ""
                              }
                              name={
                                modalGroup.memberNames
                                  ? modalGroup.memberNames[1]
                                  : ""
                              }
                              icon="times"
                              className="rider-edit-groups-remove"
                              onClick={(event) => {
                                removeMembers(event);
                              }}
                            />
                          </p>
                        ) : null}
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBBtn
                    color="danger"
                    className="mt-5"
                    id={modalGroup.groupId}
                    onClick={(event) => {
                      deleteGroup(event);
                    }}
                  >
                    <MDBIcon icon="trash-alt" /> Delete Group
                  </MDBBtn>
                </div>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn
                  color="primary"
                  type="submit"
                  id={modalGroup.groupId}
                  onClick={(event) => {
                    handleEditGroup(event);
                  }}
                >
                  Save changes
                </MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBContainer>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default RiderEditGroups;
