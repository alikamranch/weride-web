import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import How from '../Pages/How/How';
import Ride from '../Pages/Ride/Ride';
import RiderProfile from '../Pages/RiderProfile/RiderProfile';
import DriverProfile from '../Pages/DriverProfile/DriverProfile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false
    };

    this.loginHandler = this.loginHandler.bind(this);
  }

  loginHandler() {
    const currentState = this.state.isLoggedin;
    this.setState({
      isLoggedin: !currentState
    });
  }


  render() {
    return (
      <Router>
        <div className="App">

          {this.state.isLoggedin ? null : (<Navbar loginHandler={this.loginHandler} />)}

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/how" component={How} />
            <Route path="/ride" component={Ride} />
            <Route path='/rider' render={(props) => <RiderProfile {...props} loginHandler={this.loginHandler} />} />
            <Route path='/driver' render={(props) => <DriverProfile {...props} loginHandler={this.loginHandler} />} />
          </Switch>

          {this.state.isLoggedin ? null : (<Footer />)}

        </div>
      </Router>
    );
  }



}

export default App;
