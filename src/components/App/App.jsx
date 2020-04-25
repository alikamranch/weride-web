import React from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import How from "../Pages/How/How";
import Ride from "../Pages/Ride/Ride";
import RiderHome from "../Pages/RiderPages/RiderHome/RiderHome";
import RiderNavbar from "../Pages/RiderPages/RiderNavbar/RiderNavbar";
import RiderProfile from "../Pages/RiderPages/RiderProfile/RiderProfile";
import RiderHistory from "../Pages/RiderPages/RiderHistory/RiderHistory";
import RiderGroups from "../Pages/RiderPages/RiderGroups/RiderGroups";
import RiderPackages from "../Pages/RiderPages/RiderPackages/RiderPackages";
import RiderEditProfile from "../Pages/RiderPages/RiderEditProfile/RiderEditProfile";
import RiderEditGroups from "../Pages/RiderPages/RiderEditGroups/RiderEditGroups";
import RiderEditPackages from "../Pages/RiderPages/RiderEditPackages/RiderEditPackages";
import DriverProfile from "../Pages/DriverProfile/DriverProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRiderLoggedin: false,
      isDriverLoggedin: false,
    };

    // this.loginHandler = this.loginHandler.bind(this);
  }

  riderLoginHandler = () => {
    const currentState = this.state.isRiderLoggedin;
    this.setState({
      isRiderLoggedin: !currentState,
    });
  };

  driverLoginHandler = () => {
    const currentState = this.state.isDriverLoggedin;
    this.setState({
      isDriverLoggedin: !currentState,
    });
  };

  render() {
    return (
      <div className="App">
        <Router>
          {this.state.isRiderLoggedin ? (
            <React.Fragment>
              <RiderNavbar login={this.riderLoginHandler} />
              <Switch>
                <Route path="/rider-home" exact component={RiderHome} />
                <Route path="/rider-profile" component={RiderProfile} />
                <Route path="/rider-history" component={RiderHistory} />
                <Route path="/rider-groups" component={RiderGroups} />
                <Route path="/rider-packages" component={RiderPackages} />
                <Route
                  path="/rider-edit-profile"
                  component={RiderEditProfile}
                />
                <Route path="/rider-edit-groups" component={RiderEditGroups} />
                <Route
                  path="/rider-edit-packages"
                  component={RiderEditPackages}
                />
              </Switch>
            </React.Fragment>
          ) : this.state.isDriverLoggedin ? (
            <React.Fragment>
              <Route
                path="/driver"
                render={(props) => (
                  <DriverProfile
                    {...props}
                    driverLoginHandler={this.driverLoginHandler}
                  />
                )}
              />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Navbar
                riderLoginHandler={this.riderLoginHandler}
                driverLoginHandler={this.driverLoginHandler}
              />
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
  }
}

export default App;
