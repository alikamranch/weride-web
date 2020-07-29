import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import "./Application.css";
//App pages
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import How from "../Pages/How/How";
import Ride from "../Pages/Ride/Ride";
//Rider Pages
import RiderNavbar from "../Pages/RiderPages/RiderNavbar/RiderNavbar";
import RiderHome from "../Pages/RiderPages/RiderHome/RiderHome";
import RiderProfile from "../Pages/RiderPages/RiderProfile/RiderProfile";
import RiderHistory from "../Pages/RiderPages/RiderHistory/RiderHistory";
import RiderGroups from "../Pages/RiderPages/RiderGroups/RiderGroups";
import RiderPackages from "../Pages/RiderPages/RiderPackages/RiderPackages";
import RiderEditProfile from "../Pages/RiderPages/RiderEditProfile/RiderEditProfile";
import RiderEditGroups from "../Pages/RiderPages/RiderEditGroups/RiderEditGroups";
import RiderEditPackages from "../Pages/RiderPages/RiderEditPackages/RiderEditPackages";
//Driver Pages
import DriverNavbar from "../Pages/DriverPages/DriverNavbar/DriverNavbar";
import DriverHome from "../Pages/DriverPages/DriverHome/DriverHome";
import DriverProfile from "../Pages/DriverPages/DriverProfile/DriverProfile";
import DriverHistory from "../Pages/DriverPages/DriverHistory/DriverHistory";
import DriverEarnings from "../Pages/DriverPages/DriverEarnings/DriverEarnings";
import DriverPackages from "../Pages/DriverPages/DriverPackages/DriverPackages";
import DriverEditProfile from "../Pages/DriverPages/DriverEditProfile/DriverEditProfile";
import DriverEditPackages from "../Pages/DriverPages/DriverEditPackages/DriverEditPackages";
import DriverVehicles from "../Pages/DriverPages/DriverVehicles/DriverVehicles";
//Other Imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Application = () => {
  const user = useContext(UserContext);
  console.log(user);

  return (
    <div className="App">
      <Router>
        {user && user.active && user.type === "rider" ? (
          //Render Rider pages
          <React.Fragment>
            <RiderNavbar />
            <Switch>
              <Route path="/rider-home" component={RiderHome} />
              <Route path="/rider-profile" component={RiderProfile} />
              <Route path="/rider-history" component={RiderHistory} />
              <Route path="/rider-groups" component={RiderGroups} />
              <Route path="/rider-packages" component={RiderPackages} />
              <Route path="/rider-edit-profile" component={RiderEditProfile} />
              <Route path="/rider-edit-groups" component={RiderEditGroups} />
              <Route
                path="/rider-edit-packages"
                component={RiderEditPackages}
              />
            </Switch>
          </React.Fragment>
        ) : user && user.active && user.type === "driver" ? (
          //Render Driver pages
          <React.Fragment>
            <DriverNavbar />
            <Switch>
              <Route path="/driver-home" exact component={DriverHome} />
              <Route path="/driver-profile" exact component={DriverProfile} />
              <Route path="/driver-vehicles" exact component={DriverVehicles} />
              <Route path="/driver-history" exact component={DriverHistory} />
              <Route path="/driver-earnings" exact component={DriverEarnings} />
              <Route path="/driver-packages" exact component={DriverPackages} />
              <Route
                path="/driver-edit-profile"
                exact
                component={DriverEditProfile}
              />
              <Route
                path="/driver-edit-packages"
                exact
                component={DriverEditPackages}
              />
            </Switch>
          </React.Fragment>
        ) : (
          //Render Webapp pages
          <React.Fragment>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/how" component={How} />
              <Route path="/ride" component={Ride} />
            </Switch>
            <Footer />
          </React.Fragment>
        )}
      </Router>
    </div>
  );
};

export default Application;
