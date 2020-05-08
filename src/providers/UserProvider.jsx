import React, { Component, createContext } from "react";
import { auth, getUserDocument } from "../components/firebase";

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
  state = {
    user: {},
  };

  componentDidMount = async () => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const user = await getUserDocument(userAuth.uid);
        this.setState({ user });
      } else {
        this.setState({ user: userAuth });
      }
    });
  };

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;
