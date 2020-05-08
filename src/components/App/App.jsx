import React from "react";
import UserProvider from "../../providers/UserProvider";
import "./App.css";
import Application from "../Application/Application";

function App() {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;
